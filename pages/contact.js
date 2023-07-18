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
              <div className="w-full bg-[#176B75] selection:text-[#176B75] selection:bg-[#EBEA00] py-[50vw] pb-[20vw] lg:py-[20vw] lg:pb-[10vw] xl:pt-[15vw] xl:pb-[7.5vw]">
                <div className="w-full text-center uppercase mb-[7.5vw]">
                  <h1 className="text-[13vw] lg:text-[9vw] leading-none lg:leading-none text-[#EBEA00]">
                    <span className="block">Get In</span>
                    <span className="block font-display italic">Touch</span>
                    <IconZagUnderline className="w-[50%] lg:w-[35%] mx-auto mt-2" />
                  </h1>
                </div>

                <div className="flex flex-wrap px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-1/2 mb-12 lg:mb-20">
                    <div className="content font-display italic text-white text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight">
                      <p>Contact us at info@itsinnottingham.com or complete the form below and we&apos;ll be back in touch with you as soon as we can.</p>
                    </div>
                  </div>

                  <form className="w-full grid grid-cols-2 gap-x-10 gap-y-5 lg:gap-y-8">
                    <div className="col-span-2 lg:col-span-1">
                      <label for="firstName" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">First Name</label>
                      <input type="text" id="firstName" placeholder="Your First Name..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-lg appearance-none p-4 lg:p-6 text-black text-lg lg:text-xl 2xl:text-xl" />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <label for="lastName" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Last Name</label>
                      <input type="text" id="lastName" placeholder="Your Last Name..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-lg appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <label for="email" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Your Email</label>
                      <input type="email" id="email" placeholder="Email address..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-lg appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <label for="name" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Phone Number</label>
                      <input type="number" id="name" placeholder="Optional..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-lg appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                    </div>
                    <div className="col-span-2 lg:col-span-2">
                      <label for="message" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Your message</label>
                      <textarea rows={10} id="message" placeholder="How can we help you..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-lg appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                    </div>

                    <div className="col-span-2">
                      <button type="submit" className="a11y-focus rounded-full border border-[#EBEA00] bg-[#EBEA00] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none">Send Message!</button>
                    </div>
                  </form>
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
