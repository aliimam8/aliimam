'use client';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import { motion, useInView } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton';
import Autoplay from 'embla-carousel-autoplay';
import fetcher from '@/lib/fetcher';
import { type GalleryPostCore, type Likes, type Views } from '@/types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import Image from '../mdx/image';
import { cn } from '@/lib/utils';

type PostCardsProps = {
  posts: GalleryPostCore[];
};

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}


const PostCards = (props: PostCardsProps) => {
  const cardsRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })
  const { posts } = props;
  const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative will-change-[opacity]'
    >
      <div className="" data-testid="post-cards">
        <Carousel
          className="w-full max-w-sm md:max-w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: 'start'
          }}
        >
          <div className="hidden justify-end gap-3 md:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent className="">
            {posts.map((post) => (
              <CarouselItem className="md:basis-1/3">
                  <PostCard key={post._id} {...post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.div>
  );
};

type PostCardProps = GalleryPostCore;

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title, date } = props;
  const [formattedDate, setFormattedDate] = React.useState('');
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  );
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher
  );

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('MMMM DD, YYYY'));
  }, [date]);

  return (
    <>
        <Link
          key={_id}
          href={`/Gallery/${slug}`}
          className={cn(
            'relative flex flex-col rounded-3xl border border-slate-200 p-2 dark:border-slate-800',
            'hover:before:opacity-100'
          )}
          data-id="post-card"
        >

          <div className="bg-background absolute inset-px -z-20 rounded-[inherit]" />
          <Image
            src={`/images/Gallery/${slug}/cover.jpg`}
            className="rounded-2xl hover:saturate-0"
            width={480}
            height={360}
            alt={title}
          />
          <div className="p-3">
            <div className='flex justify-between items-start'>
              <div>
                <div className="grow ">
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
              </div>
            </div>
          </div>
        </Link>
    </>
  );
};

export default PostCards;
