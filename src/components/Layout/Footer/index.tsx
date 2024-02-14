import React from "react";
import { IoIosCloudy } from "react-icons/io";
import { Link } from "react-router-dom";

import DepLogo from "../../../assets/dep-logo-white.png";
import UniLogo from "../../../assets/aut-logo-white.png";
import { SiTelegram } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-16 text-slate-200 mx-7 justify-center md:justify-between items-center">
          <div className="flex">
            <IoIosCloudy className="scale-[2] translate-x-10" />
            <Link
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Cloud Computing
            </Link>
          </div>

          <div>
            <a href="http://t.me/CC_1403" target="_blank">
              <SiTelegram className="scale-[1.75]" />
            </a>
          </div>

          <div className="flex  mx-7">
            <img src={DepLogo} className="h-16 w-16" alt="computer engineering department" />
            <img src={UniLogo} className="h-16 w-16" alt="AUT logo" />
          </div>
        </div>

        <div className="md:self-end p-0 mx-10 text-[0.5rem]">
          made with ❤️ by{" "}
          <a href="http://github.com/mr-amirfazel" target="_blank">
            mr-amirfazel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
