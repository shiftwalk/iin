import IconLogo from '@/icons/logo.svg'
import IconSmile from '@/icons/smile.svg'
import IconArrow from '@/icons/arrow.svg'
import IconZagUnderline from '@/icons/zag-underline.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import { m, useScroll, useTransform } from 'framer-motion'
import FancyLink from '@/components/fancyLink'
import Socials from '@/components/socials'
import Image from 'next/image'

export default function Footer() {
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 850], ['360deg', '0deg'], { clamp: false })

  return (
    <footer className="bg-off-black selection:text-off-white selection:bg-[#FF5F38]">
      <div className="relative flex overflow-x-hidden text-[10vw] text-white uppercase">
        <div className="animate-marquee will-change-transform whitespace-nowrap pt-[8vw] lg:pt-[6vw] pb-[0vw] lg:pb-[2vw]">
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
        </div>

        <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap pt-[8vw] lg:pt-[6vw] pb-[0vw] lg:pb-[2vw]">
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block font-display italic">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
          <span className="relative overflow-hidden inline-block">Be In The Know<span className="inline-block w-[10vw] translate-y-[-7%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse" /></span></span>
        </div>
      </div>

      <div className="p-5 pb-[10vw] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="col-span-1 aspect-square bg-[#5F0EFF] flex items-center justify-center relative">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 bg-[#5F0EFF]">
              <div className="w-[50%] h-[75%] relative mix-blend-lighten opacity-[25%] bg-off-white">
                <Image
                  fill
                  quality={80}
                  src="/images/footer-cta.jpg"
                  alt="Nottingham during the day"
                  className="w-full h-full absolute inset-0 object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className="w-10/12 text-center text-white relative z-10">
              <span className="block text-[9.5vw] leading-none md:text-[5vw] md:leading-none xl:text-[4.5vw] xl:leading-none mb-8 text-[#EFF366]">
                <span className="uppercase">Follow us</span>
                <span className="block font-display">on <span className="uppercase italic relative">socials<IconZagUnderline className="w-full absolute -bottom-1 left-0 right-0"/></span></span>
              </span>

              <p className="mb-12 xl:text-xl xl:leading-snug max-w-[500px] md:max-w-[400px] xl:max-w-[500px] mx-auto">Amazing food and drinks, all the shops you&apos;ll ever need, and inspirational events and activities.</p>

              <Socials className="text-off-black mx-auto justify-center" />
            </div>
          </div>

          <div className="col-span-1 aspect-square bg-[#EFF366] flex items-center justify-center">
            <div className="w-10/12 text-center text-off-black">
              <span className="block text-[9.5vw] leading-none md:text-[5vw] md:leading-none xl:text-[4.5vw] xl:leading-none mb-8">
                <span className="uppercase relative">Sign up <IconSquiggleUnderline className="absolute bottom-0 left-[-5%] right-[-5%] w-[110%]" /></span>
                <span className="block font-display">for <span className="uppercase italic">updates</span></span>
              </span>

              <p className="mb-12 xl:text-xl xl:leading-snug max-w-[500px] md:max-w-[400px] xl:max-w-[500px] mx-auto">No spam, ever. Just occasional news, city updates, and tasty offers direct to your inbox!</p>

              <form className="relative xl:text-xl xl:leading-none xl:max-w-[720px] mx-auto">
                <input type="email" placeholder="Email address..." className="appearance-none rounded-full bg-white py-5 px-6 inline-block leading-none w-full a11y-focus focus-visible:ring-2" />

                <button type="submit" className="absolute top-0 right-0 w-auto bg-[#FC6E5C] px-8 h-full flex items-center justify-center rounded-full text-white a11y-focus focus-visible:ring-2 focus-visible:ring-black">Sign&nbsp;<span className="hidden lg:inline">me&nbsp;</span>up!</button>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[3vw] left-0 right-0 w-full hidden lg:block">
          <div className="mx-auto w-[20%] max-w-[190px]">
            <m.div style={{ rotateZ: rotate }}>
              <IconLogo className={`w-full transition-colors ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] text-[#FF5F38]`} />
            </m.div>
          </div>
        </div>
      </div>

      <nav className="p-5">
        <ul className="flex text-white text-xs lg:text-sm w-full">
          <li className="pr-3"><FancyLink destination="/" label="Privacy Policy" /></li>
          <li className="pr-3">|</li>
          <li className="pr-3"><FancyLink destination="/" label="Cookie Policy" /></li>
          <li className="pr-3">|</li>
          <li className="font-medium"><FancyLink destination="/" label="Branding By Cubic" /></li>

          <li className="ml-auto text-right"><a href="#" className="a11y-focus"><span className="hidden lg:inline">Back&nbsp;</span>To Top <IconArrow className="w-2 lg:w-3 inline ml-1" /></a></li>
        </ul>
      </nav>
    </footer>
  )
}