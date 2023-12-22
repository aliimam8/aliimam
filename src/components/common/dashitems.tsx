'use client'

import React from 'react'
import useSWR from 'swr'
import { Icons } from 'src/components/icons';

import fetcher from '@/lib/fetcher'
import {
  type Views,
  type YouTube
} from '@/types'

type Card = {
  icon: React.ReactNode
  title: string
  link: string
  value: number | string | undefined
  linkText: string
  gradient: {
    startColor: string
    endColor: string
  }
}

const Items = () => {
  const { data: youtubeData } = useSWR<YouTube>('/api/youtube', fetcher)

  const data: Card[] = [
    {
      title: 'YouTube Subscribers',
      link: 'https://youtube.com/@aiimamoriginal',
      value: youtubeData?.subscribers,
      icon: <Icons.youTube color='#f50537' className="w-7" />,
      linkText: 'YouTube',
      gradient: {
        startColor: '#ff0000',
        endColor: '#ca1a1a'
      }
    },
    {
      title: 'YouTube Views',
      link: 'https://youtube.com/@aiimamoriginal',
      value: youtubeData?.views,
      icon: <Icons.youTube color='#f50537' className="w-7" />,
      linkText: 'YouTube',
      gradient: {
        startColor: '#ff0000',
        endColor: '#ca1a1a'
      }
    },
    
  ]

  return (
    <div className='mx-auto md:max-w-3xl'>
      <div className='mb-20 mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-2'>
        {data.map((item) => {
          const {
            icon,
            link,
            title,
            value,
            linkText,
            gradient: { startColor, endColor }
          } = item

          return (
            <a
              key={title}
              target='_blank'
              rel='noopener noreferrer'
              href={link}
              className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800  p-4 transition-colors duration-150 hover:bg-accent'
            >
              <div className='flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                <div className='flex items-center gap-2 text-3xl font-bold text-foreground'>
                  {value ? (
                    <>
                      <span>{icon}</span>
                      <span
                        style={{
                          background: `linear-gradient(122.25deg, ${startColor} 12.16%, ${endColor} 70.98%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {value}
                      </span>
                    </>
                  ) : (
                    '--'
                  )}
                </div>
                <div className='text-xl font-medium'>{title}</div>
              </div>
              <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-2xl font-bold opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                {linkText}
                
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Items