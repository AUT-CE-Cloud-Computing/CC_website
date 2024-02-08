import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu
import { IoIosCloudy } from "react-icons/io";
import { Link } from "react-router-dom";
import { default_path, routes } from "../../../constants/routes";

const Header = () => {
    const [HeaderOpen, setHeaderOpen] = useState(false);

//   const pages = ["Assignments", "Schedule", "Presentations", "Presentation Ideas", "Syllabus"]

  return (
    <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-3 bg-blue-800 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex text-slate-200 mx-7">
            <IoIosCloudy className="scale-[2] translate-x-10" />
            <Link
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Cloud Computing
            </Link>
          </div>
          <button
            className="text-slate-200 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setHeaderOpen(!HeaderOpen)}
          >
            {HeaderOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (HeaderOpen ? " flex" : " hidden")
          }
          id="example-Header-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:mr-auto lg:gap-18">
            {
                routes.filter(item => item.name == default_path)[0].paths
                .map(route => 
                <li className="nav-item" key={route.key}>
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-300 hover:text-gray-100"
                  to = {`/spring2024/${route.path}`}
                >
                  {route.path}
                </Link>
              </li>)
            }
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
