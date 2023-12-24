import { AddToCart } from 'src/components/cart/add-to-cart';
import Price from 'src/components/price';
import { Product } from 'src/lib/shopify/types';
import { VariantSelector } from './variant-selector';
import clsx from 'clsx';
import { Icons } from 'src/components/icons';

export function ProductDescription({ product }: { product: Product }) {
  const buttonClasses =
    'relative flex w-full bg-slate-100 text-aired hover:text-white hover:dark:text-black dark:bg-slate-900 items-center justify-center rounded-full hover:bg-aired hover:dark:bg-aired p-4 tracking-wide';

  return (
    <>
      <div className="mb-6 flex flex-col border-b border-slate-200 pb-2 dark:border-slate-800">
        <h1 className=" mt-4 text-3xl font-semibold">{product.title}</h1>
        <div className="mr-auto w-auto py-4 text-xl">
          <Price 
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
          <p className="py-2 text-xs">incl. of taxes (Also includes all applicable duties)</p>
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      <p className="my-6 font-semibold uppercase">100% Original</p>
      <div className="grid h-auto w-full grid-cols-1 gap-2 md:grid-cols-2">
        <button aria-disabled className={clsx(buttonClasses)}>
          <Icons.heart className="w-5 animate-pulse " />
          <p className="text-md mx-3">Favourite</p>
        </button>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </div>
    </>
  );
}
