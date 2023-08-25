"use client";

import NavBar from "@/components/nav";
import SkillsNav from "@/components/skillsNav";
import FrontendSkills from "@/components/frontendSkills";
import BackendSkills from "@/components/backendSkills";
import OtherSkills from "@/components/otherSkills";

import { useRef } from "react";
import Image from "next/image";

export default function Small() {
    const mainRef = useRef();
    const skillsRef = useRef();

    return (
        <main
            ref={mainRef}
            className="box-border h-screen w-[100svh] snap-y snap-mandatory overflow-scroll scroll-smooth"
        >
            <NavBar mainRef={mainRef} />
            <section
                id="home-section"
                className="flex h-screen w-screen snap-start items-center justify-center "
            >
                <div className="flex md:gap-10 w-full h-5/6 flex-col items-center justify-center md:h-screen md:flex-row">
                    <div className="flex aspect-square h-2/3 items-center justify-center">
                        <Image
                            src="/img/about.jpeg"
                            alt="Profile Picture"
                            // sizes="50vh "
                            className="h-[95%] w-auto object-cover"
                            width={720}
                            height={720}
                        />
                    </div>
                    <div className="max-sm:flex max-sm:h-1/3 md:w-1/3 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:p-4">
                        <div className="text-lg font-semibold text-orange-600 md:mb-1">
                            Hello, I'm
                        </div>
                        <h3 className="text-clamp_name font-bold md:mb-1">
                            Artem Furman
                        </h3>
                        <p className="text-md md:text-lg font-medium text-green-600 md:mb-1">
                            <span>Web Developer</span>
                        </p>
                        <div className="mb-1 flex items-center justify-center md:mb-2 max-sm:w-4/5 md:w-4/4">
                            <p className="max-sm:text-center text-clamp_description">
                            I specialize in the creation and deployment of full-stack web applications, leveraging cutting-edge technologies
                            </p>
                        </div>
                        <a
                            href="#portfolio-section"
                            className="inline-block cursor-pointer rounded-lg bg-orange-600 px-5 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:border hover:border-orange-600 hover:bg-white hover:text-orange-600"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </section>
            <section
                id="skills-section"
                className="flex h-screen w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="mx-sm:mb-0 mb-2 text-center text-4xl font-bold">
                    Skills
                </h1>
                <div
                    className="sm:grid-rows-7 md:grid-rows-10 h-full w-full scroll-smooth sm:grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:px-6 md:pb-6 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:flex-row max-sm:overflow-scroll max-sm:px-1 max-sm:pb-1"
                    ref={skillsRef}
                >
                    <FrontendSkills />
                    <BackendSkills />
                    <OtherSkills />
                </div>
                <SkillsNav skillsRef={skillsRef} />
            </section>
            <section
                id="portfolio-section"
                className="flex h-screen w-screen snap-start flex-col items-center justify-center pt-16 max-sm:pt-14"
            >
                <h1 className="text-center text-4xl font-bold">
                    Portfolio
                </h1>
                <div
                    className="h-full w-full grid grid-cols-2 grid-rows-2 gap-4 pt-2 p-6"
                >
                    <div className="w-full h-full">
                        <h2 className="mb-2 text-center text-xl font-bold">Project</h2>
                        <div className="w-full h-5/6 rounded-2xl border-2 border-black bg-green-300"></div>    
                    </div>
                    <div className="w-full h-full">
                        <h2 className="mb-2 text-center text-xl font-bold">Project</h2>
                        <div className="w-full h-5/6 rounded-2xl border-2 border-black bg-green-300"></div>    
                    </div>
                    <div className="w-full h-full">
                        <h2 className="mb-2 text-center text-xl font-bold">Project</h2>
                        <div className="w-full h-5/6 rounded-2xl border-2 border-black bg-green-300"></div>    
                    </div>
                    <div className="w-full h-full">
                        <h2 className="mb-2 text-center text-xl font-bold">Project</h2>
                        <div className="w-full h-5/6 rounded-2xl border-2 border-black bg-green-300"></div>    
                    </div>
                </div>
            </section>
            <section
                id="about-section"
                className="flex h-screen w-screen snap-start items-center justify-center text-4xl"
            >
                <h1>About</h1>
            </section>
        </main>
    );
}
