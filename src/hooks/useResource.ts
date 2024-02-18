import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_TOKEN!)

export const fetchResource = async (table: string) => {
    const { data: result, error } = await supabase
    .from(table)
    .select('*')

    console.log(result);
    
  
    return {result, error}
}