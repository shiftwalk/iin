import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconFacebook from '@/icons/facebook.svg'
import IconLinkedin from '@/icons/linkedin.svg'
import IconTwitter from '@/icons/twitter.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import NewsTeaser from '@/components/news-teaser'
import { newsSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImageResponsive from '@/components/sanity-image-responsive'
import PortableText from 'react-portable-text'
import Blockquote from '@/components/blockquote'
const pageService = new SanityPageService(newsSlugQuery)

export default function News(initialData) {
  const { data: { current }  } = pageService.getPreviewHook(initialData)()
  let mainD = new Date(current.postDate);
  let mainYe = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(mainD);
  let mainMo = new Intl.DateTimeFormat('en', { month: 'short' }).format(mainD);

  return (
    <Layout>
      <NextSeo title={current.title} />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full selection:text-white selection:bg-[#176B75] pt-[25vw] lg:pt-[15vw] xl:pt-[10vw]">
                <div className="font-display italic text-lg lg:text-xl xl:text-2xl flex justify-center mb-8 lg:mb-12">
                  <div>
                    <Link href="/news">IIN News</Link><span>&nbsp;/&nbsp;{current.category.title}</span>
                  </div>
                </div>
                <div className="w-full text-center uppercase px-5 lg:px-[10vw] pb-[3.3vw]">
                  <h1 className="text-[9vw] lg:text-[5.5vw] leading-[0.9] lg:leading-[0.9] text-[#437256]">{current.title}</h1>
                </div>
              </div>

              
              <div className={`w-full relative px-5 lg:px-[7.5vw] mb-[5vw]`}>
                {current.heroImage && (
                  <SanityImageResponsive
                    priority
                    quality={80}
                    image={current.heroImage}
                    className="w-full"
                  />
                )}
              </div>
              
              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-12 lg:mb-[7.5vw]">

                <div className="w-full lg:w-[72%] mb-8 lg:mb-0">
                  <div className="w-[95%] lg:w-[80%]">
                    {current.introText && (
                      <h2 className="font-display italic text-[5.25vw] lg:text-[3vw] xl:text-[2.8vw] leading-[1.075] lg:leading-[1.075] xl:leading-[1.075] mb-8 lg:mb-12">{current.introText}</h2>
                    )}

                    <p className="text-base lg:text-lg xl:text-xl leading-none lg:leading-none xl:leading-none mb-6 lg:mb-12"><strong>Posted:</strong> {mainMo} {mainYe}</p>

                    <hr className="border-t-0 border-b border-[#B4C0C6] mb-6 lg:mb-12" />

                    <div className="mb-6 lg:mb-12">
                      {current.content ? (
                        <PortableText
                          content={current.content}
                          className="content content--news"
                          serializers={{
                            Quote: (props) => <Blockquote quote={props.quote} author={props.author} />,
                            Image: (props) => <SanityImageResponsive image={props.image} />
                          }}
                        />
                      ) : (
                        <p>Content coming soon!</p>
                      )}
                    </div>

                    <hr className="border-t-0 border-b border-[#B4C0C6] mb-6 lg:mb-12" />

                    <p className="text-base lg:text-lg xl:text-xl font-bold mb-3 lg:mb-5">Share Article:</p>
                    
                    <div className="flex space-x-4 lg:space-x-6 xl:space-x-7 items-center">
                      <a
                        className="w-3 lg:w-4 xl:w-5 block"
                        href={`https://www.facebook.com/share.php?u=https://iin-staging.vercel.app/news/${current.slug.current}&quote=${current.title}
                        `}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconFacebook className="w-full text-[#B4C0C6]" />
                      </a>
                      
                      <a
                        className="w-6 lg:w-8 xl:w-9 block"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://iin-staging.vercel.app/news/${current.slug.current}&quote=${current.title}
                        `}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconLinkedin className="w-full text-[#B4C0C6]" />
                      </a>
                      
                      <a
                        className="w-6 lg:w-8 xl:w-9 translate-y-[2px] block"
                        href={`http://twitter.com/share?text=${current.title}&url=https://iin-staging.vercel.app/news/${current.slug.current}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconTwitter className="w-full text-[#B4C0C6]" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[28%]">
                  <div className="bg-[#EBE8DF] p-5 lg:p-[2vw] lg:pb-6">
                    <h3 className="text-2xl lg:text-2xl xl:text-3xl block leading-none lg:leading-none xl:leading-none">Related Articles</h3>

                    { current.related.map((e, i) => {
                      let width = 'w-full'
                      let imageHeight = 'h-[50vw] lg:h-[15vw]'

                      return (
                        <NewsTeaser key={i} subHeading={e.category.title} heading={e.title} image={e.teaserImage} className={`${width} ${ i != 2 && 'mb-12'}`} imageHeight={imageHeight} href={`/news/${e.slug.current}`} />
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
                  { current.more.map((e, i) => {
                    let width = 'col-span-4 lg:col-span-1'
                    let imageHeight = 'h-[60vw] lg:h-[25vw]'

                    i == 0 && ( width = 'col-span-4 lg:col-span-2' )
                    i == 1 && ( imageHeight = 'h-[60vw] lg:h-[28vw]' )
                    i == 2 && ( imageHeight = 'h-[60vw] lg:h-[24vw]' )
                    i == 3 && ( imageHeight = 'h-[60vw] lg:h-[14vw]' )
                    i == 4 && ( imageHeight = 'h-[60vw] lg:h-[25vw]' )
                    i == 5 && ( imageHeight = 'h-[60vw] lg:h-[12.5vw]' )

                    return (
                      <NewsTeaser key={i} subHeading={e.category.title} heading={e.title} image={e.teaserImage} className={width} imageHeight={imageHeight} href={`/news/${e.slug.current}`} />
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

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('news')
  return {
    paths: paths,
    fallback: false,
  };
}