import Image from "next/image";

import Image1 from "../../../../public/assert/1stcarousel.jpg"
export const FirstCarousel = () => {
    return (
        <div className="embla__slide flex w-full">
            <Image src={Image1} alt="welcome message" fill />
            <div className="z-20 text-center self-center w-full">
            <h1 className="text-cyan-50 lg:text-7xl text-3xl font-semibold"> Welcome to SSK Samaj</h1>
            <h1 className="text-cyan-50 lg:text-7xl text-3xl lg:mt-12 mt-6 font-semibold"> Kanchipuram </h1>
            </div>
        </div>
    )
}

export default FirstCarousel;