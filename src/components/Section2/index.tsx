'use client'

import { redirect } from 'next/navigation'

const Section2 = () => {
    const handleGallery = () => {
        redirect('Gallery');
    }
    const handleEvents = () => {
        redirect('Events');
    }
    return (
        <div className="container mx-auto flex overflow-hidden h-full border-t-2 lg:h-[25rem] border-b-2 justify-between px-6 py-6 mt-10 mb-10 gap-[5rem]">
            <div className="w-1/2">
                <div className="flex flex-col justify-evenly gap-8">
                    <h1 className="text-blue-950 font-semibold text-2xl"> Gallery </h1>
                    <div>
                        we will continue to update all the community photos in our website, click below button to explore.
                    </div>
                    <div>
                        <button type="button" onClick={handleGallery} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-cyan-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Gallery</button>
                    </div>
                </div>
            </div>
            {/* <div className="w-1/2">
                <div className="flex flex-col justify-evenly gap-8">
                    <h1 className="text-blue-950 font-semibold text-2xl"> Become a member</h1>
                    <div>
                        Join us, We encourage promotion of the religious, social, educational and cultural exchange between the SSK peoples of the India.
                    </div>
                    <div>
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-cyan-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Become Member</button>
                    </div>
                </div>
            </div> */}
            <div className="w-1/2">
                <div className="flex flex-col justify-evenly gap-8">
                    <h1 className="text-blue-950 font-semibold text-2xl"> Community Videos </h1>
                    <div>
                        We organize multiple events click below button to know about the events
                    </div>
                    <div>
                        <button type="button" onClick={handleEvents} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-cyan-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Videos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;