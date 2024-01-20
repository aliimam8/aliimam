'use client'

import React from 'react'
import { Icons } from 'src/components/icons';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Avegra } from '@/app/fonts';
import Link from 'next/link';


const Items = () => {
    return (
        <>
        <Link href="/products/graaadients">
            <div className='flex gap-2 w-full'>
                <div className='group w-full relative p-2 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                    <div className='flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                        <Image
                            src="/images/products/p-grad.jpg"
                            alt="Your Image"
                            height={500}
                            width={500}
                            className="h-[70px] rounded-lg object-cover "
                        />
                        <h1 className={cn(
                            Avegra.className,
                            'absolute mt-2 text-4xl text-white'
                        )}>
                            Graaadients
                        </h1>
                    </div>
                    <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                        Free Download
                    </span>
                </div>
            </div>
                </Link>
        </>
    )
}

export default Items