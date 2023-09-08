// SkillCard.js
import Image from "next/image";

const SkillCard = ({ imageSrc, altText, skillName }) => {
    return (
        <div className="bg-gray-100/50 rounded-2xl border  border-black flex flex-col short:flex-row items-center justify-center">
            <div className="relative aspect-square  block items-center justify-center max-h-20 h-2/3 rounded-2xl">
                <Image src={imageSrc} alt={altText} fill sizes="20vw" />
            </div>
            <p className="">{skillName}</p>
        </div>
    );
}

export default SkillCard;
