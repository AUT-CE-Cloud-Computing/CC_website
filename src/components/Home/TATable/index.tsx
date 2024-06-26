/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { HiUserGroup } from "react-icons/hi2";
import profile from "../../../assets/profile.png";
import { useSupabaseData } from "../../../hooks/useSupabase";
import { Loader } from "../../Base/Loader";
import { TA } from "../../../types/types";




export const TaTable = () => {
  const { data, loading, error } = useSupabaseData('TA');

  if (loading) return <Loader />;
  if (error) return <div>Error: {error!.message}</div>;

  return (
    // Responsive container
    <>
        <div className="flex gap-3 text-xl items-center">
          <HiUserGroup />
          <h1 className="font-bold">TA's</h1>
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
            {data?.map((TA: TA) => (
              <tr className="text-gray-700" key={TA.id}>
                <td className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src={TA?.avatar ? TA.avatar : profile}
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
                  <a
                    className="font-semibold text-blue-500"
                    href={`https://t.me/${TA?.telegram_ID}`}
                    target="_blank"
                  >
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
