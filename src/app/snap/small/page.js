"use client";

import NavBar from "../nav";
import { useRef } from "react";

export default function Small() {
    const mainRef = useRef();

    return (
        <main
            ref={mainRef}
            className="h-[100svh] w-screen snap-y snap-mandatory overflow-scroll scroll-smooth"
        >
            <NavBar mainRef={mainRef} />
            <section
                id="home-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center bg-emerald-300 text-4xl"
            >
                <div class="snap-x flex flex-row overflow-scroll snap-mandatory">
                    <div class="h-full w-full flex-shrink-0 snap-center">
                        <img className="w-screen h-auto" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                    </div>
                    <div class="h-full w-full flex-shrink-0 snap-center">
                        <img className="w-screen h-auto" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                    </div>
                    <div class="h-full w-full flex-shrink-0 snap-center">
                        <img className="w-screen h-auto" src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                    </div>
                    <div class="h-full w-full flex-shrink-0 snap-center">
                        <img className="w-screen h-auto" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                    </div>
                    <div class="h-full w-full flex-shrink-0 snap-center">
                        <img className="w-screen h-auto" src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                    </div>
                    <div class="h-full w-full flex-shrink-0 snap-center">
                        <img className="w-screen h-auto" src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                    </div>
                </div>
            </section>
            <section
                id="skills-section"
                className="flex h-[100svh] w-screen snap-start flex-col bg-cyan-300 pt-14"
            >
                <h1 className="mb-2 text-center text-4xl font-bold">Skills</h1>
                <div className="sm:grid-rows-7 lg:grid-rows-10 sm:grid h-full w-full sm:grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-2">
                    <div className="sm:col-span-1 sm:row-span-3 flex sm:flex-col lg:col-span-1 lg:row-span-6">
                        <h2 className="mb-2 text-center text-xl font-bold">
                            Frontend
                        </h2>
                        <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-2 rounded-2xl border-2 border-black bg-blue-200 p-2">
                            <div className="rounded-2xl border-2 border-black bg-purple-200"></div>
                            <div className="rounded-2xl border-2 border-black bg-yellow-200"></div>
                            <div className="rounded-2xl border-2 border-black bg-pink-200"></div>
                            <div className="rounded-2xl border-2 border-black bg-orange-200"></div>
                            <div className="rounded-2xl border-2 border-black bg-gray-200"></div>
                            <div className="rounded-2xl border-2 border-black bg-indigo-200"></div>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-3 flex flex-col lg:col-span-1 lg:row-span-6">
                        <h2 className="mb-2 text-center text-xl font-bold">
                            Backend
                        </h2>
                        <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-2 rounded-2xl border-2 border-black bg-red-200 p-2">
                            <div className="rounded-2xl border-2 border-black bg-green-300"></div>
                            <div className="rounded-2xl border-2 border-black bg-pink-300"></div>
                            <div className="rounded-2xl border-2 border-black bg-teal-200"></div>
                            <div className="rounded-2xl border-2 border-black bg-purple-300"></div>
                            <div className="rounded-2xl border-2 border-black bg-yellow-300"></div>
                            <div className="rounded-2xl border-2 border-black bg-indigo-300"></div>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-4 flex flex-col lg:col-span-2">
                        <h2 className="mb-2 text-center text-xl font-bold">
                            Backend
                        </h2>
                        <div className="grid h-full w-full grid-cols-3 gap-2 rounded-2xl border-2 border-black bg-green-200 p-2">
                            <div className="rounded-2xl border-2 border-black bg-red-300"></div>
                            <div className="rounded-2xl border-2 border-black bg-blue-300"></div>
                            <div className="rounded-2xl border-2 border-black bg-yellow-400"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="portfolio-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center bg-emerald-300 text-4xl"
            >
                <h1>Portfolio</h1>
            </section>
            <section
                id="about-section"
                className="flex h-[100svh] w-screen snap-start items-center justify-center bg-cyan-300 text-4xl"
            >
                <h1>About</h1>
            </section>
        </main>
    );
}
