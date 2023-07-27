import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import { NextSeo } from 'next-seo'
import NewsTeaser from '@/components/news-teaser'
import { catQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
const pageService = new SanityPageService(catQuery)

export default function NewsCat(initialData) {
  const { data: { contact, policies, cat }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={cat.title} />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full py-[50vw] pb-[25vw] bg-white lg:py-[20vw] lg:pb-[10vw] xl:py-[15vw] xl:pb-[7.5vw] selection:bg-[#FF5F38] selection:text-white">
                <div className="w-full text-center uppercase">
                  <h1 className="text-[12vw] lg:text-[10.5vw] leading-[0.9] lg:leading-[0.9] text-[#FF5F38]">
                    <span className="inline">{cat.title}</span>
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-8/12 mb-[20vw] lg:mb-[15vw] xl:mb-[12vw]">
                    <div className="content font-display text-off-black text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight text-center">
                      <p>Here&apos;s the <em>lowdown</em> on future city centre <em>initiatives</em> and <em>events</em>, as well as the latest on Nottingham&apos;s <em>shops</em> and <em>eateries</em> and other important news.</p>
                    </div>
                  </div>

                  <nav className="w-full mb-5 lg:mb-8">
                    <ul className="lg:flex lg:space-x-6 text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight">
                      <li className="mb-1 lg:mb-0 text-opacity-20 text-black inline-block"><Link href="/news">All</Link></li>
                      {cat.cats.map((e, i) => {
                        return (
                          <li key={i} className="mb-1 lg:mb-0"><Link className={`text-black  ${e.slug.current == cat.slug.current ? 'text-opacity-100 border-b border-off-black' : 'text-opacity-20' }`} href={`/news/categories/${e.slug.current}`}>{e.title}</Link></li>
                        )
                      })}
                    </ul>
                  </nav>
                  
                  { cat.news.length ? (
                    <div className="w-full grid grid-cols-4 gap-12 mb-[5vw]">
                      { cat.news.map((e, i) => {
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
                          <NewsTeaser key={i} subHeading={e.category.title} heading={e.title} image={e.teaserImage} className={width} imageHeight={imageHeight} href={`/news/${e.slug.current}/`} />
                        )
                      })}
                    </div>
                  ) : (
                    <div className="w-full mb-[5vw]">
                      <p>Currently no articles in this category</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </main>

          <Footer policies={policies} contact={contact} />
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
  const paths = await pageService.fetchPaths('categories')
  return {
    paths: paths,
    fallback: false,
  };
}