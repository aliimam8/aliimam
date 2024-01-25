'use client';

import dayjs from 'dayjs';
import React, { useState } from 'react';
import useSWR from 'swr';
import Block from "./block"
import { AllColors } from './all-colors';

import { Skeleton } from '@/components/ui/skeleton';
import fetcher from '@/lib/fetcher';
import { type Views } from '@/types';
import LikeButton from 'src/components/ui/like-button';
import Circle from './pallate';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { useCopyToClipboard } from '@/hooks/use-copy-clipboard'
import { Icons } from '@/components/icons';

type HeaderProps = {
  date: string;
  title: string;
  slug: string;
  download: string;
  dimention: string;
  discription: string;
  size: string;
};

const Header = (props: HeaderProps) => {
  const { title, slug, download, dimention, discription, size } = props;
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  );

  React.useEffect(() => {
    const increment = async () => {
      await fetch('/api/views', {
        method: 'POST',
        body: JSON.stringify({
          slug
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    increment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [hsva, setHsva] = useState({ h: 347, s: 97, v: 96, a: 1 });
  const [copy, isCopied] = useCopyToClipboard()
  const [text, setText] = React.useState<string>(size)

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold md:text-5xl">{title}</h1>
      <p className='text-sm text-center text-slate-600 dark:text-slate-400'>{discription}</p>

      <Block color={size} />
      <Circle
        className='justify-center mt-10'
        color={size}
      />

      <div className="grid grid-cols-2 text-sm max-md:gap-8 md:grid-cols-2">
        <div className="space-y-2 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Views
          </div>
          {viewsIsLoading ? (
            <Skeleton className="h-6 w-32 rounded-md" />
          ) : (
            <div className="text-lg font-bold">{viewsData?.views}</div>
          )}
        </div>

        <div className="space-y-2 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Color Code
          </div>
          <p className="text-lg font-semibold">{size}</p>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-3 md:grid-cols-3">
        <LikeButton slug={slug} />

        <Button
          onClick={() => copy({ text })}
          type='button'
          className={cn(
            buttonVariants({
              variant: 'aibutton',
              size: 'lg'
            })
          )}
          aria-label='Copy code to clipboard'
        >
          <div className='flex items-center'>
            {isCopied ? <Icons.check size={20} /> : <Icons.copy size={20} />}
            <span className="flex gap-2 px-2">
              <p className="text-lg">Copy Color Code</p>
            </span>
          </div>
        </Button>
        <AllColors />
      </div>
    </div>
  );
};

export default Header;
