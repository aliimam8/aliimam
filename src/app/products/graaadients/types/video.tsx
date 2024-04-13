import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  
  return (
    <main className="">
      
      <div className='px-8'>
        
        <div className="grid mt-10 justify-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1kX8_dZF2P8d8VcjMCsMCmkPQDnAKJTdU/view?usp=sharing"
            target='_blank'
            className={cn(
              buttonVariants({
                variant: 'redbutton',
                size: 'md'
              })
            )}
          >
            Download Open File
            <span className="sr-only">Buy now</span>
          </Link>
        </div>
        </div>
    </main>
  );
}
