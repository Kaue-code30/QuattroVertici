"use client"

import { QuebraConteudoProps } from "@/app/src/Utils/interfaces";
import { motion } from "framer-motion"; // Importando o framer-motion para animações
import { useInView } from "motion/react"; // Importando o hook useInView do motion/react
import { useRef } from "react";

function QuebraConteudo({ bannerSource }: QuebraConteudoProps) {
    const ref = useRef(null);  // Criando a referência para o elemento
    const isInView = useInView(ref, { once: true });  // Usando useInView para verificar a visibilidade

    return (
        <section
            ref={ref}  // Associando o ref ao elemento para monitoramento de visibilidade
            style={{ backgroundImage: `url(${bannerSource})` }}
            className="w-full h-[60vh] bg-fixed bg-cover overflow-hidden flex items-center justify-center bg-white"
        >
            <div className="h-full flex flex-col items-start gap-3 justify-start w-full">
                <motion.div
                    initial={{ translateX: -200, width: 100 }}
                    animate={{
                        translateX: isInView ? [-200, 500, 1000, 2000] : [-200],  // Quando o elemento estiver visível, começa a animação
                        width: isInView ? [1400, 400] : [100],
                        opacity: isInView ? [1, 0.8, 0.5, 0.3,0] : [0],
                    }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="h-full bg-black"
                />
            </div>
        </section>
    );
}

export default QuebraConteudo;
