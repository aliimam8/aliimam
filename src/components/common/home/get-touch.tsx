'use client';

import { Icons } from '@/components/icons';
import { motion, useAnimate, useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
};

const GetInTouch = () => {
  const [scope, animate] = useAnimate();
  const cardsRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' });

  React.useEffect(() => {
    animate(
      [
        ['#pointer', { left: 200, top: 60 }, { duration: 0 }],
        ['#javascript', { opacity: 1 }, { duration: 0.3 }],
        ['#pointer', { left: 50, top: 102 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#javascript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#react-js', { opacity: 1 }, { duration: 0.3 }],
        ['#pointer', { left: 224, top: 170 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#react-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#typescript', { opacity: 1 }, { duration: 0.3 }],
        ['#pointer', { left: 88, top: 198 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#typescript', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }],
        ['#next-js', { opacity: 1 }, { duration: 0.3 }],
        ['#pointer', { left: 200, top: 60 }, { at: '+0.5', duration: 0.5, ease: 'easeInOut' }],
        ['#next-js', { opacity: 0.4 }, { at: '-0.3', duration: 0.1 }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    );
  }, [animate]);

  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <motion.div
        className="relative md:h-[240px] h-[440px] border border-slate-100 dark:border-slate-900 rounded-3xl p-1 "
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={variants}
        ref={cardsRef}
        transition={{
          duration: 0.5
        }}
      >
        <div className="grid grid-cols-1 gap-6 p-4 lg:p-6">
          {/* Main */}
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative mt-24 flex w-[300px]" ref={scope}>
              <Icons.aiLogo className="w-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
              <div
                id="Graphic Design"
                className="absolute bottom-12 left-10 rounded-full  border border-slate-100 bg-slate-200 px-2 py-1 text-xs opacity-40 dark:border-slate-900 dark:bg-slate-800"
              >
                Graphic Design
              </div>
              <div
                id="UI UX"
                className="absolute left-2 top-14 rounded-full border border-slate-100 bg-slate-200 px-2 py-1 text-xs opacity-40 dark:border-slate-900 dark:bg-slate-800"
              >
                UI UX
              </div>
              <div
                id="3D"
                className="text-x absolute bottom-14 right-1 rounded-full border border-slate-100 bg-slate-200 px-2 py-1 opacity-40 dark:border-slate-900 dark:bg-slate-800"
              >
                3D
              </div>
              <div
                id="Coding"
                className="absolute right-10 top-4 rounded-full  border border-slate-100 bg-slate-200 px-2 py-1 text-xs opacity-40 dark:border-slate-900 dark:bg-slate-800"
              >
                Coding
              </div>

              <div id="pointer" className="absolute">
                <svg
                  width="16.8"
                  height="18.2"
                  viewBox="0 0 12 13"
                  className="fill-aired"
                  stroke="aired"
                  strokeWidth="1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                  />
                </svg>
                <span className="relative left-4 rounded-3xl bg-aired px-2 py-0.5 text-xs">
                  Imam
                </span>
              </div>
            </div>

            {/* Right part with an email button */}
            <div className="flex mt-20 flex-col justify-center px-4">
              <p className="mb-2 text-3xl font-bold">Any questions about Graphic Design?</p>
              <p className="text-zinc-300">Feel free to reach out to me!</p>
              <div className="my-8">
                <a
                  href="mailto:aliimam.original@gmail.com"
                  className="rounded-full bg-aired px-4 py-2 text-sm text-white"
                >
                  aliimam.original@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
