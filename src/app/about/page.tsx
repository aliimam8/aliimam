import { Suspense } from 'react';
import Image from 'next/image';
import About from 'src/components/common/about';
import Logos from 'src/components/common/logos';
import { Experience } from 'src/components/common/experience';

import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "About AI",
  description: "Explore the latest news and updates from the community",
}

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <div className="flex items-center justify-center text-center">
            <Image
              src="/ali.png"
              alt="Your Image"
              height={1000}
              width={1000}
              className=" mb-10 mt-10 w-[250px] rounded-lg p-3 ring-1 ring-aired lg:w-[300px]"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <About />

          <Experience />
        </div>
        <Logos />
      </Suspense>
    </>
  );
}
