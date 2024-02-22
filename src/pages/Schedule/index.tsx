import { FC } from "react";
import { Post } from "../../components/Base/Post";
import { ImBook } from "react-icons/im";
import { ScheduleTable } from "../../components/Shedule/ScheduleTable";
import { useSupabaseData } from "../../hooks/useSupabase";

export const Schedule: FC = () => {


    const { data, loading, error } = useSupabaseData('Shedule');

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
