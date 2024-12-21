import CarouselSSK from "@/components/Caraousel";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

export default function Home() {

  const OPTIONS = {
    loop: true,
  }
  const SLIDE_COUNT = 2
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  console.log('test-- slides', SLIDES);

  return (
    <>
      <div className="container mx-auto flex items-center border-b-2 px-6 py-2">
        <CarouselSSK slides={SLIDES} options={OPTIONS} />
      </div>
      <div>
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>
    </>
  );
};
