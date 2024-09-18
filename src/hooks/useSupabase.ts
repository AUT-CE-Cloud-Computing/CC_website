/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL!, import.meta.env.VITE_SUPABASE_TOKEN!)

export const useSupabaseData = (tableName: string, options: any = null) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (options){
          const { data: retrievedData, error } = await supabase
          .from(tableName)
          .select("*")
          .eq('semester', options?.semester)

          if (error) throw error;
          setData(retrievedData);
        }
        else
          {
            const { data: retrievedData, error } = await supabase
          .from(tableName)
          .select("*")
          if (error) throw error;
          setData(retrievedData);
          }
        
          
          

        // if (error) throw error;
        // setData(retrievedData);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName]); // Dependency array includes tableName and stringified queryParams

  // Memoize the data
  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData, loading, error };
};
