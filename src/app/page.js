"use client";

import NavBar from "@/components/nav";
import Projects from "@/components/projects";
import About from "@/components/about";
import Home from "@/components/home";
import Skills from "@/components/skills";
import Chat from "@/components/chat";

import { useRef, useState } from "react";

export default function Page() {
    const mainRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    return [
            
            <Chat isChatVisible={isVisible} />,

            <section
                key="home"
                id="home-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center "
            >
                <Home isVisible={isVisible} setIsVisible={setIsVisible}/>
            </section>,

            <section
                key="skills"
                id="skills-section"
                className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="max-sm:text-clamp_sm_section_name border rounded-xl px-2 md:p-2 md:px-4 bg-gray-100/50 border-gray-700 mx-sm:mb-0 mb-2 text-center text-gray-700 text-4xl">
                    Skills
                </h1>
                <Skills />
            </section>,

            <section
                key="portfolio"
                id="portfolio-section"
                className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="max-sm:text-clamp_sm_section_name border rounded-xl px-2 md:p-2 md:px-4 bg-gray-100/50 border-gray-700 text-center text-gray-700 text-4xl">
                    Portfolio
                </h1>
                <Projects />
            </section>,
            
            <section
                key="about"
                id="about-section"
                className="flex h-[100svh] w-screen snap-start flex-col items-center md:justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="max-sm:text-clamp_sm_section_name border rounded-xl px-2 md:p-2 md:px-4 bg-gray-100/50 border-gray-700 text-center text-gray-700 text-4xl">
                    About
                </h1>
                <About mainRef={mainRef} />
            </section>
    ];
}
