import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as React from "react"

import Link from 'next/link';
import { GridTileImage } from 'src/components/grid/tile';
import { Gallery } from 'src/components/product/gallery';
import { ProductDescription } from 'src/components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'src/lib/constants';
import { getProduct, getProductRecommendations } from 'src/lib/shopify';
import { Image } from 'src/lib/shopify/types';
import { Carousel } from 'src/components/carousel';
import Info from '../tabs';
import { FAQ } from '../faq';
import AIProductPage from '../products'


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

export default async function ProductPage({ params }: { params: { handle: string } }) {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <div className="flex flex-col rounded-3xl border border-slate-200 p-8 dark:border-slate-800  md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-auto md:w-[450px] basis-full lg:basis-4/6">
            <Gallery
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="basis-full lg:basis-4/6">
            <ProductDescription product={product} />
          </div>
        </div>
      </div>
      <AIProductPage params={{  handle: product.handle }} />
      <Info />
      <Carousel />
      <FAQ />
      <div className='mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
          <RelatedProducts id={product.id} />
        </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-12 text-2xl text-center font-bold">
        Related Products
        <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
      </h2>
      
      <ul className="flex w-full justify-center gap-4 overflow-x-auto ">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square flex-none w-[300px] "
          >
            <Link className="relative h-full w-full" href={`/products/${product.handle}`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
