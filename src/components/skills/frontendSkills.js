import SkillCard from './skillCard';

const skills = [
    { src: "/img/skills/html.png", alt: "HTML icon", name: "HTML" },
    { src: "/img/skills/css.png", alt: "CSS icon", name: "CSS" },
    { src: "/img/skills/tailwind.png", alt: "Tailwind icon", name: "Tailwind" },
    { src: "/img/skills/js.png", alt: "JavaScript icon", name: "JavaScript" },
    { src: "/img/skills/react.png", alt: "ReactJS icon", name: "ReactJS" },
    { src: "/img/skills/next.png", alt: "NextJS icon", name: "NextJS" },
];

const FrontendSkills = () => {
    return (
        <div 
            className="max-sm:pb-4 max-sm:px-1 flex flex-col max-sm:h-[93%] max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center sm:col-span-1 sm:row-span-3 md:col-span-1 md:row-span-6"
            id="frontend-skills"
        >
            <h2 className="max-sm:text-clamp_sm_skills_category_name border rounded-xl p-1 bg-gray-100/50 border-black md:mb-2 text-center text-xl">Frontend</h2>
            <div className="grid h-full w-full max-sm:grid-cols-2 max-sm:grid-rows-3 grid-cols-3 grid-rows-2 gap-1 rounded-2xl p-2">
                {skills.map((skill, index) => (
                    <SkillCard key={index} imageSrc={skill.src} altText={skill.alt} skillName={skill.name} />
                ))}
            </div>
        </div>
    );
}

export default FrontendSkills;
