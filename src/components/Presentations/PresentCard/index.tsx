import { FC, PropsWithChildren } from "react";
import { Presentation } from "../../../types/types";
import { FaFileDownload } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa6";
import { Tooltip } from "@mui/material";
import { SiGithub } from "react-icons/si";

import pattern from "../../../assets/pattern.webp";
import default_profile from "../../../assets/profile.png";

interface PresentCard extends PropsWithChildren {
  presentation: Presentation;
}
export const PresentCard: FC<PresentCard> = ({ presentation }) => {
  return (
    <div className="hover:scale-[1.02] transition-[3s] ease-linear cursor-pointer max-w-xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={presentation.topic_cover ? presentation.topic_cover : pattern}
          alt="presentation cover"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src={presentation.avatar ? presentation.avatar : default_profile}
          alt="presentator avatar"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{presentation.name}</h2>
        <p className="text-gray-500">{presentation.topic}</p>
      </div>
      <ul className="py-4 mt-2 text-blue-900 flex items-center justify-evenly">
        {presentation.slides && (
          <li className="flex flex-col items-center justify-around">
            <Tooltip title="slides">
              <a
                href={presentation.slides}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileDownload />
              </a>
            </Tooltip>
          </li>
        )}
        {presentation.demo && (
          <li className="flex flex-col items-center justify-between">
            <Tooltip title="demo present">
              <a
                href={presentation.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileVideo />
              </a>
            </Tooltip>
          </li>
        )}
        {presentation.codes && (
          <li className="flex flex-col items-center justify-around">
            <Tooltip title="codes">
              <a
                href={presentation.codes}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
            </Tooltip>
          </li>
        )}
      </ul>
      {/* <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
          Follow
        </button>
      </div> */}
    </div>
  );
};
