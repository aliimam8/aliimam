import { Inter, Roboto_Mono, Fraunces } from 'next/font/google';
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap'
});

export const Avegra = localFont({
  src: '/fonts/Avegra.woff2',
  display: 'swap',
})
