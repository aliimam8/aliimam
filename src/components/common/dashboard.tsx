'use client'

import React from 'react'
import useSWR from 'swr'
import { Icons } from 'src/components/icons';

import fetcher from '@/lib/fetcher'
import {
  type Views,
  type Likes,
  type YouTube
} from '@/types'

import Counter from './countnumber';

type Card = {
  icon: React.ReactNode
  title: string
  link: string
  target: string
  value: number | string | undefined
  linkText: string
  gradient: {
    startColor: string
    endColor: string
  }
}

const Items = () => {
  const { data: youtubeData } = useSWR<YouTube>('/api/youtube', fetcher)
  const { data: likesData } = useSWR<Likes>('/api/likes', fetcher)
  const { data: viewsData } = useSWR<Views>('/api/views', fetcher)

  const data: Card[] = [

    {
      title: 'Total Views',
      link: '/store',
      value: viewsData?.views,
      target: "",
      icon: <Icons.aiLogo color='#f50537' className="w-7" />,
      linkText: 'AI Store',
      gradient: {
        startColor: '#f50537',
        endColor: '#a1a1aa'
      }
    },
    {
      title: 'Total Likes',
      link: '/assets',
      target: "",
      value: likesData?.likes,
      icon: <Icons.heart color='#f50537' className="w-7" />,
      linkText: 'Assets',
      gradient: {
        startColor: '#f50537',
        endColor: '#a1a1aa'
      }
    },
    {
      title: 'YouTube Subscribers',
      link: 'https://youtube.com/@aiimamoriginal',
      value: youtubeData?.subscribers,
      icon: <Icons.youTube color='#f50537' className="w-7" />,
      linkText: 'YouTube',
      target: "_blank",
      gradient: {
        startColor: '#f50537',
        endColor: '#a1a1aa'
      }
    },
    {
      title: 'YouTube Views',
      link: 'https://youtube.com/@aiimamoriginal',
      value: youtubeData?.views,
      icon: <Icons.youTube color='#f50537' className="w-7" />,
      linkText: 'YouTube',
      target: "_blank",
      gradient: {
        startColor: '#f50537',
        endColor: '#a1a1aa'
      }
    }
    
  ]

  return (
    <div className='mx-auto md:max-w-2xl px-10'>
      <div className='mb-20 mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-2'>
        {data.map((item) => {
          const {
            icon,
            link,
            target,
            title,
            value,
            linkText,
            gradient: { startColor, endColor }
          } = item

          return (
            <a
              key={title}
              target={target}
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
                        <Counter value={Number(value)} /> 
                      </span>
                    </>
                  ) : (
                    '--'
                  )}
                </div>
                <div className='text-sm text-slate-600 dark:text-slate-400'>{title}</div>
              </div>
              <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-lg font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
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