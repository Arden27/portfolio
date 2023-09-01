import Image from "next/image";

const OtherSkillsItem = ({ src, alt, name }) => {
    return (
        <div className="flex flex-col h-full w-1/3 drop-shadow-lg items-center justify-center">
            <div className="relative bg-violet-300 aspect-square drop-shadow-lg block items-center justify-center max-h-20 max-sm:h-1/2 h-2/3 rounded-2xl">
                {/* <Image src={src} alt={alt} fill /> */}
            </div>
            <p>{name}</p>
        </div>
    );
}

export default OtherSkillsItem;
