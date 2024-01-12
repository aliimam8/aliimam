'use client';
import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from 'src/components/icons';
import { Fragment } from 'react';

const navigation = [
  { name: 'About AI', href: '/about', current: true },
  { name: 'Gallery', href: '/gallery', current: true },
  { name: 'Portfolio', href: '/portfolio', current: true }
];


const port = [
  { name: 'Assets', href: '/assets', current: true },
  { name: 'Blogs', href: '/blog', current: true },
  { name: 'Uses', href: '/uses', current: true }
];

const account = [
  { name: 'Store', href: '/store', current: true },
  { name: 'Cart', href: '/cart', current: true },
  { name: 'Account', href: 'https://shopify.com/68087251194/account', current: true }
];


const helps = [
  { name: 'Contact', href: '/contact', current: true },
  { name: 'Privacy', href: '/privacy', current: true },
  { name: 'Terms', href: '/terms', current: true }
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <header className="">
            <div className="fixed right-2 top-2 flex flex-1 items-center justify-end">
              <div className="mr-2 flex transition ease-in-out">
                <Disclosure.Button className="flex items-center justify-center p-2 text-center text-slate-600 dark:text-slate-400">
                  <p className="px-2 text-xs">Menu</p>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icons.close strokeWidth={1.5} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Icons.menu strokeWidth={1.5} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel className="mx-auto mb-4 mt-4 grid max-w-5xl grid-cols-4 px-6 text-slate-600 dark:text-slate-400 ">
                  <div className="top-0 flex flex-col px-6">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="py-3 text-xl font-semibold "
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="top-0 flex flex-col px-6">
                    {port.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="py-3 text-xl font-semibold"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="top-0 flex flex-col px-6">
                    {account.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="py-3 text-xl font-semibold"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="top-0 flex flex-col px-6">
                    {helps.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="py-3 text-xl font-semibold"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <span>{item.name}</span>
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className=""></div>
                </Disclosure.Panel>
              </Transition>
            </>
          </header>
        </>
      )}
    </Disclosure>
  );
}
