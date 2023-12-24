import Cart from 'src/components/cart';
import OpenCart from 'src/components/cart/open-cart';
import { Suspense } from 'react';
import SiteHeader from './siteheader';
import { NavMenu } from './navmenu';
import Link from 'next/link';
import { Icons } from 'src/components/icons';
import { DSearch } from './search';
import { ThemeToggle } from './themetoggle';
import { Separator } from 'src/components/ui/seperator';


export default function Navbar() {
  return (
    <nav className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 fixed top-0 z-50 w-full border-b border-aired/25 bg-white bg-opacity-50 backdrop-blur-lg backdrop-saturate-150 backdrop-filter dark:bg-black dark:bg-opacity-50">
      <div className="mx-auto flex flex-1 items-center justify-end">
        <div className="container mx-auto flex h-14 max-w-5xl items-center px-2 sm:px-6 lg:px-8">
          <Link href="/" className=" items-center space-x-4 lg:flex">
            <span className="sr-only">Your Company</span>
            <Icons.aiLogo className="w-7" />
            <span className="sr-only">Home</span>
          </Link>
          <NavMenu />

          <div className="mx-auto flex h-12 flex-1 items-center justify-end gap-3 px-12 md:px-0">
            <div className="-mr-2 text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white">
           
              <DSearch />
            </div>
            <ThemeToggle />
            <Separator orientation="vertical" className='h-6 mr-2 bg-slate-400 dark:bg-slate-600' />
            <div className=" flex justify-end text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
            <Link href="https://shopify.com/63673860265/account" target="_blank" className="">
              <span className="sr-only">Your Company</span>
              <Icons.user
                strokeWidth={1.8}
                className="hidden md:block h-5 w-5 mx-2 text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
              />
              <span className="sr-only">Account</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex flex-1 items-center">
        <SiteHeader />
      </div>
    </nav>
  );
}
