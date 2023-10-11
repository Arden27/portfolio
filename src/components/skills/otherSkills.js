import OtherSkillsGroup from "./OtherSkillsGroup";

const skillGroups = [
  {
    title: "Enhancements",
    skills: [
      {
        src: "/img/skills/typescript.png",
        alt: "TypeScript icon",
        name: "TypeScript",
      },
      { src: "/img/skills/redux.png", alt: "Redux icon", name: "Redux" },
      {
        src: "/img/skills/responsive.png",
        alt: "Responsive design icon",
        name: "Responsive",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { src: "/img/skills/git.png", alt: "Git icon", name: "Git" },
      { src: "/img/skills/vscode.png", alt: "VSCode icon", name: "VSCode" },
      { src: "/img/skills/linux.png", alt: "Linux icon", name: "Linux" },
    ],
  },
  {
    title: "Soft",
    skills: [
      {
        src: "/img/skills/punctuation.png",
        alt: "Punctuation icon",
        name: "Punctual",
      },
      {
        src: "/img/skills/creativity.png",
        alt: "Creativity icon",
        name: "Creative",
      },
      {
        src: "/img/skills/communication.png",
        alt: "Communication icon",
        name: "Communicative",
      },
    ],
  },
  // ... you can add more groups as needed
];

const OtherSkills = () => {
  return (
    <div
      className="flex flex-col sm:col-span-1 sm:row-span-4 md:col-span-2 max-sm:h-[93%] max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center max-sm:px-1 max-sm:pb-4"
      id="other-skills"
    >
      <h2 className="rounded-xl border border-primary bg-gray-100/50 p-1 text-center text-xl text-gray-700 md:mb-2 max-sm:text-clamp_sm_skills_category_name">
        Other
      </h2>
      <div className="grid h-full w-full gap-1 rounded-2xl p-2 md:grid-cols-3 max-sm:grid-rows-3">
        {skillGroups.map((group, index) => (
          <OtherSkillsGroup key={index} {...group} />
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
