

import { ConteudoSocios } from "@/app/src/Utils/Conteudo";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion"; // Importando o framer-motion para animações
import Image from "next/image";

function Socios() {
    const [currentIndex, setCurrentIndex] = useState(0);
    


    const HandleNext = (currentIndex: number) => {
        setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1)
    }
    const HandleBack = (currentIndex: number) => {
        setCurrentIndex(currentIndex === 0 ? 2 : currentIndex - 1)
    }

    return (
        <section className="w-full h-auto flex items-center justify-center bg-white pt-[80px] pb-[100px]">
            <div className="max-w-[1000px] h-full flex lg:flex-row flex-col-reverse  items-center lg:gap-12 justify-start w-full ">

                <div className=" w-4/5 lg:w-1/2 lg:absolute items-center justify-start lg:p-0 p-5 lg:pl-10 lg:left-[50%] bg-[#ededed8c] shadow rounded-2xl flex  h-[400px]">
                    <div className="h-full lg:py-10 flex flex-col items-center justify-center gap-3 rounded-r-lg w-[500px] ">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "linear" }}
                            key={currentIndex} className="w-full items-start justify-center flex flex-col gap-3 h-full">


                            <div style={{backgroundImage:`url(${ConteudoSocios[currentIndex].foto})`}} className=" w-[150px] bg-cover bg-center h-[150px] border rounded-full  shadow-md">
                                {/* <Image style={{width:"100%"}} className="  object-contain rounded-full" src={ConteudoSocios[currentIndex].foto} alt="Socio(a)" width={10} height={10} /> */}
                            </div>
                            <div
                                className="flex flex-col h-auto">
                                <h1 className="text-lg">
                                    {ConteudoSocios[currentIndex].nome}
                                </h1>
                                <h2 className="text-base text-gray-400">
                                    {ConteudoSocios[currentIndex].atuacao}
                                </h2>
                                <p className="text-sm pt-2 w-[90%] text-gray-700">
                                    {ConteudoSocios[currentIndex].descritivo}
                                </p>
                            </div>

                            {/* <p>
                            {ConteudoSocios[currentIndex].descritivo}
                        </p> */}
                        </motion.div>
                    </div>
                </div>
                <div className="w-4/5 lg:w-1/2 flex-col gap-3 relative left-[0%] flex h-[400px] items-start justify-start">
                    <h1 className="text-4xl leading lg:w-[90%]">
                        Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <p className="lg:w-[89%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aliquid natus earum vel velit error eum! Quasi modi exercitationem sit distinctio deleniti asperiores! Et atque provident earum corporis itaque error?
                    </p>
                    <div className="flex gap-2 h-auto ">
                        <button onClick={() => HandleBack(currentIndex)} className="h-12 mt-2 focus-within:scale-90 hover:bg-[#ededed] focus-within:bg-[#ededed] hover:scale-90 transition duration-300 flex items-center justify-center text-2xl w-12 rounded-lg shadow relative bg-transparent border">
                            <IoIosArrowBack />

                        </button>
                        <button onClick={() => HandleNext(currentIndex)} className="h-12 mt-2 focus-within:scale-90 hover:bg-[#ededed] focus-within:bg-[#ededed] hover:scale-90 transition duration-300 flex items-center rotate-180 justify-center text-2xl w-12 rounded-lg shadow relative bg-transparent border">
                            <IoIosArrowBack />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Socios;