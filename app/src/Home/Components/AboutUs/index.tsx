

function AboutUs() {
    return (
        <section className="w-full h-auto flex items-center justify-center bg-white pt-[100px] pb-[30px]">
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
        </section>
    )
}

export default AboutUs;
