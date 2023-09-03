import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectBox({ title, description, stack, placeSelfEnd }){
  const [easeIn, setEaseIn] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [enterTimerId, setEnterTimerId] = useState(null);
  const [leaveTimerId, setLeaveTimerId] = useState(null);

  const enterAnimationDuration = 1000; // 1s for entering
  const leaveAnimationDuration = 500;  // 0.5s for leaving

  useEffect(() => {
    return () => {
      if (enterTimerId) {
        clearTimeout(enterTimerId);
      }
      if (leaveTimerId) {
        clearTimeout(leaveTimerId);
      }
    };
  }, [enterTimerId, leaveTimerId]);

  const onEnterBox = () => {
    if (leaveTimerId) {
      clearTimeout(leaveTimerId);
    }
    setHovered(true);  // Immediately set the hover state
    setEaseIn(true);
  };
  
  const onLeaveBox = () => {
    if (enterTimerId) {
      clearTimeout(enterTimerId);
    }
    setEaseIn(false);
  
    const newLeaveTimerId = setTimeout(() => {
      setHovered(false);
    }, leaveAnimationDuration);
  
    setLeaveTimerId(newLeaveTimerId);
  };

  const getAnimationClass = () => {
    if(hovered) {
      return placeSelfEnd ? 'animate-slideUpThenLeft' : 'animate-slideUpThenRight';
    } else {
      return placeSelfEnd ? 'animate-slideRightThenDown' : 'animate-slideLeftThenDown';
    }
  };

  const getOpacityClass = () => {
    return hovered ? 'opacity-100' : 'opacity-0';
  };

    return(
    <div className={`group md:relative md:aspect-square max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center h-full ${placeSelfEnd ? 'place-self-end' : ''} md:hover:cursor-pointer`}>
      <div className=""
        onMouseEnter={() => onEnterBox()}
        onMouseLeave={() => onLeaveBox()}
      >
        <div className={`${getAnimationClass()} max-sm:hidden h-full md:absolute md:inset-0 rounded-2xl border-2 border-black bg-gray-100/50 md:transition-transform md:duration-700 md:ease-in-out md:flex md:items-center md:justify-center`}>
          <h2 className="mb-2 text-center text-xl font-medium peer-hover:opacity-100">{title}</h2>
        </div>
        <div className={`text-center opacity-0 ${getOpacityClass()} transition-opacity  ${easeIn ? 'duration-[1000ms] md:ease-in' : 'duration-[800ms] md:ease-out'} text-clamp_project_description p-2 md:absolute md:inset-0 w-full h-full flex flex-col justify-between rounded-2xl border-2 border-black bg-gray-100/50`}>
          <h3 className="mb-1 font-medium">{title}</h3>
          <div className="h-4/5 overflow-scroll font-normal">
            {description}
          </div>
          <div className="h-[13%] w-full flex flex-row  items-center justify-around">
            {stack.map((tech, index) => (
              <div className="relative h-full w-auto group/tech hover:cursor-pointer" key={index}>
                {/* Text to show on hover */}
                <div className="absolute bg-white border rounded-lg  w-auto bottom-full text-center opacity-0 group-hover/tech:opacity-100 transition -translate-x-1/2 left-1/2">
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