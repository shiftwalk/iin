import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m} from 'framer-motion'
import { NextSeo } from 'next-seo'
import IconSlattedUnderline from '@/icons/slatted-underline.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconZagUnderline from '@/icons/zag-underline.svg'
import IconCircle from '@/icons/circle.svg'
import Link from 'next/link'
import Image from 'next/image'
import ImageScale from '@/components/image-scale'
import { whatsOnQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import { reveal } from '@/helpers/transitions'
import Button from '@/components/button'
import PortableText from 'react-portable-text'
import SanityImageScale from '@/components/sanity-image-scale'

const pageService = new SanityPageService(whatsOnQuery)

const container = {
  enter: {
    transition: {
      staggerChildren: 0.066
    }
  }
}

const draw = {
  initial: { pathLength: 0 },
  enter: { pathLength: 1, transition: { delay: 0.3, duration: 0.66, ease: [0.71,0,0.17,1] }},
  exit: { pathLength: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1] }},
};

export default function WhatsOn(initialData) {
  const { data: { whatsOn }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={whatsOn.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          className="relative"
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="">
            <article>
              <div className="w-full bg-[#ffc3d6] relative selection:bg-off-black selection:text-[#ffc3d6]">
                <div className="w-full text-center uppercase min-h-screen flex flex-col items-center justify-center">
                  <m.h1 variants={container} className="text-[12vw] lg:text-[11.5vw] leading-none lg:leading-none text-[#BD3146]">
                    <span className="relative overflow-hidden block">
                      <m.span className="block" variants={reveal}>Discover</m.span>
                    </span>
                    <span className="block font-display italic relative overflow-hidden">
                      <m.span className="block" variants={reveal}>Nottingham</m.span>
                    </span>
                  </m.h1>

                  <svg className="text-[#BD3146] w-[90%] lg:w-[82%] mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1519.962 29.772">
                    <defs>
                      <clipPath id="a">
                        <path fill="none" d="M0 29.772h1519.962V0H0Z" data-name="Path 1258"/>
                      </clipPath>
                    </defs>
                    <g data-name="Group 562">
                      <g data-name="Group 561">
                        <g clipPath="url(#a)" data-name="Group 560">
                          <m.path variants={draw} fill="none" stroke="currentColor" strokeMiterlimit="120" strokeWidth="5" d="m2.182 4.398 20.949 20.949L43.557 4.398l20.949 20.949L85.454 4.398l20.428 20.949 20.947-20.949 20.953 20.949 20.423-20.949 20.949 20.949 20.949-20.949 20.423 20.949 20.95-20.949 20.949 20.949 20.426-20.949L313.8 25.347l20.949-20.949 20.426 20.949 20.949-20.949 20.949 20.949 20.948-20.949 20.434 20.949 20.433-20.949 20.949 20.949 20.945-20.949 20.39 20.949 20.386-20.949 20.949 20.949 20.948-20.949 20.427 20.949L624.83 4.398l20.952 20.949 20.423-20.949 20.949 20.949 20.949-20.949 20.424 20.949 20.949-20.949 20.949 20.949L790.85 4.398l20.949 20.949L832.75 4.398l20.426 20.949 20.949-20.949 20.949 20.949 20.948-20.949 20.434 20.949 20.433-20.949 20.949 20.949 20.949-20.949 20.5 20.949 21.025-20.949 20.426 20.949 20.944-20.949 20.846 20.947 20.326-20.947 20.949 20.949 20.949-20.949 20.43 20.949 20.944-20.949 20.949 20.949 20.426-20.949 20.949 20.949 20.949-20.949 20.424 20.949 20.949-20.949 20.949 20.949 20.426-20.949 20.949 20.949 20.95-20.949 20.426 20.949 20.949-20.949 20.949 20.949 20.949-20.949 20.434 20.949" data-name="Path 1257"/>
                        </g>
                      </g>
                    </g>
                  </svg>

                  {/* <IconZagUnderline className="text-[#BD3146] w-[90%] lg:w-[75%] mx-auto" /> */}
                </div>

                <div className="relative">
                  <div className="flex flex-wrap px-5 lg:px-[5vw] max-w-[1800px] mx-auto mb-8 lg:mb-0">
                    <div className="w-full lg:w-[55%]">
                      <div className="text-off-black mb-5 lg:mb-8">
                        <PortableText
                          className="content content--whats-on"
                          content={whatsOn.introText}
                        />
                      </div>

                      <Button href="/about-us" label="Check out Visit Notts!" borderColor="border-black"  />
                    </div>
                  </div>
                  
                  {whatsOn.imageBlocks[0] && (
                    <div className="relative lg:absolute lg:top-[8%] 2xl:top-[7%] lg:right-0 mb-12 lg:mb-0 w-full lg:w-[40vw] 2xl:w-[44vw]">
                      <div className="overflow-hidden relative bg-red h-[66vw] lg:h-[30vw] mb-5 lg:mb-0">
                        <SanityImageScale
                          p
                          image={whatsOn.imageBlocks[0].image}
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      </div>

                      <div className="relative max-w-[85%] 2xl:max-w-[65%] lg:-mt-5">
                        <IconCircle className="w-full text-[#FF5F38] mx-5 lg:mx-[8%] absolute inset-0 lg:translate-x-[-23%] 2xl:translate-x-[-25%] lg:translate-y-[-18%] 2xl:translate-y-[-20%] hidden lg:block" />

                        <h2 className="px-5 text-[6.5vw] leading-none lg:text-[2.5vw] 2xl:text-[2vw] lg:leading-none xl:leading-none 2xl:leading-none mb-[1vw] uppercase text-[#FF5F38] lg:max-w-[90%] 2xl:max-w-[80%]"><PortableText
                          className="whats-on-image-text"
                          content={whatsOn.imageBlocks[0].captionText}
                        /></h2>
                      </div>
                    </div>
                  )}

                  <div className="w-full h-auto lg:h-[70vw] xl:h-[80vw] 2xl:h-[75vw] overflow-hidden">
                    {whatsOn.imageBlocks[0] && (
                      <div className="w-full lg:w-[25vw] relative lg:absolute lg:bottom-[8%] xl:bottom-[15%] lg:left-0 overflow-hidden mb-12 lg:mb-0">
                        <div className="h-[66vw] lg:h-[38vw] bg-red relative overflow-hidden mb-5">
                          <SanityImageScale
                            image={whatsOn.imageBlocks[1].image}
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>

                        <h2 className="px-5 lg:px-[10%] text-[6.5vw] leading-none lg:text-[2.5vw] 2xl:text-[2vw] lg:leading-none xl:leading-none 2xl:leading-none mb-[1vw] uppercase text-[#437256] max-w-[75%] lg:max-w-none"><PortableText
                            className="whats-on-image-text"
                            content={whatsOn.imageBlocks[1].captionText}
                          /></h2>
                        
                        <IconSlattedUnderline className="w-[90%] text-[#437256] mx-5 lg:mx-[8%]" />
                      </div>
                    )}
                    
                    {whatsOn.imageBlocks[2] && (
                      <div className="w-full lg:w-[35vw] lg:absolute lg:bottom-[7%] lg:left-[44vw] overflow-hidden lg:overflow-visible flex flex-wrap">
                        <div className="w-full h-[66vw] lg:h-[24vw] bg-red relative overflow-hidden mb-5">
                          <SanityImageScale
                            image={whatsOn.imageBlocks[2].image}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>

                        <div className="lg:translate-x-[-20px]">
                          <h2 className="px-5 text-[6.5vw] leading-none lg:text-[2.5vw] 2xl:text-[2vw] lg:leading-none xl:leading-none 2xl:leading-none mb-[2vw] lg:mb-[1vw] uppercase text-[#FC8200] max-w-[65%]"><PortableText
                            className="whats-on-image-text"
                            content={whatsOn.imageBlocks[2].captionText}
                          /></h2>

                          <IconSquiggleUnderline className="mx-5 w-[70%] lg:w-[75%] xl:w-[60%] text-[#FC8200] mb-5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </main>

          <Footer />
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