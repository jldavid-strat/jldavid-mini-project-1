"use client"
import Link from "next/link"


function Navbar(){
    return (
        <nav className="font-manrope w-full px-5 pb-4 pt-8 flex justify-center items-center">
            <div className="flex justify-center">
                <ul className="flex items-center gap-10">
                    <li className="text-white text-lg">
                        <Link href="/about">home</Link>
                    </li>
                    <li className="text-white text-lg">
                        <Link href="/about">about me</Link>
                    </li>
                    <li className="text-white text-lg">
                        <Link href="/about">projects</Link>
                    </li>
                    <li className="text-white text-lg">
                        <Link href="/about">contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar