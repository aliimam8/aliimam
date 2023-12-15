'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { useRef, useState } from 'react';
import { Icons } from 'src/components/icons';

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.1;
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
    <div
      ref={refContainer}
      className="relative z-10 "
      id="intro"
    >
      <div className="mx-auto text-center flex px-8 my-20 md:my-40 max-w-7xl flex-col items-center justify-center text-3xl font-extrabold tracking-tighter md:text-6xl">
        <div className="leading-[1.2] flex flex-col gap-10">
          <div className="introText flex items-center justify-center" style={{ opacity: opacityForBlock(progress, 0) }}>
            I <Icons.heart fill="#f50537" className="animate-pulse mt-2 h-7 w-7 md:h-12 md:w-12 mx-2 md:mx-3 text-aired" /> design.
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I use my passion and skills to build digital products and experiences.
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I&apos;m passionate about graphic design, pixel perfect UI and 3D.
          </span>
        </div>
      </div>
    </div>
  );
}