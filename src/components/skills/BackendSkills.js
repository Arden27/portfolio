import SkillCard from "./SkillCard";

const skills = [
  { src: "/img/skills/python.png", alt: "Python icon", name: "Python" },
  { src: "/img/skills/django.png", alt: "Django icon", name: "Django" },
  { src: "/img/skills/pytorch.png", alt: "PyTorch icon", name: "PyTorch" },
  { src: "/img/skills/mongodb.png", alt: "MongoDB icon", name: "MongoDB" },
  { src: "/img/skills/mysql.png", alt: "MySQL icon", name: "MySQL" },
  { src: "/img/skills/node.png", alt: "NodeJS icon", name: "NodeJS" },
];

const BackendSkills = () => {
  return (
    <div
      className="flex flex-col sm:col-span-1 sm:row-span-3 md:col-span-1 md:row-span-6 max-sm:h-[93%] max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center max-sm:px-1 max-sm:pb-4"
      id="backend-skills"
    >
      <h2 className="rounded-xl border border-primary bg-gray-100/50 p-1 text-center text-xl text-gray-700 md:mb-2 max-sm:text-clamp_sm_skills_category_name">
        Backend
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

export default BackendSkills;
