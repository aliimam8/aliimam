import { Suspense } from 'react';

import type { Metadata, ResolvingMetadata } from 'next'
import { Icooons } from './3dicons';
import site from '@/config/site'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Avegra } from '@/app/fonts';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';


const title = '3D Icons'
const description =
  'This is the equipment I currently use for graphic designing, programming, making videos, and every day.'

type UsesPageProps = {
  params: Record<string, never>
  searchParams: Record<string, never>
}


export default function AboutAI() {

  return (
    <div className='my-40'>
      
      <div className='px-8'>
        <p className='text-center text-md  lg:text-xl tracking-widest uppercase font-light'>
          Introducing
        </p>
        <div className='flex justify-center'>
        <Image
          src="/images/products/3dicons.png"
          alt="Your Image"
          height={1000}
          width={1000}
          className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] -my-10 md:-my-20 object-cover "
        />
      </div>
        
        <p className='text-center md:text-md my-2 text-sm mx-auto max-w-md font-light'>
        +100 3D icons 
          for your amazing design projects.</p>

        <div className="flex mt-10 justify-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1yYm0Xwfz_a9Q6lLqsRNTK6X10egd5O0N/view?usp=drive_link"
            target='_blank'
            className={cn(
              buttonVariants({
                variant: 'redbutton',
                size: 'md'
              })
            )}
          >
            Download Gradient Pack
            <span className="sr-only">Buy now</span>
          </Link>
          <Link
            href="https://drive.google.com/file/d/10UB_7Jj5xIZ7GzLhZ6ZmTdGxMVVZfnQE/view?usp=drive_link"
            target='_blank'
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'md'
              })
            )}
          >
            Download Gray Pack
            <span className="sr-only">Buy now</span>
          </Link>
        </div>
        <p className='text-center text-white font-semibold ml-2 mt-6'>All 3D icons are 100% free.</p>

      </div><div className='mx-auto mt-10 max-w-5xl px-4 sm:px-6'>
        <Icooons />
      </div>
      
      <p className='text-center mt-10 text-md lg:text-xl text-aired'>
        Download. Edit. Upload.
      </p><div className='px-8'>
        <h1 className={cn(
          Avegra.className,
          'text-center py-2 text-3xl sm:text-6xl '
        )}>
          The Quality of Icons
        </h1>
        <p className='text-center md:text-md text-sm mx-auto max-w-md text-slate-600 dark:text-slate-400 font-light'>
          +100 3D icons 
          for your amazing design projects.</p>
          <div className="flex mt-10 justify-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1yYm0Xwfz_a9Q6lLqsRNTK6X10egd5O0N/view?usp=drive_link"
            target='_blank'
            className={cn(
              buttonVariants({
                variant: 'redbutton',
                size: 'md'
              })
            )}
          >
            Download Gradient Pack
            <span className="sr-only">Buy now</span>
          </Link>
          <Link
            href="https://drive.google.com/file/d/10UB_7Jj5xIZ7GzLhZ6ZmTdGxMVVZfnQE/view?usp=drive_link"
            target='_blank'
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'md'
              })
            )}
          >
            Download Gray Pack
            <span className="sr-only">Buy now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
