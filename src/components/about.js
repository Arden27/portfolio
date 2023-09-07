import { useState, useEffect } from "react";
import Image from "next/image";
import Contacts from "./contacts";

export default function About({ mainRef }){
    const [isAboutInView, setIsAboutInView] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

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
                setIsAboutInView(true);
                const showAboutTimer = setTimeout(() => {
                    setShowAbout(true);  
                  }, 1500); 
                const showContactsTimer = setTimeout(() => {
                    setShowContacts(true);  
                  }, 3000); 
              
                  return () => {
                    clearTimeout(showAboutTimer);
                    clearTimeout(showContactsTimer);
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
    return(
        <div className={`relative h-full w-full flex flex-col items-center p-2`}>
            {/* ${isAboutInView ? 'scale-[.60] -translate-y-[67%]' : ''} */}
            <div className={`relative z-10 bg-gray-100/50 p-2 border rounded-full border-black aspect-square h-[25vh] items-center justify-center transition transform duration-[2000ms] ease-in-out ${isAboutInView ? '' : 'scale-[1.6] translate-y-[67%]'}`}>
                <Image
                    src="/img/about.jpeg"
                    alt="Profile Picture"
                    sizes="15vw"
                    className={`h-[95%] w-auto object-cover rounded-full }`}
                    fill
                />
            </div>
            <div className={`relative bg-gray-100/50 bottom-4 p-4 border rounded-2xl border-black max-sm:flex max-sm:w-4/5 md:w-1/3 max-sm:flex-col max-sm:items-center transition duration-[1500ms] ease-in ${showAbout ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-center">
                    I've created a chatbot avatar that mimics my personality. You can use it to ask any questions about my background and skills. Please feel free to leave comments or suggestions regarding my portfolio
                </h3>
            </div>
            <div className={`transition duration-[2500ms] ease-in ${showContacts ? 'opacity-100' : 'opacity-0'}`}>
                <Contacts />
            </div>
            
        </div>
    )
}