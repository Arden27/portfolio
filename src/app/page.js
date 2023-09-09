"use client";

import NavBar from "@/components/nav";
import Projects from "@/components/projects";
import About from "@/components/about";
import Home from "@/components/home";
import Skills from "@/components/skills";

import { useRef } from "react";

export default function Page() {
    const mainRef = useRef();

    return (
        <main
            ref={mainRef}
            className="z-20 relative box-border h-[100svh] w-screen snap-y snap-mandatory overflow-scroll scroll-smooth"
        >
            <NavBar mainRef={mainRef} />

            <section
                id="home-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center "
            >
                <Home />
            </section>

            <section
                id="skills-section"
                className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="max-sm:text-clamp_sm_section_name border rounded-xl px-2 md:p-2 md:px-4 bg-gray-100/50 border-black mx-sm:mb-0 mb-2 text-center text-4xl">
                    Skills
                </h1>
                <Skills />
            </section>

            <section
                id="portfolio-section"
                className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="max-sm:text-clamp_sm_section_name border rounded-xl px-2 md:p-2 md:px-4 bg-gray-100/50 border-black text-center text-4xl">
                    Portfolio
                </h1>
                <Projects />
            </section>
            
            <section
                id="about-section"
                className="flex h-[100svh] w-screen snap-start flex-col items-center md:justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="max-sm:text-clamp_sm_section_name border rounded-xl px-2 md:p-2 md:px-4 bg-gray-100/50 border-black text-center text-4xl">
                    About
                </h1>
                <About mainRef={mainRef} />
            </section>
        </main>
    );
}
