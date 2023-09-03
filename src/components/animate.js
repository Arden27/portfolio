import React, { useState, useEffect, useCallback } from "react";
import { animated, useSpring, useSpringRef } from "react-spring";

export default function Animate() {
  const [isHovered, setHovered] = useState(false);
  const api = useSpringRef();
  
  const style = useSpring({
    ref: api,
    from: { transform: "translateY(0px) translateX(0px)" },
  });

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    if (isHovered) {
      api.start({
        to: [
          { transform: "translateY(-20px) translateX(0px)", config: { duration: 300 } },
          { transform: "translateY(-20px) translateX(100px)", config: { duration: 400 } }
        ],
      });
    } else {
      api.start({
        to: [
          { transform: "translateY(-20px) translateX(0px)", config: { duration: 800 } },
          { transform: "translateY(0px) translateX(0px)", config: { duration: 200 } }
        ],
      });
    }
  }, [isHovered]);

  return (
    <div
      className="relative w-[200px] h-[100px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <animated.div
        className="absolute z-10 aspect-square w-[100px] bg-emerald-300"
        style={style}
      ></animated.div>
      <div className="absolute aspect-square w-[100px] bg-red-300"></div>
    </div>
  );
}