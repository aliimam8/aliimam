/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Icons } from 'src/components/icons';

import Grid from 'src/components/grid';
import ProductGridItems from 'src/components/layout/product-grid-items';
import { defaultSort, sorting } from 'src/lib/constants';
import { getProducts } from 'src/lib/shopify';

export const runtime = 'edge';

export const metadata = {
  title: 'Store',
  description: 'Search for products in the store.'
};

export default async function Store({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <main>
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 text-center sm:gap-6">
          <Link
            href="/gallery"
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
            href="/apparel"
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
            href="/openfiles"
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
      </div>

      <hr className="mx-auto my-8 w-full border border-slate-200 dark:border-slate-800"></hr>

      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        {searchValue ? (
          <p className="mb-4">
            {products.length === 0
              ? 'There are no products that match '
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}
        {products.length > 0 ? (
          <Grid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
            <ProductGridItems products={products} />
          </Grid>
        ) : null}
      </div>
    </main>
  );
}
