import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <h1 className="mt-40 text-center text-2xl font-bold sm:text-4xl">
          Open Files
        </h1>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
    </Suspense>
  );
}
