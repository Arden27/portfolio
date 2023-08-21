import SkillCard from './skillCard';

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
            className="max-sm:pb-4 max-sm:px-1 flex flex-col max-sm:h-full max-sm:w-full max-sm:flex-shrink-0 max-sm:snap-center sm:col-span-1 sm:row-span-3 md:col-span-1 md:row-span-6"
            id="backend-skills"
        >
            <h2 className="mb-2 text-center text-xl font-bold">Frontend</h2>
            <div className="grid h-full w-full max-sm:grid-cols-2 max-sm:grid-rows-3 grid-cols-3 grid-rows-2 gap-2 rounded-2xl p-2">
                {skills.map((skill, index) => (
                    <SkillCard key={index} imageSrc={skill.src} altText={skill.alt} skillName={skill.name} />
                ))}
            </div>
        </div>
    );
}

export default BackendSkills;
