"use client";

import { useEffect, useState, useRef } from "react";
import NavButton from "./NavButton";
import useSaveLogToDB from "@/services/logging/hooks/useSaveLogToDB";
import useDebouncedSectionChangeLog from "./useDebouncedSectionChangeLog";

const navButtons = [
  {
    name: "Home",
    section: "home-section",
    transitionDelay: "150ms",
  },
  {
    name: "Skills",
    section: "skills-section",
    transitionDelay: "300ms",
  },
  {
    name: "Portfolio",
    section: "portfolio-section",
    transitionDelay: "500ms",
  },
  {
    name: "About",
    section: "about-section",
    transitionDelay: "700ms",
  },
];

export default function NavBar({ mainRef, homeRef, skillsRef, portfolioRef, aboutRef, isHomeVisible }) {
  const [activeLink, setActiveLink] = useState("home-section");
  const [scrollInitiator, setScrollInitiator] = useState(null); // Add this to track which link initiated the scroll

  // const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !/Mobi|Android/i.test(navigator.userAgent);

  const [navItemsVisible, setNavItemsVisible] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  const { saveLogToDB } = useSaveLogToDB();
  const { debouncedSectionChangeLog } = useDebouncedSectionChangeLog(saveLogToDB);
  const sectionRefs = useRef({});

  useEffect(() => {
    sectionRefs.current = {
      "home-section": homeRef.current,
      "skills-section": skillsRef.current,
      "portfolio-section": portfolioRef.current,
      "about-section": aboutRef.current,
    };
  }, []);

  useEffect(() => {
    if (isHomeVisible) {
      setTimeout(() => {
        setNavItemsVisible(true);
      }, 50); // Start showing items after a 50ms delay.

      setTimeout(() => {
        setInitialRender(false);
      }, 1000); // Assuming the cumulative delay for all items is 700ms, we set this to 1000ms to be sure.
    }
  }, [isHomeVisible]);

  const handleScroll = () => {
    if (!mainRef.current) return;
    let currentSection = "home-section";
    let smallestDistance = Infinity;

    for (const id in sectionRefs.current) {
      const section = sectionRefs.current[id];
      if (section) {
        const distance = Math.abs(mainRef.current.scrollTop - section.offsetTop);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = id;
        }
      }
    }

    // Only change the activeLink if the currentSection is not the scrollInitiator
    if (currentSection !== scrollInitiator) {
      setActiveLink(currentSection);
    }
    debouncedSectionChangeLog(currentSection);
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mainRef]);

  const handleNavLinkClick = (sectionId) => {
    saveLogToDB(`Clicked ${sectionId} nav-button`);
    setScrollInitiator(sectionId); // Set the scroll initiator

    if (mainRef.current) {
      const section = document.getElementById(sectionId);
      mainRef.current.scrollTo({
        top: section.offsetTop,
        behavior: "smooth", // Use smooth scrolling
      });

      // Set the active link after a short delay to prevent flicker and clear the scrollInitiator after scroll finishes
      setTimeout(() => {
        setActiveLink(sectionId);
        setScrollInitiator(null);
      }, 500); // Delayed by 50ms. You can adjust this value if needed.
    }
  };

  return (
    <nav
      className={`fixed top-0 z-10 flex h-12 w-full items-center justify-around bg-transparent p-3 transition-shadow duration-500 ease-in-out md:justify-end md:pr-20`}
    >
      {navButtons.map(({name, section, transitionDelay}, index) => (
        <NavButton
          key={index}
          name={name}
          section={section}
          navItemsVisible={navItemsVisible}
          activeLink={activeLink}
          initialRender={initialRender}
          handleNavLinkClick={handleNavLinkClick}
          transitionDelay={transitionDelay}
        />
      ))}
    </nav>
  );
}
