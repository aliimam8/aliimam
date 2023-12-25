'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const AnimatedName = () => {
  const [text, setText] = useState('AI Store. The best way to buy the products you love.')
  const [intervalId] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const ref = useRef<HTMLHeadingElement | null>(null)

  const handleMouseOver = useCallback(() => {
    if (isAnimating) return

    let iteration = 0

    if (intervalId !== null) {
      clearTimeout(intervalId)
    }

    const animate = () => {
      setIsAnimating(true)
      setText(prevText =>
        prevText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      if (iteration < text.length) {
        iteration += 1 / 3
        setTimeout(animate, 30)
      } else {
        setIsAnimating(false)
      }
    }

    animate()
  }, [intervalId, isAnimating, text])

  useEffect(() => {
    const currentRef = ref.current

    if (currentRef) {
      currentRef.addEventListener('mouseover', handleMouseOver)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseover', handleMouseOver)
      }
    }
  }, [handleMouseOver, ref])

  return (
    <h1 ref={ref} className='my-10 px-8 text-center text-sm font-semibold uppercase tracking-[.3em] text-aired'>
      {text}
    </h1>
  )
}