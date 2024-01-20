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
    <div ref={refContainer} className="relative z-10 " id="intro">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-8 text-center text-3xl font-extrabold tracking-tighter md:my-10 md:text-6xl">
        <div className="relative py-8 w-full h-full border border-slate-200 dark:border-slate-800 [mask-image:radial-gradient(200rem_200rem_at_center,white,transparent)]">
          <Icons.add strokeWidth={2} className="absolute -left-4 -top-4 h-8 w-8 text-aired" />
          <Icons.add strokeWidth={2} className="absolute -bottom-4 -left-4 h-8 w-8 text-aired" />
          <Icons.add strokeWidth={2} className="absolute -right-4 -top-4 h-8 w-8 text-aired" />
          <Icons.add strokeWidth={2} className="absolute -bottom-4 -right-4 h-8 w-8 text-aired" />
          <div className="flex flex-col gap-10 leading-[1.2] md:gap-10">
            <div
              className="introText flex items-center justify-center px-8"
              style={{ opacity: opacityForBlock(progress, 0) }}
            >
              I{' '}
              <Icons.heart
                fill="#f50537"
                className="mx-2 mt-2 h-7 w-7 animate-pulse text-aired md:mx-3 md:h-12 md:w-12 "
              />{' '}
              design.
            </div>
            <AISeparator />
            <span
              className="introText inline-block after:content-['_'] px-8"
              style={{ opacity: opacityForBlock(progress, 1) }}
            >
              I use my passion and skills to build digital products and experiences.
            </span>

            <AISeparator />
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
