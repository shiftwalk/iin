import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconWaveUnderline from '@/icons/wave-underline.svg'
import IconSlattedUnderline from '@/icons/slatted-underline.svg'
import IconSmile from '@/icons/smile.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import NewsCarousel from '@/components/news-carousel'
import ImageScale from '@/components/image-scale'
import SanityPageService from '@/services/sanityPageService'
import { aboutQuery } from '@/helpers/queries'
import { reveal } from '@/helpers/transitions'
import Button from '@/components/button'
const pageService = new SanityPageService(aboutQuery)

const container = {
  enter: {
    transition: {
      staggerChildren: 0.066
    }
  }
}

const svg = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0.2, duration: 0.66, ease: [0.71,0,0.17,1] }},
};

const draw = {
  initial: { pathLength: 0 },
  enter: { pathLength: 1, transition: { delay: 0.3, duration: 0.66, ease: [0.71,0,0.17,1] }},
  exit: { pathLength: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1] }},
};

export default function AboutUs(initialData) {
  const { data: { about }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={about.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          className="relative"
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="">
            <article>
              <div className="w-full bg-[#4000B5] selection:text-[#4000B5] selection:bg-[#23D6D1] relative min-h-screen flex flex-col items-center justify-center">
                <div className="w-[33%] lg:w-[19vw] 2xl:w-[18vw] h-[52vw] lg:h-[28vw] 2xl:h-[26vw] bg-red absolute top-[15%] lg:top-[13%] left-0 overflow-hidden">
                  <ImageScale
                    src="/images/about-01.jpg"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="w-[33%] lg:w-[25vw] h-[66vw] lg:h-[37vw] bg-red absolute top-[18%] right-0 overflow-hidden">
                  <ImageScale
                    src="/images/about-02.jpg"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="w-[55%] lg:w-[45vw] h-[36vw] lg:h-[37vw] bg-red absolute bottom-[15%] left-[-5%] overflow-hidden block lg:hidden">
                <div className="h-full relative overflow-hidden w-full">
                  <ImageScale
                    src="/images/about-03.jpg"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                </div>
                
                <div className="w-full text-center uppercase relative z-10">
                  <m.h1 variants={container} className="text-[15.5vw] lg:text-[12vw] 2xl:text-[12vw] leading-none lg:leading-none 2xl:leading-none text-[#23D6D1]">
                    <span className="block overflow-hidden relative">
                      <m.span className="block" variants={reveal}>Get To</m.span>
                    </span>
                    <span className="block overflow-hidden relative font-display italic">
                      <m.span className="block" variants={reveal}>Know Us</m.span>
                    </span>

                    <m.svg variants={svg} className="w-[80%] lg:w-[60%] mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1054.61 41.078">
                      <m.path variants={draw} stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth="5" d="M1052.091 2.519S439.691 7.143 62.04 36.748c-99.9 7.827-41.862-11.468-50.6-11.237" data-name="Path 1259"/>
                    </m.svg>

                    {/* <IconSquiggleUnderline className="w-[80%] lg:w-[60%] mx-auto mt-2" /> */}
                  </m.h1>
                </div>
              </div>

              <div className="flex flex-wrap relative z-10 lg:pl-[5vw] 2xl:pl-[7.5vw] bg-[#4000B5] pb-[16vw] lg:pb-[20vw] xl:pb-[15vw] mb-[5vw] lg:mb-[10vw] selection:text-[#4000B5] selection:bg-[#23D6D1]">
                <div className="w-full lg:w-[43%] hidden lg:block translate-y-[-15vh]">
                  <div className="h-[27vw] relative overflow-hidden w-full">
                    <ImageScale
                      src="/images/about-03.jpg"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
                <div className="ml-auto w-full lg:w-[54%] px-5 lg:pl-12 2xl:pl-20">
                  <div className="content font-display text-white text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight max-w-[95%] lg:max-w-[90%]">
                    <p><em>We are It&apos;s in Nottingham.</em></p>
                    <p>Our passion for Nottingham and commitment to support and promote our members will drive economic growth – creating a vibrant city centre which is a destination of choice for visitors.</p>
                    <p>Through every interaction we will build trust and inspire pride in our city centre, its businesses and its people to create a more attractive, healthier, safer, and greener place to live, work and play.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-[5vw] lg:mb-[10vw]">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <h2 className="text-[10vw] leading-none lg:text-[5.5vw] lg:leading-none xl:leading-none uppercase text-[#176B75] max-w-[100%] mb-6 lg:mb-10">Delivering value for <span className="font-display italic">our members</span></h2>

                  <div className="content content--fancy-first mb-[3vw] max-w-[530px] 2xl:max-w-[740px]">
                    <p>At our latest ballot we secured the votes required for a new five year term from 2021 to 2025. So, first of all, thank you.</p>

                    <p>We&apos;re proud of our track record of representing the interests of Nottingham&apos;s city centre business communities and remain committed to championing local businesses by creating opportunities to promote the city centre, and by collaborating with partners and members to realise our vision for innovative and transformative projects.</p>
                    
                    <p>We&apos;ll continue driving Nottingham forward - acting as ambassadors for businesses in the city centre to generate and deliver long-term value.</p>
                  </div>
                </div>

                <div className="w-full lg:w-[37%] lg:ml-auto mb-6">
                  <div className="w-full h-[120vw] lg:h-[44vw] bg-red relative overflow-hidden">
                    <ImageScale
                      src="/images/about-in-01.jpg"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-[5vw] lg:mb-[10vw]">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
                  <h2 className="text-[10vw] leading-none lg:text-[5.5vw] lg:leading-none xl:leading-none uppercase text-[#FC8200] max-w-[100%] mb-6 lg:mb-10">Nottingham&apos;s <span className="font-display italic">Independant</span> Business</h2>

                  <div className="content content--fancy-first mb-[3vw] max-w-[530px] 2xl:max-w-[740px]">
                    <p>Indie businesses are a crucial point of difference for Nottingham&apos;s retail and leisure offer.</p>

                    <p>We&apos;re committed to recognising and celebrating the contribution indie businesses make to the local economy. Look out for our regular Independent Advisory Groups or contact <a href="mailto:indies@itsinnottingham.com">indies@itsinnottingham.com</a></p>
                  </div>
                </div>

                <div className="w-full lg:w-[37%] lg:mr-auto mb-6 lg:order-1">
                  <div className="w-full h-[120vw] lg:h-[44vw] bg-red relative overflow-hidden">
                    <ImageScale
                      src="/images/about-in-02.jpg"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#176B75] text-[#F5F1E1] grid grid-cols-1 lg:grid-cols-2 overflow-hidden mb-[5vw] lg:mb-[10vw] selection:text-[#176B75] selection:bg-[#EBEA33]">
                <div className="col-span-1 flex items-center justify-center px-[5vw] py-10 pb-[20vw] lg:py-[8vw] lg:pb-[10vw] order-2 lg:order-1">
                  <div className="w-full lg:px-0">
                    <span className="text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-non 2xl:leading-none block mb-3">What&apos;s on?</span>
                    
                    <div className="mb-8 lg:mb-12">
                      <h2 className="text-[9.5vw] leading-none lg:text-[5vw] lg:leading-none xl:text-[4.5vw] xl:leading-none text-[#EBEA33] max-w-[550px] lg:max-w-[100%] mb-3">
                        <span className="uppercase block">Get the event</span>
                        <span className="font-display uppercase"><span className="italic">Calendar</span></span>
                      </h2>
                      <IconWaveUnderline className="w-full text-[#EBEA33] max-w-[60%]"/>
                    </div>

                    <div className="content text-base leading-tight lg:text-lg 2xl:text-2xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-9/12 lg:w-[10/12] mb-8 lg:mb-[10%]">
                      <p>Get involved and benefit from our promotion of Nottingham city centre by downloading our events calendar.</p>
                      
                      <p>Look out for seasonal activities around Halloween and Christmas, get involved in annual favourites like February&apos;s Light Night and make the most of local collaborations we&apos;re a part of such as AyUp Market, the sponsorship of Green Hustle and Pride.</p>
                    </div>


                    <Button href="/" label="View our latest calendar (PDF)" bgColor="bg-black/30" large />
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-1 lg:order-2 relative h-[75vw] lg:h-auto">
                  <ImageScale
                    src="/images/about-in-03.jpg"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-[5vw] lg:mb-[10vw]">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
                  <h2 className="text-[10vw] leading-none lg:text-[5.5vw] lg:leading-none xl:leading-none uppercase text-[#FF5F38] max-w-[100%] mb-6 lg:mb-10">Business Crime <span className="font-display italic">Reduction</span> Partnership</h2>

                  <div className="content content--fancy-first mb-[3vw] max-w-[530px] 2xl:max-w-[740px]">
                    <p>We run a range of initiatives that have the purpose of reducing the impact of city centre crime as part of our accredited Business Crime Reduction Partnership (BCRP).</p>

                    <p>To get involved in any of these initiatives, or to find out more, please contact bcrp@itsinnottingham.com. Read our latest news for more information about city centre safety initiatives.</p>
                  </div>
                </div>

                <div className="w-full lg:w-[37%] lg:mr-auto mb-6 lg:order-1">
                  <div className="w-full h-[120vw] lg:h-[44vw] bg-red relative overflow-hidden">
                    <ImageScale
                      src="/images/about-in-04.jpg"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>

              <div className="pr-0 mb-[5vw] lg:mb-[10vw]">
                <div className="px-[5vw]">
                  <h3 className="font-display text-off-black text-[24px] lg:text-[32px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight mb-3">
                    <span className="block">Our crime reduction initiatives</span>
                  </h3>

                  <IconSquiggleUnderline className="w-[80%] lg:w-[38%] 2xl:w-[44%] text-off-black translate-x-[-1vw] mb-[4vw]" />
                </div>

                <div className="mb-[8vw] lg:mb-[5vw]">
                  <NewsCarousel items={about.crimeReductionInitiatives} initiatives />
                </div>
              </div>

              <div className="bg-[#BDB800] text-off-black grid grid-cols-1 lg:grid-cols-2 overflow-hidden mb-[5vw] lg:mb-[10vw] selection:text-[#BDB800] selection:bg-off-black">
                <div className="col-span-1 flex items-center justify-center px-[5vw] py-10 pb-[20vw] lg:py-[8vw] lg:pb-[10vw] order-2 lg:order-2">
                  <div className="w-full lg:px-0">
                    <span className="text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-non 2xl:leading-none block mb-3">Our People</span>
                    
                    <div className="mb-8 lg:mb-12">
                      <h2 className="text-[9.5vw] leading-none lg:text-[5vw] lg:leading-none xl:text-[5vw] xl:leading-none text-[#EBEA33] max-w-[550px] lg:max-w-[100%] mb-3">
                        <span className="uppercase block">It&apos;s a real</span>
                        <span className="font-display uppercase"><span className="italic">team effort</span></span>
                      </h2>
                      {/* <IconWaveUnderline className="w-full text-[#EBEA33] max-w-[60%]"/> */}
                    </div>

                    <div className="content text-base leading-tight lg:text-lg 2xl:text-2xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-9/12 lg:w-[10/12] mb-8 lg:mb-[10%]">
                      <p>The It&apos;s in Nottingham team are your day to day point of contact; we are dedicated to listening to your business needs and making time to communicate effectively with you.</p>
                    </div>

                    <div className="flex space-x-5">
                      <Button href="/" label="Board Of Directors" borderColor="border-off-black" bgColor="bg-black/20" large className="w-full" />

                      <Button href="/" label="The IIN Team" borderColor="border-off-black" bgColor="bg-black/20" large className="w-full" />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-1 lg:order-1 relative h-[90vw] lg:h-auto">
                  <ImageScale
                    src="/images/team.jpg"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>

              {/* <div className="bg-[#BDB800] text-[#EBEA33] py-[10vw]">
                <h3 className="font-display italic text-off-black text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight px-5 lg:px-[7.5vw] max-w-[90%] lg:max-w-[75%] mb-[7.5vw]">
                  <span className="block">The It&apos;s in Nottingham team are your day to day point of contact; we are dedicated to listening to your business needs and making time to communicate effectively with you.</span>
                </h3>

                <div className="flex flex-wrap px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <h3 className="text-[6.5vw] leading-none lg:text-[3.5vw] 2xl:text-[3vw] lg:leading-none xl:leading-none 2xl:leading-none mb-6 lg:mb-12 uppercase text-off-black lg:max-w-[90%] 2xl:max-w-[80%]">Meet <span className="relative"><IconSquiggleUnderline className="absolute -bottom-2 left-0 right-0 w-full scale-[1.1]" />our <span className="font-display italic relative">board</span></span></h3>
                    
                    <div className="text-off-black text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight max-w-[75%]">
                      <p className="mb-8 lg:mb-12">Our operation and management is overseen by a Board of Directors drawn from the retail, leisure, office and education sectors.</p>

                    <Link href="/" className="a11y-focus rounded-full border border-off-black py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none mx-auto text-off-black">Meet the team!</Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <h3 className="text-[6.5vw] leading-none lg:text-[3.5vw] 2xl:text-[3vw] lg:leading-none xl:leading-none 2xl:leading-none mb-8 lg:mb-12 uppercase text-off-black lg:max-w-[90%] 2xl:max-w-[80%] relative">
                      Meet the <span className="font-display italic">IIN Team</span>
                      <IconSlattedUnderline className="absolute -bottom-5 left-0 right-0 w-[55%]" />
                    </h3>
                    
                    <div className="text-off-black text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight max-w-[85%]">
                      <p className="mb-8 lg:mb-12">Together, the It&apos;s in Nottingham team will make the city centre a vibrant and safe place to visit and ensure sustainable economic growth for Nottingham.</p>

                      <Link href="/" className="a11y-focus rounded-full border border-off-black py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none mx-auto text-off-black">Meet the team!</Link>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="relative flex overflow-x-hidden text-[10vw] leading-[0] uppercase my-12 lg:my-[7vw] text-[#FF5F38]">
                <div className="animate-marquee will-change-transform whitespace-nowrap">
                  <span className="relative overflow-hidden inline-block font-display italic">Read All<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">About It<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">About It<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">About It<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                </div>

                <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap">
                  <span className="relative overflow-hidden inline-block font-display italic">Read All<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">About It<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">About It<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">About It<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="col-span-1 flex items-center justify-center px-[5vw] pb-10 lg:pb-[10vw] order-2 lg:order-1">
                  <div className="w-full lg:px-0">                    
                    <h2 className="text-2xl leading-none lg:3xl lg:leading-none xl:text-4xl xl:leading-none max-w-[550px] lg:max-w-[100%] mb-3 lg:mb-4">Key Resources</h2>
                    
                    <div className="text-base leading-tight lg:text-lg 2xl:text-xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-9/12 lg:w-[10/12] mb-6">
                      <p>Here you can view and download our latest resources and reports. If you can&apos;t find what you&apos;re looking for contact us via info@itsinnottingham.com</p>
                    </div>

                    <div className="text-base leading-tight lg:text-lg 2xl:text-xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-9/12 lg:w-[10/12]">
                      <p><a href="#" className="border-b border-off-white/40">Download business plan</a></p>
                      <p><a href="#" className="border-b border-off-white/40">Download latest review</a></p>
                      <p><a href="#" className="border-b border-off-white/40">Download another review</a></p>
                    </div>
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