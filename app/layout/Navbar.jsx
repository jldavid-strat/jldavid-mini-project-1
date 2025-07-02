"use client"
import Link from "next/link"

function NavLinks({to, name}){
    return (
            <Link href={to}>
                <span className="text-primary-foreground text-lg hover:text-2xl hover:text-green-400 hover:shadow-2xs active:text-primary">
                    {name}
                </span>
            </Link>
    )
}

function Navbar(){
    return (
        <nav className="font-manrope w-full px-5 pb-4 pt-8 flex justify-center items-center">
            <div className="flex justify-center">
                <ul className="flex items-center gap-10">
                    <li className="text-white text-lg">
                        <NavLinks to="/" name="home"/>
                    </li>
                    <li>
                        <NavLinks to="/about" name="about me"/>
                    </li>
                    <li className="text-white text-lg">
                        <NavLinks to="/projects" name="projects"/>
                    </li>
                    <li className="text-white text-lg">
                        <NavLinks to="/contact" name="contact"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default Navbar