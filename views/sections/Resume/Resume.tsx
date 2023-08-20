import Heading from "@/views/commons/heading/Heading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import Experience from "@/views/commons/experience/Experience";

const education_experience = [
    {
        date_text: "2022 - Present",
        experiences: [
            {
                position: "Software Developer",
                company: "Assembler Institute of Technology"
            },
            {
                position: "Full stack Software Developer",
                company: "Assembler Institute of Technology"
            }
        ]
    },
    {
        date_text: "2018 - 2021",
        experiences: [
            {
                position: "Backend Developer",
                company: "Desoft"
            },
            {
                position: "Frontend Developer",
                company: "Vacancy Rewards"
            }
        ]
    },
    {
        date_text: "2013 - 2018",
        last: true,
        experiences: [
            {
                position: "Bachelor Degree in Computer Science",
                company: "Las Tunas University",

            }
        ]
    }
]

const Resume = () => {
    return (
        <section className="flex flex-col items-center rounded-3xl border-slate-500 p-4 w-[98%] ">
            <Heading text={"RESUME"} icon={<FontAwesomeIcon icon={faBriefcase}/>}/>
            <h1 className="mb-10 text-4xl">
                Education & <span className="text-[#27e98b]">Experience</span>
            </h1>
            {
                education_experience.map(({date_text, experiences, last}) => (
                    <Experience date_text={date_text} experiences={experiences} last={last}/>
                ))
            }
        </section>
    );
};
export default Resume;
