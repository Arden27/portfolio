import React, { useState, useEffect, useRef } from "react";

export default function Animate() {
  const [hovered, setHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [animating, setAnimating] = useState(false);
  const start = useRef(null);
  const rafId = useRef(null);

  const animate = (timestamp) => {
    if (start.current === null) start.current = timestamp;
    const elapsed = timestamp - start.current;

    if (hovered) {
      if (elapsed < 200) {
        setTranslateY((-20 * elapsed) / 200);
      } else {
        setTranslateX((100 * (elapsed - 200)) / 800);
      }
    } else {
      if (elapsed < 800) {
        setTranslateX(translateX - (translateX * elapsed) / 800);
      } else {
        setTranslateY(translateY - (translateY * (elapsed - 800)) / 200);
      }
    }

    if (elapsed < 1000) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      setAnimating(false);
    }
  };

  useEffect(() => {
    setAnimating(true);
    start.current = null;
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [hovered]);

  return (
    <div
      className="relative w-[200px] h-[100px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute aspect-square w-[100px] bg-emerald-300"
        style={{
          transform: `translateY(${translateY}px) translateX(${translateX}px)`,
        }}
      ></div>
      <div className="absolute aspect-square w-[100px] bg-red-300"></div>
    </div>
  );
}
