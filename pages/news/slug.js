import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconFacebook from '@/icons/facebook.svg'
import IconLinkedin from '@/icons/linkedin.svg'
import IconTwitter from '@/icons/twitter.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import Socials from '@/components/socials'
import { news } from '@/helpers/temp-data'
import NewsTeaser from '@/components/news-teaser'

export default function Article() {
  return (
    <Layout>
      <NextSeo title="Article" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full selection:text-white selection:bg-[#176B75] pt-[25vw] lg:pt-[15vw] xl:pt-[10vw]">
                <div className="font-display italic text-lg lg:text-xl xl:text-2xl flex justify-center mb-8 lg:mb-12">
                  <div>
                    <Link href="/news">IIN News</Link><span>&nbsp;/&nbsp;Events</span>
                  </div>
                </div>
                <div className="w-full text-center uppercase px-5 lg:px-[10vw] pb-[3.3vw]">
                  <h1 className="text-[9vw] lg:text-[5.5vw] leading-[0.9] lg:leading-[0.9] text-[#437256]">Ay-up market to celebrate nottingham&apos;s independent traders</h1>
                </div>
              </div>

              <div className={`w-full relative px-5 lg:px-[7.5vw] mb-[5vw]`}>
                <Image
                  width={2504}
                  height={870}
                  priority
                  quality={80}
                  src="/images/slug-hero.jpg"
                  alt="Some students sat using the IIN app"
                  className="w-full"
                />
              </div>
              
              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-12 lg:mb-[7.5vw]">

                <div className="w-full lg:w-[72%] mb-8 lg:mb-0">
                  <div className="w-[95%] lg:w-[80%]">
                    <h2 className="font-display italic text-[5.25vw] lg:text-[3vw] xl:text-[2.8vw] leading-[1.075] lg:leading-[1.075] xl:leading-[1.075] mb-8 lg:mb-12">After the success of last year&apos;s event, the Ay-Up Market will return to the city from Friday 16 June to Sunday 18 June 2023.</h2>

                    <p className="text-base lg:text-lg xl:text-xl leading-none lg:leading-none xl:leading-none mb-6 lg:mb-12"><strong>Posted:</strong> June 2023</p>

                    <hr className="border-t-0 border-b border-[#B4C0C6] mb-6 lg:mb-12" />

                    <div className="content content--news mb-6 lg:mb-12">
                      <p>Nottingham&apos;s Old Market Square will be once again playing host to over 55 vendors at this year&apos;s Ay-UpMarket.</p>
                      
                      <p>Organised by It&apos;s in Nottingham, in partnership with Nottingham City Council, the market gives Nottingham-based independent retailers and creatives, both bricks and mortar and online, a unique trading platform which will highlight the city&apos;s fantastic independents.</p>
                      
                      <p>Curated by Pitch Presents , visitors can expect to see freshly baked goods, sweet treats, fine wine, vintage clothing, plants, skin care, arts, crafts, and handmade jewellery available from local independent retailers over the three days.</p>
                      
                      <p>Some of the popular businesses taking part include Shop Zero, Slow Make Studio, Soul and Flare, Taste First, Treat Kitchen, Megan Crook Textiles, Sap Plants and Hallo Ceramics.</p>
                      
                      <p>Alongside the market stalls, the event will also include a full programme of exciting live music and family-friendly performances, collectively arranged by local creative studio, Mimm, and Phlexx Records, in collaboration with DHP Family.</p>
                      
                      <p>The Carousel will be hosting creative workshops over the weekend, and visitors can enjoy street performances from City Arts and Can Samba, among others.</p>
                      
                      <p>Food and drink from Nottingham Street Food Club will be on offer with global flavours taking centre stage, with cuisines from Caribbean to Thai represented within Old Market Square. Food Traders include Prad Thai, Yello Yard, Carolina&apos;s Chilli and MemSaab.</p>

                      <blockquote>
                        <cite>Alex Flint, CEO of It's In Nottingham said:</cite>
                        <p>“&nbsp;The market proved to be really popular last year and played an important role in bringing people into the city centre from miles around. People who visited also went on to explore the wider city which was a great boost for businesses.”</p>
                      </blockquote>

                      <blockquote>
                        <cite>Cllr Pavlos Kotsonis, Portfolio Holder for Leisure and Culture at Nottingham City Council, said:</cite>
                        <p>“&nbsp;Last year&apos;s Ay-UpMarket was a huge success, and we&apos;re delighted to be able to bring it back for a second year in partnership with It&apos;s in Nottingham. It&apos;s a great opportunity for people to visit the city centre and discover Nottingham&apos;s fantastic independent traders. Alongside the variety of market stalls, I&apos;m also looking forward to the range of family-friendly entertainment on offer.”</p>
                      </blockquote>

                      <p>The Ay-UpMarket has received £30,000 from the UK Government through the UK Shared Prosperity Fund.</p>
                    </div>

                    <hr className="border-t-0 border-b border-[#B4C0C6] mb-6 lg:mb-12" />

                    <p className="text-base lg:text-lg xl:text-xl font-bold mb-3 lg:mb-5">Share Article:</p>
                    
                    <div className="flex space-x-4 lg:space-x-6 xl:space-x-7 items-center">
                      <IconFacebook className="w-3 lg:w-4 xl:w-5 text-[#B4C0C6]" />
                      <IconLinkedin className="w-6 lg:w-8 xl:w-9 text-[#B4C0C6]" />
                      <IconTwitter className="w-6 lg:w-8 xl:w-9 translate-y-[2px] text-[#B4C0C6]" />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[28%]">
                  <div className="bg-[#EBE8DF] p-5 lg:p-[2vw] lg:pb-6">
                    <h3 className="text-2xl lg:text-2xl xl:text-3xl block leading-none lg:leading-none xl:leading-none">Related Articles</h3>

                    { news.slice(0,3).map((e, i) => {
                      let width = 'w-full'
                      let imageHeight = 'h-[50vw] lg:h-[15vw]'

                      return (
                        <NewsTeaser key={i} subHeading={e.category.title} heading={e.title} image={e.image} className={`${width} ${ i != 2 && 'mb-12'}`} imageHeight={imageHeight} href={e.href} />
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="w-full mb-20 lg:mb-[7.5vw] px-5 lg:px-[7.5vw]">
                <div className="mb-8 lg:mb-12">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl block leading-none lg:leading-none xl:leading-none mb-2 lg:mb-3 pb-0">More Stories</h3>
                  <IconSquiggleUnderline className="w-[45%] lg:w-[23%] -translate-x-2 lg:translate-x-[-8%]" />
                </div>
                
                <div className="grid grid-cols-4 gap-12 mb-12 lg:mb-[5vw]">
                  { news.slice(0,7).map((e, i) => {
                    let width = 'col-span-4 lg:col-span-1'
                    let imageHeight = 'h-[60vw] lg:h-[25vw]'

                    i == 0 && ( width = 'col-span-4 lg:col-span-2' )
                    i == 1 && ( imageHeight = 'h-[60vw] lg:h-[28vw]' )
                    i == 2 && ( imageHeight = 'h-[60vw] lg:h-[24vw]' )
                    i == 3 && ( imageHeight = 'h-[60vw] lg:h-[14vw]' )
                    i == 4 && ( imageHeight = 'h-[60vw] lg:h-[25vw]' )
                    i == 5 && ( imageHeight = 'h-[60vw] lg:h-[12.5vw]' )

                    return (
                      <NewsTeaser key={i} subHeading={e.category.title} heading={e.title} image={e.image} className={width} imageHeight={imageHeight} href={e.href} />
                    )
                  })}
                </div>

                <div className="w-full flex items-center justify-center">
                  <Link href="/news" className="a11y-focus rounded-full border border-off-black py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none">View all stories</Link>
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
