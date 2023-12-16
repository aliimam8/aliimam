'use client'

import { motion } from 'framer-motion'

import { Separator } from '../ui/seperator'

type PageTitleProps = {
  title: string
  description: string
  animate?: boolean
}

const animation = {
  hide: {
    x: -30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

const PageTitle = (props: PageTitleProps) => {
  const { title, description, animate = true } = props

  return (
    <div className='mb-16 mt-6 sm:mb-24 sm:mt-12'>
      <motion.h2
        className='my-4 text-4xl font-bold md:text-5xl'
        {...(animate && {
          initial: animation.hide,
          animate: animation.show
        })}
      >
        {title}
      </motion.h2>
      <motion.p
        className='mb-6 text-sm text-slate-600 dark:text-slate-400 text-muted-foreground'
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
          transition: {
            delay: 0.1
          }
        })}
      >
        {description}
      </motion.p>
      <Separator className='absolute inset-x-0 translate-y-2 sm:translate-y-6 opacity-25' />
    </div>
  )
}

export default PageTitle
