'use client';

import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import { usePathname, useSearchParams } from 'next/navigation';

import { PaginationButton } from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import fetcher from '@/lib/fetcher';
import { type AssetsPostCore, type Likes, type Views } from '@/types';
import AiTag from '@/components/mdx/Tag';

import Image from '../mdx/image';
import { cn } from '@/lib/utils';

type PostCardsProps = {
  posts: AssetsPostCore[];
  initialDisplayPosts?: AssetsPostCore[];
  pageCount: number;
};

const PostCards = (props: PostCardsProps) => {
  const { posts, pageCount, initialDisplayPosts = [] } = props;

  const Posts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams?.get('page') ?? '1';
  const per_page = searchParams?.get('per_page') ?? '3';
  const sort = searchParams?.get('sort') ?? 'productCount.desc';

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
      <div className="mt-6">
        {posts.length ? (
          <PaginationButton
            pageCount={pageCount}
            page={page}
            per_page={per_page}
            sort={sort}
            createQueryString={createQueryString}
          />
        ) : null}
      </div>
    </>
  );
};

type PostCardProps = AssetsPostCore;

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title, tags } = props;
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  );
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher
  );

  return (
    <>
      <Link
        key={_id}
        href={`/assets/${slug}`}
        className={cn(
          'relative flex flex-col rounded-3xl border border-slate-200 p-2 dark:border-slate-800',
          'hover:before:opacity-100'
        )}
        data-id="post-card"
      >
        <div className="bg-background absolute inset-px -z-20 rounded-[inherit]" />
        <Image
          src={`/images/assets/${slug}/cover.jpg`}
          className="rounded-2xl hover:saturate-0"
          width={480}
          height={360}
          alt={title}
        />
        <div className="p-3">
          <div className="grow">
            <h2 className="text-xl font-semibold ">{title}</h2>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            {likesIsLoading ? (
              <Skeleton className="h-5 w-10 rounded-md" />
            ) : (
              <div>{likesData?.likes} likes</div>
            )}
            <div>&middot;</div>
            {viewsIsLoading ? (
              <Skeleton className="h-5 w-10 rounded-md" />
            ) : (
              <div>{viewsData?.views} views</div>
            )}
          </div>
          <div className="mt-2 flex flex-wrap">
            {tags?.map((tag) => <AiTag key={tag} text={tag} />)}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCards;
