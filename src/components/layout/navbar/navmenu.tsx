'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Icons } from 'src/components/icons';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from 'src/components/ui/navigation-menu';
import { cn } from 'src/lib/utils';

export function NavMenu() {
  return (
    <div className="hidden p-4 md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About AI</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] grid-cols-2 justify-center p-5">
                <NavigationMenuLink asChild>
                  <a className="flex flex-col justify-end rounded-lg" href="/about">
                    <Image
                      src="/ali.png"
                      alt="Your Image"
                      height={1000}
                      width={1000}
                      className="h-[150px] w-[150px] rounded-lg object-cover"
                    />
                    <div className="absolute bg-gradient-to-b from-black/0 to-black px-1 text-white ">
                      <p className=" px-2 text-xl font-bold ">Ali Imam</p>
                      <p className="mb-2 px-2 text-sm tracking-[.3em]">Art Director</p>
                    </div>
                  </a>
                </NavigationMenuLink>

                <div className="flex w-full flex-col justify-center space-y-4">
                  <Link
                    href="/about"
                    className="flex text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
                  >
                    <p className="font-bold">About Ali Imam</p>
                  </Link>

                  <Link
                    href="/Ali-CV.pdf"
                    target="_blank"
                    download={true}
                    className="flex text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
                  >
                    <Icons.download className="mr-2 mt-1 h-4 w-4 " aria-hidden="true" />
                    Download CV
                  </Link>
                  <Link
                    href="/contact"
                    className="flex text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
                  >
                    <Icons.contact className="mr-2 mt-1 h-4 w-4 " aria-hidden="true" />
                    Contact
                  </Link>
                  <div className="flex gap-6  text-sm">
                    <Link
                      href="/privacy"
                      className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
                    >
                      Terms
                    </Link>
                  </div>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/gallery" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/portfolio" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Portfolio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/store" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Store
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
