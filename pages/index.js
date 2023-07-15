import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import IconSlattedUnderline from '@/icons/slatted-underline.svg'
import IconSmile from '@/icons/smile.svg'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Div100vh from 'react-div-100vh'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <LazyMotion features={domAnimation}>
        <div>
          <section className="">
            <Div100vh className="w-full h-screen bg-blue flex items-center jusfify-center text-[#FF5F38]">
              <div className="w-full text-center uppercase">
                <span className="block text-[15vw] leading-[0.9]">Enter-</span>
                <span className="block text-[15vw] leading-[0.9]">tainment</span>
              </div>
            </Div100vh>
          </section>

          <main>
            <article>
              <div className="bg-[#E2E0FD] p-[5vw] pb-[25vw] mb-[5vw]">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl leading-none lg:text-4xl lg:leading-none xl:text-5xl xl:leading-none mb-4 uppercase text-[#FF5F38] max-w-[550px]">It&apos;s In Nottingham - <span className="font-display">For <span className="italic">everything</span> Nottingham city centre</span></h1>
                    <IconSlattedUnderline className="w-[30%] text-[#FF5F38] mb-8" />

                    <div className="content mb-8 text-base leading-tight lg:text-lg lg:leading-tight max-w-[530px]">
                      <p>Discover what&apos;s going on, make plans for what&apos;s around the corner and stay up to date with everything Nottingham city centre - all in one place. Whatever your vibe, Nottingham&apos;s got it. And <em>It&apos;s in Nottingham</em> is the best way to find out about it.</p>
                    </div>

                    <Link href="/about-us" className="rounded-full border border-[#B4C0C6] py-4 lg:py-6 px-6 lg:px-8 inline-block leading-none">Find Out More About Us</Link>
                  </div>
                </div>
              </div>

              <div className="mb-[5vw]">
                <div className="relative flex overflow-x-hidden text-[10vw] leading-[0] uppercase">
                  <div className="animate-marquee will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  </div>

                  <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  </div>
                </div>

                <div className="relative flex overflow-x-hidden text-[10vw] leading-[0] uppercase mt-[-1vw]">
                  <div className="animate-marqueeReverse will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                  </div>

                  <div className="absolute top-0 animate-marqueeReverse2 will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square" /></span></span>
                  </div>
                </div>
              </div>

              <div className="bg-[#176B75] text-[#F5F1E1] grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1 flex items-center justify-center py-10 lg:py-[5vw] order-2 lg:order-1">
                  <div className="w-full lg:w-9/12 px-5 lg:translate-y-[-5vw]">
                    <span className="text-xl lg:text-2xl xl:text-3xl block mb-3">What&apos;s on?</span>
                    <h2 className="text-[9.5vw] leading-none lg:text-[5vw] lg:leading-none xl:text-[4.5vw] xl:leading-none mb-8 text-[#EBEA33] max-w-[550px]">
                      <span className="uppercase block">Nottingham</span>
                      <span className="font-display"><span className="italic">in your</span> pocket</span>
                    </h2>

                    <div className="content text-base leading-tight lg:text-lg lg:leading-tight max-w-[530px] w-9/12">
                      <p>Download the It&apos;s in Nottingham app for Android or iOS to find out what&apos;s going on in the city, and for exclusive partner discounts.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 aspect-[10/11] order-1 lg:order-2"></div>
              </div>
            </article>
          </main>

          <Footer />
        </div>
      </LazyMotion>
    </Layout>
  )
}
