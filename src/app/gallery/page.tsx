

import { cn } from '@/lib/utils';
import { Travell } from './travell';

import { type Metadata } from 'next';
import { Avegra } from '../fonts';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore the latest news and updates from the community'
};

export default function Gallery() {
  return (
    <main>

      <div className="mx-auto mt-40 max-w-3xl px-4 sm:px-6 md:max-w-7xl">
        <h1 className={cn(
          Avegra.className, "my-10 text-center text-6xl sm:text-8xl")}>
          Gallery
          <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
        <Travell />
      </div>

    </main>
  );
}
