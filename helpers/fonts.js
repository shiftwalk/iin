import localFont from 'next/font/local'

export const Nantes = localFont({
  src: [
    {
      path: '../public/fonts/NantesWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NantesWeb-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  subsets: ['latin'],
  variable: '--font-nantes',
})