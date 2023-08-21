"use client";

import NavBar from "../nav";
import SkillsNav from "../skillsNav";
import FrontendSkills from "@/components/frontendSkills";
import BackendSkills from "@/components/backendSkills";
import OtherSkills from "@/components/otherSkills";
import PortfolioButton from "@/components/portfolioButton";
import { useRef } from "react";
import Image from "next/image";

export default function Small() {
    const mainRef = useRef();
    const skillsRef = useRef();

    return (
        <main
            ref={mainRef}
            className="h-[100svh] w-screen snap-y snap-mandatory overflow-scroll scroll-smooth box-border"
        >
            <NavBar mainRef={mainRef} />
            <section
                id="home-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center"
            >
                <div className="flex flex-col md:flex-row md:h-screen w-full md:items-center items-center justify-center">
                    {/* <Image
                        src="/img/profile_picture.png"
                        alt="Profile Picture"
                        sizes="100vh"
                        className="h-[95%] w-auto object-cover hidden md:block"
                        width={2832}
                        height={4256}
                    /> */}
                    <Image
                        src="/img/about.jpeg"
                        alt="Profile Picture"
                        // sizes="50vh "
                        className="h-[95%] md:h-2/3 w-auto object-cover"
                        width={720}
                        height={720}
                    />
                    <div className="ml-5">
                        <div className="mb-1 text-lg font-semibold text-orange-600">
                            Hello, I'm
                        </div>
                        <h3 className="mb-1 text-3xl font-bold">
                            Artem Furman
                        </h3>
                        <p className="mb-5 text-lg font-medium text-green-500">
                            <span>Python Developer</span>
                        </p>
                        <p className="mb-5">
                            I specialize in the creation and deployment of email
                            marketing campaigns.
                        </p>

                        <PortfolioButton />
                    </div>
                </div>
            </section>
            <section
                id="skills-section"
                className="items-center justify-center flex h-[100svh] w-screen snap-start flex-col max-sm:pt-14 pt-16"
            >
                <h1 className="mx-sm:mb-0 mb-2 text-center text-4xl font-bold">Skills</h1>
                <div 
                    className="scroll-smooth sm:grid-rows-7 md:grid-rows-10 h-full w-full max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:flex-row max-sm:overflow-scroll sm:grid sm:grid-cols-1 sm:gap-4 max-sm:px-1 max-sm:pb-1 md:px-6 md:pb-6 md:grid-cols-2"
                    ref={skillsRef}
                >
                    <FrontendSkills />
                    <BackendSkills />
                    <OtherSkills />
                </div>
                <SkillsNav skillsRef={skillsRef}/>
            </section>
            <section
                id="portfolio-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center text-4xl"
            >
                <h1>Portfolio</h1>
            </section>
            <section
                id="about-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center text-4xl"
            >
                <h1>About</h1>
            </section>
        </main>
    );
}
