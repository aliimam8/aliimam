import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
import { Travell } from './travell';
import site from '@/config/site'
import Image from 'next/image';
import { Avegra } from 'src/app/fonts';
import { cn } from '@/lib/utils';
import 'src/styles/text.css';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

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
      <Image
        src="/bbg.png"
        alt="Your Image"
        height={1000}
        width={1000}
        className="-z-10 absolute top-0 min-h-screen w-full object-cover "
      />
      <div className='px-6 mt-40'>
        <Suspense>
          <p className='text-center text-md text-white lg:text-xl tracking-widest uppercase font-light'>
            Introducing
          </p>

          <h1 className={cn(
            Avegra.className,
            'tracking-tighter text-center text-7xl sm:text-9xl text-white'
          )}>
            Graaadients
          </h1>
          <p className='text-center md:text-md md:-mt-4 text-white text-sm mx-auto max-w-md font-light'>
            +1000 abstract gradient elements and backgrounds
            for your amazing design projects</p>

          <div className="flex flex-wrap mt-10 items-center justify-center gap-4">
            <Link
              href="/products/images-bundle"
              className={cn(
                buttonVariants({
                  variant: 'redbutton',
                  size: 'sm'
                })
              )}
            >
              Download Now
              <span className="sr-only">Buy now</span>
            </Link>
          </div>
          
          <div className='mx-auto mt-20 max-w-5xl'>
            <Travell />
          </div>
          <div className='flex mt-10 justify-center mx-auto max-w-5xl shadow-md'>
            <video autoPlay muted loop>
              <source width={720} height={480} src="/videos/graaadients.mp4" />
            </video>
          </div>
        </Suspense>
      </div>
    </>
  );
}
