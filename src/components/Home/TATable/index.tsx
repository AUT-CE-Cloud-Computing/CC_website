import { useEffect, useState } from "react";
import { AXIOS } from "../../../config/axios.config";
import { HiUserGroup } from "react-icons/hi2";

export const TaTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AXIOS.get("/tas?populate=*").then((result) => {setData(result.data.data); console.log(result.data);
    });
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
          {data.map((TA: any) => (
            <tr className="text-gray-700">
              <td className="px-4 py-3 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={`http://localhost:1337${TA.attributes.image.data.attributes.url}`}
                      alt="Profile"
                    />
                  </div>
                  <div className="pl-3">
                    <div className="text-sm font-medium leading-5">
                      {TA.attributes.name}
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-4 py-3 border-b text-sm border-gray-200">
                {TA.attributes.telegram_Id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};
