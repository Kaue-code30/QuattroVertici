"use client"
import Image from "next/image";
import LinksHeader from "../Utils/Links";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Função é utilizada para controlar o estado do menu aberto ou fechado
    const HandleOpenAndCloseMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-transparent flex items-center lg:p-10 justify-center absolute w-full h-20 lg:h-28">
            <div className="max-w-[1000px] w-4/5 flex items-center justify-between  lg:w-full h-full">
                <Link href={"/"}>
                    <h1 className="text-white cursor-default font-medium text-xl lg:text-3xl">
                        Quattro Vertici
                    </h1>
                </Link>

                <ul className="hidden lg:flex w-auto h-auto gap-4 justify-end items-center">
                    {
                        LinksHeader.map((data, key) => (
                            <li key={key} className="relative px-2 py-1 text-white overflow-hidden group">
                                <Link href={data.link}>
                                    {data.text}
                                    <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className={`lg:hidden ${isOpen ? "flex" : "hidden"} top-full items-center justify-center flex-col gap-3 left-0 transition duration-300 absolute h-[200px] w-full bg-white`}>
                    <div className="w-4/5 flex flex-col items-start justify-center gap-3 h-full ">
                        {
                            LinksHeader.map((data, key) => (
                                <li key={key} className="relative  py-1 text-black overflow-hidden group">
                                    <Link href={data.link}>
                                        {data.text}
                                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))
                        }
                    </div>

                </ul>
                <button onClick={HandleOpenAndCloseMenu} className={`w-7 lg:hidden h-auto justify-center ${isOpen ? "h-auto -mt-2" : ""} items-end flex-col gap-1 flex`}>
                    <div className={`${isOpen ? "rotate-45 relative top-2 transition duration-500" : "rotate-0 transition duration-500"} w-full rounded h-[3px] bg-white`}></div>
                    <div className={`${isOpen ? "hidden transition duration-500 " : ""} w-[80%]  rounded h-[3px] bg-white`}></div>
                    <div className={`${isOpen ? "-rotate-45 relative transition duration-500" : "-rotate-180 transition duration-500"} w-full rounded h-[3px] bg-white`}></div>
                </button>
            </div>
        </header>
    )
}

export default Header;