import { Icons } from '../icons'
import Image from './image'

export type Items = Array<{
  image: string
  name: string
  description: string
  url: string
}>

type ItemGridProps = {
  items: Items
}

const ItemGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 flex gap-4'>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target=''
          rel='noopener noreferrer'
          className='grid rounded-2xl border border-slate-200 dark:border-slate-800 p-2 no-underline transition-colors duration-150 hover:bg-black/5 hover:dark:bg-white/5 '
        >
          <Image
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 rounded-lg h-full w-full'
          />
          <div className='flex mt-2 p-2 flex-col justify-center gap-2'>
            <div className='flex justify-between items-center'>
            <div className='text-lg font-extrabold'>{item.name}</div>
            <span className='flex text-sm text-slate-600 dark:text-slate-400'>
            Download Now
            <Icons.download className='h-4 w-4 mx-1'/>
            </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ItemGrid
