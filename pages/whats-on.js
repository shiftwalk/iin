import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import { NextSeo } from 'next-seo'
import IconSlattedUnderline from '@/icons/slatted-underline.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconCircle from '@/icons/circle.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function WhatsOn() {
  return (
    <Layout>
      <NextSeo title="What's On" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full bg-[#FFB4CC] pt-[50vw] lg:pb-[16vw] lg:py-[20vw] xl:py-[15vw] relative selection:bg-off-black selection:text-[#FFB4CC]">
                <div className="w-full text-center uppercase pb-[10vw] lg:pb-[8vw] xl:pb-[6vw]">
                  <h1 className="text-[12vw] lg:text-[11vw] leading-none lg:leading-none text-[#FF5F38]">Discover <span className="block font-display italic">Nottingham</span></h1>
                </div>

                <div className="flex flex-wrap px-5 lg:px-[5vw] max-w-[1800px] mx-auto mb-8 lg:mb-0">
                  <div className="w-full lg:w-[55%]">
                    <div className="content font-display italic text-off-black text-[28px] lg:text-[32px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight mb-5 lg:mb-8">
                      <p>There&apos;s always something going on in Nottingham city centre. Not only is it great for shopping, dining, nights out, sporting events and more, there&apos;s also regular events to get involved in.</p>
                    </div>

                    <div className="content text-off-black text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight max-w-[90%] mb-5 lg:mb-8">
                      <p>We&apos;ve teamed up with our partners at Visit Notts to put every event worth knowing about in one space. Even though we love having you on our website, head over to theirs to find out what&apos;s on now and in the future.</p>
                    </div>

                    <Link href="/about-us" className="a11y-focus rounded-full border border-off-black text-off-black py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none">Check out Visit Notts!</Link>
                  </div>
                </div>

                <div className="relative lg:absolute lg:top-[58vw] 2xl:top-[57vw] lg:right-0 mb-12 lg:mb-0 w-full lg:w-[40vw] 2xl:w-[44vw]">
                  <div className="overflow-hidden relative bg-red h-[66vw] lg:h-[30vw] mb-5 lg:mb-0">
                    <Image
                      fill
                      quality={80}
                      src="/images/whats-on-01.jpg"
                      alt="Portrait image of Nottingham"
                      className="w-full h-full absolute inset-0 object-cover object-center scale-[1.003]"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>

                  <div className="relative max-w-[85%] 2xl:max-w-[65%] lg:-mt-5">
                    <IconCircle className="w-full text-[#FF5F38] mx-5 lg:mx-[8%] absolute inset-0 lg:translate-x-[-23%] 2xl:translate-x-[-25%] lg:translate-y-[-18%] 2xl:translate-y-[-20%] hidden lg:block" />

                    <h2 className="px-5 text-[6.5vw] leading-none lg:text-[2.5vw] 2xl:text-[2vw] lg:leading-none xl:leading-none 2xl:leading-none mb-[1vw] uppercase text-[#FF5F38] lg:max-w-[90%] 2xl:max-w-[80%]">Everything Nottingham City Centre<span className="font-display italic block text-off-black">In one place!</span></h2>
                  </div>
                </div>

                <div className="w-full h-auto lg:h-[60vw] xl:h-[70vw] 2xl:h-[63vw] overflow-hidden">
                  <div className="w-full lg:w-[25vw] relative lg:absolute lg:bottom-[16vw] xl:bottom-[22vw] 2xl:bottom-[20vw] lg:left-0 overflow-hidden mb-12 lg:mb-0">
                    <div className="h-[66vw] lg:h-[38vw] bg-red relative overflow-hidden mb-5">
                      <Image
                        fill
                        quality={80}
                        src="/images/whats-on-02.jpg"
                        alt="Portrait image of Nottingham"
                        className="w-full h-full absolute inset-0 object-cover object-center scale-[1.003]"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>

                    <h2 className="px-5 lg:px-[10%] text-[6.5vw] leading-none lg:text-[2.5vw] 2xl:text-[2vw] lg:leading-none xl:leading-none 2xl:leading-none mb-[1vw] uppercase text-[#437256] max-w-[75%] lg:max-w-none">Shopping locations &amp; Deals<span className="font-display italic block text-off-black">The hottest shops in town!</span></h2>
                    
                    <IconSlattedUnderline className="w-[90%] text-[#437256] mx-5 lg:mx-[8%]" />
                  </div>

                  <div className="w-full lg:w-[35vw] lg:absolute lg:bottom-[7.5vw] lg:left-[44vw] overflow-hidden lg:overflow-visible flex flex-wrap">
                    <div className="w-full h-[66vw] lg:h-[24vw] bg-red relative overflow-hidden mb-5">
                      <Image
                        fill
                        quality={80}
                        src="/images/whats-on-03.jpg"
                        alt="Portrait image of Nottingham"
                        className="w-full h-full absolute inset-0 object-cover object-center scale-[1.003]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    <div className="lg:translate-x-[18vw]">
                      <h2 className="px-5 text-[6.5vw] leading-none lg:text-[2.5vw] 2xl:text-[2vw] lg:leading-none xl:leading-none 2xl:leading-none mb-[2vw] lg:mb-[1vw] uppercase text-[#FC8200] max-w-[65%]">Food &amp; Drink recommendations<span className="font-display italic block text-off-black">See what&apos;s good!</span></h2>

                      <IconSquiggleUnderline className="mx-5 w-[70%] lg:w-[75%] xl:w-[60%] text-[#FC8200] mb-5" />
                    </div>
                  </div>
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
