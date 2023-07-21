import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import Header from '@/components/header';
import { Nantes } from '@/helpers/fonts';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ReactLenis root options={{ lerp: 0.125 }}>
      <DefaultSeo {...SEO} /> 

      <div className={`${Nantes.variable} font-sans`}>
        <Header />

        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ReactLenis>
  )
}