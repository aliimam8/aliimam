import { Suspense } from 'react';
import Image from "next/image";
import About from 'src/components/common/about';
import Logos from 'src/components/common/logos';
import { Experience } from "src/components/common/experience";

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
      <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <div className="flex items-center text-center justify-center">
          <Image
            src="/ali.png"
            alt="Your Image"
            height={1000}
            width={1000}
            className=" mb-10 mt-10 rounded-lg w-[250px] lg:w-[300px] ring-1 p-3 ring-aired"
          />
        </div>
      </div>
        
        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <About />
          
          <Experience/>
        </div>
        <Logos/>
      </Suspense>
    </>
  );
}
