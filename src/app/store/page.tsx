/* eslint-disable react/no-unescaped-entities */

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
      <h1 className="my-10 px-8 text-center text-sm font-semibold uppercase tracking-[.3em] text-aired">
        AI Store. The best way to buy the products you love.
      </h1>
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
