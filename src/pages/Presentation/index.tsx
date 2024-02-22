import { FC } from "react";
import { Post } from "../../components/Base/Post";
import { RiPresentationFill } from "react-icons/ri";
import { useSupabaseData } from "../../hooks/useSupabase";
import { PresentationsView } from "../../components/Presentations/Presentations";

export const Presentations: FC = () => {
  const {
    data: presentations,
    loading,
    error,
  } = useSupabaseData("Presentation");

  
  return (
    <Post>
      <div className="flex gap-2 text-xl items-center">
        <RiPresentationFill />
        <h1 className="font-bold ">Student Presentations</h1>
      </div>
      <PresentationsView presentations={presentations} loading={loading} error={error} />
    </Post>
  );
};
