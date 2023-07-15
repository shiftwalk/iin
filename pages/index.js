import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <LazyMotion features={domAnimation}>
        <div>
          <section className="">
            <div className="w-full h-screen bg-blue flex items-center jusfify-center text-[#FF5F38]">
              <div className="w-full text-center uppercase">
                <span className="block text-[15vw] leading-[0.9]">Enter-</span>
                <span className="block text-[15vw] leading-[0.9]">tainment</span>
              </div>
            </div>
          </section>

          <main>
            <article>
              <div className="bg-[#E2E0FD] p-[5vw]">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl leading-none lg:text-4xl lg:leading-none xl:text-5xl xl:leading-none mb-4 uppercase">It's In Nottingham - <span className="font-display">For <span className="italic">everything</span> Nottingham city centre</span></h1>
                    <div className="content max-w-3xl mb-4 text-base leading-tight lg:text-lg lg:leading-tight">
                      <p>Discover what&apos;s going on, make plans for what&apos;s around the corner and stay up to date with everything Nottingham city centre - all in one place. Whatever your vibe, Nottingham&apos;s got it. And It&apos;s in Nottingham is the best way to find out about it.</p>
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
