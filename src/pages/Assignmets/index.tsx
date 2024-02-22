import { FC } from "react";
import { Post } from "../../components/Base/Post";
import { AssignmentsTable } from "../../components/Assignments/AssignmentTable";
import { FaRegEdit } from "react-icons/fa";
import { useSupabaseData } from "../../hooks/useSupabase";

export const Assignments: FC = () => {
  const { data: assignments, loading, error } = useSupabaseData("Assignments");

  return (
    <Post>
      <div className="flex gap-3 text-xl items-center">
        <FaRegEdit />
        <h1 className="font-bold">Assignments</h1>
      </div>
      <AssignmentsTable
        assignments={assignments}
        error={error}
        loading={loading}
      />
    </Post>
  );
};
