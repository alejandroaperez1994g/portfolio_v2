import Image from 'next/image';
import Link from 'next/link';
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Heading from '@/views/commons/heading/Heading';
import home from '@/public/assets/icons/home.svg';
import {getYearsOfDevelopment} from "@/helpers/date";

const Hero = () => {
    return (
        <section id="hero" className="flex flex-col items-center rounded-3xl border-slate-500 p-4 w-[98%]">
            <Heading
                text={'INTRODUCE'}
                icon={<Image priority src={home} alt="homeIcon"/>}
            />
            <div className="lg:flex lg:flex-col">
                <h1 className="mb-7 text-6xl lg:text-[78px]">
                    Hi, I am <span className="text-[#27e98b]">Alejandro</span>, Software
                    Developer
                </h1>
                <p className="mb-7 text-gray-500 lg:max-w-[480px]">
                    I design and code beautifully simple things and i love what i do. Just
                    simple like that!
                </p>
                <Link
                    href={'#portfolio'}
                    className="relative inline-block rounded-full border p-3 w-[140px] h-[140px] lg:self-end"
                >
                    <Image
                        src={'/assets/round-text.png'}
                        alt="rounded-text"
                        width={140}
                        height={140}
                        className="animate-spin-slow"
                    />
                    <FontAwesomeIcon
                        icon={faLongArrowAltDown} size="xl"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white w-5"
                    />
                </Link>
                <div className="mt-8 flex justify-between lg:justify-normal lg:gap-16 gap-2">
                    <div className="text-center">
            <span className="text-5xl lg:text-[72px] lg:mb-4 text-[#27e98b]">
              {getYearsOfDevelopment()}+
            </span>
                        <p className="text-gray-500">YEARS OF</p>
                        <p className="text-gray-500">EXPERIENCE</p>
                    </div>
                    <div className="text-center">
            <span className="text-5xl  lg:text-[72px] lg:mb-4 text-[#27e98b]">
              20+
            </span>
                        <p className="text-gray-500">PROJECTS COMPLETED</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
