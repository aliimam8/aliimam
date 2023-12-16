'use client';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { createUrl } from 'src/lib/utils';
import Link from 'next/link';
import { GridAIImage } from 'src/components/grid/tile';
import ImageZoom from '@/components/common/image-zoom';

export function ImageGallery({ images }: { images: { src: string; altText: string }[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 2 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 2 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  const previousUrl = createUrl(pathname, previousSearchParams);

  return (
    <>
      <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl">
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {images.map((image, index) => {
            return (
              <li key={image.src} className="">
                <Link
                  aria-label="Enlarge product image"
                  href={''}
                  scroll={false}
                  className="h-full w-full"
                >
                  <ImageZoom
                    zoomImg={{
                      src: image.src,
                      alt: image.altText
                    }}
                  >
                    <GridAIImage alt={image.altText} src={image.src} width={700} height={700} />
                  </ImageZoom>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
