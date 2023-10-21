import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openChat, closeChat } from "@/redux/store";
import GitHubIcon from "@/../public/img/github.svg";
import OpenIcon from "@/../public/img/open.svg";
import useSaveLogToDB from "@/services/logging/hooks/useSaveLogToDB";

const iconColor = "rgb(55, 65, 81)";

export default function ProjectBox({
  title,
  description,
  stack,
  placeSelfEnd,
  link,
  code,
  isLocal,
}) {
  const [easeIn, setEaseIn] = useState(true);
  const isChatOpen = useSelector((state) => state.app.isChatOpen);
  const {saveLogToDB} = useSaveLogToDB();

  const dispatch = useDispatch();

  const getOpacityClass = () => {
    return easeIn
      ? "duration-[800ms] md:ease-in"
      : "duration-[800ms] md:ease-in";
  };

  const handleVisitClick = () => {
    if (isLocal) {
      isChatOpen ? dispatch(closeChat()) : dispatch(openChat());
      saveLogToDB(`${title} Chat opened from project click`)
    } else {
      if (typeof window !== "undefined") {
        window.open(link, "_blank");
        saveLogToDB(`${title} Project opened`)
      }
    }
  };

  const handleCodeClick = () => {
    if (typeof window !== "undefined") {
      window.open(code, "_blank");
      saveLogToDB(`${title} Code opened`)
    }
  };

  return (
    <div
      className={`group h-full md:relative md:aspect-square max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center ${
        placeSelfEnd ? "place-self-end" : ""
      }`}
    >
      <div
        className={`${
          placeSelfEnd
            ? "md:group-hover:-translate-x-full"
            : "md:group-hover:translate-x-full"
        } h-full flex-col rounded-2xl border border-primary bg-gray-100/25 group-hover:bg-gray-100/50 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:transition md:duration-[800ms] md:ease-in-out max-sm:hidden`}
      >
        <h2 className="text-center text-clamp_project_name font-medium text-gray-800 transition duration-1000 ease-in-out group-hover:text-gray-600 peer-hover:opacity-100">
          {title}
        </h2>
        <div className="absolute bottom-5 flex gap-2 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
          <div
            onClick={handleVisitClick}
            className="flex w-[14vh] cursor-pointer flex-row items-center justify-center gap-1 rounded-lg border border-primary bg-gray-300/50 p-[1vh] pl-[2vh] text-gray-700 drop-shadow-xl transition-all duration-200 ease-in-out hover:border-violet-800 hover:text-violet-800"
          >
            <h4 className="md:text-clamp_project_button">Visit</h4>
            <OpenIcon className="w-[4vh]" fill="none" />
          </div>
          <div
            onClick={handleCodeClick}
            className="flex w-[14vh] cursor-pointer flex-row items-center justify-center rounded-lg border border-primary bg-gray-300/50 p-[1vh] text-gray-700 drop-shadow-xl transition-all duration-200 ease-in-out hover:border-violet-800 hover:text-violet-800"
          >
            <h4 className="md:text-clamp_project_button">Code</h4>
            <GitHubIcon className="w-[4vh]" fill={iconColor} />
          </div>
        </div>
      </div>
      <div
        className={`peer text-center  ${getOpacityClass()} flex h-full w-full flex-col justify-between rounded-2xl border border-primary p-2 md:absolute md:inset-0 md:bg-gray-100/25 md:text-clamp_project_description md:group-hover:bg-gray-100/50 max-sm:bg-gray-100/50 max-sm:text-[5vw]`}
        onMouseEnter={() => setEaseIn(true)}
        onMouseLeave={() => setEaseIn(false)}
      >
        <h3
          className={`transition-opacity md:opacity-0 md:group-hover:opacity-100 ${getOpacityClass()} mb-1 font-medium text-gray-800`}
        >
          {title}
        </h3>
        <div
          className={`scrollable-element overscroll-auto transition-opacity md:opacity-0 md:group-hover:opacity-100 max-sm:text-clamp_sm_project_description ${getOpacityClass()} : 'duration-[800ms] md:ease-in'} overflow-scroll font-normal text-gray-700 md:h-4/5 max-sm:h-3/5`}
        >
          {description}
        </div>

        <div
          className={`transition-opacity md:opacity-0 md:group-hover:opacity-100 ${getOpacityClass()} flex h-[13%] w-full flex-row items-center justify-around`}
        >
          {stack.map((tech, index) => (
            <div
              className="group/tech relative flex h-full w-auto items-center hover:cursor-pointer"
              key={index}
            >
              {/* Text to show on hover */}
              <div className="absolute bottom-full left-1/2 w-auto -translate-x-1/2 text-center text-gray-700 opacity-0 transition group-hover/tech:opacity-100">
                {tech}
              </div>
              {/* Image */}
              <div className="relative flex aspect-square h-3/4 items-center justify-center rounded-2xl">
                <Image
                  src={`/img/skills/${tech}.png`}
                  alt={`${tech} icon`}
                  className="h-full w-auto"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-[13%] items-center justify-center gap-2 md:hidden max-sm:flex">
          <div
            onClick={handleVisitClick}
            className="flex w-[35%] cursor-pointer flex-row items-center justify-center gap-1 rounded-lg border border-primary bg-gray-300/50 p-[1vh] pl-[2vh] text-gray-700 drop-shadow-xl transition-all duration-200 ease-in-out hover:border-violet-800 hover:text-violet-800"
          >
            <h4 className="md:text-clamp_project_button">Visit</h4>
            <OpenIcon className="w-[]" fill="none" />
          </div>
          <div
            onClick={handleCodeClick}
            className="flex w-[35%] cursor-pointer flex-row items-center justify-center gap-1 rounded-lg border border-primary bg-gray-300/50 p-[1vh] text-gray-700 drop-shadow-xl transition-all duration-200 ease-in-out hover:border-violet-800 hover:text-violet-800"
          >
            <h4 className="md:text-clamp_project_button">Code</h4>
            <GitHubIcon className="w-[]" fill={iconColor} />
          </div>
        </div>

        {/* <div className="h-[13%] w-full bg-amber-200 flex flex-row  items-center justify-around">
              {stack.map((tech, index) => (
                <div className="relative h-full w-auto group/tech hover:cursor-pointer" key={index}>
                  
                  <div className="absolute bg-white border rounded-lg  w-auto bottom-full text-center opacity-0 group-hover/tech:opacity-100 transition -translate-x-1/2 left-1/2">
                    {tech}
                  </div>
                  
                  <div className="relative bg-indigo-300 block aspect-square h-2/3 rounded-2xl">
                    <Image
                      src={`/img/skills/${tech}.png`}
                      alt={`${tech} icon`}
                      className="h-full w-auto object-cover object-center"
                      fill={true}
                    />
                  </div>
                </div>
              ))}
            </div> */}
      </div>
    </div>
  );
}
