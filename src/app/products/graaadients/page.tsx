import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
import { Travell } from './travell';
import site from '@/config/site'
import Image from 'next/image';

// export const runtime = 'edge'
const title = 'Uses'
const description =
  'This is the equipment I currently use for graphic designing, programming, making videos, and every day.'

type UsesPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: UsesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/uses`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/uses`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

export default function AboutAI() {

  return (
    <>
      <Suspense>
        <h1 className=" mt-40 tracking-tighter text-center text-6xl font-extrabold sm:text-8xl px-6">
          Free Mesh 
        </h1>
        <p className='tracking-tighter text-center text-2xl font-semibold text-slate-400 dark:text-slate-600 sm:text-4xl'>Graaadient Collection</p>
        <div className="mt-8">
            <Image
              src="/bgg.jpg"
              alt="Your Image"
              height={1000}
              width={1000}
              className="h-[400px] w-full object-cover "
            />
        </div>
        <div className='mx-auto mt-20 max-w-5xl px-6'>
          <Travell />
        </div>
      </Suspense>
    </>
  );
}
