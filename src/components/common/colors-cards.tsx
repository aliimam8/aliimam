'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { type ColorsPostCore } from '@/types';
import { cn } from '@/lib/utils';

type PostCardsProps = {
  posts: ColorsPostCore[];
  initialDisplayPosts?: ColorsPostCore[];
};

const PostCards = (props: PostCardsProps) => {
  const { posts, initialDisplayPosts = [] } = props;

  const Posts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }
      return newSearchParams.toString();
    },
    [searchParams]
  );

  return (
    <>
      <div className="group mt-2 grid gap-4 md:grid-cols-3" data-testid="post-cards">
        {Posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      
    </>
  );
};

type PostCardProps = ColorsPostCore;

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title, tags } = props;

  return (
    <>
      <Link
        key={_id}
        href={`/colors/${slug}`}
        className={cn(
          'relative flex flex-col rounded-3xl border border-slate-200 p-2 dark:border-slate-800',
          'hover:before:opacity-100'
        )}
        data-id="post-card"
      >
        <div className="absolute inset-px -z-20 rounded-[inherit]" />
        
        <div className="p-3">
          <div className='flex justify-center items-start'>
          <h2 className="text-xl font-semibold ">{title}</h2>
        </div>

        </div>
      </Link>
    </>
  );
};

export default PostCards;
