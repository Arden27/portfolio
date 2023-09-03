"use client"

import React, { useState, useEffect } from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomAngle = () => {
  return Math.floor(Math.random() * 360);
};

const Gradient = () => {
  const transitionTime = 7000; // in milliseconds

  // Gradient colors
  const [backgroundGradientFrom, setBackgroundGradientFrom] = useState(getRandomColor());
  const [backgroundGradientTo, setBackgroundGradientTo] = useState(getRandomColor());
  const [foregroundGradientFrom, setForegroundGradientFrom] = useState(getRandomColor());
  const [foregroundGradientTo, setForegroundGradientTo] = useState(getRandomColor());

  // Gradient angles
  const [backgroundAngle, setBackgroundAngle] = useState(getRandomAngle());
  const [foregroundAngle, setForegroundAngle] = useState(getRandomAngle());

  // Other states
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (opacity === 1) {
        setBackgroundGradientFrom(getRandomColor());
        setBackgroundGradientTo(getRandomColor());
        setBackgroundAngle(getRandomAngle());  // Update background angle
        setOpacity(0);
      } else {
        setForegroundGradientFrom(getRandomColor());
        setForegroundGradientTo(getRandomColor());
        setForegroundAngle(getRandomAngle());  // Update foreground angle
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
    backgroundSize: '100% 100%',
    position: 'absolute',
    inset: 0,
    zIndex: 1
  };

  const backgroundStyle = {
    opacity: 1,
    backgroundImage: `linear-gradient(${backgroundAngle}deg, ${backgroundGradientFrom}, ${backgroundGradientTo})`,
    backgroundSize: '100% 100%',
    position: 'absolute',
    inset: 0,
    zIndex: 0
  };

  return (
    <div className="min-h-screen relative">
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}></div>
    </div>
  );
};

export default Gradient;
