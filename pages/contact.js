import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconZagUnderline from '@/icons/zag-underline.svg'
import { NextSeo } from 'next-seo'

export default function Contact() {
  return (
    <Layout>
      <NextSeo title="Contact" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full bg-[#176B75] py-[25vw] lg:py-[20vw] xl:py-[15vw]">
                <div className="w-full text-center uppercase">
                  <h1 className="text-[9vw] leading-none text-[#EBEA00]">
                  <span className="block">Get In</span>
                  <span className="block font-display">Touch</span>
                  <IconZagUnderline className="w-[35%] mx-auto mt-2" />
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
