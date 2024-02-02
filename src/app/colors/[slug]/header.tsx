'use client';

import React from 'react';
import useSWR from 'swr';
import { MaxBlock } from "src/components/color/block"
import { AllColors } from 'src/components/color/all-colors';


import { Skeleton } from '@/components/ui/skeleton';
import fetcher from '@/lib/fetcher';
import { type Views } from '@/types';
import LikeButton from 'src/components/ui/like-button';
import Swatch from './pallate';
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
  draft: string;
  discription: string;
  size: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
};

const Header = (props: HeaderProps) => {
  const { title, slug, download, dimention, draft, discription, size, color1, color2, color3, color4, color5, color6 } = props;
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

  const [copy, isCopied] = useCopyToClipboard()
  const [text, setText] = React.useState<string>(size)


  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold md:text-5xl">{title}</h1>
      <p className='text-sm text-center text-slate-600 dark:text-slate-400'>{discription}</p>
      <div className='border border-slate-200 p-1 dark:border-slate-800 rounded-3xl'>
        <MaxBlock color={size} />
      </div>
      <div className='flex items-center justify-center cursor'>

        <Swatch
          colors={[color1, color2, color3, color4, color5, color6]}
          onClick={() => copy({ text })}
          aria-label='Copy code to clipboard'
        />

      </div>
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
            Color Codes
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
