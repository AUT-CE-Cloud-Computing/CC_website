/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef } from "react";
import { Post } from "../../components/Base/Post";
import { FaHome } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

import HeroSection from "../../components/Home/Hero";
import { info } from "../../constants/home";
import { Line } from "../../components/Base/Line";
import { CloudItemsList } from "../../components/Home/WYWL";
import  { InstructorTable } from "../../components/Home/InstructorTable";
import { TaTable } from "../../components/Home/TATable";
import { HiUserGroup } from "react-icons/hi2";

export const HomePage: FC = () => {
  const ref = useRef<any>(null);

  const onClick = () => {
    ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection OnClick={onClick} />
      <Post>
        <section className="flex gap-2 text-xl items-center my-4">
          <FaHome />
          <h1 ref={ref} className="font-bold ">
            Course Overview
          </h1>
        </section>
        <p>
          {info}
        </p>
        <Line />
        <section className="flex gap-2 text-xl items-center my-4">
          <HiAcademicCap />
          <h1 className="font-bold ">
            What You will Learn
          </h1>
        </section>
        <CloudItemsList />

        <Line />
        <InstructorTable />
        <Line />
        <div className="flex gap-3 text-xl items-center">
        <HiUserGroup />
        <h1 className="font-bold">TA's</h1>
      </div>
        <TaTable />
      </Post>
    </>
  );
};
