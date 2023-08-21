import Image from "next/image";

const OtherSkillsItem = ({ src, alt, name }) => {
    return (
        <div className="flex flex-col h-full items-center justify-center">
            <div className="aspect-square flex items-center justify-center max-h-20 h-2/3 rounded-2xl">
                <Image src={src} alt={alt} width={200} height={200} />
            </div>
            <p>{name}</p>
        </div>
    );
}

export default OtherSkillsItem;
