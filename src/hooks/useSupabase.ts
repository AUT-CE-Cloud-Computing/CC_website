/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_TOKEN!)

export const useSupabaseData = (tableName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: retrievedData, error } = await supabase
          .from(tableName)
          .select("*")
          

        if (error) throw error;
        setData(retrievedData);
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
