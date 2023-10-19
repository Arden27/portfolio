"use client";

import NavBar from "@/components/nav/Nav";
import Projects from "@/components/projects/Projects";
import About from "@/components/About";
import Home from "@/components/Home";
import Skills from "@/components/skills/Skills";
import Chat from "@/components/chat/Chat";

import { useRef, useState } from "react";

import useLoggingService from "@/services/logging/hooks/useLoggingService";
import useSaveLogToDB from "@/services/logging/hooks/useSaveLogToDB";
import useSendExitLogBatch from "@/services/logging/hooks/useSendExitLogBatch";

export default function Page() {
  useLoggingService(); // start logging service
  useSendExitLogBatch(); // to 'fire-and-forget' log "user left" and batched logs on user closing the tab/browser
  useSaveLogToDB("Website opened") // to log user enter

  const mainRef = useRef();
  const homeRef = useRef();
  const skillsRef = useRef();
  const portfolioRef = useRef();
  const aboutRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main
      ref={mainRef}
      className="relative z-20 box-border h-[100svh] w-screen snap-y snap-mandatory overflow-scroll scroll-smooth"
    >
      <NavBar mainRef={mainRef} homeRef={homeRef} skillsRef={skillsRef} portfolioRef={portfolioRef} aboutRef={aboutRef} isHomeVisible={isVisible} />
      <Chat isChatVisible={isVisible} />

      <section
        id="home-section"
        ref={homeRef}
        className="flex h-[100svh] w-screen snap-start items-center justify-center "
      >
        <Home isVisible={isVisible} setIsVisible={setIsVisible} />
      </section>

      <section
        id="skills-section"
        ref={skillsRef}
        className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
      >
        <h1 className="mx-sm:mb-0 mb-2 rounded-xl border border-primary bg-gray-100/50 px-3 text-center text-clamp_sm_section_name text-gray-700 md:p-1 md:px-4 md:text-clamp_section_name">
          Skills
        </h1>
        <Skills />
      </section>

      <section
        id="portfolio-section"
        ref={portfolioRef}
        className="flex h-[100svh] w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
      >
        <h1 className="rounded-xl border border-primary bg-gray-100/50 px-3 text-center text-clamp_sm_section_name text-gray-700 md:p-1 md:px-4 md:text-clamp_section_name">
          Portfolio
        </h1>
        <Projects />
      </section>

      <section
        id="about-section"
        ref={aboutRef}
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
