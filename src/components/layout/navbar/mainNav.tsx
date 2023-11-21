/* eslint-disable unicorn/filename-case */
'use client';

import Link from 'next/link';
import * as React from 'react';

// eslint-disable-next-line no-unused-vars
const navigation = [
  { name: 'About AI', href: '/about', current: true },
  { name: 'Gallery', href: '/gallery', current: true },
  { name: 'Portfolio', href: '/portfolio', current: true },
  { name: 'Store', href: '/store', current: true }
];

import { NavMenu } from './navmenu';

import { cn } from 'src/lib/utils';

export function MainNav() {
  return (
    <div className="hidden gap-x-12 px-8 md:flex lg:flex">
      <NavMenu />
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none"></div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
