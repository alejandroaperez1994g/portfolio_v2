import Heading from "@/views/commons/heading/Heading";
import ContactForm from "@/views/commons/form/ContactForm.";
import envelopeIcon from "@/public/assets/icons/envelope.svg";
import Image from "next/image";

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col rounded-3xl border-slate-500 p-4 w-[98%]">
            <Heading text={"CONTACT"} icon={<Image priority src={envelopeIcon} alt="envelopeIcon"/>}/>
            <h4 className="mb-10 text-4xl">Let's Work<span className="text-[#27e98b]">Together!</span></h4>
            <h4 className="mb-10 text-2xl">alejandroaperez1994g@gmail.com</h4>
            <ContactForm/>
        </section>

    );
};
export default Contact;
