import { Suspense } from 'react';
import Image from 'next/image';
import About from 'src/components/common/about';
import Logos from 'src/components/common/logos';
import { Experience } from 'src/components/common/experience';
import Writing from 'src/components/common/writing';
import Dashboard from 'src/components/common/dashboard';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About AI',
  description: 'Explore the latest news and updates from the community'
};

export default function AboutAI() {
  return (
    <>
      <Suspense>
        <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <div className="flex items-center justify-center text-center">
            <Image
              src="/ali.jpg"
              alt="Your Image"
              height={1000}
              width={1000}
              className=" mb-10 mt-10 w-[250px] rounded-lg p-3 ring-1 ring-aired lg:w-[300px]"
            />
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <h1 className=" left-0 right-0 items-center text-center text-2xl font-bold sm:text-4xl">
            Dashboard
            <hr className="mx-auto my-4 h-1 w-6 rounded-full border-0 bg-aired"></hr>
          </h1>
          <p className="mx-auto max-w-3xl px-6 text-center text-xs leading-5 text-slate-600 dark:text-slate-400">
            This is my personal dashboard, built with Next.js API routes deployed as serverless
            functions. I use this dashboard to track various metrics across platforms like YouTube
            and more.
          </p>
          <Dashboard />
          <About />
          <Experience />
        </div>
        <Logos />
        <Writing />
      </Suspense>
    </>
  );
}
