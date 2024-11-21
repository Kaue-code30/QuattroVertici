import banner from "@/app/src/Home/Assets/bannerVertici.jpg"

function Hero() {
    return (
        <section style={{ backgroundImage: `url(${banner.src})` }} className="h-screen lg:h-[70vh] bg-cover  bg-no-repeat bg-center flex items-center justify-center w-full">
            <div className="w-full h-full flex items-center justify-center bg-[#00000086]">
                <div className="max-w-[1200px] w-4/5 lg:w-full h-full gap-3 flex-col flex items-center justify-center  ">
                    <h1 className="text-white text-center font-bold text-4xl">
                        Lorem Ipsum
                    </h1>
                    <p className="lg:w-4/5 text-white text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia architecto ipsam ipsum praesentium dolorem! Quisquam minus ipsam temporibus optio ullam veniam autem. Hic quae, facere iure explicabo molestiae soluta iste.
                    </p>
                    <button className="w-48 h-10 hover:scale-90 transition duration-300 text-black bg-white rounded-lg">
                        saiba mais
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;