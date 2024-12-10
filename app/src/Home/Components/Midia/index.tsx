import { ConteudoCardsMidia } from "@/app/src/Utils/Conteudo";
import Link from "next/link";

function Midia() {
    return (
        <section id="empresas" className="w-full h-auto flex items-center justify-center bg-[#ededed] pt-[80px] pb-[100px]">
            <div className="max-w-[1000px] h-full flex flex-col  items-center gap-3 justify-start w-4/5 lg:w-full">
                <h2 className="text-4xl leading-snug ">
                    We reimagine the way the world moves for the better
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita unde non a inventore quaerat consequatur,
                </p>
                <div className="h-auto w-full flex mt-5 gap-5 lg:flex-row flex-col">
                    {
                        ConteudoCardsMidia.map((data, key) => (
                            <div key={key} className="lg:w-1/3 shadow-md h-[390px] bg-white rounded-lg">
                                <div className="h-[45%] w-full bg-[#d9d9d9] rounded-t-lg">

                                </div>
                                <div className="h-2/4 flex flex-col gap-3 w-full p-5">
                                    <h1>
                                        {data.titulo}
                                    </h1>
                                    <p className="text-sm text-[#2c2c2c]">
                                        {data.text}
                                    </p>

                                    <li key={key} className="relative list-none py-1 text-black overflow-hidden group">
                                        <Link href={data.link}>
                                            saiba mais
                                            <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-1/2"></span>
                                        </Link>
                                    </li>


                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Midia;