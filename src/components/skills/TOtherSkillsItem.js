import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const OtherSkillsItem = ({ src, alt, name }) => {
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
    <div className="flex h-full w-1/3 flex-col items-center justify-center">
      <div
        ref={imgRef}
        className={`max-sm:h-2/2 relative block aspect-square h-2/3 max-h-20 items-center justify-center rounded-2xl transition duration-[1500ms] ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <Image src={src} alt={alt} fill sizes="20vw" />
      </div>
      <p className="text-gray-700">{name}</p>
    </div>
  );
};

export default OtherSkillsItem;
