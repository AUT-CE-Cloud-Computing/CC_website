/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef } from "react";
import { Post } from "../../components/Base/Post";
import { FaBookOpen, FaHome } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

import HeroSection from "../../components/Home/Hero";
import { Materials, info } from "../../constants/home";
import { Line } from "../../components/Base/Line";
import { CloudItemsList } from "../../components/Home/WYWL";
import { Link } from "react-router-dom";
// import  { InstructorTable } from "../../components/Home/InstructorTable";
// import { TaTable } from "../../components/Home/TATable";

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
        <p>{info}</p>
        <Line />
        <section className="flex gap-2 text-xl items-center my-4">
          <HiAcademicCap />
          <h1 className="font-bold ">What You will Learn</h1>
        </section>
        <CloudItemsList />

        {/* <Line />
        <InstructorTable />
        <Line />
        
        <TaTable /> */}

        <Line />
        <section className="flex gap-2 text-xl items-center my-4">
          <FaBookOpen />
          <h1 className="font-bold ">Course Materials</h1>
        </section>

        <div className="container mx-auto w-1/2 px-4 m-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 justify-items-center">
            {Materials.map((material) => (
              <Link to={material.to}>
                <div className="hover:scale-110 transition-all ease-in-out  p-4 rounded-lg w-40 h-40 flex flex-col justify-center items-center">
                  <div className="text-7xl text-blue-700">
                    <material.icon />
                  </div>
                  <p className="font-serif font-normal">{material.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Post>
    </>
  );
};
