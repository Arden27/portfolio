"use client";

import { useEffect, useState } from "react";

const NavBar = ({ mainRef }) => {
    const [activeLink, setActiveLink] = useState("home-section");
    const [shadow, setShadow] = useState(false);

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

        setActiveLink(currentSection);

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
        setActiveLink(sectionId);
        if (mainRef.current) {
            const section = document.getElementById(sectionId);
            mainRef.current.scrollTo({
                top: section.offsetTop,
                //behavior: "smooth", // Use smooth scrolling
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 flex h-12 w-full items-center justify-around bg-gray-100 bg-opacity-80 p-3 transition-shadow duration-500 ease-in-out md:justify-end ${
                shadow ? "shadow-lg" : ""
            }`}
        >
            <div
                onClick={() => handleNavLinkClick("home-section")}
                className={`md:mx-4 cursor-pointer ${
                    activeLink === "home-section" ? "font-bold text-orange-600" : ""
                }`}
            >
                Home
            </div>
            <div
                onClick={() => handleNavLinkClick("skills-section")}
                className={`md:mx-4 cursor-pointer ${
                    activeLink === "skills-section" ? "font-bold text-orange-600" : ""
                }`}
            >
                Skills
            </div>
            <div
                onClick={() => handleNavLinkClick("portfolio-section")}
                className={`md:mx-4 cursor-pointer ${
                    activeLink === "portfolio-section" ? "font-bold text-orange-600" : ""
                }`}
            >
                Portfolio
            </div>
            <div
                onClick={() => handleNavLinkClick("about-section")}
                className={`md:mx-4 md:mr-20 cursor-pointer ${
                    activeLink === "about-section" ? "font-bold text-orange-600" : ""
                }`}
            >
                About
            </div>
            
        </nav>

    );
};

export default NavBar;