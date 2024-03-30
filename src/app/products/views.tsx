'use client';

import React from 'react';
import useSWR from 'swr';

import { Skeleton } from '@/components/ui/skeleton';
import fetcher from '@/lib/fetcher';
import { type Views } from '@/types';

type HeaderProps = {
  date: string;
  title: string;
  slug: string;
};

const Header = (props: HeaderProps) => {
  const { slug } = props;
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

  return (
    <div className="mb-6">
      <div className="flex items-center">
        <p className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
          Views:
        </p>
        {viewsIsLoading ? (
          <Skeleton className="h-3 w-32 rounded-md" />
        ) : (
          <div className="px-3 text-lg font-bold">{viewsData?.views}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
