'use client';

import type { FC } from 'react';
import useSWR, { SWRConfiguration, Fetcher } from 'swr';
import { Icons } from 'src/components/icons';
import Link from 'next/link';
import { buttonVariants } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';

type Dev = { followers: number; views: number };
const config: SWRConfiguration = {
  fallbackData: { followers: 238, views: 1815 },
  revalidateOnMount: true
};

const fetcher: Fetcher<Dev> = (input: RequestInfo | URL) => fetch(input).then((res) => res.json());

const Writing: FC = () => {
  const { data } = useSWR<Dev>('/api/send', fetcher, config);

  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <div className="text-center">
        <h1 className="mb-4 text-center text-2xl font-bold">Writing</h1>
        <p className="text-slate-600 dark:text-slate-400">Learning things, and then teaching others.</p>

        {data ? (
          <div className="flex flex-wrap items-center space-x-8 justify-center py-4">
            <div className="flex gap-2 ">
              <Icons.eye className="w-4" />
              <p className=' font-semibold'>{data.views.toLocaleString()} views</p>
            </div>
            <div className="flex gap-2">
              <Icons.checkCicle className="w-4" />
              <p className='font-semibold'>{data.followers.toLocaleString()} subscribers</p>
            </div>
          </div>
        ) : (
          <div className="" aria-busy="true" aria-live="polite" />
        )}
      </div>
      <form className="flex flex-col space-y-3 items-center ">
        <div className='flex gap-1 text-center item-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100  dark:bg-slate-900 p-1'>
          <input
            className="px-4 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100  dark:bg-slate-900 p-1"
            placeholder="aliimam@gmail.com"
            type="email"
            spellCheck={false}
          />
          <Link
            href=""
            className={cn(
              buttonVariants({
                variant: 'redbutton',
                size: 'sm'
              })
            )}
          >
            <span className="flex gap-2 px-1">
            Subscribe
            </span>
          </Link>
        </div>
        <p className='text-xs font-light text-slate-600 dark:text-slate-400'>Be notified of new posts. No spam.</p>
      </form>
    </div>
  );
};

export default Writing;
