import { useRef, useState } from "react";
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import Div100vh from "react-div-100vh";
import Image from "next/image";
import { useMotionValue, useSpring, m } from "framer-motion";

export default function HomeHero({ isActive, position }) {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const video = useRef();

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

  const springX = useSpring(position.x)
  const springY = useSpring(position.y)


  return(
    <Div100vh className="w-full h-screen bg-white flex items-center jusfify-center text-[#FF5F38]">

      <span style={{ top: position.y - 50, left: position.x - 50 }} className={`w-36 h-36 items-center justify-center bg-[#EBEA33] text-off-black rounded-full absolute transition-opacity ease-in-out duration-[400ms] cursor-none pointer-events-none z-[20] uppercase text-3xl hidden lg:flex ${isActive ? 'opacity-100' : 'opacity-0' }`}>{!videoPlaying ? 'Play' : 'Pause' }</span>
      

      <button onClick={() => toggleVideo()} className={`w-full text-center uppercase relative z-10 transition-opacity ease-in-out duration-[400ms] lg:cursor-none ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
        <div className="relative z-10">
          <span className="block text-[12.5vw] lg:text-[12vw] leading-[0.9] lg:leading-[0.9]">Making</span>
          <span className="block text-[12.5vw] lg:text-[12vw] leading-[0.9] lg:leading-[0.9]">Nottingham</span>
          <span className="block text-[12.5vw] lg:text-[12vw] leading-[0.9] lg:leading-[0.9] font-display italic">Thrive</span>
          <IconSquiggleUnderline className="w-[60%] mx-auto mt-2 mb-8 lg:mb-0" />

          <span className={`w-20 h-20 items-center bg-[#EBEA33] text-off-black rounded-full uppercase text-xl flex lg:hidden justify-center mx-auto tion-opacity ease-in-out duration-[400ms] ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
            <span className="block">Play</span>
          </span>
        </div>
      </button>

      <div className={`absolute inset-0 bg-[#5017B7] z-[2] mix-blend-multiply tion-opacity ease-in-out duration-[400ms] ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}></div>
      
      <div className={`w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[400ms] z-[1] ${videoPlaying ? 'opacity-0' : 'opacity-75' }`}>
        <Image
          priority
          fill
          quality={80}
          src="/images/hero-home.jpg"
          alt="Portrait image of Nottingham"
          className="w-full h-full absolute inset-0 object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 100vw"
        />
      </div>

      <video preload="true" ref={video} loop={true} className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[400ms] z-[1] ${videoPlaying ? 'opacity-100' : 'opacity-0' }`}>
        <source src="/videos/iin-hero.mp4" type="video/mp4" />

        Sorry. Your browser does not support the video tag.
      </video>
    </Div100vh>
  )
}