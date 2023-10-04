import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Contacts from "./contacts";
import { useSelector, useDispatch } from "react-redux";
import { closeChat, openChat, knock } from "@/redux/store";

export default function About({ mainRef }){
    const [isAboutInView, setIsAboutInView] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const isChatOpen = useSelector((state) => state.isChatOpen)

    const dispatch = useDispatch();

    const typedRef = useRef(null);

    useEffect(() => {
        if (showAbout && typedRef.current) {
            const options = {
                strings: [`I've created a <span id="chatbot-link" class="text-violet-700 font-semibold cursor-pointer">chatbot avatar</span> that mimics my personality. You can use it to ask any questions about my background and skills. Please feel free to leave comments or suggestions regarding my portfolio.`],
                typeSpeed: 25, // typing speed
                backSpeed: 0, // backspacing speed
                backDelay: 500, // delay before backspacing
                startDelay: 0, // delay to start typing once initialized
                loop: false, // loop the animation
                showCursor: false, // show blinking cursor
                smartBackspace: true, // allow smart backspacing
                onComplete: () => {
                    const chatbotLink = document.getElementById('chatbot-link');
                    if (chatbotLink) {
                        chatbotLink.addEventListener('click', handleChatbotLinkClick);
                    }
                }
            };
            const typed = new Typed(typedRef.current, options);
    
            return () => {
                typed.destroy();
                const chatbotLink = document.getElementById('chatbot-link');
                if (chatbotLink) {
                    chatbotLink.removeEventListener('click', handleChatbotLinkClick);
                }
            };
        }
    }, [showAbout]);
    
    const handleChatbotLinkClick = () => {
        isChatOpen ? dispatch(closeChat()) : dispatch(openChat());
    };

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
                const knockTimer = setTimeout(() => {
                    dispatch(knock());
                    }, 5000)
              
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
    return(
        <div className={`relative w-full flex flex-col items-center justify-center p-2`}>
            {/* ${isAboutInView ? 'scale-[.60] -translate-y-[67%]' : ''} */}
            <div className={`relative z-10 bg-gray-100/50 p-2 border rounded-full border-primary aspect-square h-[25vh] items-center justify-center transition transform duration-[2000ms] ease-in-out ${isAboutInView ? '' : 'scale-[1.6] translate-y-[67%]'}`}>
                <Image
                    src="/img/about.jpeg"
                    alt="Profile Picture"
                    sizes="15vw"
                    className={`h-[95%] w-auto object-cover rounded-full }`}
                    fill
                />
            </div>
            <div className={`relative bg-gray-100/50 bottom-4 p-4 border rounded-2xl border-primary max-sm:flex max-sm:w-4/5 md:w-1/3 max-sm:flex-col max-sm:items-center transition duration-[1500ms] ease-in ${showAbout ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-center text-gray-800" ref={typedRef}></h3>
            </div>
            <div className={`transition duration-[2500ms] ease-in ${showContacts ? 'opacity-100' : 'opacity-0'}`}>
                <Contacts />
            </div>
            
        </div>
    )
}