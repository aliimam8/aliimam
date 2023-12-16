import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as React from "react"
import { ImageGallery } from 'src/components/product/imagegallery';

import { Image } from 'src/lib/shopify/types';

import { HIDDEN_PRODUCT_TAG } from 'src/lib/constants';
import { getProduct } from 'src/lib/shopify';
import Prose from 'src/components/prose';


export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function AIProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <div className='mx-auto mt-20 max-w-3xl md:max-w-5xl'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="">
      <div className='mx-auto mt-20 max-w-3xl px-10'>
      {product.descriptionHtml ? ( 
      
      <Prose className="text-sm my-8" html={product.descriptionHtml} />
       
       ) : null}
          
      </div>
      </div>
      <div className="h-full w-full">
            <ImageGallery
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>
    </div>
  );
}
