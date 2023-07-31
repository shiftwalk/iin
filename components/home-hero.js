import React, { useRef, useState } from "react";
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import Div100vh from "react-div-100vh";
import { reveal } from "@/helpers/transitions";
import { m } from 'framer-motion'

export default function HomeHero() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const video = useRef();

  const useMousePosition = () => {
    const [
      mousePosition,
      setMousePosition
    ] = React.useState({ x: null, y: null });
  
    React.useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      window.addEventListener('mousemove', updateMousePosition);
  
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
  
    return mousePosition;
  };

  const mousePosition = useMousePosition();

  // Function to run when the hero button is clicked
  const toggleVideo = () => {
    if (videoPlaying) {
      // Set the state to NOT playing and pause the actual video
      setVideoPlaying(false)
      video.current.pause()
    } else {
      // Set the state to playing and play the actual video
      setVideoPlaying(true)
      video.current.play()
    }
  }

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
    enter: { pathLength: 1, transition: { delay: 0.33, duration: 0.66, ease: [0.71,0,0.17,1] }},
    exit: { pathLength: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1] }},
  };

  return(
    <Div100vh className="w-full h-screen bg-white flex items-center jusfify-center text-[#FF5F38] group">

      <span style={{ top: mousePosition.y - 50, left: mousePosition.x - 50 }} className={`fixed w-36 h-36 items-center justify-center bg-[#EBEA33] text-off-black rounded-full transition-transform ease-out duration-[200ms] cursor-none pointer-events-none uppercase text-3xl hidden lg:flex z-[30] group-hover:scale-[1] scale-0`}>{!videoPlaying ? 'Play' : 'Pause' }</span>
      

      <button onClick={() => toggleVideo()} className={`w-full text-center uppercase relative z-10 transition-opacity ease-in-out duration-[400ms] lg:cursor-none a11y-focus   ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
        <div className="relative z-10">
          <m.div variants={container}>
            <span className="block text-[13.5vw] lg:text-[12vw] leading-[0.9] lg:leading-[0.9] overflow-hidden">
              <m.span variants={reveal} className="block">
                Making
              </m.span>
            </span>
            <span className="block text-[13.5vw] lg:text-[12vw] leading-[0.9] lg:leading-[0.9] overflow-hidden">
              <m.span variants={reveal} className="block">
                Nottingham
              </m.span>
            </span>
            <span className="block text-[13.5vw] lg:text-[12vw] leading-[0.9] lg:leading-[0.9] overflow-hidden font-display italic">
              <m.span variants={reveal} className="block">
                Thrive
              </m.span>
            </span>
            
            <m.div variants={svg} className="w-full">
              <m.svg className="w-[60%] mx-auto mt-2 mb-8 lg:mb-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1054.61 41.078">
                <m.path variants={draw} stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth="5" d="M1052.091 2.519S439.691 7.143 62.04 36.748c-99.9 7.827-41.862-11.468-50.6-11.237" data-name="Path 1259"/>
              </m.svg>

            </m.div>

            {/* <IconSquiggleUnderline className="w-[60%] mx-auto mt-2 mb-8 lg:mb-0" /> */}
          </m.div>

          <span className={`w-24 h-24 lg:w-20 lg:h-20 items-center bg-[#EBEA33] text-off-black rounded-full uppercase text-lg lg:text-xl flex lg:hidden justify-center mx-auto tion-opacity ease-in-out duration-[400ms] z-[10] ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
            <span className="block">Play</span>
          </span>
        </div>
      </button>

      <div className={`absolute inset-0 bg-[#5017B7] z-[2] mix-blend-multiply transition-opacity ease-in-out duration-[400ms] ${videoPlaying ? 'opacity-0' : 'opacity-20' }`}></div>
      
      <div className={`w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[400ms] z-[1] hidden lg:block ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
        <video poster="/videos/hero-video-desktop-poster-1.jpg" preload="true" playsInline={'playsInline'} loop={true} autoPlay={true} muted className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[400ms] z-[1] ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
          <source src="/videos/hero-video-desktop.mp4" type="video/mp4" />

          Sorry. Your browser does not support the video tag.
        </video>
      </div>

      <div className={`w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[400ms] z-[1] lg:hidden ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
        <video poster="/videos/hero-video-mobile-poster-1.jpg" preload="true" playsInline={'playsInline'} loop={true} autoPlay={true} muted className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[400ms] z-[1] ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
          <source src="/videos/hero-video-mobile.mp4" type="video/mp4" />

          Sorry. Your browser does not support the video tag.
        </video>
      </div>

      <video preload="true" ref={video} loop={true} className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[400ms] z-[1] ${videoPlaying ? 'opacity-100' : 'opacity-0' }`}>
        <source src="/videos/iin-hero.mp4" type="video/mp4" />

        Sorry. Your browser does not support the video tag.
      </video>
    </Div100vh>
  )
}