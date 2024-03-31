import { ReactNode, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avegra } from '@/app/fonts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div >
      <Suspense >
        <div className='px-8'>
        <p className='text-center mt-40 text-md lg:text-xl tracking-widest uppercase font-light'>
          Introducing
        </p>
        <h1 className={cn(
          Avegra.className,
          'tracking-tighter text-center text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600'
        )}>
          Bloooks
        </h1>
        <p className='text-center md:text-md md:-mt-4 text-white text-sm mx-auto max-w-md font-light'>
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
        <p className='text-center text-white font-semibold ml-2 mt-6'>All bloooks are 100% free.</p>

      </div>
        <main>{children}</main>
      </Suspense>
    </div>
  );
}
