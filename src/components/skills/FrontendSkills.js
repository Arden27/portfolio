import SkillCard from "./TSkillCard";

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
      className="flex flex-col sm:col-span-1 sm:row-span-3 md:col-span-1 md:row-span-6 max-sm:h-[93%] max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center max-sm:px-1 max-sm:pb-4"
      id="frontend-skills"
    >
      <h2 className="rounded-xl border border-primary bg-gray-100/50 p-1 text-center text-xl text-gray-700 md:mb-2 max-sm:text-clamp_sm_skills_category_name">
        Frontend
      </h2>
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1 rounded-2xl p-2 max-sm:grid-cols-2 max-sm:grid-rows-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            imageSrc={skill.src}
            altText={skill.alt}
            skillName={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default FrontendSkills;
