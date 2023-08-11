"use client"

import NavBar from "./nav";
import { useRef } from "react";

export default function Home() {
    const mainRef = useRef();

    return (
        <main ref={mainRef} className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
            <NavBar mainRef={mainRef} />
            <section id="home-section" className="snap-start bg-emerald-300 w-screen h-screen flex items-center justify-center text-8xl">Home</section>
            <section id="skills-section" className="snap-start bg-cyan-300 w-screen h-screen flex items-center justify-center text-8xl">Skills</section>
            <section id="portfolio-section" className="snap-start bg-emerald-300 w-screen h-screen flex items-center justify-center text-8xl">Portfolio</section>
            <section id="about-section" className="snap-start bg-cyan-300 w-screen h-screen flex items-center justify-center text-8xl">About</section>
        </main>
    );
}
