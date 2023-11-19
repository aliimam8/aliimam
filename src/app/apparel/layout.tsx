/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-4xl">
      <h1 className="mt-40 text-center text-2xl font-bold sm:text-4xl">
        Men's T-Shirt
        </h1>
        <div className="order-last mt-10 min-h-screen w-full md:order-none">{children}</div>
      </div>
    </Suspense>
  );
}
