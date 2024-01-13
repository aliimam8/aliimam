
import { Travell } from './travell';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore the latest news and updates from the community'
};

export default function Gallery() {
  return (
    <main>

      <div className="mx-auto mt-40 max-w-3xl px-4 sm:px-6 md:max-w-7xl">
        <p className='text-center my-2 text-xs text-slate-600 dark:text-slate-400 lg:text-md tracking-widest uppercase font-light'>
          Welcome to My Gallery
        </p>
        <h1 className="text-center text-xl font-bold sm:text-4xl">
          Where Every Image Unveils a Story!
        </h1>
          <hr className="bg-aired rounded-full mb-16 mx-auto my-4 h-1 w-6 border-0"></hr>
        <Travell />
      </div>

    </main>
  );
}
