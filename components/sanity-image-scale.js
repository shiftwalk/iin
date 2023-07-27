import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SanityImage from '@/components/sanity-image';

export default function SanityImageScale({ image, p, sizes, alt, q, hoverState}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 33%"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1.22, 1],{ clamp: true })
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      <m.div style={{ scale: scale }} className="will-change-transform overflow-hidden w-full h-full absolute inset-0 object-cover object-center">
        <div ref={ref} className="absolute inset-0 w-full h-full">
          <SanityImage
            priority={p ? true : false}
            image={image}
            sizes={sizes ? sizes : null}
            alt={alt ? alt : 'No image description'}
            quality={q ? q : 80}
            className={`w-full h-full absolute inset-0 object-cover object-center transition-all ease-in-out duration-[1000ms] will-change-transform z-1 ${hoverState ? hoverState : ''}`}
          />
        </div>
      </m.div>
    </div>
  )
}