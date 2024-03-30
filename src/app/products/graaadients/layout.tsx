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
        <Image
          src="/images/products/grad.png"
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

      </div>
        <main>{children}</main>
      </Suspense>
    </div>
  );
}
