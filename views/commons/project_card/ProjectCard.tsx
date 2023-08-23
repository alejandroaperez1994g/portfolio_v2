type IProjectCardProps = {
    title: string,
    image: string,
    link: string,
    technologies: string[],
};
const ProjectCard = ({title, image, link, technologies}: IProjectCardProps) => {
    return (
        <article className="mb-6 w-full lg:w-[47%] group">
            <div
                className={`flex border items-end p-3 border-slate-500 rounded-3xl w-full  bg-cover bg-no-repeat bg-center h-[370px] mb-3`}
                style={{backgroundImage: "url(https://www.wpriverthemes.com/HTML/drake/assets/images/portfolio1.jpg)"}}>
                {
                    technologies.map((technology, index) => (
                        <span key={index}
                              className="h-max mr-2 rounded-full bg-white px-4 py-2 text-xs text-black transition ease-in-out duration-400 group-hover:bg-[#1f1f1f] group-hover:text-white">{technology}</span>
                    ))
                }
            </div>
            <h4 className="text-2xl transition ease-in-out duration-600 group-hover:underline">{title}</h4>


        </article>
    );
};
export default ProjectCard;
