import React, { FC } from "react";
import classes from "./home.module.css";
import { Link } from "react-router-dom";

interface HeroSectionProps extends React.PropsWithChildren {
  OnClick: any;
}
const HeroSection: FC<HeroSectionProps> = (props) => {
  return (
    <div
      className={`${classes.hero} min-h-[70vh] relative flex flex-col justify-center border-blue-950 border-b-[16px]`}
    >
      <div className="container font-serif h-full mx-auto px-6 md:px-12 xl:px-32 z-10 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Welcome to <span className="font-bold text-6xl">Cloud Computing </span>Course <br /> Website
        </h1>
        <p className="text-2xl text-black">
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
