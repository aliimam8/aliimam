'use client';

import Dashboard from './dashboard';
import { CardStackDemo } from '@/components/common/home/grid-cards-images';
import { ResizableDemo } from './resizebox';

const AboutMe = () => {
  return (
    <>
      <div className="relative inset-0 -z-10">
        <svg
          className="absolute h-[64rem] w-full  stroke-aired/20 [mask-image:radial-gradient(70rem_40rem,white,transparent)] dark:stroke-aired/50"
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

          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto mt-20 max-w-3xl px-4">
        <div className="grid md:grid-cols-2 mb-2 justify-center gap-2">
          <div className="grid justify-center max-w-sm gap-2">
            <CardStackDemo />
            <Dashboard />
          </div>
          <div className="md:ml-2">
            <ResizableDemo />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
