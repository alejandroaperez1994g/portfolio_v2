import Heading from "@/views/commons/heading/Heading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <section className="flex flex-col items-center rounded-3xl border-slate-500 p-4 w-[98%] h-[60vh]">
            <Heading text={"ABOUT"} icon={<FontAwesomeIcon icon={faUser}/>}/>
            <div>
                <h1 className="text-4xl mb-10 ">
                    Every great design begin with an even <span className="text-[#27e98b]">better story</span>
                </h1>
                <p>
                    Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for
                    agencies, consulted for startups, and collaborated with talented people to create digital products
                    for both business and consumer use. I'm quietly confident, naturally curious, and perpetually
                    working on improving my chopsone design problem at a time.
                </p>
            </div>
        </section>
    );
};
export default About;
