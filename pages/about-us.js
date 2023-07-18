import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <Layout>
      <NextSeo title="About Us" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full bg-[#4000B5] pt-[50vw] pb-[16vw] lg:py-[20vw] xl:py-[15vw] selection:text-[#4000B5] selection:bg-[#FF5F38] relative">
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
            </article>
          </main>

          <Footer />
        </div>
      </LazyMotion>
    </Layout>
  )
}
