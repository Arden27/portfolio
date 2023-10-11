import { useState, useEffect } from "react";
import Image from "next/image";
import Contacts from "./Contacts";
import { useSelector, useDispatch } from "react-redux";
import { closeChat, openChat, knock } from "@/redux/store";

export default function About({ mainRef }) {
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const isChatOpen = useSelector((state) => state.isChatOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();

        // Calculate whether at least half of the About section is visible
        const halfHeight = rect.height / 2;
        const halfVisible =
          rect.top <= window.innerHeight - halfHeight &&
          rect.bottom >= halfHeight;

        if (halfVisible) {
          setIsAboutInView(true);
          const showAboutTimer = setTimeout(() => {
            setShowAbout(true);
          }, 1500);
          const showContactsTimer = setTimeout(() => {
            setShowContacts(true);
          }, 3000);
          const knockTimer = setTimeout(() => {
            dispatch(knock());
          }, 5000);

          return () => {
            clearTimeout(showAboutTimer);
            clearTimeout(showContactsTimer);
            clearTimeout(knockTimer);
          };
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
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center p-2`}
    >
      {/* ${isAboutInView ? 'scale-[.60] -translate-y-[67%]' : ''} */}
      <div
        className={`relative z-10 aspect-square h-[25vh] transform items-center justify-center rounded-full border border-primary bg-gray-100/50 p-2 transition duration-[2000ms] ease-in-out ${
          isAboutInView ? "" : "translate-y-[67%] scale-[1.6]"
        }`}
      >
        <Image
          src="/img/about.jpeg"
          alt="Profile Picture"
          sizes="15vw"
          className={`} h-[95%] w-auto rounded-full object-cover`}
          fill
        />
      </div>
      <div
        className={`relative bottom-4 rounded-2xl border border-primary bg-gray-100/50 p-4 transition duration-[1500ms] ease-in md:w-1/3 max-sm:flex max-sm:w-4/5 max-sm:flex-col max-sm:items-center ${
          showAbout ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-center text-gray-800">
          I've created a{" "}
          <span
            className="cursor-pointer font-semibold text-violet-700"
            onClick={() => {
              isChatOpen ? dispatch(closeChat()) : dispatch(openChat());
            }}
          >
            chatbot avatar
          </span>{" "}
          that mimics my personality. You can use it to ask any questions about
          my background and skills. Please feel free to leave comments or
          suggestions regarding my portfolio
        </h3>
      </div>
      <div
        className={`transition duration-[2500ms] ease-in ${
          showContacts ? "opacity-100" : "opacity-0"
        }`}
      >
        <Contacts />
      </div>
    </div>
  );
}
