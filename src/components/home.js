import Image from "next/image"

export default function Home() {
    return(
        <div className="flex md:gap-10 max-sm:pt-12 max-sm:pb-2 w-full max-w-7xl h-full flex-col items-center justify-center md:h-screen md:flex-row">
            <div className="bg-gray-100/50 p-2 border rounded-2xl border-black flex aspect-square max-sm:h-1/2 h-2/3 items-center justify-center">
                <Image
                    src="/img/about.jpeg"
                    alt="Profile Picture"
                    // sizes="50vh "
                    className="h-[95%] w-auto object-cover rounded-2xl"
                    width={720}
                    height={720}
                    priority
                />
            </div>
            <div className="bg-gray-100/50 p-4 pr-3 border rounded-2xl border-black max-sm:text-[10svh] max-sm:flex max-sm:h-1/2 max-sm:w-4/5 md:w-1/3 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:p-2 max-sm:px-1">
                <div className="text-[35%] md:text-clamp_greating font-extralight leading-[1.2]">
                    Hello, I'm
                </div>
                <h3 className="text-[50%] leading-[1.2] md:leading-[1.1] md:text-clamp_name font-medium">
                    Artem Furman
                </h3>
                <p className="text-[40%] md:text-clamp_profession font-light leading-[1.2] md:mb-1">
                    Web Developer
                </p>
                <div className="mb-1 flex items-center justify-center md:mb-2 max-sm:w-4/5 md:w-4/4">
                    <p className="max-sm:text-center text-[28%] md:text-clamp_description font-light leading-[1.2]">
                    I specialize in the creation and deployment of full-stack web applications, leveraging cutting-edge technologies
                    </p>
                </div>
                <a
                    href="#portfolio-section"
                    className="max-sm:text-[30%] md:text-xl drop-shadow-xl inline-block cursor-pointer rounded-lg bg-gray-200/75 px-5 py-2 text-black transition-all duration-200 ease-in-out border border-black hover:border hover:border-orange-600 hover:bg-gray-100 hover:text-orange-600"
                >
                    Portfolio
                </a>
            </div>
        </div>
    )
}