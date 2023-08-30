import Link from "next/link";

export interface IProjectCardProps {
    title: string,
    image: string,
    link: string,
    technologies: string[],
}

const ProjectCard = ({title, image, link, technologies}: IProjectCardProps) => {
    return (
        <article className="mb-6 w-full lg:w-[47%] group">
            <div
                className={`flex border flex-wrap content-end items-end p-3 border-slate-500 rounded-3xl w-full  bg-cover bg-no-repeat bg-center h-[370px] mb-3`}
                style={{backgroundImage: `url(${image})`}}>
                {
                    technologies.map((technology, index) => (
                        <span key={index}
                              className="h-max mr-2 rounded-full bg-white mb-1 px-4 py-2 text-xs text-black transition ease-in-out duration-400 group-hover:bg-[#1f1f1f] group-hover:text-white">{technology}</span>
                    ))
                }
            </div>
            <Link href={link} target="_blank">
                <h4 className="text-2xl transition ease-in-out duration-600 group-hover:underline">{title}</h4>
            </Link>

        </article>
    );
};
export default ProjectCard;
