import { m, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function ImageScale({ src, p, sizes }) {
  const ref = useRef(null)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 33%"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1.22, 1],{ clamp: true })
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      <m.div style={{ scale: scale }} className="will-change-transform overflow-hidden w-full h-full absolute inset-0 object-cover object-center">
        <Image
          priority={p ? true : false}
          src={src}
          quality={80}
          fill
          sizes={sizes}
          alt="Temp Image"
          className={`w-full h-full absolute inset-0 object-cover object-center transition-all ease-in-out duration-[1000ms] will-change-transform z-1 ${imageIsLoaded ? 'scale-1' : 'scale-105' }`}
          ref={ref}
          onLoad={event => {
            const target = event.target;
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
            }
          }}
        />      
      </m.div>
    </div>
  )
}