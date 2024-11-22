import { EmpresasInvestidas } from "@/app/src/Utils/Conteudo";
import { data, li } from "motion/react-client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineLink } from "react-icons/hi";
import banner from "@/app/src/Home/Assets/bannerVertici.jpg"
import Image from "next/image";

function Investidores() {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <section className="w-full h-auto flex items-center justify-center bg-white pt-[80px] pb-[100px]">
            <div className="max-w-[1000px] h-full flex flex-col  items-start gap-3 justify-start w-4/5 lg:w-full">
                <h1 className="text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h1>
                <ul className="flex h-12 mt-2 gap-3 w-full border-b-2">
                    {
                        EmpresasInvestidas.map((data, key) => (

                            <li onClick={() => setCurrentIndex(key)} key={key} className={`w-[200px] ${currentIndex === key ? "border-b-[3px] text-black font-medium border-black" : "text-gray-500 font-normal"} transition duration-300  cursor-pointer flex items-center justify-center  h-12 rounded-t-lg`}>
                                {data.nome}
                            </li>
                        ))
                    }
                </ul>

                <div className="h-auto lg:h-[650px] flex flex-col lg:flex-row gap-3 py-5 lg:py-10 w-full ">
                    <div className="lg:w-1/2 flex gap-2 flex-col h-full">
                        <div className="w-28 h-28 mb-2 rounded-2xl shadow bg-black">

                        </div>
                        <h2 className="text-lg">
                            {EmpresasInvestidas[currentIndex].nome}
                        </h2>
                        <h3 className="text-gray-500 text-sm">
                            {EmpresasInvestidas[currentIndex].areaAtuacao}
                        </h3>
                        <p className="lg:w-4/5">
                            {EmpresasInvestidas[currentIndex].description}
                        </p>
                        <Link className="text-blue-500 flex items-center gap-2" href={EmpresasInvestidas[currentIndex].link}>Conheça mais sobre essa empresa <HiOutlineLink /> </Link>
                    </div>
                    <div className="lg:w-1/2 lg:flex hidden border  shadow">
                        <Image width={100} height={100} className="bg-cover w-full h-full  object-cover" src={banner.src} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Investidores;