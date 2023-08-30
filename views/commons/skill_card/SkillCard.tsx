import Image from "next/image";

export interface ISkillCard {
    name: string,
    image: string,
    percent: string
}

const SkillCard = ({name, image, percent}: ISkillCard) => {
    return (
        <div className="flex flex-col items-center group mb-6">
            <div
                className="flex flex-col items-center border border-gray-500 group-hover:border-[#27e98b] py-7 px-5 lg:p-6 rounded-[85px]">
                <Image className="lg:w-[80px] lg:h-[80px]" src={image} alt={name} width={90} height={90}/>
                <h4 className="text-[#27e98b] text-2xl  mt-1.5">
                    {percent}%
                </h4>
            </div>
            <p>{name}</p>
        </div>
    );
};
export default SkillCard;
