'use client'

import React from 'react'

import useScrollspy from '@/hooks/use-scrollspy'
import { type Heading } from '@/utils/get-headings'
import { cn } from '@/lib/utils'

type TableOfContentsProps = {
  headings: Heading[]
}

const TableOfContents = (props: TableOfContentsProps) => {
  const { headings } = props
  const activeId = useScrollspy(
    headings.map((heading) => heading.id),
    { rootMargin: '0% 0% -80% 0%' }
  )

  return (
    <div className='hidden lg:block'>
      <div className='mb-4 text-xs text-slate-600 dark:text-slate-400 pl-4'>On this page</div>
      <div>
        {headings.map((heading) => {
          const { id, level, title } = heading

          return (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                'block pb-[10px] pr-[10px] pt-[10px] text-sm leading-[1.2] transition-all duration-300 hover:text-foreground',
                {
                  ['text-aired font-semibold text-md']: id === activeId
                }
              )}
              style={{
                paddingLeft: (level - 1) * 16
              }}
            >
              {title}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default TableOfContents
