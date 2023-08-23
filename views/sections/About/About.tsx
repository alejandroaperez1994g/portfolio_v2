import Heading from '@/views/commons/heading/Heading';
import userIcon from '@/public/assets/icons/user.svg';
import Image from 'next/image';

const About = () => {
    return (
        <section className="flex flex-col items-center rounded-3xl border-slate-500 p-4 w-[98%] ">
            <Heading
                text={'ABOUT'}
                icon={<Image priority src={userIcon} alt="userIcon"/>}
            />
            <div>
                <h1 className="text-4xl mb-10 ">
                    Every great design begin with an even{' '}
                    <span className="text-[#27e98b]">better story</span>
                </h1>
                <p className="text-gray-500 lg:leading-8 lg:max-w-xl ">
                    I'm an Informatics Engineer with 5 years of experience in web development. I've worked with
                    companies like Desoft, delivering end-to-end systems and apps. My passion for tech keeps me learning
                    and updated on industry best practices. With a Master's in Software Development from Barcelona, I'm
                    skilled in HTML, CSS, JS, React, Node.js, Laravel, Express.js, MySQL, PostgreSQL, MongoDB, and more,
                    with expertise in REST APIs, and tools like Jest and Git. I've contributed to impactful projects,
                    like Miner application, which expanded the company's offerings and portfolio. I'm a dedicated
                    Full-stack Developer ready to bring expertise to your team.
                </p>
            </div>
        </section>
    );
};
export default About;
