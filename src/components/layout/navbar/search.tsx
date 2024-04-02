'use client'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'

import {
  CodeIcon,
  CommandIcon,
  LinkIcon,
  LogInIcon,
  LogOutIcon
} from 'lucide-react'

import * as React from 'react'

import { useCopyToClipboard } from '@/hooks/use-copy-clipboard'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

type Groups = Array<{
  name: string
  actions: Array<{
    title: string
    icon: React.ReactNode
    onSelect: () => void | Promise<void>
  }>
}>

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)
  const [copy] = useCopyToClipboard()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((value) => !value)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const openLink = React.useCallback((url: string) => {
    setOpen(false)
    window.open(url, '_blank', 'noopener')
  }, [])

  const groups: Groups = [
    {
      name: 'General',
      actions: [
        {
          title: 'Copy Link',
          icon: <LinkIcon className='mr-3 size-4' />,
          onSelect: async () => {
            setOpen(false)

            await copy({
              text: window.location.href,
              successMessage: (
                <div className='flex flex-col'>
                  <div>Copied</div>
                  <div className='text-sm text-muted-foreground'>
                    You can now share it with anyone.
                  </div>
                </div>
              )
            })
          }
        },
        {
          title: 'Download CV',
          icon: <CodeIcon className='mr-3 size-4' />,
          onSelect: () => openLink('/Ali-CV.pdf')
        
        }
      ]
    },
    {
      name: 'Social',
      actions: [
        {
          title: 'GitHub',
          icon: <Icons.insta className='mr-3 size-4' />,
          onSelect: () => openLink('https://www.instagram.com/aliimam.in/')
        },
        {
          title: 'Facebook',
          icon: <Icons.insta className='mr-3 size-4' />,
          onSelect: () => openLink('https://www.instagram.com/aliimam.in/')
        }
      ]
    }
  ]

  return (
    <>
      <Button
        variant='ghost'
        className='size-9 p-0 hidden md:block lg:block'
        onClick={() => setOpen(true)}
        type='button'
        aria-label='Open command menu'
      >
        <span className='sr-only'>Open command menu</span>
        <Icons.command className='h-5 w-5' />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu