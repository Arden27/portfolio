"use client";

import { useEffect, useState } from "react";

const NavBar = ({ isHomeVisible }) => {
    const [activeLink, setActiveLink] = useState("home-section");
    const [shadow, setShadow] = useState(false);
    const [scrollInitiator, setScrollInitiator] = useState(null);

    const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !/Mobi|Android/i.test(navigator.userAgent);

    const [navItemsVisible, setNavItemsVisible] = useState(false);
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        if (isHomeVisible) {
            setTimeout(() => {
                setNavItemsVisible(true);
            }, 50);
    
            setTimeout(() => {
                setInitialRender(false);
            }, 1000);
        }
    }, [isHomeVisible]);

    const handleScroll = () => {
        const mainContainer = document.getElementById("mainContainer");
        if (!mainContainer) return;

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
                mainContainer.scrollTop - section.offsetTop
            );

            if (distance < smallestDistance) {
                smallestDistance = distance;
                currentSection = id;
            }
        });

        if (currentSection !== scrollInitiator) {
            setActiveLink(currentSection);
        }

        if (mainContainer.scrollTop > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };

    useEffect(() => {
        const mainContainer = document.getElementById("mainContainer");
        if (mainContainer) {
            mainContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (mainContainer) {
                mainContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const handleNavLinkClick = (sectionId) => {
        setScrollInitiator(sectionId);

        const section = document.getElementById(sectionId);
        const mainContainer = document.getElementById("mainContainer");

        if (section && mainContainer) {
            mainContainer.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });

            setTimeout(() => {
                setActiveLink(sectionId);
                setScrollInitiator(null);
            }, 500);
        }
    };

    return (
        <nav
            className={`fixed z-40 top-0 flex h-12 w-full items-center justify-around bg-transparent p-3 transition-shadow duration-500 ease-in-out md:justify-end ${
                shadow && !isSafari ? "shadow-lg" : "bg-transparent"
            }`}
        >
            <div
                onClick={() => handleNavLinkClick("home-section")}
                className={`
                    relative md:mx-2 cursor-pointer border px-3 p-1 rounded-xl 
                    transition-all duration-500 
                    ${navItemsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    ${activeLink === "home-section" ? "bg-gray-100/30 border-gray-700 text-white/80" : "border-transparent text-gray-100/80"}
                `}
                style={initialRender && navItemsVisible ? { transitionDelay: '150ms' } : {}}
            >
                Home
            </div>
    
            <div
                onClick={() => handleNavLinkClick("skills-section")}
                className={`
                    relative md:mx-2 cursor-pointer border px-3 p-1 rounded-xl 
                    transition-all duration-500 
                    ${navItemsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    ${activeLink === "skills-section" ? "bg-gray-100/30 border-gray-700 text-white/80" : "border-transparent text-gray-100/80"}
                `}
                style={initialRender && navItemsVisible ? { transitionDelay: '300ms' } : {}}
            >
                Skills
            </div>
    
            <div
                onClick={() => handleNavLinkClick("portfolio-section")}
                className={`
                    relative md:mx-2 cursor-pointer border px-3 p-1 rounded-xl 
                    transition-all duration-500 
                    ${navItemsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    ${activeLink === "portfolio-section" ? "bg-gray-100/30 border-gray-700 text-white/80" : "border-transparent text-gray-100/80"}
                `}
                style={initialRender && navItemsVisible ? { transitionDelay: '500ms' } : {}}
            >
                Portfolio
            </div>
    
            <div
                onClick={() => handleNavLinkClick("about-section")}
                className={`
                    relative md:mx-2 md:mr-20 cursor-pointer border px-3 p-1 rounded-xl 
                    transition-all duration-500 
                    ${navItemsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    ${activeLink === "about-section" ? "bg-gray-100/30 border-gray-700 text-white/80" : "border-transparent text-gray-100/80"}
                `}
                style={initialRender && navItemsVisible ? { transitionDelay: '700ms' } : {}}
            >
                About
            </div>
        </nav>
    );
};

export default NavBar;