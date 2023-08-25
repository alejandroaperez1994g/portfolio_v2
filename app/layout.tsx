import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import Profile from "@/views/sections/Profile/Profile";
import VerticalNavigator from "@/views/sections/VerticalNavigator/VerticalNavigator";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Alejandro Avila - Portfolio',
    description: 'Alejandro Avila - Portfolio',
}

export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className} text-white min-h-screen flex `}>
        <div className="pl-2 fixed top-0 left-0 z-10 flex flex-shrink-0 items-center align-middle">
            <Profile/>
        </div>
        {children}
        <div className="fixed top-0 right-0 z-10 flex-shrink-0 items-center align-middle"><VerticalNavigator/></div>
        </body>
        </html>
    )
}
