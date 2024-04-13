'use client'

import { FileIcon, TerminalIcon } from 'lucide-react'
import * as React from 'react'
import { Button, ButtonProps } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { useCopyToClipboard } from '@/hooks/use-copy-clipboard'
import { cn } from '@/lib/utils'
import { Icons } from '../icons'


type PreProps = { 'data-lang'?: string } & React.ComponentPropsWithoutRef<'pre'>

type CopyButtonProps = {
  text: string
} & ButtonProps

const getLanguageIcon = (lang: string): React.ReactNode => {
  switch (lang) {
    case 'js': {
      return <Icons.photoshop className='size-3.5' />
    }

    case 'ts': {
      return <Icons.photoshop className='size-3.5' />
    }

    case 'jsx':
    case 'tsx': {
      return <Icons.photoshop className='size-3.5' />
    }

    case 'bash':
    case 'sh':
    case 'shell':
    case 'zsh': {
      return <TerminalIcon className='size-3.5' />
    }

    default: {
      return <FileIcon className='size-3.5' />
    }
  }
}

const Pre = (props: PreProps) => {
  const { children, className, title, 'data-lang': lang, ...rest } = props

  const textInput = React.useRef<HTMLPreElement>(null)
  const [text, setText] = React.useState<string>('')

  React.useEffect(() => {
    if (textInput.current) {
      setText(textInput.current.textContent ?? '')
    }
  }, [])

  return (
    <figure className='not-prose group relative my-6 overflow-hidden rounded-2xl border border-slate-400 dark:border-slate-600 text-sm'>
      {title ? (
        <div className='flex flex-row items-center gap-2  px-4 py-1.5'>
          {lang && (
            <div className=''>{getLanguageIcon(lang)}</div>
          )}
          <figcaption className='flex-1 truncate '>
            {title}
          </figcaption>
          <CopyButton text={text} />
        </div>
      ) : (
        <CopyButton className='absolute right-4 top-3 z-10' text={text} />
      )}

      <ScrollArea>
        <pre ref={textInput} className={cn('p-4', className)} {...rest}>
          {children}
        </pre>
      </ScrollArea>
    </figure>
  )
}

const CopyButton = (props: CopyButtonProps) => {
  const { text, className, ...rest } = props
  const [copy, isCopied] = useCopyToClipboard()

  return (
    <Button
      className={cn(
        'size-8 p-0 opacity-0 bg-aired transition-opacity group-hover:opacity-100',
        className
      )}
      variant='outline'
      onClick={() => copy({ text })}
      type='button'
      aria-label='Copy code to clipboard'
      {...rest}
    >
      {isCopied ? (
        <Icons.copy className='size-4 m-2' />
      ) : (
        <Icons.copy className='size-4 m-2' />
      )}
    </Button>
  )
}

export default Pre