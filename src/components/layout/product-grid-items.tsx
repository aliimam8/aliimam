import Link from 'next/link';
import Grid from 'src/components/grid';
import { GridTileImage, GridTilePrice } from 'src/components/grid/tile';
import { Product } from 'src/lib/shopify/types';


export default function ProductGridItems({ products}: { products: Product[] }) {
  return (
    <>
      
        {products.map((product) => (
          <Grid.Item key={product.handle} className="animate-fadeIn border border-slate-200 dark:border-slate-800 rounded-3xl">
            <Link
              className="relative inline-block h-full w-full"
              href={`/product/${product.handle}`}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
            <Link className="" href={`/product/${product.handle}`}>
              <GridTilePrice
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
              />
            </Link>
          </Grid.Item>
          

        ))}

    </>
  );
}
