import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconWaveUnderline from '@/icons/wave-underline.svg'
import IconSlattedUnderline from '@/icons/slatted-underline.svg'
import IconSmile from '@/icons/smile.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import NewsCarousel from '@/components/news-carousel'

export default function AboutUs() {
  return (
    <Layout>
      <NextSeo title="About Us" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full bg-[#4000B5] pt-[50vw] pb-[16vw] lg:py-[20vw] xl:py-[15vw] mb-[5vw] lg:mb-[10vw] selection:text-[#4000B5] selection:bg-[#FF5F38] relative">
                <div className="w-[33%] lg:w-[23vw] 2xl:w-[20vw] h-[52vw] lg:h-[33vw] 2xl:h-[30vw] bg-red absolute top-[10%] left-0 overflow-hidden">
                  <Image
                    fill
                    quality={80}
                    src="/images/about-01.jpg"
                    alt="Portrait image of Nottingham"
                    className="w-full h-full absolute inset-0 object-cover object-center scale-[1.005]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="w-[33%] lg:w-[25vw] h-[66vw] lg:h-[37vw] bg-red absolute top-[18%] right-0 overflow-hidden">
                  <Image
                    fill
                    quality={80}
                    src="/images/about-02.jpg"
                    alt="Portrait image of Nottingham"
                    className="w-full h-full absolute inset-0 object-cover object-center scale-[1.005]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                
                <div className="w-full text-center uppercase pb-[4vw] lg:pb-[10vw] xl:pb-[10vw] relative z-10">
                  <h1 className="text-[13.5vw] lg:text-[9vw] 2xl:text-[10vw] leading-none lg:leading-none 2xl:leading-none text-[#FF5F38]">
                    <span className="block">Making</span>
                    <span className="block">Nottingham</span>
                    <span className="block font-display italic">Thrive</span>
                    <IconSquiggleUnderline className="w-[60%] mx-auto mt-2" />
                  </h1>
                </div>

                <div className="flex flex-wrap relative z-10 lg:pl-[5vw] 2xl:pl-[7.5vw]">
                  <div className="w-full lg:w-1/2 hidden lg:block">
                    <div className="h-[30vw] relative overflow-hidden w-full">
                      <Image
                        fill
                        quality={80}
                        src="/images/about-03.jpg"
                        alt="Portrait image of Nottingham"
                        className="w-full h-full absolute inset-0 object-cover object-center scale-[1.005]"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                  <div className="ml-auto w-full lg:w-1/2 px-5 lg:pl-12 2xl:pl-20">
                    <div className="content font-display italic text-white text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight max-w-[95%] lg:max-w-[80%] pt-[10vw]">
                      <p>We are It&apos;s in Nottingham.</p>
                      <p>Our passion for Nottingham and commitment to support and promote our members will drive economic growth – creating a vibrant city centre which is a destination of choice for visitors.</p>
                      <p>Through every interaction we will build trust and inspire pride in our city centre, its businesses and its people to create a more attractive, healthier, safer, and greener place to live, work and play.</p>
                    </div>
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
                    <Image
                      fill
                      quality={80}
                      src="/images/about-in-01.jpg"
                      alt="Portrait image of Nottingham"
                      className="w-full h-full absolute inset-0 object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-[5vw] lg:mb-[10vw]">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
                  <h2 className="text-[10vw] leading-none lg:text-[5.5vw] lg:leading-none xl:leading-none uppercase text-[#FC8200] max-w-[100%] mb-6 lg:mb-10">Nottingham's <span className="font-display italic">Independant</span> Business</h2>

                  <div className="content content--fancy-first mb-[3vw] max-w-[530px] 2xl:max-w-[740px]">
                    <p>Indie businesses are a crucial point of difference for Nottingham&apos;s retail and leisure offer.</p>

                    <p>We&apos;re committed to recognising and celebrating the contribution indie businesses make to the local economy. Look out for our regular Independent Advisory Groups or contact <a href="mailto:indies@itsinnottingham.com">indies@itsinnottingham.com</a></p>
                  </div>
                </div>

                <div className="w-full lg:w-[37%] lg:mr-auto mb-6 lg:order-1">
                  <div className="w-full h-[120vw] lg:h-[44vw] bg-red relative overflow-hidden">
                    <Image
                      fill
                      quality={80}
                      src="/images/about-in-02.jpg"
                      alt="Portrait image of Nottingham"
                      className="w-full h-full absolute inset-0 object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#176B75] text-[#F5F1E1] grid grid-cols-1 lg:grid-cols-2 overflow-hidden mb-[5vw] lg:mb-[10vw]">
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

                    <Link href="/" className="a11y-focus rounded-full border border-[#F5F1E1] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none mx-auto text-[#F5F1E1]">View our latest calendar (PDF)</Link>
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-1 lg:order-2 relative">
                  <Image
                    fill
                    quality={80}
                    src="/images/about-in-03.jpg"
                    alt="Some students sat using the IIN app"
                    className="w-full h-full absolute inset-0 object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
                    <Image
                      fill
                      quality={80}
                      src="/images/about-in-04.jpg"
                      alt="Portrait image of Nottingham"
                      className="w-full h-full absolute inset-0 object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </div>

              <div className="px-[5vw] pr-0 mb-[5vw] lg:mb-[10vw]">
                <h3 className="font-display italic text-off-black text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight mb-3">
                  <span className="uppercase block">Our crime reduction initiatives</span>
                </h3>

                <IconSquiggleUnderline className="w-[80%] lg:w-[38%] 2xl:w-[44%] text-off-black translate-x-[-1vw] mb-[4vw]" />

                <div className="mb-[8vw] lg:mb-[5vw]">
                  <NewsCarousel />
                </div>
              </div>

              <div className="bg-[#BDB800] text-[#EBEA33] py-[10vw]">
                <div className="relative flex overflow-x-hidden text-[10vw] leading-[0] uppercase mb-12 lg:mb-20">
                  <div className="animate-marquee will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  </div>

                  <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Our team<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  </div>
                </div>
                
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
              </div>

              <div className="bg-[#176B75] text-[#F5F1E1] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="col-span-1 flex items-center justify-center px-[5vw] py-10 lg:py-[8vw] lg:pb-[10vw] order-2 lg:order-1">
                  <div className="w-full lg:px-0">                    
                    <div className="mb-8 lg:mb-12">
                      <h2 className="text-[8.5vw] leading-none lg:text-[4vw] lg:leading-none xl:text-[3.5vw] xl:leading-none text-[#EBEA33] max-w-[550px] lg:max-w-[100%] mb-3">
                        <span className="uppercase">Key </span>
                        <span className="font-display uppercase"><span className="italic">Resources</span></span>
                      </h2>
                    </div>

                    <div className="text-base leading-tight lg:text-lg 2xl:text-2xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-9/12 lg:w-[10/12]">
                      <p><a href="/" className="border-b border-off-white/40">Download business plan</a></p>
                      <p><a href="/" className="border-b border-off-white/40">Download latest review</a></p>
                      <p><a href="/" className="border-b border-off-white/40">Download another review</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-1 lg:order-2 relative">
                  <Image
                    fill
                    quality={80}
                    src="/images/about-in-05.jpg"
                    alt="Some students sat using the IIN app"
                    className="w-full h-full absolute inset-0 object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          </main>

          <Footer />
        </div>
      </LazyMotion>
    </Layout>
  )
}
