"use client"
import {useForm} from '@formspree/react';
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "@/public/assets/email_animation.json";
import {useRef} from "react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xleybndj");
    const emailRef = useRef<LottieRefCurrentProps>(null)
    if (state.succeeded) {
        return <Lottie onComplete={() => {
            emailRef.current?.stop()
        }} animationData={animationData} loop={false}/>

    }
    return (
        <form className="flex flex-col mb-10" onSubmit={handleSubmit}>
            <label htmlFor="full_name">FULL NAME <span className=" text-red-700">*</span> </label>
            <input className="mb-6 mt-2 border-none bg-transparent text-base" name="full_name" id="full_name"
                   type="text"
                   placeholder="Your Full Name"
                   required/>

            <label htmlFor="email">EMAIL <span className="text-red-700">*</span> </label>
            <input className="mb-6 mt-2 border-none bg-transparent text-base" id="email" name="email" type="email"
                   placeholder="Your email address" required/>

            <label htmlFor="message">MESSAGE <span className="text-red-700">*</span> </label>
            <textarea className="mb-6 mt-2 border-none bg-transparent text-base" id="message" name="message" required
                      placeholder="Write your message here ..."/>
            <button className="bg-[#27e98b] px-14 py-3 rounded-3xl text-black w-max text-base" type="submit"
                    disabled={state.submitting}>SEND
                MESSAGE
            </button>
        </form>
    );
};
export default ContactForm;
