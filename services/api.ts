import {ISkillCard as Skills} from "@/views/commons/skill_card/SkillCard";
import {IExperienceProps as Journey} from "@/views/commons/experience/Experience";
import Projects from "@/views/sections/Projects/Projects";

export const api = {
    skills: async function (): Promise<Skills[]> {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/skills`)
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')
            }
            return res.json()
        } catch (e) {
            throw new Error('Failed to fetch data')
        }
    },
    journey: async function (): Promise<Journey[]> {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/journeys`)
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')
            }
            return res.json()
        } catch (e) {
            throw new Error('Failed to fetch data')
        }
    },
    projects: async function (): Promise<Projects[]> {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`)
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')
            }
            return res.json()
        } catch (e) {
            throw new Error('Failed to fetch data')
        }
    }
}



