import OtherSkillsItem from "./OtherSkillsItem";

const OtherSkillsGroup = ({ title, skills }) => {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-primary bg-gray-100/50">
      <p className="text-lg text-gray-700">{title}</p>
      <div className="flex h-full w-full items-center justify-around px-2">
        {skills.map((skill, index) => (
          <OtherSkillsItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default OtherSkillsGroup;
