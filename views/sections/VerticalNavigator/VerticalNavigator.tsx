import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCubes, faEnvelope, faHome, faShapes, faUser} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {onPress} from "@/helpers/navigation";

const VerticalNavigator = () => {
    return (
        <ul className="hidden 2xl:flex max-h-screen mt-[350px] mr-9 px-4 py-8 2xl:flex-col gap-5 border border-gray-500 rounded-3xl ">
            <li className="group hover:text-[#27e98b] transition-colors duration-300 cursor-pointer">
                <Link onClick={(e) => onPress(e)} href={"#hero"}>
                    <FontAwesomeIcon icon={faHome} className="text-gray-500 group-hover:text-[#27e98b]"/>
                </Link>
            </li>
            <li className="group hover:text-[#27e98b] transition-colors duration-300 cursor-pointer">
                <Link onClick={(e) => onPress(e)} href={"#about"}>
                    <FontAwesomeIcon icon={faUser} className="text-gray-500 group-hover:text-[#27e98b]"/>
                </Link>
            </li>
            <li className="group hover:text-[#27e98b] transition-colors duration-300 cursor-pointer">
                <Link onClick={(e) => onPress(e)} href={"#resume"}>
                    <FontAwesomeIcon icon={faBriefcase} className="text-gray-500 group-hover:text-[#27e98b]"/>
                </Link>
            </li>
            <li className="group hover:text-[#27e98b] transition-colors duration-300 cursor-pointer">
                <Link onClick={(e) => onPress(e)} href={"#skills"}>
                    <FontAwesomeIcon icon={faShapes} className="text-gray-500 group-hover:text-[#27e98b]"/>
                </Link>
            </li>
            <li className="group hover:text-[#27e98b] transition-colors duration-300 cursor-pointer">
                <Link onClick={(e) => onPress(e)} href={"#portfolio"}>
                    <FontAwesomeIcon icon={faCubes} className="text-gray-500 group-hover:text-[#27e98b]"/>
                </Link>
            </li>
            <li className="group hover:text-[#27e98b] transition-colors duration-300 cursor-pointer">
                <Link onClick={(e) => onPress(e)} href={"#contact"}>
                    <FontAwesomeIcon icon={faEnvelope} className={`text-gray-500 group-hover:text-[#27e98b]`}/>
                </Link>
            </li>
        </ul>

    );
};
export default VerticalNavigator;
