"use client";
import Hero from "@/views/sections/Hero/Hero";
import About from "@/views/sections/About/About";
import Resume from "@/views/sections/Resume/Resume";
import Skills from "@/views/sections/Skills/Skills";
import Projects from "@/views/sections/Projects/Projects";
import Contact from "@/views/sections/Contact/Contact";
import Profile from "@/views/sections/Profile/Profile";

export default function Home() {
    return (
        <main className="flex m-auto lg:justify-center">
            <div
                className="flex lg:max-w-[770px]  flex-col items-center gap-14 lg:gap-36 pt-6 align-middle bg-[#1f1f1f] ">
                <Profile contained={true}/>
                <Hero/>
                <About/>
                <Resume/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </main>
    )
}

