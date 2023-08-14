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

    return (
        <nav
            className={`fixed top-0 flex h-12 w-full items-center justify-around bg-red-300 sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300 bg-opacity-80 p-3 transition-shadow duration-300 ease-in-out md:justify-end ${
                shadow ? "shadow-md" : ""
            }`}
        >
            <a
                href="#home-section"
                className={`md:mx-4 ${
                    activeLink === "home-section"
                        ? "font-bold text-orange-600"
                        : ""
                }`}
            >
                Home
            </a>
            <a
                href="#skills-section"
                className={`md:mx-4 ${
                    activeLink === "skills-section"
                        ? "font-bold text-orange-600"
                        : ""
                }`}
            >
                Skills
            </a>
            <a
                href="#portfolio-section"
                className={`md:mx-4 ${
                    activeLink === "portfolio-section"
                        ? "font-bold text-orange-600"
                        : ""
                }`}
            >
                Portfolio
            </a>
            <a
                href="#about-section"
                className={`md:mx-4 md:mr-20 ${
                    activeLink === "about-section"
                        ? "font-bold text-orange-600"
                        : ""
                }`}
            >
                About
            </a>
        </nav>
    );
};

export default NavBar;