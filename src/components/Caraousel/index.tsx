'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import FirstCarousel from '../CarouselData/first'
import SecondCarousel from '../CarouselData/second'
import { PrevButton, NextButton } from './button'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    
    return (
        <div className='embla mt-12 w-full border-blue-950'>
        <div className='embla__viewport h-96 border' ref={emblaRef}>
          <div className='embla__container h-full'>
            <FirstCarousel />
            <SecondCarousel />
            {/* <div className='embla__slide flex items-center justify-center'>
              Slide 1
            </div>
            <div className='embla__slide flex items-center justify-center'>
              Slide 2
            </div>
            <div className='embla__slide flex items-center justify-center'>
              Slide 3
            </div> */}
          </div>
        </div>
  
        <div className='mt-3 flex justify-between relative z-10 bottom-[14rem]'>
          <PrevButton
            onClick={scrollPrev}
          >
          </PrevButton>
          <NextButton
            onClick={scrollNext}
          >
          </NextButton>
        </div>
      </div>
    )
}

export default EmblaCarousel
