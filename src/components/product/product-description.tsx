
import Price from 'src/components/price';
import { Product } from 'src/lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  
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
    </>
  );
}
