import OtherSkillsItem from "./otherSkillsItem";

const OtherSkillsGroup = ({ title, skills }) => {
    return (
        <div className="bg-gray-100/50 rounded-2xl h-full border border-black flex flex-col items-center">
            <p className="text-lg">{title}</p>
            <div className="px-2 h-full w-full flex items-center justify-around">
                {skills.map((skill, index) => (
                    <OtherSkillsItem key={index} {...skill} />
                ))}
            </div>
        </div>
    );
}

export default OtherSkillsGroup;
