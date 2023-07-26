import IconChevron from '@/icons/chevron.svg'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import SanityImage from './sanity-image'
import SanityImageScale from './sanity-image-scale'

export default function NewsCarousel({ items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <button aria-label="Move Carousel Items Along" onClick={scrollNext} className="absolute top-[25vw] lg:top-[12vw] 2xl:top-[10vw] right-[5%] z-10 w-[50px] lg:w-[50px] 2xl:w-[75px] h-[50px] lg:h-[50px] 2xl:h-[75px] bg-white flex items-center justify-center rounded-full a11y-focus lg:hover:scale-[1.15] transition-transform ease-in-out duration-[300ms]">
        <IconChevron className="w-[30%] block" />
      </button>
      <div className="embla relative mb-12 lg:mb-16 2xl:mb-20" ref={emblaRef}>
        <div className="embla__container ">
          {items.map((e, i) => {
            return (
              <div className="embla__slide pr-3 lg:pr-5" key={i}>
                <Link className="block" href={`/news/${e.slug.current}`}>
                  <div className="w-full h-[60vw] lg:h-[25.5vw] 2xl:h-[23.5vw] bg-red mb-4 relative overflow-hidden">
                    <SanityImage
                      image={e.teaserImage}
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="scale-[1.0075]"
                    />
                  </div>

                  <div className="w-full">
                    <span className="block text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-none 2xl:leading-none font-medium mb-1">{e.title}</span>
                    <span className="text-base lg:text-lg 2xl:text-xl leading-none lg:leading-none 2xl:leading-none border-b border-off-black border-opacity-25 inline-block pb-1">Read More</span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="w-[50vw] lg:w-[25vw] h-[4px] lg:h-[5px] bg-[#B4C0C6] bg-opacity-20 mx-auto flex">
        <div className="w-[25%] h-full bg-off-black/30"></div>
      </div>
    </div>
  )
}