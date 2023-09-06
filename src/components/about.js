import { useState, useEffect } from "react";
import Image from "next/image";

export default function About({ mainRef }){
    const [isAboutInView, setIsAboutInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about-section");
            if (aboutSection) {
              const rect = aboutSection.getBoundingClientRect();
          
              // Calculate whether at least half of the About section is visible
              const halfHeight = rect.height / 2;
              const halfVisible =
                rect.top <= window.innerHeight - halfHeight && rect.bottom >= halfHeight;
          
              if (halfVisible) {
                console.log("About section is in view!");
                setIsAboutInView(true);
              }
            }
          };
    
        const mainElement = mainRef.current;
        if (mainElement) {
            mainElement.addEventListener("scroll", handleScroll);
        }
    
        return () => {
            if (mainElement) {
                mainElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);
    return(
        <div className={`relative h-[calc(100%-10rem)] w-full flex flex-row items-center justify-center`}>
            <div className="relative bg-gray-100/50 h-1/2 w-full p-4 pr-3 border rounded-2xl border-black max-sm:text-[10svh] max-sm:flex max-sm:h-1/2 max-sm:w-4/5 md:w-1/3 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:p-2 max-sm:px-1">
                <div className={`absolute h-full w-full top-1/2 left-1/2 transition transform duration-[3000ms] ease-in-out origin-top-left ${isAboutInView ? 'scale-[.5] md:-translate-y-[65%] max-sm:-translate-y-[60%] ' : ''}`}>
                    <div className={`relative bg-gray-100/50 p-2 border rounded-full border-black aspect-square h-full items-center justify-center transform -translate-y-1/2 -translate-x-1/2`}>
                        <Image
                            src="/img/about.jpeg"
                            alt="Profile Picture"
                            sizes="15vw"
                            className={`h-[95%] w-auto object-cover rounded-full }`}
                            fill
                        />
                    </div>
                </div>
                <div className="text-[35%] md:text-clamp_greating font-extralight leading-[1.2]">
                    Hello, I'm
                </div>
                <h3 className="text-[50%] leading-[1.2] md:leading-[1.1] md:text-clamp_name font-medium">
                    Artem Furman
                </h3>
                <p className="text-[40%] md:text-clamp_profession font-light leading-[1.2] md:mb-1">
                    Web Developer
                </p>
                <div className="mb-1 flex items-center justify-center md:mb-2 max-sm:w-4/5 md:w-4/4">
                    <p className="max-sm:text-center text-[28%] md:text-clamp_description font-light leading-[1.2]">
                    I specialize in the creation and deployment of full-stack web applications, leveraging cutting-edge technologies
                    </p>
                </div>
                <a
                    href="#portfolio-section"
                    className="max-sm:text-[30%] md:text-xl drop-shadow-xl inline-block cursor-pointer rounded-lg bg-gray-200/75 px-5 py-2 text-black transition-all duration-200 ease-in-out border border-black hover:border hover:border-orange-600 hover:bg-gray-100 hover:text-orange-600"
                >
                    Portfolio
                </a>
            </div>
        </div>
    )
}