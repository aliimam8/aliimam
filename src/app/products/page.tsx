import { Suspense } from 'react';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the latest news and updates from the community'
};

export default function AboutAI() {
  return (
    <>
      <Suspense>
      <h1 className="my-10 mt-40 text-center text-2xl font-bold sm:text-4xl">
          Products
          <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
      </Suspense>
    </>
  );
}
