/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Avegra } from '@/app/fonts';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Image
        src="/bbg.png"
        alt="Your Image"
        height={1000}
        width={1000}
        className="-z-10 absolute top-0 min-h-screen w-full object-cover "
      />
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
          Download Now
          <span className="sr-only">Buy now</span>
        </Link>
        <p className='text-center text-white font-semibold ml-2'>₹99.00*</p>
      </div>
      </div>

      <div className="order-last min-h-screen w-full md:order-none">{children}</div>

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
            Download Now
            <span className="sr-only">Buy now</span>
          </Link>
          <p className='text-center font-semibold ml-2'>₹99.00*</p>
        </div>
        <p className='text-center md:text-md mt-12 text-aired text-xs mx-auto'>
          If you will need help, don’t hesitate to contact me!
        </p>
      </div>
    </Suspense>
  );
}
