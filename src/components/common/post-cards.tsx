'use client'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

import { Skeleton } from '@/components/ui/skeleton'
import fetcher from '@/lib/fetcher'
import { type BlogPostCore, type Likes, type Views } from '@/types'


import Image from '../mdx/image'
import { cn } from '@/lib/utils'

type PostCardsProps = {
  posts: BlogPostCore[]
}

const PostCards = (props: PostCardsProps) => {
  const { posts } = props

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className='group grid gap-4 sm:grid-cols-2'
      data-testid='post-cards'
    >
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  )
}

type PostCardProps = BlogPostCore

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title, summary, date } = props
  const [formattedDate, setFormattedDate] = React.useState('')
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher
  )
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher
  )

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('MMMM DD, YYYY'))
  }, [date])

  return (
    <Link
      key={_id}
      href={`/blog/${slug}`}
      className={cn(
        'relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 p-6',
        'hover:before:opacity-100', )}
      data-id='post-card'
    >
      <div className='absolute inset-px -z-20 rounded-[inherit] bg-background' />
      <Image
        src={`/images/blog/${slug}/cover.png`}
        className='rounded-lg hover:saturate-0'
        width={1200}
        height={630}
        alt={title}
      />
      <div className='grow'>
        <h2 className='text-xl mb-3 font-semibold mt-3'>{title}</h2>
        <div className='text-sm text-slate-600 dark:text-slate-400'>{summary}</div>
      </div>
      <div className='flex items-center gap-2 text-sm mt-3'>
        {formattedDate || <Skeleton className='h-5 w-10' />}
        <div>&middot;</div>
        {likesIsLoading ? (
          <Skeleton className='h-5 w-10 rounded-md' />
        ) : (
          <div>{likesData?.likes} likes</div>
        )}
        <div>&middot;</div>
        {viewsIsLoading ? (
          <Skeleton className='h-5 w-10 rounded-md' />
        ) : (
          <div>{viewsData?.views} views</div>
        )}
      </div>
    </Link>
  )
}

export default PostCards