import {JSX} from 'react';

type Props = {
    text: string;
    icon?: JSX.Element;
};
const Heading = ({text, icon}: Props) => {
    return (
        <h5 className="mb-6 lg:mb-8 self-start flex items-center gap-2  rounded-3xl border border-gray-500 px-3 opacity-100 py-1.5 text-[0.8rem] ">
            {icon}
            {text}
        </h5>
    );
};
export default Heading;
