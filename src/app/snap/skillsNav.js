"use client";

import { useEffect, useState } from "react";

const SkillsNav = ({ skillsRef }) => {
    const [activeLink, setActiveLink] = useState("home-section");
    const [shadow, setShadow] = useState(false);

    const handleScroll = () => {
        if (!skillsRef.current) return;
        const skills = [
            "frontend-skills",
            "backend-skills",
            "other-skills",
        ];
        let currentSkill = "frontend-skills";
        let smallestDistance = Infinity;

        skills.forEach((id) => {
            const skill = document.getElementById(id);
            const distance = Math.abs(
                skillsRef.current.scrollLeft - skill.offsetLeft,
            );

            if (distance < smallestDistance) {
                smallestDistance = distance;
                currentSection = id;
            }
        });

        setActiveLink(currentSkill);

        if (skillsRef.current.scrollLeft > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };

    useEffect(() => {
        if (skillsRef.current) {
            skillsRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (skillsRef.current) {
                skillsRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [skillsRef]);

    return (
        <nav
            className={`sm:hidden flex h-12 w-full items-center justify-around bg-red-300 sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300 bg-opacity-80 p-3 transition-shadow duration-300 ease-in-out md:justify-end ${
                shadow ? "shadow-lg" : ""
            }`}
        >
            <a
                href="#frontend-skills"
                className={`md:mx-4 ${
                    activeLink === "frontend-skills"
                        ? "font-bold text-orange-600"
                        : ""
                }`}
            >
                Frontend
            </a>
            <a
                href="#backend-skills"
                className={`md:mx-4 ${
                    activeLink === "backend-skills"
                        ? "font-bold text-orange-600"
                        : ""
                }`}
            >
                Backend
            </a>
            <a
                href="#other-skills"
                className={`md:mx-4 ${
                    activeLink === "other-skills"
                        ? "font-bold text-orange-600"
                        : ""
                }`}
            >
                Other
            </a>
        </nav>
    );
};

export default SkillsNav;