import Profile from "@/views/sections/Profile/Profile";
import Hero from "@/views/sections/Hero/Hero";
import About from "@/views/sections/About/About";
import Resume from "@/views/sections/Resume/Resume";

export default function Home() {
    return (
        <main className="flex flex-col items-center gap-4 bg-black pt-6 align-middle">
            <Profile/>
            <Hero/>
            <About/>
            <Resume/>
        </main>
    )
}

