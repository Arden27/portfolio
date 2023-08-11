"use client"

import Image from "next/image";
import NavBar from "@/components/nav";
import PortfolioButton from "@/components/portfolioButton";
import { useRef } from "react";

export default function Home() {
	const mainRef = useRef();

    return (
        <main ref={mainRef} className="scroll-smooth snap-y snap-mandatory overflow-scroll m-0 h-screen bg-gray-100 font-sans text-base text-gray-800">
            <NavBar mainRef={mainRef} />
            <section
                id="home-section"
                className="snap-start flex h-screen w-screen items-center justify-start p-12"
            >
                <div className="flex h-screen w-full items-center">
                        <Image
                            src="/img/profile_picture.png"
                            alt="Profile Picture"
                            sizes="100vh"
							className="h-[95%] w-auto"
                            width={2832}
                            height={4256}
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
                className="snap-start h-screen w-screen flex flex-col space-y-6 pt-16"
            >
                <h2 className="m-0 p-0 text-center text-4xl font-bold text-black">
                    Skills
                </h2>
                <div className="m-0 flex w-full flex-col flex-wrap items-center justify-around space-y-6 p-0 text-center md:flex-row md:space-y-0">
                    <div className="m-0 flex w-full flex-col items-center md:w-2/5">
                        <h3 className="m-0 p-0 text-2xl">Frontend</h3>
                        <div className="flex flex-wrap justify-center">
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/html.png' %}" alt="HTML icon"> */}
                                </div>
                                <p className="text-center">HTML</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/css.png' %}" alt="css icon"> */}
                                </div>
                                <p className="text-center">CSS</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/js.png' %}" alt="js icon"> */}
                                </div>
                                <p className="text-center">JavaScript</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/react.png' %}" alt="react icon"> */}
                                </div>
                                <p className="text-center">React.js</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/tailwind.png' %}" alt="Tailwind icon"> */}
                                </div>
                                <p className="text-center">Tailwind</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/kivy.png' %}" alt="Kivy icon"> */}
                                </div>
                                <p className="text-center">Kivy</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-0 flex w-full flex-col items-center md:w-2/5">
                        <h3 className="m-0 p-0 text-2xl">Backend</h3>
                        <div className="flex flex-wrap justify-center">
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/python.png' %}" alt="Python icon"> */}
                                </div>
                                <p className="text-center">Python</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/django.png' %}" alt="Django icon"> */}
                                </div>
                                <p className="text-center">Django</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/pytorch.png' %}" alt="PyTorch icon"> */}
                                </div>
                                <p className="text-center">PyTorch</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/mongodb.png' %}" alt="MongoDB icon"> */}
                                </div>
                                <p className="text-center">MongoDB</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/mysql.png' %}" alt="MySQL icon"> */}
                                </div>
                                <p className="text-center">MySQL</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/solidity.png' %}" alt="Solidity icon"> */}
                                </div>
                                <p className="text-center">Solidity</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-0 flex w-full flex-row flex-wrap items-center justify-around p-0 text-center">
                    <div className="m-0 flex w-full flex-col items-center md:w-2/5">
                        <h3 className="m-0 p-0 text-2xl">Tools</h3>
                        <div className="flex flex-wrap justify-center">
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/git.png' %}" alt="Git icon"> */}
                                </div>
                                <p className="text-center">Git</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/vscode.png' %}" alt="VSCode icon"> */}
                                </div>
                                <p className="text-center">VSCode</p>
                            </div>
                            <div className="skill-card">
                                <div className="skill-image ">
                                    {/* <img className="w-full" src="{% static 'chatbot/img/skills/linux.png' %}" alt="Linux icon"> */}
                                </div>
                                <p className="text-center">Linux</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="portfolio-section"
                className="snap-start h-screen w-screen flex flex-wrap items-center justify-start p-12"
            >
                <h2 className="mb-10 w-full text-center text-3xl font-bold">
                    Portfolio
                </h2>
                <div className="grid w-full grid-cols-3 gap-5">
                    {/* {% for project in projects %}
                <div className="flex flex-col items-center">
                    <img src="{% static project.image %}" alt="{{ project.name }} screenshot" className="w-2/3 h-auto shadow-lg">
                    <h3 className="text-2xl font-medium mt-5 mb-2">{{ project.name }}</h3>
                    <p className="text-center">{{ project.description }}</p>
                </div>
            {% endfor %} */}
                </div>
            </section>

            <section
                id="about-section"
                className="snap-start h-screen w-screen flex flex-wrap items-center justify-start p-12"
            >
                <h2 className="mb-10 w-full text-center text-3xl font-bold">
                    About Me
                </h2>
                <div className="grid w-full grid-cols-2 gap-5">
                    {/* <img src="{% static 'chatbot/img/profile_picture.png' %}" alt="Profile Picture" className="w-2/3 h-auto shadow-lg justify-self-center"> */}
                    <div className="flex flex-col justify-center">
                        <p className="mb-5">
                            I am a full-stack developer specializing in Python.
                            I have 5+ years of experience in the development and
                            deployment of web applications. I am passionate
                            about creating user-friendly, efficient, and
                            scalable software.
                        </p>
                        <a
                            href="mailto:artem.furman@example.com"
                            className="inline-block rounded-lg bg-orange-600 px-5 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:border hover:border-orange-600 hover:bg-white hover:text-orange-600"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
