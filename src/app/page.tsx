import { Suspense } from 'react';
import { Carousel } from 'src/components/carousel';
import About from '../components/common/about';
import Logos from '../components/common/logos';
import { Experience } from '../components/common/experience';
import Hero from '../components/common/hero';
import Projects from '@/components/projects/Projects';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Suspense>
        <Hero />
        <Logos />
        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <About />
          <Experience />
        </div>
        <Carousel />
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-aired/20 dark:stroke-aired/50 [mask-image:radial-gradient(70rem_40rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={100}
              height={3}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 100V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      </Suspense>
    </>
  );
}
