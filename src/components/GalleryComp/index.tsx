import Image from 'next/image'

const GalleryComp = ({ images, pageName }: { images: any[] }) => {
  console.log('test-- inside comp', images.images);
  return (
    <>
      <main className="mx-auto p-4">
      <h1 className="text-cyan-500 italic my-10 font-bold text-5xl border-red-50"> {pageName} </h1>
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images?.images?.map(({ id, path }) => (
            <div className='my-10'>
              <Image
                id={id}
                key={id}
                alt="Event Images"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={path}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
              </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default GalleryComp