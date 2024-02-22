import { FC } from "react";
import { Post } from "../../components/Base/Post";
import { AssignmentsTable } from "../../components/Assignments/AssignmentTable";

export const Assignments: FC = () => {
  return (
    <Post>
      {/* <h2>Assignmets</h2> */}
      <AssignmentsTable />
    </Post>
  );
};
