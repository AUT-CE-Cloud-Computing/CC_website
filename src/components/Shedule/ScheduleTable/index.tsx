import { FC, PropsWithChildren } from "react";
import { SheduleItem } from "../../../types/types";
import { BsFilePdf } from "react-icons/bs";
import { Loader } from "../../Base/Loader";

interface ScheduleTableProps extends PropsWithChildren {
  sheduleitems: SheduleItem[];
  loading: boolean;
  error: Error | null;
}

export const ScheduleTable: FC<ScheduleTableProps> = ({ sheduleitems, loading, error }) => {
  if (loading) return <Loader />;
  if (error) return <div>Error: {error!.message}</div>;

  if (sheduleitems.length == 0) return <p>No Shedules yet</p>;
  return (
    <>
      <div className="overflow-x-auto m-4 rounded-md">
        <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3"></th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Slide
              </th>
            </tr>
          </thead>
          <tbody>
            {sheduleitems.map((item: SheduleItem, index) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className=" text-center py-4 text-white font-semibold">
                  Lecture {index + 1}
                </td>
                <td className="px-6 py-4 text-white font-semibold">
                  {item.title}
                </td>
                <td className="px-6 py-4 text-white font-semibold text-3xl">
                  <a
                    href={item.slide_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    <BsFilePdf />
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
