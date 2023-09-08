import Image from "next/image";

const OtherSkillsItem = ({ src, alt, name }) => {
    return (
        <div className="flex flex-col very-short:flex-row very-short:gap-2 h-full w-1/3  items-center justify-center">
            <div className="relative  aspect-square  block items-center justify-center max-h-20 max-sm:h-1/2 h-2/3 rounded-2xl">
                <Image src={src} alt={alt} fill sizes="20vw" />
            </div>
            <p>{name}</p>
        </div>
    );
}

export default OtherSkillsItem;
