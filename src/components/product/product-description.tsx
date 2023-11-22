import { AddToCart } from 'src/components/cart/add-to-cart';
import Price from 'src/components/price';
import Prose from 'src/components/prose';
import { Product } from 'src/lib/shopify/types';
import { VariantSelector } from './variant-selector';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from 'src/components/ui/accordion';

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
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? ( 
        <><Accordion type="single" collapsible className="w-full mb-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
            <Prose className="text-sm" html={product.descriptionHtml} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </>
        
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
