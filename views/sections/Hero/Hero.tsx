import Image from "next/image";
import Link from "next/link";
import {faHome, faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Heading from "@/views/commons/heading/Heading";

const Hero = () => {
    return (
        <section className="flex flex-col items-center rounded-3xl border-slate-500 p-4 w-[98%] h-[90vh]">
            <Heading text={"INTRODUCE"} icon={<FontAwesomeIcon icon={faHome}/>}/>
            <div>
                <h1 className="mb-7 text-6xl">Hi, I am <span className="text-[#27e98b]">Alejandro</span>, Software
                    Developer</h1>
                <p className="mb-7 text-gray-500">I design and code beautifully simple things and i love what i do. Just
                    simple like that!</p>
                <Link href={"#"} className="relative inline-block rounded-full border p-3">
                    <Image src={"/assets/round-text.png"} alt="rounded-text" width={140} height={140}
                           className="animate-spin-slow"/>
                    <FontAwesomeIcon icon={faLongArrowAltDown} size="2xl"
                                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"/>
                </Link>
                <div className="mt-8 flex justify-between gap-2">
                    <div className="text-center">
                        <span className="text-2xl font-bold">5+</span>
                        <p>YEARS OF</p>
                        <p>EXPERIENCE</p>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl font-bold">20+</span>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;
