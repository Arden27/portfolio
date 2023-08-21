import OtherSkillsItem from "./otherSkillsItem";

const OtherSkillsGroup = ({ title, skills }) => {
    return (
        <div className="rounded-2xl h-full border-2 border-black flex flex-col items-center">
            <p className="font-bold">{title}</p>
            <div className="px-2 h-full w-full flex items-center justify-around">
                {skills.map((skill, index) => (
                    <OtherSkillsItem key={index} {...skill} />
                ))}
            </div>
        </div>
    );
}

export default OtherSkillsGroup;
