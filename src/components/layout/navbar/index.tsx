'use client';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { Icons } from 'src/components/icons';
import { NavMenu } from './navmenu';
import Search from './search';
import { ThemeToggle } from './themetoggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from 'src/components/ui/accordion';

const navigation = [
  { name: 'About AI', href: '/about', current: true },
  { name: 'Gallery', href: '/gallery', current: true },
  { name: 'Portfolio', href: '/portfolio', current: true },
  { name: 'Store', href: '/store', current: true }
];

const helps = [
  { name: 'Contact', href: '/contact', current: true },
  { name: 'Privacy', href: '/privacy', current: true },
  { name: 'Terms', href: '/terms', current: true }
];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 fixed top-0 z-50 w-full border-b border-aired/25 bg-white bg-opacity-50 backdrop-blur-lg backdrop-saturate-150 backdrop-filter dark:bg-black dark:bg-opacity-50"
    >
      {({ open }) => (
        <>
          <header className="">
            <div className="container mx-auto flex h-14 max-w-5xl items-center px-2 sm:px-6 lg:px-8">
              <div className="gap-6 lg:flex">
                <Link href="/" className=" items-center space-x-4 lg:flex">
                  <span className="sr-only">Your Company</span>
                  <Icons.aiLogo className="w-8" />
                  <span className="sr-only">Home</span>
                </Link>
              </div>
              <NavMenu />

              <div className="flex flex-1 items-center justify-end ">
                <div className="flex items-center space-x-4 p-2">
                  <Link href={'/cart'}>
                    <div className="flex cursor-pointer text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white">
                      <Icons.shop className="w-5" />
                    </div>
                  </Link>
                  <ThemeToggle />
                </div>
                <div className="mr-2 flex transition ease-in-out md:hidden lg:hidden">
                  <Disclosure.Button className="items-center justify-center p-2 text-center text-slate-600 dark:text-slate-400">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <Icons.close className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Icons.menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="flex flex-col px-6 py-6">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="py-3 text-xl font-semibold"
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Helps</AccordionTrigger>
                    <AccordionContent>
                      {helps.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="flex py-3 px-4 text-xl font-semibold"
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-6">
                  <Search />
                  <Link
                    href="/Ali-CV.pdf"
                    target="_blank"
                    className="flex mt-4 gap-3 text-aired"
                    download={true}
                  >
                    <p className="text-xl font-semibold">Download CV</p>
                    <Icons.download className="w-5" />
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </header>
        </>
      )}
    </Disclosure>
  );
}
