import Cart from 'src/components/cart';
import OpenCart from 'src/components/cart/open-cart';
import { Suspense } from 'react';
import SiteHeader from './siteheader';
import { NavMenu } from './navmenu';
import Link from 'next/link';
import { Icons } from 'src/components/icons';
import { ThemeToggle } from './themetoggle';

export default function Navbar() {
  return (
    <nav className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 fixed top-0 z-50 w-full border-b border-aired/25 bg-white bg-opacity-50 backdrop-blur-lg backdrop-saturate-150 backdrop-filter dark:bg-black dark:bg-opacity-50">
      <div className="mx-auto flex flex-1 items-center justify-end">
        <div className="container mx-auto flex h-14 max-w-5xl items-center px-2 sm:px-6 lg:px-8">
          <Link href="/" className=" items-center space-x-4 lg:flex">
            <span className="sr-only">Your Company</span>
            <Icons.aiLogo className="w-8" />
            <span className="sr-only">Home</span>
          </Link>
          <NavMenu />

          <div className="mx-auto flex h-12 flex-1 items-center justify-end gap-4 px-12 md:px-0 lg:px-0">
            
            <div className="flex justify-end text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex flex-1 items-center justify-end">
        <SiteHeader />
      </div>
    </nav>
  );
}
