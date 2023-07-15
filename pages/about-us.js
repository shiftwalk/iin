import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import { NextSeo } from 'next-seo'

export default function AboutUs() {
  return (
    <Layout>
      <NextSeo title="About Us" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full bg-[#4000B5] py-[50vw] lg:py-[20vw] xl:py-[15vw]">
                <div className="w-full text-center uppercase">
                  <h1 className="text-[12vw] lg:text-[9vw] leading-none lg:leading-none text-[#FF5F38]">
                  <span className="block">Making</span>
                  <span className="block">Nottingham</span>
                  <span className="block font-display italic">Thrive</span>
                  <IconSquiggleUnderline className="w-[60%] mx-auto mt-2" />
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
