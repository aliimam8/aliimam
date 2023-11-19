import { AddToCart } from 'src/components/cart/add-to-cart';
import Price from 'src/components/price';
import Prose from 'src/components/prose';
import { Product } from 'src/lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-slate-200 dark:border-slate-800 pb-2">
        <h1 className=" text-5xl font-semibold">{product.title}</h1>
        <div className="mr-auto w-auto py-4 text-xl">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
