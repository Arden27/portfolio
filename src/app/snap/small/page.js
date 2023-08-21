"use client";

import NavBar from "../nav";
import SkillsNav from "../skillsNav";
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
                className="flex h-[100svh] w-screen snap-start items-center justify-center text-4xl"
            >
                Home
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
                    <div 
                        className="max-sm:pb-4 max-sm:px-1 flex flex-col max-sm:h-full max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center sm:col-span-1 sm:row-span-3 md:col-span-1 md:row-span-6"
                        id="frontend-skills"
                    >
                        <h2 className="mb-2 text-center text-xl font-bold">
                            Frontend
                        </h2>
                        <div className="grid h-full w-full max-sm:grid-cols-2 max-sm:grid-rows-3 grid-cols-3 grid-rows-2 gap-2 rounded-2xl p-2">
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/html.png"
                                        alt="HTML icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>HTML</p>
                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square flex items-center justify-center max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/css.png"
                                        alt="HTML icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>CSS</p>
                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square flex items-center max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/tailwind.png"
                                        alt="HTML icon"
                                        // sizes="100%"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>Tailwind</p>
                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square flex items-center max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/js.png"
                                        alt="JavaScript icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>JavaScript</p>
                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square flex items-center max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/react.png"
                                        alt="ReactJS icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>ReactJS</p>
                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square flex items-center max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/next.png"
                                        alt="NextJS icon"
                                        // sizes="100%"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>NextJS</p>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="max-sm:pb-4 max-sm:px-1 flex flex-col max-sm:h-full max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center sm:col-span-1 sm:row-span-3 md:col-span-1 md:row-span-6"
                        id="backend-skills"
                    >
                        
                        <h2 className="mb-2 text-center text-xl font-bold">
                            Backend
                        </h2>
                        <div className="grid h-full w-full max-sm:grid-cols-2 max-sm:grid-rows-3 grid-cols-3 grid-rows-2 gap-2 rounded-2xl p-2">
                            <div className="rounded-2xl border-2 border-black bg- flex flex-col items-center justify-center">
                                <div className="aspect-square flex items-center max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/python.png"
                                        alt="HTML icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>Python</p>
                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/django.png"
                                        alt="HTML icon"
                                        // sizes="100%"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>Django</p>
                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/pytorch.png"
                                        alt="HTML icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>PyTorch</p>

                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/mongodb.png"
                                        alt="MongoDB icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>MongoDB</p>

                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/mysql.png"
                                        alt="MySQL icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>MySQL</p>

                            </div>
                            <div className="rounded-2xl border-2 border-black flex flex-col items-center justify-center">
                                <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                    <Image
                                        src="/img/skills/node.png"
                                        alt="Node icon"
                                        // sizes="100%"
                                        
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p>NodeJS</p>

                            </div>
                        </div>
                    </div>
                    <div 
                        className="max-sm:pb-4 max-sm:px-1 flex flex-col max-sm:h-full max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center sm:col-span-1 sm:row-span-4 md:col-span-2"
                        id="other-skills"
                    >
                        <h2 className="mb-2 text-center text-xl font-bold">
                            Other
                        </h2>
                        <div className="grid h-full w-full gap-2 rounded-2xl p-2 max-sm:grid-rows-3 md:grid-cols-3">
                            <div className="rounded-2xl h-full border-2 border-black flex flex-col items-center ">
                                <p className="font-bold">Enhancements</p>
                                <div className="px-2 h-full w-full flex items-center justify-around">
                                    <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/typescript.png"
                                                alt="HTML icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>TypeScript</p>
                                    </div>
                                    <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/redux.png"
                                                alt="Redux icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>Redux</p>
                                    </div>
                                    <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/responsive.png"
                                                alt="Responsivity icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>Responsive</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="rounded-2xl h-full border-2 border-black flex flex-col items-center ">
                                <p className="font-bold">Tools</p>
                                <div className="h-full w-full flex items-center justify-around">
                                <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/git.png"
                                                alt="HTML icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>Git</p>
                                    </div>
                                    <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/vscode.png"
                                                alt="VSCode icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>VSCode</p>
                                    </div>
                                    <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/linux.png"
                                                alt="Linux icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>Linux</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl h-full border-2 border-black flex flex-col items-center ">
                                <p className="font-bold">Tools</p>
                                <div className="h-full w-full flex items-center justify-around">
                                <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/git.png"
                                                alt="HTML icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>Git</p>
                                    </div>
                                    <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/creativity.png"
                                                alt="Ideation icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>Ideation</p>
                                    </div>
                                    <div className="flex flex-col h-full items-center justify-center">
                                        <div className="aspect-square max-h-20 h-2/3 rounded-2xl">
                                            <Image
                                                src="/img/skills/linux.png"
                                                alt="Linux icon"
                                                
                                                
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <p>Linux</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
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
