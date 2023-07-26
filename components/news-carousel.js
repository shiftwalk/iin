import IconChevron from '@/icons/chevron.svg'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import SanityImage from './sanity-image'
import ConditionalWrap from 'conditional-wrap';

export default function NewsCarousel({ items, initiatives }) {
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

      <div className="embla pl-[5vw] relative mb-12 lg:mb-16 2xl:mb-20" ref={emblaRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            return (
              <div className={`embla__slide ${initiatives ? 'pr-5 lg:pr-10' : 'pr-3 lg:pr-5'}`} key={i}>
                <ConditionalWrap
                  condition={!!e.article?.slug.current || e.slug?.current}
                  wrap={children => (
                    <Link className="block group" href={`/news/${initiatives ? e.article.slug.current : e.slug.current}`}>
                      {children}
                    </Link>
                  )}
                >
                  <div className="w-full h-[60vw] lg:h-[25.5vw] 2xl:h-[23.5vw] bg-red mb-5 relative overflow-hidden">
                    {e.teaserImage && (
                      <SanityImage
                        image={e.teaserImage}
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="scale-[1.0075] transition-transform ease-in-out duration-[1000ms] group-hover:scale-[1.065]"
                      />
                    )}
                  </div>

                  <div className="w-full">
                    <span className={`block leading-[1.2] lg:leading-[1.2] 2xl:leading-[1.2] mb-2 lg:mb-4 ${initiatives ? 'uppercase pt-5 pb-4 text-2xl lg:text-3xl 2xl:text-4xl' : 'font-medium text-xl lg:text-2xl 2xl:text-3xl'}`}>{e.title}</span>
                    
                    {e.excerpt && (
                      <div className="w-10/12 mb-6 lg:mb-8">
                        <p className="text-sm lg:text-base 2xl:text-lg leading-[1.5] lg:leading-[1.5] 2xl:leading-[1.5]">{e.excerpt}</p>
                      </div>
                    )}

                    {initiatives ? (
                      <>
                      {e.article?.slug?.current && (
                        <span className="a11y-focus rounded-full border border-[#B4C0C6] py-4 lg:py-3 2xl:py-6 px-5 lg:px-6 2xl:px-8 inline-block leading-[1.025] 2xl:text-lg 2xl:leading-[1.025] mx-auto relative group overflow-hidden text-center min-w-[50%]">
                          <div className="relative z-[1] overflow-hidden">
                            <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">Read More</span>
                            <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">Read More</span>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                            <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[75] origin-center bg-[#EBEA33]`}></div>
                          </div>
                        </span>
                      )}
                      </>
                    ) : (
                      <span className="text-base lg:text-lg 2xl:text-xl leading-none lg:leading-none 2xl:leading-none border-b border-off-black border-opacity-25 inline-block pb-1">Read More</span>
                    )}
                  </div>
                </ConditionalWrap>
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