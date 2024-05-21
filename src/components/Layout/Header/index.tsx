import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu
import { IoIosCloudy } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { default_path, routes } from "../../../constants/routes";

import DepLogo from "../../../assets/dep-logo-white.png";
import UniLogo from "../../../assets/aut-logo-white.png";

const Header = () => {
  const [HeaderOpen, setHeaderOpen] = useState(false);

  //   const pages = ["Assignments", "Schedule", "Presentations", "Presentation Ideas", "Syllabus"]

  const location = useLocation();
  const pathname = location.pathname.replace(`/${default_path}/`, "");

  return (
    <nav className="z-20 sticky top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-blue-800 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex text-slate-200 mx-7">
            <IoIosCloudy className="scale-[2] translate-x-10" />
            {/* <FaDocker className="" /> */}

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
            {routes
              .filter((item) => item.name == default_path)[0]
              .paths.map(
                (route) =>
                  route.path != "" && (
                    <li className="nav-item" key={route.key}>
                      <Link
                        className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug ${
                          pathname == route.path
                            ? "text-gray-100"
                            : "text-gray-300 hover:text-gray-100"
                        }`}
                        to={`/spring2024/${route.path}`}
                      >
                        {route.path}
                      </Link>
                    </li>
                  )
              )}
            {/* <img src={docker} alt="docker-moby" className="w-8 h-4 translate-y-6 scale-x-[-1]"/> */}
          </ul>
        </div>

        <div className="flex  mx-7 gap-2">
          <a
            href="https://ce.aut.ac.ir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={DepLogo}
              className="h-10 w-10"
              alt="computer engineering department"
            />
          </a>
          <a
            href="https://aut.ac.ir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={UniLogo} className="h-10 w-10" alt="AUT logo" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
