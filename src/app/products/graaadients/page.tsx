import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
import { Grads } from './grads';
import site from '@/config/site'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Avegra } from '@/app/fonts';
import { buttonVariants } from '@/components/ui/button';


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
     <Suspense>
      <div className='mx-auto mt-14 max-w-5xl px-4 sm:px-6'>
        <Grads />
      </div>

      <div className='flex mt-10 justify-center mx-auto max-w-5xl px-4 sm:px-6'>
        <video autoPlay muted controls loop>
          <source width={720} height={480} src="/videos/graaadients.mp4" />
        </video>
      </div>
      <p className='text-center mt-10 text-md lg:text-xl text-aired'>
        Download. Edit. Upload.
      </p>

      <div className='px-8'>
        <h1 className={cn(
          Avegra.className,
          'text-center py-2 text-3xl sm:text-6xl '
        )}>
          The Beauty of Gradients
        </h1>
        <p className='text-center md:text-md text-sm mx-auto max-w-md text-slate-600 dark:text-slate-400 font-light'>
          +1000 abstract gradient elements and backgrounds
          for your amazing design projects.</p>
        <div className="grid mt-10 justify-center gap-4">
          <Link
            href="/products/images-bundle"
            className={cn(
              buttonVariants({
                variant: 'redbutton',
                size: 'md'
              })
            )}
          >
            Download Full Pack
            <span className="sr-only">Buy now</span>
          </Link>
          </div>
        </div>
        </Suspense>
  );
}
