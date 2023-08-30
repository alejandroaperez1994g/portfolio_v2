import Heading from "@/views/commons/heading/Heading";
import ProjectCard, {IProjectCardProps as Projects} from "@/views/commons/project_card/ProjectCard";
import cubes from "@/public/assets/icons/cubes.svg";
import Image from "next/image";
import {useEffect, useState} from "react";
import {api} from "@/services/api";

const Projects = () => {
    const [projects, setProjects] = useState<Projects[]>([])

    useEffect(() => {
        function updateSkills() {
            api.projects().then((projects) => {
                setProjects(projects)
            })
        }

        updateSkills()
    }, []);
    return (
        <section id="portfolio" className="flex flex-col rounded-3xl border-slate-500 p-4 w-[98%]">
            <Heading text={"PORTFOLIO"} icon={<Image priority src={cubes} alt="cubesIcon"/>}/>
            <h1 className="mb-10 text-4xl">Featured <span className="text-[#27e98b]">Projects</span></h1>
            <div className="flex flex-col lg:flex-wrap lg:flex-row lg:justify-around gap-8">
                {
                    projects.map(({title, technologies, link, image}, index) => (
                        <ProjectCard key={index} title={title} image={image} link={link} technologies={technologies}
                        />
                    ))
                }
            </div>
        </section>
    );
};
export default Projects;
