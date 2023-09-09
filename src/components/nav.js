"use client";

import { useEffect, useState } from "react";

const NavBar = ({ mainRef }) => {
    const [activeLink, setActiveLink] = useState("home-section");
    const [shadow, setShadow] = useState(false);
    const [scrollInitiator, setScrollInitiator] = useState(null); // Add this to track which link initiated the scroll

    const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !/Mobi|Android/i.test(navigator.userAgent);

    const handleScroll = () => {
        if (!mainRef.current) return;
        const sections = [
            "home-section",
            "skills-section",
            "portfolio-section",
            "about-section",
        ];
        let currentSection = "home-section";
        let smallestDistance = Infinity;

        sections.forEach((id) => {
            const section = document.getElementById(id);
            const distance = Math.abs(
                mainRef.current.scrollTop - section.offsetTop,
            );

            if (distance < smallestDistance) {
                smallestDistance = distance;
                currentSection = id;
            }
        });

        // Only change the activeLink if the currentSection is not the scrollInitiator
        if (currentSection !== scrollInitiator) {
            setActiveLink(currentSection);
        }

        if (mainRef.current.scrollTop > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
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
        setScrollInitiator(sectionId); // Set the scroll initiator
    
        if (mainRef.current) {
            const section = document.getElementById(sectionId);
            mainRef.current.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
    
            setActiveLink(sectionId);
            setScrollInitiator(null);
        }
    };

    return (
        <div
        className="fixed top-0 w-full z-10 transition-shadow duration-500 ease-in-out"
        style={{
            boxShadow: `0 10px 15px -3px rgba(0, 0, 0, ${shadow ? 0.1 : 0}), 0 4px 6px -2px rgba(0, 0, 0, ${shadow ? 0.1 : 0})`
        }}
    >
        <nav className="flex h-12 items-center justify-around bg-transparent md:justify-end">
            <div
                onClick={() => handleNavLinkClick("home-section")}
                className={`relative md:mx-2 cursor-pointer border px-3 p-1 rounded-xl transition ease-in duration-500 ${
                    activeLink === "home-section" ? " bg-gray-100/30 border-black text-white/80" : "border-transparent text-gray-100/80"
                }`}
            >
                Home
            </div>
            <div
                onClick={() => handleNavLinkClick("skills-section")}
                className={`relative md:mx-2 cursor-pointer border px-3 p-1 rounded-xl transition ease-in duration-500  ${
                    activeLink === "skills-section" ? " bg-gray-100/30 border-black text-white/80" : "border-transparent text-gray-100/80"
                }`}
            >
                Skills
            </div>
            <div
                onClick={() => handleNavLinkClick("portfolio-section")}
                className={`relative md:mx-2 cursor-pointer border px-3 p-1 rounded-xl transition ease-in duration-500 ${
                    activeLink === "portfolio-section" ? " bg-gray-100/30 border-black text-white/80" : "border-transparent text-gray-100/80"
                }`}
            >
                Portfolio
            </div>
            <div
                onClick={() => handleNavLinkClick("about-section")}
                className={`relative md:mx-2 md:mr-20 cursor-pointer border px-3 p-1 rounded-xl transition ease-in duration-500 ${
                    activeLink === "about-section" ? " bg-gray-100/30 border-black text-white/80" : "border-transparent text-gray-100/80"
                }`}
            >
                About
            </div>
            
        </nav>
        </div>
    );
};

export default NavBar;