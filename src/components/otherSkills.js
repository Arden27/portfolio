import OtherSkillsGroup from "./otherSkillsGroup";

const skillGroups = [
    {
        title: 'Enhancements',
        skills: [
            { src: "/img/skills/typescript.png", alt: "TypeScript icon", name: "TypeScript" },
            { src: "/img/skills/redux.png", alt: "Redux icon", name: "Redux" },
            { src: "/img/skills/responsive.png", alt: "Responsive design icon", name: "Responsive" }
        ]
    },
    {
        title: 'Tools',
        skills: [
            { src: "/img/skills/git.png", alt: "Git icon", name: "Gittatata" },
            { src: "/img/skills/vscode.png", alt: "VSCode icon", name: "VSCode" },
            { src: "/img/skills/linux.png", alt: "Linux icon", name: "Linux" }
        ]
    },
    {
        title: 'Soft',
        skills: [
            { src: "/img/skills/git.png", alt: "Git icon", name: "Git" },
            { src: "/img/skills/creativity.png", alt: "Creativity icon", name: "Creativity" },
            { src: "/img/skills/linux.png", alt: "Linux icon", name: "Linux" }
        ]
    },
    // ... you can add more groups as needed
];

const OtherSkills = () => {
    return (
        <div 
            className="max-sm:pb-4 max-sm:px-1 flex flex-col max-sm:h-[93%] max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center sm:col-span-1 sm:row-span-4 md:col-span-2"
            id="other-skills"
        >
            <h2 className="border rounded-xl p-1 bg-gray-100/50 border-black md:mb-2 text-center text-xl">Other</h2>
            <div className="grid h-full w-full gap-1 rounded-2xl p-2 max-sm:grid-rows-3 md:grid-cols-3">
                {skillGroups.map((group, index) => (
                    <OtherSkillsGroup key={index} {...group} />
                ))}
            </div>
        </div>
    );
}

export default OtherSkills;
