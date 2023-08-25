import Heading from "@/views/commons/heading/Heading";
import SkillCard from "@/views/commons/skill_card/SkillCard";
import skills from "@/views/sections/Skills/data";
import shapes from "@/public/assets/icons/shapes.svg";
import Image from "next/image";

const Skills = () => {
    return (
        <section id="skills" className="flex flex-col rounded-3xl border-slate-500 p-4 w-[98%]">
            <Heading text={"MY SKILLS"} icon={<Image priority src={shapes} alt={"shapesIcon"}/>}/>
            <h1 className="mb-10 text-4xl">
                My <span className="text-[#27e98b]">Advantages</span>
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    skills.map((skill, index) => (
                        <SkillCard key={index} name={skill.name} image={skill.image} percentage={skill.percentage}/>
                    ))
                }
            </div>
        </section>
    );
};
export default Skills;
