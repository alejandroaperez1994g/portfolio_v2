type Props = {
    date_text: string,
    last?: boolean,
    experiences: {
        position: string,
        company: string
    }[],
};
const Experience = ({date_text, experiences, last}: Props) => {
    return (
        <div
            className={`relative flex flex-col w-full border-l border-gray-500 ${!last ? "pb-10" : "pb-0"}  group`}>
            <div className="absolute h-[12px] w-[12px] -left-[0.4rem] top-0">
                <div className="group-hover:bg-[#28e98c] w-full h-full bg-gray-500 rounded-full"></div>
            </div>
            <div className="flex flex-col pl-8">
                <span className="group-hover:text-[#28e98c] text-gray-500 -mt-[5px] mb-6">{date_text}</span>

                {
                    experiences.map(({position, company}, index) => {
                        return (
                            <div key={index} className={`flex flex-col ${!last ? "mb-4" : "mb-0"}`}>
                                <h4 className="text-3xl mb-3">{position}</h4>
                                <p className="text-gray-500">{company}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};
export default Experience;
