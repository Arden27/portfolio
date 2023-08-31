// SkillCard.js
import Image from "next/image";

const SkillCard = ({ imageSrc, altText, skillName }) => {
    return (
        <div className="rounded-2xl border-2 drop-shadow-lg border-black flex flex-col items-center justify-center">
            <div className="aspect-square drop-shadow-lg flex items-center justify-center max-h-20 h-2/3 rounded-2xl">
                <Image src={imageSrc} alt={altText} width={200} height={200} />
            </div>
            <p>{skillName}</p>
        </div>
    );
}

export default SkillCard;
