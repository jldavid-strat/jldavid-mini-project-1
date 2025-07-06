"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react" 

function NavLinks({ to, name, onClick }) {
  return (
    <Link href={to} onClick={onClick}>
      <span className="text-primary-foreground text-lg hover:text-2xl hover:text-green-400 hover:shadow-2xs active:text-primary">
        {name}
      </span>
    </Link>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="font-manrope w-full px-5 py-4 flex flex-end relative">

      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-20">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links */}
      <ul
        className={`
          md:flex md:items-center md:gap-10 md:static absolute top-full left-0 w-full px-5 py-4 z-10
          transition-all duration-300 ease-in-out flex-end md:justify-center
          ${isOpen ? "flex flex-col gap-4 bg-black w-40" : "hidden bg-transparent"}
        `}
      >
        <li>
            <NavLinks to="/" name="home" onClick={() => setIsOpen(false)} />
        </li>
        <li>
            <NavLinks to="/about" name="about me" onClick={() => setIsOpen(false)} />
        </li>
        <li>
            <NavLinks to="/projects" name="projects" onClick={() => setIsOpen(false)} />
        </li>
        <li>
            <NavLinks to="/contact" name="contact" onClick={() => setIsOpen(false)} />
        </li>
      </ul>
    </nav>
  )
}




export default Navbar