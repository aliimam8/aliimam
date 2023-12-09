/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react';

import Link from 'next/link';
import { Icons } from 'src/components/icons';
import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Link href="/store" rel="noreferrer">
        <h1 className="mt-40 text-center text-2xl font-bold sm:text-4xl">AI Store</h1>
      </Link>
      <ScrollArea className="mx-auto mt-10 whitespace-nowrap">
        <div className="flex items-center justify-center gap-3 px-4">
          <Link
            href="/store/apparel"
            rel="noreferrer"
            className="flex w-[125px] flex-col items-center rounded-xl border border-slate-200 p-2 py-6 text-center hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-900/50 md:p-6 md:w-[150px]"
          >
            <Icons.shirt
              strokeWidth={0.3}
              className="mb-2 h-10 w-10 text-slate-600 dark:text-slate-400 sm:h-16 sm:w-16"
            />
            <h1 className="text-md font-semibold sm:text-lg ">Apparel</h1>
            <p className="text-xs">Men's T-Shirt</p>
          </Link>
          <Link
            href="/store/open-files"
            rel="noreferrer"
            className="flex w-[125px] flex-col items-center rounded-xl border border-slate-200 p-2 py-6 text-center hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-900/50 md:p-6 md:w-[150px]"
          >
            <Icons.packageopen
              strokeWidth={0.3}
              className="mb-2 h-10 w-10 text-slate-600 dark:text-slate-400 sm:h-16 sm:w-16"
            />
            <h1 className="text-md font-semibold sm:text-lg ">Open Files</h1>
            <p className="text-xs">Edit & Use</p>
          </Link>
          <Link
            href="/store/ai-stock"
            rel="noreferrer"
            className="flex w-[125px] flex-col items-center rounded-xl border border-slate-200 p-2 py-6 text-center hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-900/50 md:p-6 md:w-[150px]"
          >
            <Icons.camera
              strokeWidth={0.3}
              className="mb-2 h-10 w-10 text-slate-600 dark:text-slate-400 sm:h-16 sm:w-16 "
            />
            <h1 className="text-md font-semibold sm:text-lg ">AI Stock</h1>
            <p className="text-xs">Images & Videos</p>
          </Link>
          <Link
            href="/store/ai-assets"
            rel="noreferrer"
            className="flex w-[125px] flex-col items-center rounded-xl border border-slate-200 p-2 py-6 text-center hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-900/50 md:p-6 md:w-[150px]"
          >
            <Icons.layers3
              strokeWidth={0.3}
              className="mb-2 h-10 w-10 text-slate-600 dark:text-slate-400 sm:h-16 sm:w-16 "
            />
            <h1 className="text-md font-semibold sm:text-lg ">AI Assets</h1>
            <p className="text-xs">PNG & SVG</p>
          </Link>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <hr className="mx-auto mt-8 w-full border border-aired/25"></hr>

      <div className="order-last min-h-screen w-full md:order-none">{children}</div>
    </Suspense>
  );
}
