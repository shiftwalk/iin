import localFont from 'next/font/local'

export const Nantes = localFont({
  src: [
    {
      path: '../public/fonts/NantesWebTrial-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NantesWebTrial-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  subsets: ['latin'],
  variable: '--font-nantes',
})