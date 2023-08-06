"use client"
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

type Props = {};

export default function Profile({}: Props) {
    return (
        <section className="flex flex-col  items-center border-slate-500 border rounded-3xl w-[98%] h-[92%] p-4">
            <p className="self-end pb-6 mb-10">Software Developer</p>
            <Image src={"https://cdnb.artstation.com/p/assets/images/images/002/322/823/large/hicham-habchi-cover2.jpg?1460289817"} alt="Profile Picture" width={200} height={200} className="rounded-3xl mb-5" />
            <h2 className="text-xl">alejandroaperez1994g@gmail.com</h2>
            <h2 className="text-xl mb-5">Base in Barcelona, Spain </h2>
            <p className="text-gray-500 mb-5">© 2022 Alejandro. All Rights Reserved</p>
            <ul className="flex gap-2">
                <li className="border-2 rounded-full border-white p-4 flex align-middle justify-center hover:border-[#27e98b]">
                    <Link href="https://github.com/alejandroaperez1994g" target="_blank">
                    <FontAwesomeIcon className="hover:border-[#27e98b]" size="2xl" icon={faGithub} />
                    </Link>
                </li>
                <li className="border-2 rounded-full border-white p-4 flex align-middle justify-center hover:border-[#27e98b]">
                    <Link href="https://www.linkedin.com/in/alejandroavilaperez/" target="_blank">
                    <FontAwesomeIcon className="hover:fill-[#27e98b]" size="2xl" icon={faLinkedin}  />
                    </Link>
                </li>
            </ul>

        </section>
    );
};
