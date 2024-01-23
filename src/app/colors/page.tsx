import { Suspense } from 'react';

import { type Metadata } from 'next';
import { Avegra } from '../fonts';
import { cn } from '@/lib/utils';
import { Carousel } from 'src/components/carousel';
import Colors from '@/components/color';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the latest news and updates from the community'
};

export default function AboutAI() {
  return (
    <>
      <Suspense>
        <p className='mt-40 text-center my-3 text-xs text-slate-600 dark:text-slate-400 lg:text-md tracking-widest uppercase font-light'>
          Take a look at what’s new right now.
        </p>
        <h1 className={cn(
          Avegra.className, "text-center text-6xl sm:text-8xl")}>
          The Colors
        </h1>
        <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
        
        <Colors/>
      </Suspense>
    </>
  );
}
