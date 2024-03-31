import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
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
      

      <p className='text-center mt-10 text-md lg:text-xl text-aired'>
        Just. Copy. Paste.
      </p>

      <div className='px-8'>
        <h1 className={cn(
          Avegra.className,
          'text-center py-2 text-3xl sm:text-6xl '
        )}>
          The Beauty of Bloooks
        </h1>
        <p className='text-center md:text-md text-sm mx-auto max-w-md text-slate-600 dark:text-slate-400 font-light'>
          +100 Beautifully designed. Copy and paste into your apps. Open Source.</p>
        <div className="grid mt-10 justify-center gap-4">
          <Link
            href="https://twitter.com/aliimam_in"
            target='_blank'
            className={cn(
              buttonVariants({
                variant: 'redbutton',
                size: 'md'
              })
            )}
          >
            Request a bloooks
            <span className="sr-only">Buy now</span>
          </Link>
          </div>
        </div>
        </Suspense>
  );
}
