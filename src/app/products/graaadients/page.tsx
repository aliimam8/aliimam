import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
import { Grads } from './grads';
import site from '@/config/site'


// export const runtime = 'edge'
const title = 'Graaadients'
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
          <div className='mx-auto mt-20 max-w-5xl px-4 sm:px-6'>
            <Grads />
          </div>

          <div className='flex mt-10 justify-center mx-auto max-w-5xl px-4 sm:px-6'>
            <video autoPlay muted loop>
              <source width={720} height={480} src="/videos/graaadients.mp4" />
            </video>
          </div>


    </>
  );
}
