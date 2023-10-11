import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const SkillCard = ({ imageSrc, altText, skillName }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-primary bg-gray-100/50 short:flex-row">
      <div
        ref={imgRef}
        className={`relative block aspect-square h-2/3 max-h-20 items-center justify-center rounded-2xl transition duration-[1500ms] ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <Image src={imageSrc} alt={altText} fill sizes="20vw" />
      </div>
      <p className="text-gray-700">{skillName}</p>
    </div>
  );
};

export default SkillCard;
