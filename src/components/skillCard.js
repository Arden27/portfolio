// SkillCard.js
import Image from "next/image";

const SkillCard = ({ imageSrc, altText, skillName }) => {
    return (
        <div className="rounded-2xl border-2 drop-shadow-lg border-black flex flex-col short: short:flex-row items-center justify-center">
            <div className="relative bg-indigo-300 aspect-square drop-shadow-lg block items-center justify-center max-h-20 h-2/3 rounded-2xl">
                {/* <Image src={imageSrc} alt={altText} fill /> */}
            </div>
            <p>{skillName}</p>
        </div>
    );
}

export default SkillCard;
