import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function LerpImage({ children, className, amount }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })
  
  const y = useTransform(scrollYProgress,[0, 1],['0%', amount ? amount : '200%'],{ clamp: true })
  
  return (
    <m.div style={{ y: y }} className={`will-change-transform ${className ? className : '' }`}>
      {children}
    </m.div>
  )
}