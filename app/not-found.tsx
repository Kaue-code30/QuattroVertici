import Link from "next/link";
import { RiAlarmWarningFill } from "react-icons/ri";

export default function error() {
    return (
        <section className="w-full flex items-center flex-col p-10 gap-3 text-center justify-center h-screen bg-black">
            <RiAlarmWarningFill className="animate-pulse duration-300" fontSize={100} color="#FFF" />
            <h1 className="text-white text-5xl font-bold">
                Error  404
            </h1>
            <p className="text-white text-lg">
                Desculpe mas não foi possível encontrar essa página.
            </p>
            <Link className="relative px-2 py-1 text-yellow-300 overflow-hidden group" href={"/"}>Clique aqui para ser redirecionado
                <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span></Link>
        </section>
    )
}