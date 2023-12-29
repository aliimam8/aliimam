import { Work } from './Work';
import Projects from '@/components/projects';
import { CarouselSpacing } from 'src/components/common/carousel';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore the latest news and updates from the community'
};

export default function Gallery() {
  return (
    <main>
      <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-7xl ">
        <h1 className="my-10 mt-40 text-center text-2xl font-bold sm:text-4xl">
          Portfolio
          <hr className="mx-auto my-4 h-1 w-6 rounded-full border-0 bg-aired"></hr>
        </h1>
        <div className="mb-10">
          <Projects />
        </div>
      </div>
      <CarouselSpacing />
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-7xl ">
      <Work />
      </div>
    </main>
  );
}
