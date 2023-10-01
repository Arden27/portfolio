import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { openChat, closeChat } from "@/redux/store";
import GitHubIcon from '../../public/img/github.svg'
import OpenIcon from '../../public/img/open.svg'

export default function ProjectBox({ title, description, stack, placeSelfEnd, link, isLocal }){
  const [easeIn, setEaseIn] = useState(true);
  const isChatOpen = useSelector((state) => state.isChatOpen);

  const dispatch = useDispatch();

  const getOpacityClass = () => {
    return easeIn ? 'duration-[800ms] md:ease-in' : 'duration-[800ms] md:ease-in';
  };

  const handleClick = () => {
    if (isLocal) {
        isChatOpen ? dispatch(closeChat()) : dispatch(openChat());
    } else {
        if (typeof window !== 'undefined') {
            window.open(link, '_blank');
        }
    }
  };

  return(
    
      <div className={`group md:relative md:aspect-square max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center h-full ${placeSelfEnd ? 'place-self-end' : ''}`}>
        
        
          <div className={`${placeSelfEnd ? 'md:group-hover:-translate-x-full' : 'md:group-hover:translate-x-full'} flex-col max-sm:hidden h-full md:absolute md:inset-0 rounded-2xl border border-primary bg-gray-100/25 group-hover:bg-gray-100/50 md:transition md:duration-[800ms] md:ease-in-out md:flex md:items-center md:justify-center`}>
            <h2 className=" mb-2 text-center text-xl font-medium peer-hover:opacity-100 text-gray-900">
              {title}
            </h2>
            <div className="opacity-0 flex absolute bottom-5 transition-opacity duration-500 group-hover:opacity-100 gap-2">
              <div
                  onClick={handleClick}
                  className="flex flex-row items-center md:text-xl drop-shadow-xl cursor-pointer rounded-lg bg-gray-300/50 px-5 py-2 text-gray-700 transition-all duration-200 ease-in-out border border-primary hover:border hover:border-violet-800 hover:bg-gray-200 hover:text-violet-800"
              >
                <h4>Visit</h4>
                <OpenIcon  />
              </div>
              <div
                  onClick={handleClick}
                  className="flex flex-row items-center md:text-xl drop-shadow-xl cursor-pointer rounded-lg bg-gray-300/50 px-5 py-2 text-gray-700 transition-all duration-200 ease-in-out border border-primary hover:border hover:border-violet-800 hover:bg-gray-200 hover:text-violet-800"
              >
                  <h4>Code</h4>
                  <GitHubIcon />
              </div>
            </div>
          </div>
          <div className={`text-center peer  ${getOpacityClass()} max-sm:text-[5vw] md:text-clamp_project_description p-2 md:absolute md:inset-0 w-full h-full flex flex-col justify-between rounded-2xl border border-primary md:bg-gray-100/25 max-sm:bg-gray-100/50 md:group-hover:bg-gray-100/50 md:hover:cursor-pointer`}
            onMouseEnter={() => setEaseIn(true)}
            onMouseLeave={() => setEaseIn(false)}
            onClick={handleClick}
          >
            <h3 className={`md:opacity-0 md:group-hover:opacity-100 transition-opacity ${getOpacityClass()} mb-1 font-medium text-gray-800`}>{title}</h3>
            <div className={`scrollable-element overscroll-auto md:opacity-0 max-sm:text-clamp_sm_project_description md:group-hover:opacity-100 transition-opacity ${getOpacityClass()} : 'duration-[800ms] md:ease-in'} h-4/5 overflow-scroll font-normal text-gray-700`}>
              {description}
            </div>
            <div className={`md:opacity-0 md:group-hover:opacity-100 transition-opacity ${getOpacityClass()} h-[13%] w-full flex flex-row  items-center justify-around`}>
              {stack.map((tech, index) => (
                <div className="relative h-full w-auto group/tech hover:cursor-pointer" key={index}>
                  {/* Text to show on hover */}
                  <div className="absolute w-auto bottom-full text-center opacity-0 group-hover/tech:opacity-100 transition -translate-x-1/2 left-1/2 text-gray-700">
                    {tech}
                  </div>
                  {/* Image */}
                  <div className="relative flex items-center justify-center aspect-square h-3/4 rounded-2xl">
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
};

  