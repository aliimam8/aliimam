import { Suspense } from 'react';

import { Graaadients } from "./cards"
import { type Metadata } from 'next';
import { Avegra } from '../fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the latest news and updates from the community'
};

export default function AboutAI() {
  return (
    <>
      <Suspense>
      <h1 className={cn(
          Avegra.className, "my-10 mt-40 text-center text-6xl sm:text-8xl")}>
          Products
          <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
        <Graaadients/>
      </Suspense>
    </>
  );
}
