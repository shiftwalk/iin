import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m} from 'framer-motion'
import IconSlattedUnderline from '@/icons/slatted-underline.svg'
import { NextSeo } from 'next-seo'
import ImageScale from '@/components/image-scale'
import { contactQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import { reveal } from '@/helpers/transitions'
import PortableText from 'react-portable-text'
const pageService = new SanityPageService(contactQuery)

const container = {
  enter: {
    transition: {
      staggerChildren: 0.066
    }
  }
}

const svg = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0.2, duration: 0.66, ease: [0.71,0,0.17,1] }},
};

const draw = {
  initial: { pathLength: 0 },
  enter: { pathLength: 1, transition: { delay: 0.3, duration: 0.66, ease: [0.71,0,0.17,1] }},
  exit: { pathLength: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1] }},
};

export default function Contact(initialData) {
  const { data: { policies, contact }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={contact.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          className="relative"
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="">
            <article>
              <div className="w-full">
                <div className="w-full text-center uppercase min-h-screen bg-[#EBEA33] selection:text-[#EBEA33] selection:bg-[#176B75] flex flex-col items-center justify-center">
                  <m.h1 variants={container} className="text-[13.4vw] lg:text-[11vw] leading-[0.9] lg:leading-[0.9] text-[#176B75]">
                    <span className="block relative overflow-hidden">
                      <m.span className="block" variants={reveal}>Let’s Talk</m.span>
                    </span>
                    <span className="block relative overflow-hidden font-display italic">
                      <m.span className="block" variants={reveal}>Just Drop Us</m.span>
                    </span>
                    <span className="block relative overflow-hidden font-display italic">
                      <m.span className="block" variants={reveal}>A Note</m.span>
                    </span>

                    <svg className="w-[65%] lg:w-[65%] mx-auto mt-3 lg:mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.807 17.441"><g data-name="Group 430" fill="none" stroke="currentColor" strokeWidth="3"><m.path variants={draw} data-name="Path 1184" d="M16.379 1.061 1.061 16.381"/><m.path variants={draw} data-name="Path 1185" d="m31.395 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1186" d="M46.408 1.061 31.09 16.381"/><m.path variants={draw} data-name="Path 1187" d="m61.422 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1188" d="m76.436 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1189" d="m91.449 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1190" d="m106.465 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1191" d="m121.479 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1192" d="m136.492 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1193" d="m151.506 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1194" d="m166.522 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1195" d="m181.535 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1196" d="m196.549 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1197" d="m211.563 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1198" d="m226.576 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1199" d="m241.592 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1200" d="m256.606 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1201" d="m271.619 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1202" d="m286.633 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1203" d="m301.649 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1204" d="m316.662 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1205" d="m331.676 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1206" d="m346.69 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1207" d="m361.703 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1208" d="m376.719 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1209" d="m391.733 1.061-15.318 15.32"/><m.path variants={draw} data-name="Path 1210" d="m406.746 1.061-15.318 15.32"/></g></svg>
                    
                    {/* <IconSlattedUnderline className="w-[55%] lg:w-[43%] mx-auto mt-4" /> */}
                  </m.h1>
                </div>

                <div className="bg-[#EBEA33]">
                  <div className="flex flex-wrap bg-black/20">
                    <div className="w-full lg:w-1/2 px-5 py-10 lg:p-[7.5vw] order-2 lg:order-1">
                      <div className="content content--no-anchor font-display text-[20px] lg:text-[24px] 2xl:text-[32px] leading-tight lg:leading-tight 2xl:leading-tight mb-12 lg:mb-[5vw]">
                        <PortableText content={contact.formIntroText} />
                      </div>

                      <form className="w-full grid grid-cols-2 gap-x-10 gap-y-5 lg:gap-y-8">
                        <div className="col-span-2">
                          {/* <label for="firstName" className="text-base lg:text-xl 2xl:text-xl mb-2 block">First Name</label> */}
                          <input type="text" id="name" placeholder="Name" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                        </div>
                        <div className="col-span-2">
                          {/* <label for="lastName" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Last Name</label> */}
                          <input type="text" id="businessName" placeholder="Business Name" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                        </div>
                        <div className="col-span-2">
                          {/* <label for="email" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Your Email</label> */}
                          <input type="email" id="email" placeholder="Email" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                        </div>
                        <div className="col-span-2">
                          {/* <label for="number" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Phone Number</label> */}
                          <input type="number" id="number" placeholder="Mobile Number" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                        </div>
                        <div className="col-span-2 lg:col-span-2">
                          {/* <label for="message" className="text-base lg:text-xl 2xl:text-xl mb-2 block">Your message</label> */}
                          <textarea rows={10} id="message" placeholder="Your message" className="a11y-focus focus-within:ring-[#4000B5] w-full bg-white appearance-none p-3 lg:p-6 text-black text-base lg:text-xl 2xl:text-xl" />
                        </div>

                        <div className="col-span-2">
                          <button type="submit" className="a11y-focus border border-[#4000B5] bg-[#4000B5] text-off-white py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 rounded-full 2xl:px-10 inline-block leading-[1.25] 2xl:text-2xl 2xl:leading-[1.05] relative group overflow-hidden w-full lg:w-auto">
                            <div className="relative z-[1] overflow-hidden">
                              <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">Send message!</span>
                              <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">Send message!</span>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                              <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[75] origin-center bg-black/20`}></div>
                            </div>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="w-full lg:w-1/2 relative h-[85vw] lg:h-auto order-1 lg:order-2">
                      <ImageScale
                        src="/images/contact-inner.jpg"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />  
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>

          <Footer policies={policies} contact={contact} />
        </m.div>
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