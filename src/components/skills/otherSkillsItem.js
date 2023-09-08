import Image from "next/image";

const OtherSkillsItem = ({ src, alt, name }) => {
    return (
        <div className="flex flex-col very-short:flex-row very-short:gap-1 h-full w-1/3  items-center justify-center">
            <div className="relative  aspect-square  block items-center justify-center max-h-20 max-sm:h-1/2 h-2/3 rounded-2xl">
                <Image src={src} alt={alt} fill sizes="20vw" />
            </div>
            <p className="very-short:text-xs">{name}</p>
        </div>
    );
}

export default OtherSkillsItem;
