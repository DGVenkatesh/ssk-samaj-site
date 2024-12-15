import Image from "next/image";
import Sharajun from "../../../public/assert/sahasrabahu.webp"
const Section1 = () => {
    return (
        <div className="container mx-auto flex overflow-hidden h-full lg:h-[40rem] justify-between items-center px-6 py-6 mt-10 mb-10 gap-[5rem]">
            <div className="w-1/2">
                <Image src={Sharajun} width={500} height={900} alt="shasharajun" />
            </div>
            <div className="w-1/2">
                <h1 className="font-semibold text-gray-800 text-xl">
                    Welcome all Somavamsha Sahasrarjuna Kshatriyans. </h1>
                <h2 className="mt-4">
                    SSK Samaj kanchi is founded with the aim of the promotion of the religious, social, educational and cultural exchange between the people of the India.
                    Its main goals are to unite, preserve, protect and promote social, economic and educational contacts of all the members residing in India.
                    These goals would be best achieved by bringing everyone together, by establishing communication and bonding the SSK Samaj.
                    That is the reason, here we have our own page to communicate with our people more efficiently.
                </h2>
            </div>
        </div>
    )
}

export default Section1;