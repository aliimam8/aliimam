'use client';
import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Icons } from 'src/components/icons';

import photo1 from 'public/images/blog/portfolio/portfolio-01.jpg';
import photo2 from 'public/images/blog/portfolio/portfolio-02.jpg';
import photo3 from 'public/images/blog/portfolio/portfolio-03.jpg';
import photo4 from 'public/images/blog/portfolio/portfolio-04.jpg';
import photo5 from 'public/images/blog/portfolio/portfolio-05.jpg';
import photo6 from 'public/images/blog/portfolio/portfolio-06.jpg';
import photo7 from 'public/images/blog/portfolio/portfolio-07.jpg';
import photo8 from 'public/images/blog/portfolio/portfolio-08.jpg';
import photo9 from 'public/images/blog/portfolio/portfolio-09.jpg';
import photo10 from 'public/images/blog/portfolio/portfolio-10.jpg';
import photo11 from 'public/images/blog/portfolio/portfolio-11.jpg';
import photo12 from 'public/images/blog/portfolio/portfolio-33.jpg';

export const photoImages = [
  photo12.src,
  photo11.src,
  photo10.src,
  photo9.src,
  photo8.src,
  photo7.src,
  photo1.src,
  photo2.src,
  photo3.src,
  photo4.src,
  photo5.src,
  photo6.src
];

export function CarouselSpacing() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
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
  return (
    <div className="mx-auto my-20 max-w-3xl px-4 sm:px-6 md:max-w-4xl">
      <Carousel
        className="w-auto items-center"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
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
            {photoImages.map((item, index) => (
              <PhotoView key={index} src={item}>
                <CarouselItem>
                  <div className="w-full p-1">
                    <Image
                      src={item}
                      alt={''}
                      loading="lazy"
                      className="block h-full w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
                      width={500}
                      height={500}
                    />
                  </div>
                </CarouselItem>
              </PhotoView>
            ))}
          </PhotoProvider>
        </CarouselContent>
        <CarouselPrevious />
        <div className='hidden md:block'>
        <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
