import Heading from '@/views/commons/heading/Heading';
import Experience, {IExperienceProps as Experiences} from '@/views/commons/experience/Experience';
import Image from "next/image";
import briefcase from "@/public/assets/icons/briefcase.svg";
import {useEffect, useState} from "react";
import {api} from "@/services/api";


const Resume = () => {
    const [experiences, setExperiences] = useState<Experiences[]>([])

    useEffect(() => {
        function updateSkills() {
            api.journey().then((experiences) => {
                setExperiences(experiences)
            })
        }

        updateSkills()
    }, []);
    return (
        <section id="resume" className="flex flex-col  rounded-3xl border-slate-500 p-4 w-[98%] ">
            <Heading
                text="RESUME"
                icon={<Image priority src={briefcase} alt={"briefcaseIcon"}/>}
            />

            <h1 className="mb-10 text-4xl">
                Education & <span className="text-[#27e98b]">Experience</span>
            </h1>
            {experiences.map(({date_text, experiences, last}, index) => (
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
