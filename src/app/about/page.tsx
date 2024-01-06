import { Suspense } from 'react';
import Image from 'next/image';
import About from 'src/components/common/about';
import Logos from 'src/components/common/logos';
import { Experience } from 'src/components/common/experience';
import Writing from 'src/components/common/writing';
import Dashboard from 'src/components/common/dashboard';
import 'src/styles/text.css';

import ImageZoom from '@/components/common/image-zoom';

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default function AboutAI() {
  return (
    <>
      <Suspense>
        <div className="mx-auto mt-60 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <div className='px-4'>
          <div className="relative mx-auto mt-10 flex h-[28rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
            <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />
            <ImageZoom>
              <Image
                src="/ali.jpg"
                alt="Your Image"
                height={1000}
                width={1000}
                className="h-[410px] rounded-xl object-cover "
              />
            </ImageZoom>
          </div>
        </div>
        </div>
        <div className="mx-auto mt-40 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <h1 className="items-center text-center text-2xl font-bold sm:text-4xl">
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
