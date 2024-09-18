import { FC } from "react";
import { Post } from "../../components/Base/Post";
import { ImBook } from "react-icons/im";
import { ScheduleTable } from "../../components/Shedule/ScheduleTable";
import { useSupabaseData } from "../../hooks/useSupabase";
import { default_path } from "../../constants/routes";

export const Schedule: FC = () => {
  const match = location.pathname.match(/^\/([^/]+)\/[^/]+$/)
  let semester = default_path;
  if (match) {
    semester = match[1];
    console.log(semester);
  }
  const { data, loading, error } = useSupabaseData("Shedule", {
    "semester": semester
  });
  
  
  return (
    <Post>
      <div className="flex gap-2 text-xl items-center">
        <ImBook />
        <h1 className="font-bold ">Shedule</h1>
      </div>

      <ScheduleTable sheduleitems={data} loading={loading} error={error} />
    </Post>
  );
};
