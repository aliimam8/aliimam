
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
        <div className="flex flex-col items-center">
            <h3 className="inline-flex items-baseline pb-1 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600">
              <span className="text-3xl tracking-tighter md:text-5xl"> Where Every Image Unveils a Story!</span>
            </h3>
            <hr className="mx-auto my-4 mb-16 h-1 w-6 rounded border-0 bg-aired"></hr>
          </div>
        <Travell />
      </div>

    </main>
  );
}
