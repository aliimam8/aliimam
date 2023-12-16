'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { GridImage } from 'src/components/grid/tile';
import { createUrl } from 'src/lib/utils';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Icons } from 'src/components/icons';
import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.querySelector('.PhotoView-Portal');
      if (element) {
        element.requestFullscreen();
      }
    }
  }

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  const previousUrl = createUrl(pathname, previousSearchParams);

  const buttonClassName =
    'h-full px-4 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';

  return (
    <div className="h-full w-full ">
      <div className="relative aspect-square h-full max-h-[550px] w-full basis-full overflow-hidden lg:basis-4/6">
        <PhotoProvider
          maskOpacity={0.9}
          toolbarRender={({ onScale, scale }) => {
            return (
              <div className="flex items-center gap-4 px-1">
                <Icons.zoomin
                  onClick={() => onScale(scale + 0.5)}
                  strokeWidth={1.5}
                  className="w-5 hover:opacity-80"
                />
                <Icons.zoomout
                  onClick={() => onScale(scale - 0.5)}
                  strokeWidth={1.5}
                  className="w-5 hover:opacity-80"
                />
                {document.fullscreenEnabled && (
                  <Icons.maximize
                    strokeWidth={2}
                    className="w-5 hover:opacity-80"
                    onClick={toggleFullScreen}
                  />
                )}
              </div>
            );
          }}
        >
          {images[imageIndex] && (
            <PhotoView src={images[imageIndex]?.src}>
              <Image
                className="h-full w-full cursor-zoom-in object-cover"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                alt={images[imageIndex]?.altText as string}
                src={images[imageIndex]?.src as string}
                priority={true}
              />
            </PhotoView>
          )}
        </PhotoProvider>

        {images.length > 1 ? (
          <div className="absolute bottom-[2%] flex w-full justify-center">
            <div className=" mx-auto flex h-10 items-center rounded-full border border-slate-200 bg-slate-200/50 backdrop-blur dark:border-slate-800 dark:bg-slate-800/50">
              <Link
                aria-label="Previous product image"
                href={previousUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowLeftIcon className="h-5" />
              </Link>
              <div className="mx-1 h-6 w-px bg-black dark:bg-white"></div>
              <Link
                aria-label="Next product image"
                href={nextUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowRightIcon className="h-5" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      <ScrollArea className="mx-auto mt-4 max-w-3xl whitespace-nowrap lg:max-w-6xl">
        {images.length > 1 ? (
          <ul className="relative my-2 flex items-center justify-center gap-2 py-1 lg:mb-0">
            {images.map((image, index) => {
              const isActive = index === imageIndex;
              const imageSearchParams = new URLSearchParams(searchParams.toString());

              imageSearchParams.set('image', index.toString());

              return (
                <li key={image.src} className="h-20 w-20">
                  <Link
                    aria-label="Enlarge product image"
                    href={createUrl(pathname, imageSearchParams)}
                    scroll={false}
                    className="h-full w-full"
                  >
                    <GridImage
                      alt={image.altText}
                      src={image.src}
                      width={80}
                      height={80}
                      active={isActive}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
