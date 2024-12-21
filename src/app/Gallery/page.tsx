
import imageJson from '../../../public/gallery/data.json'
import Link from 'next/link';

export default function Gallery() {

    return (
        <>
            <div className="container mx-auto items-center border-b-2 px-6 py-2">
                <h1 className="text-cyan-500 italic my-10 font-bold text-5xl border-red-50"> Gallery </h1>
                <div className="my-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 auto-rows-auto">
                        {imageJson.gallery.map((image) => (
                            <Link
                                key={image.id}
                                href={`/Gallery/${image.eventName}`}
                                shallow
                                className="after:content group relative mb-5 block  w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                            >
                                <div key={image.id} className="flex flex-col items-center">
                                    <img
                                        src={image.image}
                                        alt={image.eventName}
                                        className="w-full h-auto rounded-lg shadow-md"
                                    />
                                    <p className="mt-2 text-center text-sm text-gray-600">{image.eventName}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
