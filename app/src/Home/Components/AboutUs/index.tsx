import imageEneas from "@/app/src/Home/Assets/Eneas_Zamboni.png"
import { RedeSocialEneas } from "@/app/src/Utils/Links";
import Link from "next/link";

function AboutUs() {
    return (
        <section id="quem-somos" className="w-full h-auto flex flex-col items-center justify-center bg-white pt-[100px] ">
            <div className="max-w-[1000px] h-full flex flex-col items-start gap-3 justify-start w-4/5 lg:w-full ">
                <h1 className="text-lg">
                    Quem somos
                </h1>
                <h2 className="text-4xl leading-snug lg:w-3/5">
                    We reimagine the way the world moves for the better
                </h2>
                <div className="h-1 w-auto gap-2 flex ">
                    <div className="w-[150px] rounded h-full bg-black"></div>
                    <div className="w-[10px] h-full rounded bg-black"></div>
                    <div className="w-[10px] h-full rounded bg-black"></div>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="max-w-[1000px] h-full pt-10 lg:pt-[80px] pb-[80px] flex flex-col items-start gap-3 justify-start w-4/5 lg:w-full ">
                <div className="w-full h-full lg:flex-row flex-col flex">
                    <div className="lg:w-1/2 lg:py-0 py-10 lg:h-[500px] flex flex-col items-start gap-3 lg:gap-5 justify-center">
                        <h1 className="text-3xl ">
                            Enéas Zamboni
                        </h1>
                        <h2>
                            Chief Executive Officer.
                        </h2>
                        <div className="w-auto flex text-xl gap-2 h-auto">
                            {
                                RedeSocialEneas.map((data, key) => (
                                    <Link target="_blank" className="hover:scale-90 transition duration-300" key={key} href={data.link}><data.icon></data.icon></Link>
                                ))
                            }
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${imageEneas.src})` }} className="h-[500px] bg-cover bg-no-repeat shadow-md lg:w-1/2 border">

                    </div>
                </div>
                <div className="w-full pt-5">
                    <p className="w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat illo voluptates nisi quis veritatis ut, quaerat
                        accusamus a in quos velit consectetur ducimus non adipisci,
                        itaque consequatur odit explicabo aliquid.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat illo voluptates nisi quis veritatis ut, quaerat
                        accusamus a in quos velit consectetur ducimus non adipisci,
                        itaque consequatur odit explicabo aliquid.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
