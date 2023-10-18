import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Spinner from "../../public/img/spinner.svg";
import useSaveLogToDB from "@/services/logging/hooks/useSaveLogToDB";

export default function Home({ isVisible, setIsVisible }) {
  const imageWrapperRef = useRef(null);
  const {saveLogToDB} = useSaveLogToDB();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (imageWrapperRef.current) {
      observer.observe(imageWrapperRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (imageWrapperRef.current) {
        observer.unobserve(imageWrapperRef.current);
      }
    };
  }, []);

  return (
    <div className="flex h-full w-full max-w-7xl flex-col landscape:max-sm:flex-row landscape:max-sm:h-screen items-center justify-center md:h-screen md:flex-row landscape:max-sm:gap-5 md:gap-10 max-sm:pb-2 max-sm:pt-12">
      {!isVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div
        ref={imageWrapperRef}
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex aspect-square landscape:h-2/3 items-center justify-center rounded-2xl border border-primary bg-gray-100/50 p-2 md:max-h-[50vw] max-sm:h-1/2`}
      >
        <Image
          src="/img/about.jpeg"
          alt="Profile Picture"
          // sizes="50vh "
          className="h-[95%] w-auto rounded-2xl object-cover"
          width={720}
          height={720}
          priority
        />
      </div>
      <div
        className={`transform transition duration-1000 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } rounded-2xl border border-primary bg-gray-100/50 p-4 pr-3 landscape:max-sm:p-4 md:w-1/3 landscape:max-sm:justify-center landscape:max-sm:items-start landscape:max-sm:w-1/3 max-sm:flex landscape:max-sm:h-[30svw] max-sm:h-1/2 max-sm:w-4/5 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:p-2 max-sm:px-1 max-sm:text-[10svh]`}
      >
        <div className="text-[35%] font-extralight leading-[1.2] text-gray-800 landscape:max-sm:text-clamp_greating md:text-clamp_greating">
          Hello, I'm
        </div>
        <h3 className="text-[50%] font-medium leading-[1.2] text-gray-700 landscape:max-sm:text-clamp_name md:text-clamp_name md:leading-[1.1]">
          Artem Furman
        </h3>
        <p className="text-[40%] font-light leading-[1.2] text-gray-800 md:mb-1 landscape:max-sm:text-clamp_profession md:text-clamp_profession">
          Web Developer
        </p>
        <div className="md:w-full mb-1 flex items-center justify-center md:mb-2 max-sm:w-4/5">
          <p className="text-[28%] font-light leading-[1.2] text-gray-700 landscape:max-sm:text-clamp_description md:text-clamp_description landscape:max-sm:text-start max-sm:text-center">
            I specialize in the creation and deployment of full-stack web
            applications, leveraging cutting-edge technologies
          </p>
        </div>
        <a
          href="#portfolio-section"
          className="inline-block cursor-pointer rounded-lg border border-primary bg-gray-300/75 px-5 py-2 text-gray-700 drop-shadow-xl transition-all duration-200 ease-in-out hover:border hover:border-violet-800 hover:text-violet-800 md:text-xl max-sm:text-[30%]"
          onClick={() => saveLogToDB("Portfolio button clicked")}
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}
