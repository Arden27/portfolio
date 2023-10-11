"use client";

import React, { useState, useEffect } from "react";

const getRandomComponent = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue)
    .toString(16)
    .padStart(2, "0");
};

const getRandomColor = () => {
  // For red, let's limit to 100-200, and for green, let's limit to 50-150
  const red = getRandomComponent(30, 150);
  const green = getRandomComponent(30, 180);
  // For blue, using the full range 0-255
  const blue = getRandomComponent(30, 205);

  return `#${red}${green}${blue}`;
};

const getRandomAngle = () => {
  return Math.floor(Math.random() * 360);
};

const DynamicBackground = () => {
  const transitionTime = 7000; // in milliseconds

  // Gradient colors
  const [backgroundGradientFrom, setBackgroundGradientFrom] = useState(
    getRandomColor(),
  );
  const [backgroundGradientTo, setBackgroundGradientTo] = useState(
    getRandomColor(),
  );
  const [foregroundGradientFrom, setForegroundGradientFrom] = useState(
    getRandomColor(),
  );
  const [foregroundGradientTo, setForegroundGradientTo] = useState(
    getRandomColor(),
  );

  // Gradient angles
  const [backgroundAngle, setBackgroundAngle] = useState(getRandomAngle());
  const [foregroundAngle, setForegroundAngle] = useState(getRandomAngle());

  // Other states
  const [opacity, setOpacity] = useState(1);
  const [rendered, setRendered] = useState(false); // NEW state variable

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setRendered(true); // Trigger the Tailwind transition
    }, 200); // Feel free to adjust this time

    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (opacity === 1) {
        setBackgroundGradientFrom(getRandomColor());
        setBackgroundGradientTo(getRandomColor());
        setBackgroundAngle(getRandomAngle()); // Update background angle
        setOpacity(0);
      } else {
        setForegroundGradientFrom(getRandomColor());
        setForegroundGradientTo(getRandomColor());
        setForegroundAngle(getRandomAngle()); // Update foreground angle
        setOpacity(1);
      }
    }, transitionTime);

    return () => {
      clearTimeout(timer);
    };
  }, [opacity]);

  const foregroundStyle = {
    opacity: opacity,
    transition: `opacity ${transitionTime / 1000}s ease-in`,
    backgroundImage: `linear-gradient(${foregroundAngle}deg, ${foregroundGradientFrom}, ${foregroundGradientTo})`,
    backgroundSize: "100% 100%",
    position: "absolute",
    inset: 0,
    zIndex: 1,
  };

  const backgroundStyle = {
    opacity: 1,
    backgroundImage: `linear-gradient(${backgroundAngle}deg, ${backgroundGradientFrom}, ${backgroundGradientTo})`,
    backgroundSize: "100% 100%",
    position: "absolute",
    inset: 0,
    zIndex: 0,
  };

  return (
    <div
      className={`opacity-0 ${
        rendered ? "opacity-50" : ""
      } relative min-h-screen transition-opacity duration-[10000ms] ease-in-out`}
    >
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}></div>
    </div>
  );
};

export default DynamicBackground;
