/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaRegEdit } from "react-icons/fa";
import { useSupabaseData } from "../../../hooks/useSupabase";
import { Loader } from "../../Base/Loader";
import { FC } from "react";
import { Assignment } from "../../../types/types";

export const AssignmentsTable: FC = () => {

    const { data, loading, error } = useSupabaseData('Assignments');

  if (loading) return <Loader />;
  if (error) return <div>Error: {error!.message}</div>;

  if (data.length == 0) 
    return <p>No assignments yet</p>


  return (
    <>
      <div className="flex gap-3 text-xl items-center">
        <FaRegEdit />
        <h1 className="font-bold">Assignments</h1>
      </div>
      <div className="overflow-x-auto m-4 rounded-md">
        <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Assignment
              </th>
              <th scope="col" className="px-6 py-3">
                Release Date
              </th>
              <th scope="col" className="px-6 py-3">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((assignment: Assignment) => (
              <tr
                key={assignment.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <a href={assignment.file_link} target="_blank">
                    {assignment.title}
                  </a>
                </th>
                <td className="px-6 py-4">{new Date(assignment.release_Date).toLocaleDateString("fa-IR")}</td>
                <td className="px-6 py-4">{new Date(assignment.due_Date).toLocaleDateString("fa-IR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
