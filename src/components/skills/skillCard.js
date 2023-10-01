import Image from "next/image";
import { useState, useRef, useEffect } from 'react';

const SkillCard = ({ imageSrc, altText, skillName }) => {
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
        <div className="bg-gray-100/50 rounded-2xl border border-primary flex flex-col short:flex-row items-center justify-center">
            <div 
                ref={imgRef}
                className={`relative transition duration-[1500ms] aspect-square block items-center justify-center max-h-20 h-2/3 rounded-2xl ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
                <Image src={imageSrc} alt={altText} fill sizes="20vw" />
            </div>
            <p className="text-gray-700">{skillName}</p>
        </div>
    );
}

export default SkillCard;
