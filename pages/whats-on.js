import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function WhatsOn() {
  return (
    <Layout>
      <NextSeo title="What's On" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full bg-[#FFB4CC] py-[25vw] lg:py-[20vw] xl:py-[15vw]">
                <div className="w-full text-center uppercase">
                  <h1 className="text-[11vw] leading-none text-[#FF5F38]">Discover <span className="block font-display italic">Nottingham</span></h1>
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
