/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://niudmjkwjidiapqarrkf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdWRtamt3amlkaWFwcWFycmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDY0NDMsImV4cCI6MjAyMzQyMjQ0M30.mLeRIFUlGy-6yRGXRrr2Pir2OZ5NMLoV4M-fTQdGhT0')



const  fetchTeachingAssistants = async () => {
    const { data: TA, error } = await supabase
  .from('TA')
  .select('*')

  return {TA, error}
}


export const TaTable = () => {
  const [data, setData] = useState<any>();


  useEffect(() => {
    fetchTeachingAssistants().then(res => setData(res.TA))
  }, []);

  

  

  return (
    // Responsive container
    <>
    <div className="flex gap-3 text-xl items-center">
      <HiUserGroup  />
      <h1 className="font-bold">
            TA's
      </h1>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-left whitespace-no-wrap">
        <thead>
          <tr className="text-sm font-semibold text-gray-600 border-b-2 border-gray-200 bg-gray-50">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Telegrm ID</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((TA: any) => (
            <tr className="text-gray-700" key={TA.id}>
              <td className="px-4 py-3 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={TA?.avatar}
                      alt="Profile"
                    />
                  </div>
                  <div className="pl-3">
                    <div className="text-sm font-medium leading-5">
                      {TA?.name}
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-4 py-3 border-b text-sm border-gray-200">
                <a className="font-semibold text-blue-500" href={`https://t.me/${TA?.telegram_ID}`} target="_blank">
                  @{TA?.telegram_ID}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};
