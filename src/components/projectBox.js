import Image from "next/image";
import { useState } from "react";

export default function ProjectBox({ title, description, stack, placeSelfEnd }){
  const [easeIn, setEaseIn] = useState(true);

  const getOpacityClass = () => {
    return easeIn ? 'duration-[800ms] md:ease-in' : 'duration-[800ms] md:ease-in';
  };

    return(
    <div className={`group md:relative md:aspect-square max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center h-full ${placeSelfEnd ? 'place-self-end' : ''} md:hover:cursor-pointer`}>
      <div className="h-full"
        onMouseEnter={() => setEaseIn(true)}
        onMouseLeave={() => setEaseIn(false)}
      >
        <div className={`${placeSelfEnd ? 'md:group-hover:-translate-x-full' : 'md:group-hover:translate-x-full'} max-sm:hidden h-full md:absolute md:inset-0 rounded-2xl border border-black bg-gray-100/25 group-hover:bg-gray-100/50 md:transition md:duration-[800ms] md:ease-in-out md:flex md:items-center md:justify-center`}>
          <h2 className="mb-2 text-center text-xl font-medium peer-hover:opacity-100">{title}</h2>
        </div>
        <div className={`text-center peer  ${getOpacityClass()} max-sm:text-[5vw] md:text-clamp_project_description p-2 md:absolute md:inset-0 w-full h-full flex flex-col justify-between rounded-2xl border border-black md:bg-gray-100/25 max-sm:bg-gray-100/50 md:group-hover:bg-gray-100/50`}>
          <h3 className={`md:opacity-0 md:group-hover:opacity-100 transition-opacity ${getOpacityClass()} mb-1 font-medium`}>{title}</h3>
          <div className={`md:opacity-0 max-sm:text-clamp_sm_project_description md:group-hover:opacity-100 transition-opacity ${getOpacityClass()} : 'duration-[800ms] md:ease-in'} h-4/5 overflow-scroll font-normal`}>
            {description}
          </div>
          <div className={`md:opacity-0 md:group-hover:opacity-100 transition-opacity ${getOpacityClass()} h-[13%] w-full flex flex-row  items-center justify-around`}>
            {stack.map((tech, index) => (
              <div className="relative h-full w-auto group/tech hover:cursor-pointer" key={index}>
                {/* Text to show on hover */}
                <div className="absolute w-auto bottom-full text-center opacity-0 group-hover/tech:opacity-100 transition -translate-x-1/2 left-1/2">
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
    </div>
    );
  };

  