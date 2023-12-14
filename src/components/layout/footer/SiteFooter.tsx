/* eslint-disable unicorn/filename-case */
import Link from 'next/link';
import { Icons } from 'src/components/icons';
import { Coffee } from './coffee';
import ThemeToogle from './theme';
import CurrentVisitors from 'src/components/common/current-visitors'

const Underline = `hover:-translate-y-1 border border-slate-100 dark:border-slate-900 rounded-xl p-2.5 transition-transform text-slate-600 hover:border-slate-200 dark:hover:border-slate-800 hover:text-black hover:dark:text-white dark:text-slate-400 `;

export interface Menus {
  text: string;
  href: string;
  target: string;
}

export const items: Menus[] = [
  {
    text: 'About AI',
    href: '/about',
    target: ''
  },
  {
    text: 'Gallery',
    href: '/gallery',
    target: ''
  },
  {
    text: 'Portfolio',
    href: '/portfolio',
    target: ''
  },
  {
    text: 'Store',
    href: '/store',
    target: ''
  },
  {
    text: 'Blogs',
    href: '/blog',
    target: ''
  },
  {
    text: 'Contact',
    href: '/contact',
    target: ''
  },
  {
    text: 'Terms',
    href: '/terms',
    target: ''
  },
  {
    text: 'Privacy',
    href: '/privacy',
    target: ''
  },
  {
    text: 'Cart',
    href: '/cart',
    target: ''
  }
];

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-20 border-t border-aired/25 px-2 sm:px-4">
      <div className="mt-10 flex flex-wrap justify-center gap-8 ">
        <Link href="/">
          <Icons.aiLogo className="w-10" />
        </Link>
      </div>

      <div className='mt-10 flex flex-wrap justify-center text-sm'>
        {process.env.NODE_ENV === 'production' && <CurrentVisitors />}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8 ">
        <Coffee />
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 p-8">
        {items.map((Menus) => (
          <figure key={Menus.text}>
            <div className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white hover:scale-103">
              <span className="">
                <Link href={Menus.href}>{Menus.text}</Link>
              </span>
            </div>
          </figure>
        ))}
        <Link
          href="/Ali-CV.pdf"
          target="_blank"
          className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
          download={true}
        >
          <p className="text-sm">Download CV</p>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 gap-y-4 px-8">
        <Link href="tel:+919650133705" rel="noreferrer" target="_blank" className={Underline}>
          <Icons.phone strokeWidth={1.5} className="w-5 h-5" />
        </Link>
        <Link
          href="mailto:aliimam.original@gmail.com"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.mail strokeWidth={1.5} className="w-5 h-5" />
        </Link>
        <Link
          href="https://wa.me/message/6XOEA2NCD5OFB1"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.whatsapp className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.instagram.com/aliimam.in/"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.insta strokeWidth={1.5} className="w-5 h-5" />
        </Link>
        <Link
          href="https://twitter.com/aiimamoriginal"
          rel="noreferrer"
          target="_blank" 
          className={Underline}
        >
          <Icons.TweetX className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.facebook.com/ali.imam.1804"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.fb className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ali-imam-579396180/"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.Linked className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCZYm9jYmDesAGzbyFacUSfA"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.youTube className="w-5 h-5" />
        </Link>
        
      </div>

      <ThemeToogle />

      <div className="dark:bg-zinc-950 text-amber-900 mx-auto mb-10 mt-10 flex  flex-col justify-between text-center md:max-w-5xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Icons.heart className="w-4 h-4 mx-1 animate-pulse"/>
          <span> by </span>
          <span className="cursor-pointer font-bold text-black hover:text-aired dark:hover:text-aired dark:text-white">
           <a href="/">
           Ali Imam
            </a>
          </span>
        </div>
      </div>

      
      
    </footer>
  );
}
