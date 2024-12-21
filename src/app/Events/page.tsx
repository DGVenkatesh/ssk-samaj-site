import VideoCard from "@/components/Events";

export default function Events() {

    return (
        <>
            <div className="container mx-auto items-center border-b-2 px-6 py-2">
                <h1 className="text-cyan-500 italic my-10 font-bold text-5xl border-red-50"> Videos </h1>
                <div className="my-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 auto-rows-auto">
                     <VideoCard 
                     videoUrl="https://www.youtube.com/watch?v=dGlJAt5AkeQ"
                     imageUrl="/gallery/event1/1.jpg"
                     description="This is the test vidoe of the ssk samaj and this is the description of the samaj to test the length of the text i am testing here a long test and it should not be lengthy and also not should be too short"
                     />
                                          <VideoCard 
                     videoUrl="https://www.youtube.com/watch?v=dGlJAt5AkeQ"
                     imageUrl="/gallery/event1/1.jpg"
                     description="This is the test vidoe of the ssk samaj and this is the description of the samaj to test the length of the text i am testing here a long test and it should not be lengthy and also not should be too short"
                     />
                                          <VideoCard 
                     videoUrl="https://www.youtube.com/watch?v=dGlJAt5AkeQ"
                     imageUrl="/gallery/event1/1.jpg"
                     description="This is the test vidoe of the ssk samaj and this is the description of the samaj to test the length of the text i am testing here a long test and it should not be lengthy and also not should be too short"
                     />
                                          <VideoCard 
                     videoUrl="https://www.youtube.com/watch?v=dGlJAt5AkeQ"
                     imageUrl="/gallery/event1/1.jpg"
                     description="This is the test vidoe of the ssk samaj and this is the description of the samaj to test the length of the text i am testing here a long test and it should not be lengthy and also not should be too short"
                     />
                                          <VideoCard 
                     videoUrl="https://www.youtube.com/watch?v=dGlJAt5AkeQ"
                     imageUrl="/gallery/event1/1.jpg"
                     description="This is the test vidoe of the ssk samaj and this is the description of the samaj to test the length of the text i am testing here a long test and it should not be lengthy and also not should be too short"
                     />
                    </div>
                </div>
            </div>
        </>
    );
};
