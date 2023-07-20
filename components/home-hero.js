import { useState } from "react";
import IconPlay from "@/icons/play.svg";
import Div100vh from "react-div-100vh";

export default function HomeHero() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  return(
    <section className="">
      <Div100vh className="w-full h-screen bg-blue flex items-center jusfify-center text-[#FF5F38]">
        <button onClick={() => setVideoPlaying(true)} className={`w-full text-center uppercase relative z-10 transition-opacity ease-in-out duration-[1000ms] ${videoPlaying ? 'opacity-0' : 'opacity-100' }`}>
          <div className="absolute inset-0 flex items-center justify-center z-[1]">
            <div className="w-[15%] aspect-square flex items-center justify-center bg-[#FF5F38] text-blue rounded-full opacity-50">
              <IconPlay className="w-[45%]" />
            </div>
          </div>

          <div className="relative z-10">
            <span className="block text-[17.5vw] lg:text-[15vw] leading-[0.9] lg:leading-[0.9]">Enter-</span>
            <span className="block text-[17.5vw] lg:text-[15vw] leading-[0.9] lg:leading-[0.9]">tainment</span>
          </div>
        </button>

        <video loop={true} autoPlay="autoplay" playsInline={videoPlaying} muted className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity ease-in-out duration-[1000ms] ${videoPlaying ? 'opacity-100' : 'opacity-0' }`}>
          <source src="/videos/iin-hero.mp4" type="video/mp4" />

          Sorry. Your browser does not support the video tag.
        </video>
      </Div100vh>
    </section>
  )
}