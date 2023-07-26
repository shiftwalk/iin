import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconSmile from '@/icons/smile.svg'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import NewsCarousel from '@/components/news-carousel'
import HomeHero from '@/components/home-hero'
import ReactCursorPosition from 'react-cursor-position';
import ImageScale from '@/components/image-scale'
import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import Button from '@/components/button'
import { useRef } from 'react'
const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const x = useTransform(scrollYProgress,[0, 1],['-35%', '35%'],{ clamp: true })
  const x2 = useTransform(scrollYProgress,[0, 1],['0', '-50%'],{ clamp: true })

  const { data: { home, global }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={home.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          className="relative"
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="overflow-hidden sticky top-0">
            <ReactCursorPosition>
              <HomeHero />
            </ReactCursorPosition>
          </div>

          <main className="mt-screen bg-white relative z-[10]">
            <article>
              <div className="p-[5vw] lg:pr-0 pb-[7vw] mb-[7.5vw] lg:mb-[15vw] lg:pb-[33vw] relative">
                <div className="flex flex-wrap relative">
                  <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-[7.5vw] leading-none lg:text-[4vw] lg:leading-none xl:leading-none mb-[1vw] uppercase text-[#FF5F38] max-w-[100%]">It&apos;s In Nottingham - <span className="font-display">For <em>everything</em> Nottingham city centre</span></h1>
                    
                    {/* <IconSlattedUnderline className="w-[45%] text-[#FF5F38] mb-[3vw]" /> */}

                    <div className="content mb-[3vw] text-base leading-tight lg:text-lg lg:leading-tight 2xl:text-2xl 2xl:leading-tight max-w-[530px] 2xl:max-w-[740px]">
                      <p>Discover what&apos;s going on, make plans for what&apos;s around the corner and stay up to date with everything Nottingham city centre - all in one place. Whatever your vibe, Nottingham&apos;s got it. And <em>It&apos;s in Nottingham</em> is the best way to find out about it.</p>
                    </div>

                    {/* <Link href="/about-us" className="a11y-focus rounded-full border border-[#B4C0C6] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none">Find out more about us</Link> */}

                    <Button href="/about-us" label="Find out more about us" />
                  </div>

                  <div className="w-full lg:w-[28vw] h-[100vw] lg:h-[40vw] bg-red relative lg:absolute top-0 right-0">
                    <ImageScale
                      src="/images/index-01.jpg"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-[25vw] lg:h-[19vw] bg-red relative lg:absolute lg:bottom-[8vw] lg:left-0 hidden lg:block">
                  <ImageScale
                    src="/images/index-02.jpg"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="w-full lg:w-[38vw] lg:h-[26vw] bg-red relative lg:absolute lg:bottom-[-8vw] lg:left-[30vw] hidden lg:block">
                  <ImageScale
                    src="/images/index-03.jpg"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>

              <div className="mb-[5vw]">
                <div className="relative flex overflow-x-hidden text-[10vw] leading-[0] uppercase">
                  <m.div style={{ x: x }} className="will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  </m.div>

                  {/* <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  </div> */}
                </div>

                <div className="relative flex overflow-x-hidden text-[10vw] leading-[0] uppercase mt-[-1vw]">
                  <m.div style={{ x: x2 }} className="will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                  </m.div>
                  
                  {/* 
                  <div className="absolute top-0 animate-marqueeReverse2 will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                  </div> */}
                </div>
              </div>

              <div className="py-[5vw] pr-0 pb-[10vw]">
                <div className="px-[5vw]">
                  <h2 className="text-[10vw] leading-none lg:text-[6vw] lg:leading-none xl:text-[5.5vw] xl:leading-none max-w-[550px] lg:max-w-[100%] text-[#BDB800] mb-3">
                    <span className="uppercase block">Latest</span>
                    <span className="uppercase block">News</span>
                  </h2>

                  <IconSquiggleUnderline className="w-[65%] lg:w-[40%] xl:w-[33%] text-[#BDB800] translate-x-[-2vw] mb-[4vw]" />
                </div>

                <div className="mb-[8vw] lg:mb-[5vw]">
                  <NewsCarousel items={home.latestNews} />
                </div>

                <div className="text-center">
                  <Button href="/news" label="View More News" />
                </div>
              </div>

              <div className="bg-[#176B75] text-[#F5F1E1] grid grid-cols-1 lg:grid-cols-2 overflow-hidden selection:bg-[#EBEA33] selection:text-[#176B75]">
                <div className="col-span-1 flex items-center justify-center px-[5vw] py-10 pb-[20vw] lg:py-[8vw] lg:pb-[10vw] order-2 lg:order-1">
                  <div className="w-full lg:px-0">
                    <span className="text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-non 2xl:leading-none block mb-3">What&apos;s on?</span>
                    <h2 className="text-[9.5vw] leading-none lg:text-[5vw] lg:leading-none xl:text-[4.5vw] xl:leading-none mb-8 text-[#EBEA33] max-w-[550px] lg:max-w-[100%]">
                      <span className="uppercase block">Nottingham</span>
                      <span className="font-display"><span className="italic">in your</span> pocket</span>
                    </h2>

                    <div className="content text-base leading-tight lg:text-lg 2xl:text-2xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-9/12 lg:w-[10/12] mb-8 lg:mb-[10%]">
                      <p>Download the It&apos;s in Nottingham app for Android or iOS to find out what&apos;s going on in the city, and for exclusive partner discounts.</p>
                    </div>

                    <div className="relative rotate-[-2deg] w-[125px] lg:w-[140px] xl:w-[180px] 2xl:w-[220px] aspect-square border-2 border-[#EBEA33] rounded-full flex items-center justify-center">
                      <Image
                        quality={80}
                        width={358}
                        height={356}
                        src="/images/qr.jpg"
                        alt="QR Code to download the app"
                        className="w-[65%]"
                      />

                      <span className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-[#EBEA33] block uppercase absolute bottom-[-50px] lg:bottom-[-50px] xl:bottom-[-65px] right-[-190px] lg:right-[-260px] xl:right-[-300px] rotate-[-2deg] xl:rotate-[-5deg] w-[180px] lg:w-[250px] xl:w-[270px] text-center">
                        <svg className="w-[50%] lg:w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.089 173.374">
                          <defs>
                            <clipPath id="a">
                              <path fill="none" d="M0 0h157.986v72.6H0Z" data-name="Path 1181"/>
                            </clipPath>
                          </defs>
                          <g data-name="Group 422">
                            <g clipPath="url(#a)" data-name="Group 421" transform="rotate(61 31.748 53.897)">
                              <g data-name="Group 419">
                                <path fill="none" stroke="currentColor" strokeWidth="3" d="M157.615 9.238S73.325-32.828 3.725 71.231" data-name="Path 1179"/>
                              </g>
                              <g data-name="Group 420">
                                <path fill="none" stroke="currentColor" strokeWidth="3" d="M21.854 69.295 3.196 71.668.822 53.01" data-name="Path 1180"/>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span className="font-display"><span className="italic">Scan me</span></span> with your phone camera to download!
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-1 lg:order-2 relative">
                  <ImageScale
                    src="/images/pocket-cta.jpg"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                </div>
              </div>
            </article>
          </main>

          <div className="relative z-[10]">
            <Footer />
          </div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}