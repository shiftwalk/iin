import IconLogo from '@/icons/logo.svg'
import IconApple from '@/icons/apple.svg'
import IconAndroid from '@/icons/android.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import Socials from '@/components/socials'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, domAnimation, LazyMotion, m, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/router'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 2000], ['0deg', '360deg'], { clamp: false })

  const menuToggle = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }

  let menuButtonColor = 'bg-white border-white'
  let appbuttonColor = 'bg-transparent border border-white text-white'
  let logoColor = 'text-white'

  menuOpen && (
    appbuttonColor = 'bg-[#EBEA33] border border-[#EBEA33] text-black',
    logoColor = 'text-[#EBEA33]'
  )

  router.asPath == '/news' && !menuOpen && (
    menuButtonColor = 'bg-white border-black',
    appbuttonColor = 'bg-transparent border border-black text-black',
    logoColor = 'text-black'
  )

  return (
    <>
      <LazyMotion features={domAnimation}>
        <header className={`px-5 lg:px-8 p-5 lg:p-6 fixed top-0 left-0 right-0 w-full z-[1000] ${menuOpen ? '' : '' }`}>
          <div className="flex flex-wrap">
            <div className="flex-1 flex space-x-6">
              <button onClick={menuToggle} className={`a11y-focus rounded-full w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center border ${menuButtonColor}`}>
                <div className="w-full p-2 lg:p-3">
                  <span className={`transition-all ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${menuOpen ? 'rotate-45' : 'mb-1 lg:mb-3' }`}></span>
                  <span className={`transition-all ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${menuOpen ? '-rotate-45' : '' }`}></span>
                </div>
              </button>

              <button className={`a11y-focus rounded-full flex items-center justify-center h-[40px] lg:h-[60px] px-4 lg:px-6 transition-all ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] ${appbuttonColor}`}>
                <div className="flex space-x-2 mr-3">
                  <IconApple className="w-5" />
                  <IconAndroid className="w-5" />
                </div>

                <span className="block">Download App</span>
              </button>
            </div>

            <div className="ml-auto w-[20%] max-w-[190px]">
              <m.div style={{ rotateZ: rotate }}>
                <IconLogo className={`w-full transition-colors ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] ${logoColor}`} />
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
              transition={{ duration: 0.3, ease: [0.83, 0, 0.17, 1] }}
              className="z-[999] fixed inset-0 w-full h-screen bg-[#24D6D1] flex items-center justify-center">
              <div className="w-full text-center flex items-center justify-center">
                <nav className="text-[10vw] lg:text-[9vh] leading-none lg:leading-none font-display text-white">
                  <li className={`block ${router.asPath == '/' && 'font-sans uppercase text-[#4650E2] relative text-[11vw] leading-none lg:text-[11.5vh] lg:leading-none' }`}>
                    <Link onClick={()=>setMenuOpen(false)} className="a11y-focus" href="/">Home</Link>
                    { router.asPath == '/' && (
                      <IconSquiggleUnderline className="w-full" />
                    )}
                  </li>
                  <li className={`block ${router.asPath == '/whats-on' && 'font-sans uppercase text-[#4650E2] relative text-[11vw] leading-none lg:text-[11.5vh] lg:leading-none' }`}>
                    <Link onClick={()=>setMenuOpen(false)} className="a11y-focus" href="/whats-on">What&apos;s On</Link>
                    { router.asPath == '/whats-on' && (
                      <IconSquiggleUnderline className="w-full" />
                    )}
                  </li>
                  <li className={`block ${router.asPath == '/news' && 'font-sans uppercase text-[#4650E2] relative text-[11vw] leading-none lg:text-[11.5vh] lg:leading-none' }`}>
                    <Link onClick={()=>setMenuOpen(false)} className="a11y-focus" href="/news">Latest News</Link>
                    { router.asPath == '/news' && (
                      <IconSquiggleUnderline className="w-full" />
                    )}
                  </li>
                  <li className={`block ${router.asPath == '/about-us' && 'font-sans uppercase text-[#4650E2] relative text-[11vw] leading-none lg:text-[11.5vh] lg:leading-none' }`}>
                    <Link onClick={()=>setMenuOpen(false)} className="a11y-focus" href="/about-us">About Us</Link>
                    { router.asPath == '/about-us' && (
                      <IconSquiggleUnderline className="w-full" />
                    )}
                  </li>
                  <li className={`block ${router.asPath == '/contact' && 'font-sans uppercase text-[#4650E2] relative text-[11vw] leading-none lg:text-[11.5vh] lg:leading-none' }`}>
                    <Link onClick={()=>setMenuOpen(false)} className="a11y-focus" href="/contact">Contact Us</Link>
                    { router.asPath == '/contact' && (
                      <IconSquiggleUnderline className="w-full" />
                    )}
                  </li>
                </nav>
              </div>

              <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center text-[#5F0EFF] p-5 lg:p-6">
                <div>
                  <span className="block text-white text-center mb-3">Give us a follow</span>
                  <Socials />
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}