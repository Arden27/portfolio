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

const App = () => {
  const transitionTime = 5000; // in milliseconds
  const [backgroundGradientFrom, setBackgroundGradientFrom] = useState(getRandomColor());
  const [backgroundGradientTo, setBackgroundGradientTo] = useState(getRandomColor());
  const [foregroundGradientFrom, setForegroundGradientFrom] = useState(getRandomColor());
  const [foregroundGradientTo, setForegroundGradientTo] = useState(getRandomColor());
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (opacity === 1) {
        // Change the background colors
        setBackgroundGradientFrom(getRandomColor());
        setBackgroundGradientTo(getRandomColor());
        setOpacity(0);
      } else {
        // Change the foreground colors
        setForegroundGradientFrom(getRandomColor());
        setForegroundGradientTo(getRandomColor());
        setOpacity(1);
      }
    }, transitionTime);

    return () => {
      clearTimeout(timer);
    };
  }, [opacity]);

  const foregroundStyle = {
    opacity: opacity,
    transition: `opacity ${transitionTime / 1000}s ease-in-out`,
    backgroundImage: `linear-gradient(270deg, ${foregroundGradientFrom}, ${foregroundGradientTo})`,
    backgroundSize: '200% 200%',
    position: 'absolute',
    inset: 0
  };

  const backgroundStyle = {
    opacity: 1,
    backgroundImage: `linear-gradient(270deg, ${backgroundGradientFrom}, ${backgroundGradientTo})`,
    backgroundSize: '200% 200%',
    position: 'absolute',
    inset: 0
  };

  return (
    <div className="min-h-screen relative">
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}></div>
    </div>
  );
};

export default App;
