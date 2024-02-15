import { Instructors } from '../../../constants/home';
import { PiChalkboardTeacherFill } from "react-icons/pi";

export const InstructorTable = () => {
  return (
    // Responsive container
    <>
    <div className="flex gap-3 text-xl items-center">
      <PiChalkboardTeacherFill />
      <h1 className="font-bold">
            Instructor
      </h1>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-left whitespace-no-wrap">
        <thead>
          <tr className="text-sm font-semibold text-gray-600 border-b-2 border-gray-200 bg-gray-50">
            {/* <th className="px-4 py-3"></th> */}
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Office Hours</th>
            {/* <th className="px-4 py-3">Location</th> */}
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-700">
            <td className="px-4 py-3 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-10">
                  
                  <img
                    className="w-full h-full rounded-full"
                    src={Instructors.Photo}
                    alt="Profile"
                  />
                </div>
                <div className="pl-3">
                  <div className="text-sm font-medium leading-5">{Instructors.Name}</div>
                </div>
              </div>
            </td>

            <td className="px-4 py-3 border-b text-sm border-gray-200">{Instructors['Office-Hours']}</td>
            {/* <td className="px-4 py-3 border-b text-sm border-gray-200">GHC 9103</td> */}
          </tr>
          {/* ... more rows */}
        </tbody>
      </table>
    </div>
    </>
  );
};
