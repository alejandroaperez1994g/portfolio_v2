"use client"
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

type IProfileProps = {
    contained?: boolean,
};

export default function Profile({contained}: IProfileProps) {
    return (
        <section id="profile"
                 className={`${contained ? "lg:hidden" : "hidden 2xl:flex max-h-screen mt-[40%]"} mb-14 flex flex-1 flex-col items-center rounded-3xl border border-slate-500 p-4 w-[98%] h-[90%]`}>
            <p className={`${!contained && "pl-[30%] "}mb-10 self-end pb-6`}>Software Developer</p>
            <Image
                src={"https://res.cloudinary.com/ddftiga06/image/upload/v1693437818/portfolio/profile-picture/6186_wv5aay.jpg"}
                alt="Profile Picture" width={200} height={200}
                className={`rounded-3xl mb-[4rem]`}/>
            <h2 className={`text-xl`}>alejandroaperez1994g@gmail.com</h2>
            <h2 className={`mb-10 text-xl`}>Base in Barcelona, Spain </h2>
            <p className={`mb-10 text-gray-500`}>© 2022 Alejandro. All Rights Reserved</p>
            <ul className={` flex gap-2`}>
                <Link href="https://github.com/alejandroaperez1994g" target="_blank">
                    <li className="border-2 rounded-full border-white p-2 w-12 h-12 flex items-center align-middle justify-center hover:border-[#27e98b] hover:text-[#27e98b] group">
                        <FontAwesomeIcon className="group-hover:text-[#27e98b]" icon={faGithub}/>
                    </li>
                </Link>
                <Link href="https://www.linkedin.com/in/alejandroavilaperez/" target="_blank">
                    <li className="border-2 rounded-full border-white p-2 w-12 h-12 flex items-center align-middle justify-center hover:border-[#27e98b] hover:text-[#27e98b] group">
                        <FontAwesomeIcon className="group-hover:text-[#27e98b]" icon={faLinkedin}/>
                    </li>
                </Link>

            </ul>

        </section>
    );
};
