import { Suspense } from 'react';
import Image from 'next/image';
import About from 'src/components/common/about';
import Logos from 'src/components/common/logos';
import { Experience } from 'src/components/common/experience';
import GetTouch from 'src/components/common/home/get-touch';
import Dashboard from 'src/components/common/dashboard';
import { LampContainer } from 'src/components/ui/lamp';
import 'src/styles/text.css';

import ImageZoom from '@/components/common/image-zoom';
import { Icons } from '@/components/icons';
import { motion } from 'framer-motion';

export default function AboutAI() {
  return (
    <>
      <Suspense>
        <div className="mx-auto mt-40 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <div className="px-4">
            <div className="relative mx-auto mt-10 flex h-[28rem] max-w-sm flex-col items-start border border-slate-100 p-4 dark:border-slate-900">
              <Icons.add strokeWidth={1} className="absolute -left-3 -top-3 h-6 w-6 text-aired" />
              <Icons.add
                strokeWidth={1}
                className="absolute -bottom-3 -left-3 h-6 w-6 text-aired"
              />
              <Icons.add strokeWidth={1} className="absolute -right-3 -top-3 h-6 w-6 text-aired" />
              <Icons.add
                strokeWidth={1}
                className="absolute -bottom-3 -right-3 h-6 w-6 text-aired"
              />
              <ImageZoom>
                <Image
                  src="/ali.jpg"
                  alt="Your Image"
                  height={1000}
                  width={1000}
                  className="h-[404px] object-cover "
                />
                <div className="relative bg-gradient-to-b from-black/0 to-black text-white">
                  <h1 className="z-20 -mt-24 items-center text-center text-[70px] font-black tracking-tighter ">
                    Ali Imam
                  </h1>{' '}
                </div>
              </ImageZoom>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
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
      </Suspense>
    </>
  );
}
