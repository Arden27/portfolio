import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { animated, useSpring, useSpringRef } from "react-spring";

export default function ProjectBox({ title, description, stack, placeSelfEnd }){
  const [easeIn, setEaseIn] = useState(true);
  const [isHovered, setHovered] = useState(false);
  const api = useSpringRef();
  
  const style = useSpring({
    ref: api,
    from: { transform: "translateY(0px) translateX(0px)" },
  });

  const onMouseEnter = useCallback(() => {
    setHovered(true)
    setEaseIn(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setHovered(false)
    setEaseIn(false);
  }, []);

  useEffect(() => {
    if (isHovered) {
      api.start({
        to: [
          { transform: "translateY(-20px) translateX(0px)", config: { duration: 300 } },
          { transform: "translateY(-20px) translateX(350px)", config: { duration: 400 } }
        ],
      });
    } else {
      api.start({
        to: [
          { transform: "translateY(-20px) translateX(0px)", config: { duration: 800 } },
          { transform: "translateY(0px) translateX(0px)", config: { duration: 400 } }
        ],
      });
    }
  }, [isHovered]);

  

  // const getAnimationClass = () => {
  //   if(hovered) {
  //     return placeSelfEnd ? 'animate-slideUpThenLeft' : 'animate-slideUpThenRight';
  //   } else {
  //     return placeSelfEnd ? 'animate-slideRightThenDown' : 'animate-slideLeftThenDown';
  //   }
  // };

  const getOpacityClass = () => {
    return isHovered ? 'opacity-100' : 'opacity-0';
  };

    return(
    <div className={`group md:relative md:aspect-square max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center h-full ${placeSelfEnd ? 'place-self-end' : ''} md:hover:cursor-pointer`}>
      <div className=""
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <animated.div
          className={` max-sm:hidden h-full md:absolute md:inset-0 transition ease-out rounded-2xl border-2 border-black bg-gray-100/50  md:flex md:items-center md:justify-center`}
          style={style}
        >
          <h2 className="mb-2 text-center text-xl font-medium peer-hover:opacity-100">{title}</h2>
        </animated.div>
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