import { Suspense } from 'react';
import Hero from 'src/components/common/hero';
import Intro from 'src/components/common/intro';
import Projects from '@/components/projects';
import AssetsPage from '@/components/assetshome/aiasset';
import AboutMe from '@/components/common/home/about-me';
import AISlide from '@/components/common/home/slide-img';
import { CarouselSpacing } from 'src/components/common/carousel';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Carousel } from 'src/components/carousel';


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
        <AboutMe />
        <AssetsPage />
        <Intro />
        <Carousel />
        <div className="flex flex-wrap items-center justify-center gap-4 py-8">
          <Link
            href="/portfolio"
            className={cn(
              buttonVariants({
                variant: 'redbutton',
                size: 'md'
              })
            )}
          >
            Portfolio
            <span className="sr-only">Buy now</span>
          </Link>
        </div>
        <Projects />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-aired/20 [mask-image:radial-gradient(70rem_20rem_at_top,white,transparent)] dark:stroke-aired/80"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={100}
                height={4}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 100V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>

            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
      </Suspense>
    </>
  );
}
