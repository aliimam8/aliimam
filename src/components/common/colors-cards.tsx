'use client';

import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

import { type ColorsPostCore } from '@/types';
import { cn } from '@/lib/utils';
import { CardBlock } from "src/components/color/block"

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
      <div className="group mt-2 grid grid-cols-2 gap-4 md:grid-cols-4" data-testid="post-cards">
        {Posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>

    </>
  );
};

type PostCardProps = ColorsPostCore;

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title, size } = props;

  return (
    <>
      <Link
        key={_id}
        href={`/colors/${slug}`}
        className={cn(
          'relative flex flex-col rounded-3xl border border-slate-200 p-1 dark:border-slate-800',
          
        )}
        data-id="post-card"
      >
        <div className=''>
        <CardBlock color={size} />

        <h2 className="flex text-xs p-2 text-center items-center justify-center ">
          {title}
        </h2>
        </div>
      </Link>
    </>
  );
};

export default PostCards;
