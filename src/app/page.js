"use client";

import NavBar from "@/components/TNav";
import Projects from "@/components/projects/TProjects";
import About from "@/components/TAbout";
import Home from "@/components/THome";
import Skills from "@/components/skills/TSkills";
import Chat from "@/components/chat/TChat";

import { useRef, useState } from "react";

export default function Page() {
  const mainRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main
      ref={mainRef}
      className="relative z-20 box-border h-[100svh] w-screen snap-y snap-mandatory overflow-scroll scroll-smooth"
    >
      <NavBar mainRef={mainRef} isHomeVisible={isVisible} />
      <Chat isChatVisible={isVisible} />

      <section
        id="home-section"
        className="flex h-[100svh] w-screen snap-start items-center justify-center "
      >
        <Home isVisible={isVisible} setIsVisible={setIsVisible} />
      </section>

      <section
        id="skills-section"
        className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
      >
        <h1 className="mx-sm:mb-0 mb-2 rounded-xl border border-primary bg-gray-100/50 px-3 text-center text-clamp_sm_section_name text-gray-700 md:p-1 md:px-4 md:text-clamp_section_name">
          Skills
        </h1>
        <Skills />
      </section>

      <section
        id="portfolio-section"
        className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
      >
        <h1 className="rounded-xl border border-primary bg-gray-100/50 px-3 text-center text-clamp_sm_section_name text-gray-700 md:p-1 md:px-4 md:text-clamp_section_name">
          Portfolio
        </h1>
        <Projects />
      </section>

      <section
        id="about-section"
        className="flex h-[100svh] w-screen snap-start flex-col items-center pt-16 md:justify-center max-sm:pt-14"
      >
        <h1 className="rounded-xl border border-primary bg-gray-100/50 px-3 text-center text-clamp_sm_section_name text-gray-700 md:p-1 md:px-4 md:text-clamp_section_name">
          About
        </h1>
        <About mainRef={mainRef} />
      </section>
    </main>
  );
}
