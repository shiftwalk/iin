import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export default function News() {
  return (
    <Layout>
      <NextSeo title="Latest News" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full py-[50vw] pb-[25vw] bg-white lg:py-[20vw] lg:pb-[10vw] xl:py-[15vw] xl:pb-[7.5vw] selection:bg-[#FF5F38] selection:text-off-white">
                <div className="w-full text-center uppercase">
                  <h1 className="text-[12vw] lg:text-[9vw] leading-none lg:leading-none text-[#FF5F38]">
                    <span className="inline">Latest</span> <span className="inline font-display italic">News</span>
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-8/12 mb-[20vw] lg:mb-[15vw] xl:mb-[12vw]">
                    <div className="content font-display italic text-off-black text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight text-center">
                      <p>Here&apos;s the lowdown on future city centre initiatives and events, as well as the latest on Nottingham&apos;s shops and eateries and other important news.</p>
                    </div>
                  </div>

                  <nav className="w-full mb-12">
                    <ul className="lg:flex lg:space-x-6 text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight">
                      <li className="mb-1 lg:mb-0 border-b border-off-black inline-block">All</li>
                      <li className="mb-1 lg:mb-0 opacity-20">Events</li>
                      <li className="mb-1 lg:mb-0 opacity-20">City Centre News</li>
                      <li className="mb-1 lg:mb-0 opacity-20">Community</li>
                      <li className="mb-1 lg:mb-0 opacity-20">Members</li>
                    </ul>
                  </nav>

                  <div className="w-full grid grid-cols-4 gap-12">
                    {/* 1 */}
                    <div className="col-span-4 lg:col-span-2">
                      <div className="w-full h-[60vw] lg:h-[22vw] bg-red mb-4 relative overflow-hidden">
                        <Image
                          fill
                          quality={80}
                          src="/images/carousel-01.jpg"
                          alt="Some students sat using the IIN app"
                          className="w-full h-full absolute inset-0 object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 25vw"
                        />
                      </div>

                      <div className="w-full">
                        <span className="block text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-none 2xl:leading-none font-medium mb-1">Safe Space Pledge</span>
                        <span className="text-base lg:text-lg 2xl:text-xl leading-none lg:leading-none 2xl:leading-none border-b border-off-black border-opacity-25 inline-block pb-1">Read More</span>
                      </div>
                    </div>
                    
                    {/* 2 */}
                    <div className="col-span-4 lg:col-span-1">
                      <div className="w-full h-[60vw] lg:h-[28vw] bg-red mb-4 relative overflow-hidden">
                        <Image
                          fill
                          quality={80}
                          src="/images/carousel-01.jpg"
                          alt="Some students sat using the IIN app"
                          className="w-full h-full absolute inset-0 object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 25vw"
                        />
                      </div>

                      <div className="w-full">
                        <span className="block text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-none 2xl:leading-none font-medium mb-1">Safe Space Pledge</span>
                        <span className="text-base lg:text-lg 2xl:text-xl leading-none lg:leading-none 2xl:leading-none border-b border-off-black border-opacity-25 inline-block pb-1">Read More</span>
                      </div>
                    </div>

                    {/* 3 */}
                    <div className="col-span-4 lg:col-span-1">
                      <div className="w-full h-[60vw] lg:h-[23vw] bg-red mb-4 relative overflow-hidden">
                        <Image
                          fill
                          quality={80}
                          src="/images/carousel-01.jpg"
                          alt="Some students sat using the IIN app"
                          className="w-full h-full absolute inset-0 object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 25vw"
                        />
                      </div>

                      <div className="w-full">
                        <span className="block text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-none 2xl:leading-none font-medium mb-1">Safe Space Pledge</span>
                        <span className="text-base lg:text-lg 2xl:text-xl leading-none lg:leading-none 2xl:leading-none border-b border-off-black border-opacity-25 inline-block pb-1">Read More</span>
                      </div>
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
