import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconZagUnderline from '@/icons/zag-underline.svg'
import IconSlattedUnderline from '@/icons/slatted-underline.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import ImageScale from '@/components/image-scale'

export default function Contact() {
  return (
    <Layout>
      <NextSeo title="Contact" />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full bg-[#176B75] selection:text-[#176B75] selection:bg-[#EBEA00]">
                <div className="w-full text-center uppercase mb-[7.5vw] py-[50vw] pb-[20vw] lg:py-[20vw] lg:pb-[10vw] xl:pt-[15vw] xl:pb-[7.5vw]">
                  <h1 className="text-[13vw] lg:text-[11vw] leading-none lg:leading-none text-[#EBEA00]">
                    <span className="block">Let’s Talk</span>
                    <span className="block font-display italic">Just Drop Us</span>
                    <span className="block font-display italic">A Note</span>
                    <IconSlattedUnderline className="w-[55%] lg:w-[43%] mx-auto mt-4" />
                  </h1>
                </div>

                <div className="flex flex-wrap bg-black/20">
                  <div className="w-full lg:w-1/2 px-5 py-10 lg:p-[7.5vw] order-2 lg:order-1">
                    <div className="content font-display italic text-white text-[20px] lg:text-[24px] 2xl:text-[32px] leading-tight lg:leading-tight 2xl:leading-tight mb-[5vw]">
                      <p>Contact us at info@itsinnottingham.com or complete the form below and we&apos;ll be back in touch with you as soon as we can.</p>
                    </div>

                    <form className="w-full grid grid-cols-2 gap-x-10 gap-y-5 lg:gap-y-8">
                      <div className="col-span-2">
                        <label for="firstName" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">First Name</label>
                        <input type="text" id="firstName" placeholder="Your First Name..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-full appearance-none p-4 lg:p-6 text-black text-lg lg:text-xl 2xl:text-xl" />
                      </div>
                      <div className="col-span-2">
                        <label for="lastName" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Last Name</label>
                        <input type="text" id="lastName" placeholder="Your Last Name..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-full appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                      </div>
                      <div className="col-span-2">
                        <label for="email" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Your Email</label>
                        <input type="email" id="email" placeholder="Email address..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-full appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                      </div>
                      <div className="col-span-2">
                        <label for="name" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Phone Number</label>
                        <input type="number" id="name" placeholder="Optional..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-full appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                      </div>
                      <div className="col-span-2 lg:col-span-2">
                        <label for="message" className="text-base lg:text-xl 2xl:text-xl text-white mb-2 block">Your message</label>
                        <textarea rows={10} id="message" placeholder="How can we help you..." className="a11y-focus focus-within:ring-[#EBEA00] w-full bg-white rounded-3xl appearance-none p-4 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                      </div>

                      <div className="col-span-2">
                        <button type="submit" className="a11y-focus rounded-full border border-[#FFB4CC] bg-[#FFB4CC] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none">Send Message!</button>
                      </div>
                    </form>
                  </div>
                  <div className="w-full lg:w-1/2 relative h-[85vw] lg:h-auto order-1 lg:order-2">
                    <ImageScale
                      src="/images/contact.jpg"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />  
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
