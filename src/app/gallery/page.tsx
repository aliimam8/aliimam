import { Travell } from './travell';
import Favo from '@/components/common/fav';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore the latest news and updates from the community'
};

export default function Gallery() {
  return (
    <main>
      <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-7xl ">
        <h1 className="my-10 mt-40 text-center text-2xl font-bold sm:text-4xl">
          Gallery
          <hr className="bg-amber-400 mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
        <Travell />
        <h1 className="my-10 mt-40 text-center text-2xl font-bold sm:text-4xl">
          My Favourite
          <hr className="bg-amber-400 mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
        <Favo />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl "></div>
    </main>
  );
}
