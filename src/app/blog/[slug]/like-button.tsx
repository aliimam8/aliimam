'use client'

import { color, motion } from 'framer-motion'
import React from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import { useDebouncedCallback } from 'use-debounce'

import fetcher from '@/lib/fetcher'
import { type Likes } from '@/types'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

export type LikeButtonProps = {
  slug: string
}

const LikeButton = (props: LikeButtonProps) => {
  const { slug } = props
  const [isBreathing, setIsBreathing] = React.useState(false)
  const [scale, setScale] = React.useState(1)
  const [cacheCount, setCacheCount] = React.useState(0)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const { data, isLoading, mutate } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher
  )

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsBreathing(true)
      setScale(1.2)
      setTimeout(() => {
        setIsBreathing(false)
        setScale(1)
      }, 1500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement
    const boundingBox = buttonRef.current?.getBoundingClientRect?.()

    const targetY = boundingBox?.y ?? 0
    const targetX = boundingBox?.x ?? 0
    const targetWidth = boundingBox?.width ?? 0

    const targetCenterX = targetX + targetWidth / 2
    const confetti = (await import('canvas-confetti')).default

    await confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 100,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth
      }
    })
  }

  const onLikeSaving = useDebouncedCallback(async (value: number) => {
    try {
      const res = await fetch('/api/likes', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug, count: value })
      })

      const newData = (await res.json()) as Likes

      await mutate(newData)
    } catch {
      toast.error('Something went wrong')
    } finally {
      setCacheCount(0)
    }
  }, 1000)

  const handleLike = () => {
    if (isLoading || !data || data.currentUserLikes + cacheCount >= 3) return

    const value = cacheCount === 3 ? cacheCount : cacheCount + 1
    setCacheCount(value)

    if (data.currentUserLikes + cacheCount === 2) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      handleConfetti()
    }

    return onLikeSaving(value)
  }


  return (
    <div className=''>
      <button
        ref={buttonRef}
        className={cn([
          'group relative h-12 w-24 rounded-lg bg-aired',
          'before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-[#ffffff] before:to-[#ffffff]'
        ])}
        type='button'
        onClick={handleLike}
        aria-label='Like this post'
      >
        <motion.span
          className='absolute inset-0 rounded-lg bg-gradient-to-br from-[#f50537] to-[#f50537] blur-xl'
          animate={{ scale: isBreathing ? scale : 1.5 }}
          transition={{ duration: 1, ease: 'linear' }}
        />
        <span
          className={cn([
            'absolute inset-0 z-10 flex items-center border border-aired text-black dark:text-white justify-center gap-2 rounded-lg w-full h-full bg-white dark:bg-black text-lg font-bold transition-[background-color] duration-150',
            'group-hover:bg-aired group-hover:text-white'
            
          ])}
        >
          <Icons.heart
            className={cn(
              ' w-7 h-7',
              data && data.currentUserLikes + cacheCount === 2 &&
                'text-aired'
                
            )}
          />
          {isLoading || !data ? (
            <div> -- </div>
          ) : (
            <div>{data.likes + cacheCount}</div>
          )}
        </span>
      </button>
    </div>
  )
}

export default LikeButton
