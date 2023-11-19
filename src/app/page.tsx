import { Suspense } from 'react';
import { Carousel } from 'src/components/carousel';
import About from '../components/common/about';
import { Experience } from "../components/common/experience";
import Hero from '../components/common/hero';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <Hero />
        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <About />
          <Experience/>
        </div>
        <Carousel />
      </Suspense>
    </>
  );
}
