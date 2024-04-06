import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
import { Grads } from './grads';
import site from '@/config/site'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Avegra } from '@/app/fonts';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';


// export const runtime = 'edge'
const title = 'Graaadients'
const description =
  'This is the equipment I currently use for graphic designing, programming, making videos, and every day.'

type UsesPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}


export default function AboutAI() {

  return (
    <div className='my-40'>
      <div className='relative -top-28'>
        <Image
          src="/images/products/grad.png"
          alt="Your Image"
          height={1000}
          width={1000}
          className="-z-10 absolute top-0 min-h-screen w-full object-cover "
        />
      </div>
      <div className='px-8'>
        <p className='text-center mt-40 text-md text-white lg:text-xl tracking-widest uppercase font-light'>
          Introducing
        </p>

        <h1 className={cn(
          Avegra.className,
          'tracking-tighter text-center text-7xl sm:text-9xl text-white'
        )}>
          Graaadients
        </h1>
        <p className='text-center md:text-md md:-mt-4 text-white text-sm mx-auto max-w-md font-light'>
          +100 abstract gradient elements and backgrounds
          for your amazing design projects.</p>

        <div className="grid mt-10 justify-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1_VToKXpc0swtGWnhYKuAGL2LUyEkQtks/view?usp=drive_link"
            target='_blank'
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
        <p className='text-center text-white font-semibold ml-2 mt-6'>All gradients are 100% free.</p>

      </div><div className='mx-auto mt-10 max-w-5xl px-4 sm:px-6'>
        <Grads />
      </div><div className='flex mt-10 justify-center mx-auto  max-w-5xl px-4 sm:px-6'>
        <video autoPlay muted controls loop className='rounded-3xl'>
          <source width={720} height={480} src="/videos/graaadients.mp4" />
        </video>
      </div><p className='text-center mt-10 text-md lg:text-xl text-aired'>
        Download. Edit. Upload.
      </p><div className='px-8'>
        <h1 className={cn(
          Avegra.className,
          'text-center py-2 text-3xl sm:text-6xl '
        )}>
          The Beauty of Gradients
        </h1>
        <p className='text-center md:text-md text-sm mx-auto max-w-md text-slate-600 dark:text-slate-400 font-light'>
          +100 abstract gradient elements and backgrounds
          for your amazing design projects.</p>
        <div className="grid mt-10 justify-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1_VToKXpc0swtGWnhYKuAGL2LUyEkQtks/view?usp=drive_link"
            target='_blank'
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
    </div>
  );
}
