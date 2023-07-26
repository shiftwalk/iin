import IconLogo from '@/icons/logo.svg'
import IconApple from '@/icons/apple.svg'
import IconAndroid from '@/icons/android.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import Socials from '@/components/socials'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, domAnimation, LazyMotion, m, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/router'
import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import {AndroidView, IOSView, isAndroid, isIOS} from 'react-device-detect';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [appDownloadOpen, setAppDownloadOpen] = useState(false)
  const router = useRouter()
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 2000], ['0deg', '360deg'], { clamp: false })
  const scale = useTransform(scrollY, [0, 2000], ['1', '0.33'], { clamp: true })

  const menuToggle = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }

  const appDownloadToggle = () => {
    if (appDownloadOpen) {
      setAppDownloadOpen(false)
    } else {
      setAppDownloadOpen(true)
    }
  }

  let menuButtonColor = 'bg-white border-white'
  let appbuttonColor = 'bg-transparent border border-white text-white'
  let logoColor = 'text-white'

  menuOpen && (
    appbuttonColor = 'bg-[#EBEA33] border border-[#EBEA33] text-black',
    logoColor = 'text-[#EBEA33] rotate-[360deg]'
  )

  router.asPath.includes('/news') && !menuOpen && (
    menuButtonColor = 'bg-white border-black',
    appbuttonColor = 'bg-transparent border border-black text-black',
    logoColor = 'text-black'
  )

  router.asPath == '/whats-on' && !menuOpen && (
    menuButtonColor = 'bg-white',
    appbuttonColor = 'bg-transparent border border-black text-black',
    logoColor = 'text-black'
  )

  router.asPath == '/contact' && !menuOpen && (
    menuButtonColor = 'border-black',
    appbuttonColor = 'bg-transparent border border-black text-black',
    logoColor = 'text-black'
  )

  return (
    <>
      <LazyMotion features={domAnimation}>
        <button aria-label={appDownloadOpen ? 'Close App Download Menu' : 'Open App Download Menu' } onClick={appDownloadToggle} className={`a11y-focus rounded-full flex items-center justify-center h-[40px] lg:h-[60px] 2xl:h-[68px] px-4 lg:px-6 transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[450ms] 2xl:text-xl 2xl:leading-none lg:hidden fixed bottom-5 left-5 right-5 z-[10000] bg-[#EBEA33] border border-[#EBEA33] text-black group overflow-hidden`}>
          <div className="flex space-x-2 mr-3">
            {IOSView && (
              <IconApple className="w-5" />
            )}
            {AndroidView && (
              <IconAndroid className="w-5" />
            )}
          </div>

          <span className="block">Download App</span>
        </button>

        <header className={`px-5 lg:px-8 p-5 lg:p-6 2xl:p-8 2xl:px-10 pb-0 lg:pb-0 2xl:pb-0 fixed top-0 left-0 right-0 w-full z-[1000] ${menuOpen ? '' : '' }`}>
          <div className="flex flex-wrap relative">
            <div className="flex-1 flex space-x-6">
              <button aria-label={menuOpen ? 'Close Menu' : 'Open Menu' } onClick={menuToggle} className={`a11y-focus rounded-full w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] 2xl:w-[68px] 2xl:h-[68px] flex items-center justify-center border ${menuButtonColor} group relative overflow-hidden`}>
                <div className="w-full p-2 lg:p-3">
                  <div className="relative z-[1] w-full">
                    <span className={`transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${menuOpen ? 'rotate-45' : 'mb-1 lg:mb-3' }`}></span>
                    <span className={`transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${menuOpen ? '-rotate-45' : '' }`}></span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                    <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[25] origin-center bg-[#EBEA33]`}></div>
                  </div>
                </div>
              </button>

              <button aria-label={appDownloadOpen ? 'Close App Download Menu' : 'Open App Download Menu' } onClick={appDownloadToggle} className={`a11y-focus rounded-full items-center justify-center h-[40px] lg:h-[60px] 2xl:h-[68px] px-4 lg:px-6 transition-all 2xl:text-xl 2xl:leading-none hidden lg:flex group overflow-hidden relative hover:text-black ease-[cubic-bezier(0.71,0,0.17,1)] duration-[450ms] delay-[25ms] hover:delay-[0ms] ${appbuttonColor}`}>
                <div className="flex space-x-2 mr-3 relative z-[1]">
                  <IconApple className="w-5" />
                  <IconAndroid className="w-5" />
                </div>

                <div className="relative z-[1] overflow-hidden">
                  <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">Download App</span>
                  <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">Download App</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms]">
                  <div className="w-[5px] h-[5px] bg-[#EBEA33] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[75] origin-center"></div>
                </div>
              </button>
            </div>

            <div className="ml-auto w-[20%] max-w-[180px] 2xl:max-w-[200px] absolute top-0 right-0 hidden lg:block">
              <m.div style={{ scale: scale }} className="origin-top-right">
                <m.div style={{ rotateZ: rotate }} className="origin-center">
                  <Link scroll={false} href="/" className="block a11y-focus focus-visible:ring-white">
                    <IconLogo className={`w-full transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[700ms] ${logoColor}`} />
                  </Link>
                </m.div>
              </m.div>
            </div>

            <div className="ml-auto w-[25%] max-w-[90px] 2xl:max-w-[200px] absolute top-0 right-0 block lg:hidden">
              <Link scroll={false} href="/" className="origin-center block">
                <IconLogo className={`w-full transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[700ms] ${logoColor}`} />
              </Link>
            </div>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3, ease: [0.71,0,0.17,1] }}}
              exit={{ opacity: 0, transition: { delay: 0.8, duration: 0.3, ease: [0.71,0,0.17,1] }}}
              className="z-[999] fixed inset-0 overflow-hidden"
            >
              <m.div
                initial={{ scale: 1 }}
                animate={{ scale: 100, transition: { duration: 0.75, ease: [0.71,0,0.17,1] }}}
                exit={{ scale: 1, transition: { duration: 0.75, delay: 0.05, ease: [0.71,0,0.17,1]} }}
                className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] 2xl:w-[68px] 2xl:h-[68px] rounded-full bg-[#24D6D1] mx-5 lg:mx-8 m-5 lg:m-6 2xl:m-8 2xl:mx-10 absolute top-0 left-0 z-[10]"
              >
              </m.div>
              <Div100vh className="w-full h-screen selection:bg-[#EBEA33] selection:text-[#4000B5] flex items-center justify-center relative z-[11]">
                <div className="w-full text-center flex items-center justify-center">
                  <nav className="text-[11.5vw] lg:text-[12.5vh] leading-[0.825] lg:leading-[0.825] text-[#4000B5] font-sans uppercase">
                    <li
                      className={`block overflow-hidden relative mb-3 ${router.asPath == '/' && 'font-display italic uppercase text-white' }`}
                    >
                      <m.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.55, delay: 0.2, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.33, delay: 0.2, ease: [0.71,0,0.17,1]} }}
                      >
                        <Link scroll={false} onClick={()=>setMenuOpen(false)} className="a11y-focus transition-color ease-in-out duration-[250ms] hover:text-white" href="/">Home</Link>
                      </m.div>
                      {/* { router.asPath == '/' && (
                        <IconSquiggleUnderline className="w-full" />
                      )} */}
                    </li>
                    <li className={`block overflow-hidden relative mb-3 ${router.asPath == '/whats-on' && 'font-display italic uppercase text-white relative' }`}>
                      <m.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.55, delay: 0.225, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.33, delay: 0.175, ease: [0.71,0,0.17,1]} }}
                      >
                        <Link scroll={false} onClick={()=>setMenuOpen(false)} className="a11y-focus transition-color ease-in-out duration-[250ms] hover:text-white" href="/whats-on">What’S On</Link>
                        {/* { router.asPath == '/whats-on' && (
                          <IconSquiggleUnderline className="w-full" />
                        )} */}
                      </m.div>
                    </li>
                    <li className={`block overflow-hidden relative mb-3 ${router.asPath.includes('/news') && 'font-display italic uppercase text-white relative' }`}>
                      <m.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.55, delay: 0.25, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.33, delay: 0.15, ease: [0.71,0,0.17,1]} }}
                      >
                        <Link scroll={false} onClick={()=>setMenuOpen(false)} className="a11y-focus transition-color ease-in-out duration-[250ms] hover:text-white" href="/news">Latest News</Link>
                        {/* { router.asPath.includes('/news') && (
                          <IconSquiggleUnderline className="w-full" />
                        )} */}
                      </m.div>
                    </li>
                    <li className={`block overflow-hidden relative mb-3 ${router.asPath == '/about-us' && 'font-display italic uppercase text-white relative' }`}>
                      <m.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.55, delay: 0.275, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.33, delay: 0.125, ease: [0.71,0,0.17,1]} }}
                      >
                        <Link scroll={false} onClick={()=>setMenuOpen(false)} className="a11y-focus transition-color ease-in-out duration-[250ms] hover:text-white" href="/about-us">About Us</Link>
                        {/* { router.asPath == '/about-us' && (
                          <IconSquiggleUnderline className="w-full" />
                        )} */}
                      </m.div>
                    </li>
                    <li className={`block overflow-hidden relative mb-3 ${router.asPath == '/contact' && 'font-display italic uppercase text-white relative' }`}>
                      <m.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.55, delay: 0.3, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.33, delay: 0.1, ease: [0.71,0,0.17,1]} }}
                      >
                        <Link scroll={false} onClick={()=>setMenuOpen(false)} className="a11y-focus transition-color ease-in-out duration-[250ms] hover:text-white" href="/contact">Get In Touch</Link>
                        {/* { router.asPath == '/contact' && (
                          <IconSquiggleUnderline className="w-full" />
                        )} */}
                      </m.div>
                    </li>
                  </nav>
                </div>

                {/* <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center text-[#5F0EFF] p-5 lg:p-6">
                  <div>
                    <span className="block text-white text-center mb-3 2xl:mb-5 2xl:text-xl 2xl:leading-none">Drop us a follow</span>
                    <Socials />
                  </div>
                </div> */}
              </Div100vh>
            </m.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {appDownloadOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.71,0,0.17,1] }}
              className="fixed inset-0 flex flex-col items-center justify-center z-[1000]"
            >
              <button
                aria-label="Close App Download Menu" onClick={appDownloadToggle}
                className="z-[1001] bg-black fixed inset-0 w-full h-full block opacity-70"
              ></button>
              
              <m.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ duration: 0.3, ease: [0.71,0,0.17,1] }}
                className="bg-white w-10/12 lg:w-[40%] h-[50vh] shadow-xl rounded-3xl flex flex-col items-center justify-center relative z-[1002]"
              >
                <button aria-label="Close App Download Menu" onClick={appDownloadToggle} className={`a11y-focus rounded-full w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] 2xl:w-[68px] 2xl:h-[68px] flex items-center justify-center border absolute top-5 right-5`}>
                  <div className="w-full p-2 lg:p-3">
                    <span className={`transition-all ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black rotate-45`}></span>
                    <span className={`transition-all ease-[cubib-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black -rotate-45`}></span>
                  </div>
                </button>

                <div className="w-full flex items-center justify-center">
                  <div className="relative rotate-[-2deg] w-[125px] lg:w-[33%] lg:max-w-[240px] aspect-square translate-x-[-60%] translate-y-[-2vh]">
                    <Image
                      quality={80}
                      width={358}
                      height={356}
                      src="/images/qr.jpg"
                      alt="QR Code to download the app"
                      className="w-full"
                    />

                    <span className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-off-black block uppercase absolute bottom-[-50px] lg:bottom-[-50px] xl:bottom-[-65px] right-[-190px] lg:right-[-260px] xl:right-[-300px] rotate-[-2deg] xl:rotate-[-5deg] w-[180px] lg:w-[250px] xl:w-[270px] text-center">
                      <svg className="w-[50%] lg:w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.089 173.374">
                        <defs>
                          <clipPath id="a">
                            <path fill="none" d="M0 0h157.986v72.6H0Z" data-name="Path 1181"/>
                          </clipPath>
                        </defs>
                        <g data-name="Group 422">
                          <g clipPath="url(#a)" data-name="Group 421" transform="rotate(61 31.748 53.897)">
                            <g data-name="Group 419">
                              <path fill="none" stroke="currentColor" strokeWidth="3" d="M157.615 9.238S73.325-32.828 3.725 71.231" data-name="Path 1179"/>
                            </g>
                            <g data-name="Group 420">
                              <path fill="none" stroke="currentColor" strokeWidth="3" d="M21.854 69.295 3.196 71.668.822 53.01" data-name="Path 1180"/>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span className="font-display"><span className="italic">Scan me</span></span> with your phone camera to download!
                    </span>
                  </div>
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}