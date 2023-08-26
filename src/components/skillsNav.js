"use client";

import { useEffect, useState } from "react";

const SkillsNav = ({ skillsRef }) => {
    const [activeLink, setActiveLink] = useState("frontend-skills");

    const handleScroll = () => {
        if (!skillsRef.current) {
            return;
        }
        const skills = [
            "frontend-skills",
            "backend-skills",
            "other-skills",
        ];
        let currentSkill = "frontend-skills";
        let smallestDistance = Infinity;

        skills.forEach((id) => {
            const skill = document.getElementById(id);
            const distance = Math.abs(skillsRef.current.scrollLeft - skill.offsetLeft);

            if (distance < smallestDistance) {
                smallestDistance = distance;
                currentSkill = id;
            }
        });

        setActiveLink(currentSkill);
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
        <nav className="md:hidden text-3xl flex max-sm:h-2 w-full items-center justify-center bg-transparent bg-opacity-80 pb-6 transition-shadow duration-300 ease-in-out md:justify-end">
            <div
                onClick={() => window.location.hash = 'frontend-skills'}
                className={`mx-2 cursor-pointer ${activeLink === "frontend-skills" ? "font-bold text-orange-600" : ""}`}
            >
                {activeLink === "frontend-skills" ? '⦿' : '○'}
            </div>
            <div
                onClick={() => window.location.hash = 'backend-skills'}
                className={`mx-2 cursor-pointer ${activeLink === "backend-skills" ? "font-bold text-orange-600" : ""}`}
            >
                {activeLink === "backend-skills" ? '⦿' : '○'}
            </div>
            <div
                onClick={() => window.location.hash = 'other-skills'}
                className={`mx-2 cursor-pointer ${activeLink === "other-skills" ? "font-bold text-orange-600" : ""}`}
            >
                {activeLink === "other-skills" ? '⦿' : '○'}
            </div>
        </nav>

    );
};

export default SkillsNav;