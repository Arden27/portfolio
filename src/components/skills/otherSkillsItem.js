import Image from "next/image";
import { useState, useRef, useEffect } from 'react';

const OtherSkillsItem = ({ src, alt, name }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
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
        <div className="flex flex-col h-full w-1/3 items-center justify-center">
            <div 
                ref={imgRef}
                className={`relative transition duration-[1500ms] aspect-square block items-center justify-center max-h-20 max-sm:h-2/2 h-2/3 rounded-2xl ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
                <Image src={src} alt={alt} fill sizes="20vw" />
            </div>
            <p className="text-gray-700">{name}</p>
        </div>
    );
}

export default OtherSkillsItem;
