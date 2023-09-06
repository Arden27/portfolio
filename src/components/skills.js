"use client"

import SkillsNav from "@/components/skills/skillsNav";
import FrontendSkills from "@/components/skills/frontendSkills";
import BackendSkills from "@/components/skills/backendSkills";
import OtherSkills from "@/components/skills/otherSkills";

import { useRef } from "react";

export default function Skills() {
    const skillsRef = useRef();
    return (
        <>
            <div
                className="sm:grid-rows-7 md:grid-rows-10 h-full w-full scroll-smooth sm:grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:px-6 md:pb-6 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:flex-row max-sm:overflow-scroll max-sm:px-1 max-sm:pb-1"
                ref={skillsRef}
            >
                <FrontendSkills />
                <BackendSkills />
                <OtherSkills />
            </div>
            <SkillsNav skillsRef={skillsRef} />
        </>
    )
}