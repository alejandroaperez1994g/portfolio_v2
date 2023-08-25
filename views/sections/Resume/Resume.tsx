import Heading from '@/views/commons/heading/Heading';
import Experience from '@/views/commons/experience/Experience';
import Image from "next/image";
import briefcase from "@/public/assets/icons/briefcase.svg";

const education_experience = [
    {
        date_text: '2022 - Present',
        experiences: [
            {
                position: 'Software Developer',
                company: 'Assembler Institute of Technology',
            },
            {
                position: 'Full stack Software Developer',
                company: 'Assembler Institute of Technology',
            },
        ],
    },
    {
        date_text: '2018 - 2021',
        experiences: [
            {
                position: 'Backend Developer',
                company: 'Desoft',
            },
            {
                position: 'Frontend Developer',
                company: 'Vacancy Rewards',
            },
        ],
    },
    {
        date_text: '2013 - 2018',
        last: true,
        experiences: [
            {
                position: 'Bachelor Degree in Computer Science',
                company: 'Las Tunas University',
            },
        ],
    },
];

const Resume = () => {
    return (
        <section id="resume" className="flex flex-col  rounded-3xl border-slate-500 p-4 w-[98%] ">
            <Heading
                text="RESUME"
                icon={<Image priority src={briefcase} alt={"briefcaseIcon"}/>}
            />

            <h1 className="mb-10 text-4xl">
                Education & <span className="text-[#27e98b]">Experience</span>
            </h1>
            {education_experience.map(({date_text, experiences, last}, index) => (
                <Experience
                    key={index}
                    date_text={date_text}
                    experiences={experiences}
                    last={last}
                />
            ))}
        </section>
    );
};
export default Resume;
