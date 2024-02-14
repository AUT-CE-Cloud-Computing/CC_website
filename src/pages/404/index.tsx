import { FC } from "react";

import DeadDocker from "../../assets/dead_docker.png";

export const NotFound: FC = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="w-[50%] mx-auto mb-10 ">
        <img
          src={DeadDocker}
          alt="dead docker moby"
          className="mx-auto scale-75"
        />
      </div>
      <h1 className="text-center text-black text-7xl font-extrabold">
        Page not Found
      </h1>
      <h1 className="text-center text-black text-4xl font-extrabold m-2">
        404
      </h1>
    </div>
  );
};
