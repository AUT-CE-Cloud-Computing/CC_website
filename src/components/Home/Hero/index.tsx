/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import classes from "./home.module.css";

interface HeroSectionProps extends React.PropsWithChildren {
  OnClick: any;
}
const HeroSection: FC<HeroSectionProps> = (props) => {
  return (
    <div
      className={`${classes.hero} min-h-[40vh] relative flex flex-col justify-center border-blue-950 border-b-[16px]`}
    >
      <div className="container font-serif h-full mx-auto px-6 md:px-12 xl:px-32 z-10 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold text-white mb-2">
          <span className="font-bold text-5xl">Cloud Computing </span>Course <br />
        </h1>
        <p className="text-2xl text-white">
          Explore our Cloud Computing course materials and assignments.
        </p>
        {/* Call to action button */}
        <button
          onClick={props.OnClick}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
