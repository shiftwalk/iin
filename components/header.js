import IconLogo from '@/icons/logo.svg'
import IconApple from '@/icons/apple.svg'
import IconAndroid from '@/icons/android.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconFacebook from '@/icons/facebook.svg'
import IconInstagram from '@/icons/instagram.svg'
import IconLinkedin from '@/icons/linkedin.svg'
import IconTwitter from '@/icons/twitter.svg'
import { useState } from 'react'
import { AnimatePresence, domAnimation, LazyMotion, m, useScroll, useTransform } from 'framer-motion'
import FancyLink from './fancyLink'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 2000], ['0deg', '360deg'], { clamp: false })

  const menuToggle = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }

  return (
    <>
      <LazyMotion features={domAnimation}>
        <header className={`px-5 lg:px-8 p-5 lg:p-6 fixed top-0 left-0 right-0 w-full z-[1000] ${menuOpen ? '' : '' }`}>
          <div className="flex flex-wrap">
            <div className="flex-1 flex space-x-6">
              <button onClick={menuToggle} className="a11y-focus bg-white rounded-full w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center">
                <div className="w-full p-2 lg:p-3">
                  <span className={`transition-all ease-in-out duration-[300ms] block w-full h-[1px] bg-black ${menuOpen ? 'rotate-45' : 'mb-1 lg:mb-3' }`}></span>
                  <span className={`transition-all ease-in-out duration-[300ms] block w-full h-[1px] bg-black ${menuOpen ? '-rotate-45' : '' }`}></span>
                </div>
              </button>

              <button className={`a11y-focus rounded-full flex items-center justify-center h-[40px] lg:h-[60px] px-4 lg:px-6 transition-colors ease-in-out duration-[300ms] ${menuOpen ? 'bg-[#EBEA33] border border-[#EBEA33] text-black' : 'bg-transparent border border-white text-white' }`}>
                <div className="flex space-x-2 mr-3">
                  <IconApple className="w-5" />
                  <IconAndroid className="w-5" />
                </div>

                <span className="block">Download App</span>
              </button>
            </div>

            <div className="ml-auto w-[20%] max-w-[190px]">
              <m.div style={{ rotateZ: rotate }}>
                <IconLogo className={`w-full transition-colors ease-in-out duration-[300ms] ${menuOpen ? 'text-[#EBEA33]' : 'text-white' }`} />
              </m.div>
            </div>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-[999] fixed inset-0 w-full h-screen bg-[#24D6D1] flex items-center justify-center">
              <div className="w-full text-center flex items-center justify-center">
                <nav className="text-[10vw] lg:text-[9vh] leading-none lg:leading-none font-display text-white">
                  <li className="block"><Link onClick={()=>setMenuOpen(false)} href="/">Home</Link></li>
                  <li className="block font-sans uppercase text-[#4650E2] relative text-[11vw] leading-none lg:text-[11.5vh] lg:leading-none">
                    <Link onClick={()=>setMenuOpen(false)} href="/whats-on">What's On</Link>
                    <IconSquiggleUnderline className="w-full" />
                  </li>
                  <li className="block"><Link onClick={()=>setMenuOpen(false)} href="/news">Latest News</Link></li>
                  <li className="block"><Link onClick={()=>setMenuOpen(false)} href="/about-us">About Us</Link></li>
                  <li className="block"><Link onClick={()=>setMenuOpen(false)} href="/contact">Contact Us</Link></li>
                </nav>
              </div>

              <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center text-[#5F0EFF] p-5 lg:p-6">
                <div>
                  <span className="block text-white text-center mb-3">Give us a follow</span>
                  <div className="flex space-x-3">
                    <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white ">
                      <IconFacebook className="w-[25%]" />
                    </a>
                    <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white ">
                      <IconInstagram className="w-[50%]" />
                    </a>
                    <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white ">
                      <IconLinkedin className="w-[50%]" />
                    </a>
                    <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white ">
                      <IconTwitter className="w-[50%]" />
                    </a>
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}