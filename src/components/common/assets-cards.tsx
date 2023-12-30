'use client';

import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';


import { Skeleton } from '@/components/ui/skeleton';
import fetcher from '@/lib/fetcher';
import { type AssetsPostCore, type Likes, type Views } from '@/types';
import AiTag from '@/components/mdx/Tag';

import Image from '../mdx/image';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="hidden space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  );
}

type PostCardsProps = {
  posts: AssetsPostCore[];
  pagination?: PaginationProps;
  initialDisplayPosts?: AssetsPostCore[];
};

const PostCards = (props: PostCardsProps) => {
  const { posts, pagination, initialDisplayPosts = [], } = props;

  const Posts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="group mt-2 grid gap-4 md:grid-cols-3" data-testid="post-cards">
        {Posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
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
          <div className="flex mt-2 flex-wrap">{tags?.map((tag) => <AiTag key={tag} text={tag} />)}</div>
        </div>
      </Link>
    </>
  );
};

export default PostCards;
