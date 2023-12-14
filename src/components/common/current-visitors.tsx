'use client'

import useSWR from 'swr'

import { Skeleton } from '@/components/ui/skeleton'
import fetcher from 'src/lib/fetcher'

type Analytics = {
    visitors: number
  }

const CurrentVisitors = () => {
  const { data } = useSWR<Analytics>('/api/analytics', fetcher, {
    refreshInterval: 10_000 // refresh every 30 seconds
  })

  return (
    <a
      href={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_SHARE_URL}
      className='flex items-center justify-center gap-2'
      rel='noopener noreferrer'
      target='_blank'
      aria-label='Current visitors'
    >
      {data ? (
        <>
          <span className='relative flex h-3 w-3'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-aired opacity-75' />
            <span className='relative inline-flex h-3 w-3 rounded-full bg-aired' />
          </span>
          <p className='font-bold'>{data.visitors}</p> current visitors
        </>
      ) : (
        <div>
        <Skeleton
          className='h-5 w-32 rounded-md'
          data-testid='skeleton-loader'
        />
        </div>
      )}
    </a>
  )
}

export default CurrentVisitors