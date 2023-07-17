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
              <div className="w-full bg-[#4000B5] pt-[50vw] pb-[16vw] lg:py-[20vw] xl:py-[15vw]">
                <div className="w-full text-center uppercase pb-[12vw] lg:pb-[17vw] xl:pb-[15vw]">
                  <h1 className="text-[12vw] lg:text-[9vw] 2xl:text-[10vw] leading-none lg:leading-none 2xl:leading-none text-[#FF5F38]">
                    <span className="block">Making</span>
                    <span className="block">Nottingham</span>
                    <span className="block font-display italic">Thrive</span>
                    <IconSquiggleUnderline className="w-[60%] mx-auto mt-2" />
                  </h1>
                </div>

                <div className="flex flex-wrap">
                  <div className="ml-auto w-full lg:w-1/2 px-5">
                    <div className="content font-display italic text-white text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight max-w-[90%] lg:max-w-[80%]">
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
