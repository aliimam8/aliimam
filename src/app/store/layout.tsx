/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react';

import Link from 'next/link';
import { Icons } from 'src/components/icons';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Link href="/store" rel="noreferrer">
        <h1 className="mt-40 text-center text-2xl font-bold sm:text-4xl">AI Store</h1>
      </Link>

      <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 px-4 text-center sm:gap-6">
        <Link
          href="/store/ai-stock"
          rel="noreferrer"
          className="flex w-[200px] flex-col items-center rounded-xl border border-slate-200 p-2 py-6 text-center hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-900/50 sm:p-6"
        >
          <Icons.camera
            strokeWidth={0.3}
            className="h-10 w-10 text-slate-600 dark:text-slate-400 sm:h-16 sm:w-16 "
          />

          <h1 className="text-md font-semibold sm:text-lg ">AI Stock</h1>

          <p className="text-xs">Images & Videos</p>
        </Link>

        <Link
          href="/store/apparel"
          rel="noreferrer"
          className="flex w-[200px] flex-col items-center rounded-xl border border-slate-200 p-2 py-6 text-center hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-900/50 sm:p-6"
        >
          <Icons.shirt
            strokeWidth={0.3}
            className="h-10 w-10 text-slate-600 dark:text-slate-400 sm:h-16 sm:w-16"
          />

          <h1 className="text-md font-semibold sm:text-lg ">Apparel</h1>

          <p className="text-xs">Men's T-Shirt</p>
        </Link>

        <Link
          href="/store/open-files"
          rel="noreferrer"
          className="flex w-[200px] flex-col items-center rounded-xl border border-slate-200 p-2 py-6 text-center hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-900/50 sm:p-6"
        >
          <Icons.packageopen
            strokeWidth={0.3}
            className="h-10 w-10 text-slate-600 dark:text-slate-400 sm:h-16 sm:w-16"
          />

          <h1 className="text-md font-semibold sm:text-lg ">Open Files</h1>

          <p className="text-xs">Edit & Use</p>
        </Link>
      </div>
      <hr className="mx-auto mt-8 w-full border border-aired"></hr>

      <div className="order-last min-h-screen w-full md:order-none">{children}</div>
    </Suspense>
  );
}
