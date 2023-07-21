import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import { NextSeo } from 'next-seo'
import NewsTeaser from '@/components/news-teaser'
import { news } from '@/helpers/temp-data'

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
                  <h1 className="text-[12vw] lg:text-[10.5vw] leading-none lg:leading-none text-[#FF5F38]">
                    <span className="inline">Latest</span> <span className="inline font-display italic">News</span>
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-8/12 mb-[20vw] lg:mb-[15vw] xl:mb-[12vw]">
                    <div className="content font-display italic text-off-black text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight text-center">
                      <p>Here&apos;s the lowdown on future city centre initiatives and events, as well as the latest on Nottingham&apos;s shops and eateries and other important news.</p>
                    </div>
                  </div>

                  <nav className="w-full mb-5 lg:mb-8">
                    <ul className="lg:flex lg:space-x-6 text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight">
                      <li className="mb-1 lg:mb-0 border-b border-off-black inline-block">All</li>
                      <li className="mb-1 lg:mb-0 opacity-20">Events</li>
                      <li className="mb-1 lg:mb-0 opacity-20">City Centre News</li>
                      <li className="mb-1 lg:mb-0 opacity-20">Community</li>
                      <li className="mb-1 lg:mb-0 opacity-20">Members</li>
                    </ul>
                  </nav>

                  <div className="w-full grid grid-cols-4 gap-12 mb-[5vw]">
                    { news.map((e, i) => {
                      let width = 'col-span-4 lg:col-span-1'
                      let imageHeight = 'h-[60vw] lg:h-[25vw]'

                      i == 0 && ( width = 'col-span-4 lg:col-span-2' )
                      i == 1 && ( imageHeight = 'h-[60vw] lg:h-[28vw]' )
                      i == 2 && ( imageHeight = 'h-[60vw] lg:h-[24vw]' )
                      i == 3 && ( imageHeight = 'h-[60vw] lg:h-[14vw]' )
                      i == 4 && ( imageHeight = 'h-[60vw] lg:h-[25vw]' )
                      i == 5 && ( imageHeight = 'h-[60vw] lg:h-[12.5vw]' )
                      i == 8 && ( imageHeight = 'h-[60vw] lg:h-[22vw]' )
                      i == 9 && ( width = 'col-span-4 lg:col-span-2', imageHeight = 'h-[60vw] lg:h-[27vw]' )

                      return (
                        <NewsTeaser key={i} subHeading={e.category.title} heading={e.title} image={e.image} className={width} imageHeight={imageHeight} href={e.href} />
                      )
                    })}
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
