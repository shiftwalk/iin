import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function News() {
  return (
    <Layout>
      <NextSeo title="Latest News" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full py-[25vw] bg-white lg:py-[20vw] xl:py-[15vw]">
                <div className="w-full text-center uppercase">
                  <h1 className="text-[9vw] leading-none text-[#FF5F38]">
                  <span className="inline">Latest</span> <span className="inline font-display italic">News</span>
                </h1>
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
