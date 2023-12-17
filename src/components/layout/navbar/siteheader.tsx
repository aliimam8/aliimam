'use client';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { Icons } from 'src/components/icons';
import { PSearch } from './search';
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
  { name: 'Store', href: '/store', current: true },
  { name: 'Posts', href: '/posts', current: true },
  { name: 'Uses', href: '/uses', current: true },
  { name: 'Account', href: 'https://shopify.com/63673860265/account', current: true }
];

const helps = [
  { name: 'Cart', href: '/cart', current: true },
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
            <div className="fixed right-2 top-2 flex flex-1 items-center justify-end ">
              <div className="mr-2 flex transition ease-in-out md:hidden lg:hidden">
                <Disclosure.Button className="items-center justify-center p-2 text-center text-slate-600 dark:text-slate-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icons.close strokeWidth={1.5} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Icons.menu strokeWidth={1.5} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
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
                          className="flex px-4 py-3 text-xl font-semibold"
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-6">
                  <PSearch />
                  <Link
                    href="/Ali-CV.pdf"
                    target="_blank"
                    className="mt-4 flex gap-3 text-aired"
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
