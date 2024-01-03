'use client';

import type { FC } from 'react';
import useSWR from 'swr';
import { Icons } from 'src/components/icons';
import Link from 'next/link';
import { buttonVariants } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';
import { type Views, type Likes } from '@/types';

type Card = {
  icon: React.ReactNode;
  title: string;
  link: string;
  target: string;
  value: number | string | undefined;
  linkText: string;
  gradient: {
    startColor: string;
    endColor: string;
  };
};

import fetcher from '@/lib/fetcher';

type Dev = { followers: number; views: number };

const Writing: FC = () => {
  const { data: likesData } = useSWR<Likes>('/api/likes', fetcher);
  const { data: viewsData } = useSWR<Views>('/api/views', fetcher);
  const data: Card[] = [
    {
      title: 'Total Views',
      link: '/store',
      value: viewsData?.views,
      target: '',
      icon: <Icons.aiLogo color="#f50537" className="w-4" />,
      linkText: 'Ali Imam',
      gradient: {
        startColor: '#f50537',
        endColor: '#f50537'
      }
    },
    {
      title: 'Total Likes',
      link: '/store',
      target: '',
      value: likesData?.likes,
      icon: <Icons.heart color="#f50537" className="w-4" />,
      linkText: 'Ali Imam',
      gradient: {
        startColor: '#f50537',
        endColor: '#f50537'
      }
    }
  ];

  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <div className="text-center">
        <h1 className="mb-4 text-center text-2xl font-bold">Writing</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Learning things, and then teaching others.
        </p>
        <div className="flex justify-center gap-2">
          {data.map((item) => {
            const {
              icon,
              link,
              target,
              title,
              value,
            } = item;

            return (
              <a
                key={title}
                rel="noopener noreferrer"
                className="hover:bg-accent group relative overflow-hidden p-4"
              >
                <div className="flex items-center justify-center gap-2 ">
                  <div className="text-foreground flex items-center gap-2 text-md font-semibold">
                    {value ? (
                      <>
                        <span>{icon}</span>
                        <span>{value}</span>
                      </>
                    ) : (
                      '--'
                    )}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{title}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <form className="flex flex-col items-center space-y-3 ">
        <div className="item-center flex gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 text-center  dark:border-slate-800 dark:bg-slate-900">
          <input
            className="rounded-full border border-slate-200 bg-slate-100 p-1 px-4  dark:border-slate-800 dark:bg-slate-900"
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
            <span className="flex gap-2 px-1">Subscribe</span>
          </Link>
        </div>
        <p className="text-xs font-light text-slate-600 dark:text-slate-400">
          Be notified of new posts. No spam.
        </p>
      </form>
    </div>
  );
};

export default Writing;
