'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { useRef, useState } from 'react';
import { Icons } from 'src/components/icons';
import { AISeparator } from "@/components/ui/seperator"


function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.08;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }: any) => {
    setScrollY(scroll);
  });

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="relative z-10" id="intro">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-8 text-center text-xl font-extrabold tracking-tighter my-10 md:text-6xl">
        <div className="relative py-10 w-full h-full border border-slate-200 dark:border-slate-800 ">
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-aired text-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-aired text-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-aired text-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-aired text-white" />
          <div className="absolute -bottom-1.5 left-1/2 border border-slate-200 dark:border-slate-800 h-2.5 w-2.5 bg-black dark:bg-white text-white" />
          <div className="absolute -top-1.5 left-1/2 border border-slate-200 dark:border-slate-800 h-2.5 w-2.5 bg-black dark:bg-white text-white" />

          <div className="flex flex-col gap-10 leading-[1.2] md:gap-10">
            <div
              className="introText flex items-center justify-center px-8"
              style={{ opacity: opacityForBlock(progress, 0) }}
            >
              Design is my {' '}
              <Icons.heart
                fill="#f50537"
                className="mx-1 h-4 w-4 animate-pulse text-aired md:mx-3 md:h-12 md:w-12"
              />{' '}
              language.
            </div>
            <div className='relative'>
            <Icons.add strokeWidth={1} className="absolute -top-3 -left-3 h-6 w-6 text-aired" />
            <Icons.add strokeWidth={1} className="absolute -top-3 -right-3 h-6 w-6 text-aired" />
            <AISeparator />
            </div>
            <span
              className="introText inline-block after:content-['_'] px-8"
              style={{ opacity: opacityForBlock(progress, 1) }}
            >
              I leverage my passion and skills to create digital products and experiences.
            </span>
            <div className='relative'>
            <Icons.add strokeWidth={1} className="absolute -top-3 -left-3 h-6 w-6 text-aired" />
            <Icons.add strokeWidth={1} className="absolute -top-3 -right-3 h-6 w-6 text-aired" />
            <AISeparator />
            </div>
            <span
              className="introText inline-block px-8"
              style={{ opacity: opacityForBlock(progress, 2) }}
            >
              I&apos;m passionate about graphic design, pixel perfect UI and 3D.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
