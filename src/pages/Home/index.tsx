import { FC, useRef } from "react";
import { Post } from "../../components/Base/Post";
import { FaHome } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

import HeroSection from "../../components/Hero";
import { OverView } from "../../constants/home";
import { Line } from "../../components/Base/Line";

export const HomePage: FC = () => {
  const ref = useRef<null | HTMLElement>(null);

  const onClick = () => {
    ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection OnClick={onClick} />
      <Post>
        <section className="flex gap-2 text-xl items-center">
          <FaHome />
          <h1 ref={ref} className="font-bold ">
            Course Overview
          </h1>
        </section>
        <p>
          This Course is on introducing fundamentals of Cloud Computing and
          related technologies; starting by diving deep inside the topic of
          virtualization and explaining different kinds of virtualization,
          moving on to abstract ways of virtualization, such as using docker
          instead. by introcing docker, we then explain more and more on docker
          and kubernetes. then we forward to Big Data Analytics and tools such
          as Apache Spark & Hadoop. also a new programming paradigm Called 
          <em> MapReduce </em>
          is introduced helping students learn more on how big data proccesing
          is done. At last technology, we have OpenStack which enables us to
          create a backbone Cloud and manage VM's
        </p>
        <Line />
        <section className="flex gap-2 text-xl items-center">
          <HiAcademicCap />
          <h1 className="font-bold ">
            What You will Learn
          </h1>
        </section>
        <ul className="grid grid-cols-2">
          {OverView.map((item) => (
            <div key={item.key} className="flex gap-4">
              <item.Icon className="text-lg text-blue-700" />
              <li>{item.name}</li>
            </div>
          ))}
        </ul>
      </Post>
    </>
  );
};
