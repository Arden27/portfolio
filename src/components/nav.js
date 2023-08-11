"use client";

import { useEffect, useState } from "react";

const NavBar = ({ mainRef }) => {
  const [activeLink, setActiveLink] = useState('home-section');
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (!mainRef.current) return;
    const sections = ['home-section', 'skills-section', 'portfolio-section', 'about-section'];
    let currentSection = 'home-section';
    let smallestDistance = Infinity;

    sections.forEach((id) => {
      const section = document.getElementById(id);
      const distance = Math.abs(mainRef.current.scrollTop - section.offsetTop);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        currentSection = id;
      }
    });

    setActiveLink(currentSection);

    if (mainRef.current.scrollTop > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [mainRef]);

  return (
    <nav className={`fixed top-0 w-full flex justify-end items-center h-12 p-3 bg-gray-100 bg-opacity-80 transition-shadow duration-300 ease-in-out ${shadow ? 'shadow-md' : ''}`}>
      <a href="#home-section" className={`mx-4 ${activeLink === 'home-section' ? 'text-orange-600 font-bold' : ''}`}>Home</a>
      <a href="#skills-section" className={`mx-4 ${activeLink === 'skills-section' ? 'text-orange-600 font-bold' : ''}`}>Skills</a>
      <a href="#portfolio-section" className={`mx-4 ${activeLink === 'portfolio-section' ? 'text-orange-600 font-bold' : ''}`}>Portfolio</a>
      <a href="#about-section" className={`mx-4 mr-20 ${activeLink === 'about-section' ? 'text-orange-600 font-bold' : ''}`}>About</a>
    </nav>
  );
};

export default NavBar;
// import { Link as ScrollLink } from "react-scroll";

// const NavBar = () => {
//     const [shadow, setShadow] = useState(false);

//     const handleScroll = () => {
//         setShadow(window.scrollY > 0);
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const sections = [
//         { name: "Home", id: "home-section" },
//         { name: "Skills", id: "skills-section" },
//         { name: "Portfolio", id: "portfolio-section" },
//         { name: "About", id: "about-section", extraClass: "mr-20" },
//     ];

//     return (
//         <nav
//             className={`scroll-smooth fixed top-0 flex h-12 w-full items-center justify-end bg-gray-100 bg-opacity-80 p-3 transition-shadow duration-300 ease-in-out ${
//                 shadow ? "shadow-xl" : ""
//             }`}
//         >
//             {sections.map((section) => (
//                 <ScrollLink
//                     key={section.id}
//                     activeClass="font-bold text-orange-600"
//                     to={section.id}
//                     spy={true}
//                     smooth={true}
//                     offset={0}
//                     duration={300}
//                     className={`mx-4 cursor-pointer ${
//                         section.extraClass || ""
//                     }`}
//                 >
//                     {section.name}
//                 </ScrollLink>
//             ))}
//         </nav>
//     );
// };

// export default NavBar;

// const [activeLink, setActiveLink] = useState("home-section");
// const [shadow, setShadow] = useState(false);

// // const handleScroll = () => {
// //     const sections = [
// //         "home-section",
// //         "skills-section",
// //         "portfolio-section",
// //         "about-section",
// //     ];
// //     let currentSection = "home-section";
// //     let smallestDistance = Infinity;

//     sections.forEach((id) => {
//         const section = document.getElementById(id);
//         const distance = Math.abs(window.pageYOffset - section.offsetTop);

//         if (distance < smallestDistance) {
//             smallestDistance = distance;
//             currentSection = id;
//         }
//     });

// setActiveLink(currentSection);
