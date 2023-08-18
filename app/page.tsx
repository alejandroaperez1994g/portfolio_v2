import Profile from "@/views/sections/Profile/Profile";
import Hero from "@/views/sections/Hero/Hero";

export default function Home() {
    return (
        <main className="flex flex-col  align-middle items-center gap-4 bg-black pt-6">
            <Profile/>
            <Hero/>
        </main>
    )
}
