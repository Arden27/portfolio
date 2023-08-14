"use client";

import NavBar from "./nav";
import { useRef } from "react";

export default function Home() {
    const mainRef = useRef();

    return (
        <main
            ref={mainRef}
            className="h-screen w-screen snap-y snap-mandatory overflow-scroll"
        >
            <NavBar mainRef={mainRef} />
            <section
                id="home-section"
                className="flex h-screen w-screen snap-start items-center justify-center bg-emerald-300 text-8xl"
            >
                Home
            </section>
            <section
                id="skills-section"
                className="grid-rows-7 lg:grid-rows-10 grid h-[100svh] w-screen grid-cols-1 gap-4 bg-cyan-300 p-4 lg:grid-cols-2"
            >
                <div className="col-span-1 row-span-3 flex flex-col lg:col-span-1 lg:row-span-6">
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
            </section>
            <section
                id="portfolio-section"
                className="flex h-screen w-screen snap-start items-center justify-center bg-emerald-300 text-8xl"
            >
                Portfolio
            </section>
            <section
                id="about-section"
                className="flex h-screen w-screen snap-start items-center justify-center bg-cyan-300 text-8xl"
            >
                About
            </section>
        </main>
    );
}
