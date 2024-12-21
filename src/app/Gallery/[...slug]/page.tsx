'use client'

import { useParams } from "next/navigation";
import imageJson from '../../../../public/gallery/data.json';
import GalleryComp from "@/components/GalleryComp";

export default function Gallery() {

    const params = useParams();

    const pageName = params?.slug[0];

    const eventPage = imageJson.gallery.find(data => data?.eventName === pageName);

    console.log('test-- event', eventPage);

  return (
    <>
      <div className="container mx-auto items-center border-b-2 px-6 py-2">
        <GalleryComp pageName={pageName} images={eventPage} />
      </div>
    </>
  );
};
