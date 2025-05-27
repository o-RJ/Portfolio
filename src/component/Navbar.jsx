import React, { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="fixed top-0 z-10 w-full flex items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md">
            <a href="#home" className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
                RJ
            </a>

            {/* middle */}
            <ul className="hidden md:flex gap-10">
                <li><a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Home</a></li>
                <li><a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Tech</a></li>
                <li><a href="#project" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Project</a></li>
                <li><a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Contact</a></li>
            </ul>

            {/* social media links*/}
            <ul className="hidden md:flex gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <a href="https://www.linkedin.com/in/robert-banks-542815329/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                    <a href="https://github.com/o-RJ" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
                    <a href="https://www.instagram.com/rjbanks_/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                </li>
            </ul>



            {/* side menu for iphone view */}
            {isOpen ? (
                <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
            ) : (
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
            )}

            {isOpen && (
                <div className={"fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12"}>
                    <ul className="flex flex-col gap-8">
                        <li><a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Home</a></li>
                        <li><a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Tech</a></li>
                        <li><a href="#project" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Project</a></li>
                        <li><a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Contact</a></li>
                    </ul>
                    <ul className="flex flex-wrap gap-5">
                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                            <a href="https://www.linkedin.com/in/robert-banks-542815329/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                            <a href="https://github.com/o-RJ" target="_blank" rel="noopener noreferrer">
                                <BsGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            )}



        </nav>
    )
}

export default Navbar