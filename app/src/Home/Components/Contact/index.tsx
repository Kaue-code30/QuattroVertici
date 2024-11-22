
import LinksHeader, { RedeSocial } from "@/app/src/Utils/Links";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";

function Contact() {

    return (
        <section className="w-full h-auto flex items-center justify-center text-white bg-black pt-[100px] pb-[50px]">
            <div className="max-w-[1000px] h-full flex flex-col  items-start gap-3 justify-start w-4/5 lg:w-full">
                <div className="w-full h-full flex-col gap-4 flex ">
                    <h1 className="text-4xl leading ">
                        Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <div className="h-[1px] lg:mt-8 w-auto gap-2 flex ">
                        <div className="w-[20px] h-full rounded bg-white"></div>
                        <div className="w-[20px] h-full rounded bg-white"></div>
                        <div className="w-[95%] rounded h-full bg-white"></div>

                    </div>
                </div>
                <div className="h-auto flex justify-between py-14  w-full">
                    <div className="w-auto flex flex-col gap-3 h-full">
                        <h1 className="text-white cursor-default pb-2 font-medium text-xl lg:text-3xl">
                            Quattro Vertici
                        </h1>
                        <Link href={"mailto:email@quattrovertici@gmail.com"} className="flex font-light text-sm items-center justify-center gap-1">
                            <IoMailOutline fontSize={22} />
                            email@quattrovertici@gmail.com
                        </Link>
                        <Link href={"mailto:email@quattrovertici@gmail.com"} className="flex font-light text-sm items-center justify-start gap-1">

                            Outra informação
                        </Link>
                    </div>
                    <div className=" flex gap-20">


                        <div className="w-auto h-full">
                            <h2 className="font-light text-2xl ">
                                Links Úteis:
                            </h2>
                            <ul className="pt-3 flex flex-col gap-2">
                                {
                                    LinksHeader.map((data, key) => (
                                        <li key={key} className="relative text-sm font-light py-1 text-white overflow-hidden group">
                                            <Link href={data.link}>
                                                {data.text}
                                                <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="w-auto h-full">
                            <h2 className="font-light text-2xl ">
                                Empresas:
                            </h2>
                            <ul className="pt-3 flex flex-col gap-2">
                                {
                                    LinksHeader.map((data, key) => (
                                        <li key={key} className="relative text-sm font-light py-1 text-white overflow-hidden group">
                                            <Link href={data.link}>
                                                {data.text}
                                                <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="w-full h-full flex-col gap-4 flex ">
                    <div className="h-[1px] lg:mt-8 w-auto gap-2 flex ">
                        <div className="w-[20px] h-full rounded bg-white"></div>
                        <div className="w-[20px] h-full rounded bg-white"></div>
                        <div className="w-[95%] rounded h-full bg-white"></div>

                    </div>
                    <div className="w-full h-auto flex items-center justify-between">
                        <div className="pt-5 ">
                            <p>
                                © 2024 Quattro Vertici.
                            </p>
                        </div>
                        <div className="w-auto flex text-2xl gap-3 h-full">
                            {
                                RedeSocial.map((data, key) => (
                                    <Link className="hover:scale-90 transition duration-300" key={key} href={data.link}><data.icon></data.icon></Link>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )


}
export default Contact;