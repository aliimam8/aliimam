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
import photo12 from 'public/images/blog/portfolio/portfolio-12.jpg';
import photo13 from 'public/images/blog/portfolio/portfolio-13.jpg';
import photo14 from 'public/images/blog/portfolio/portfolio-14.jpg';
import photo15 from 'public/images/blog/portfolio/portfolio-15.jpg';
import photo16 from 'public/images/blog/portfolio/portfolio-16.jpg';
import photo17 from 'public/images/blog/portfolio/portfolio-17.jpg';
import photo18 from 'public/images/blog/portfolio/portfolio-18.jpg';
import photo19 from 'public/images/blog/portfolio/portfolio-19.jpg';
import photo20 from 'public/images/blog/portfolio/portfolio-20.jpg';
import photo21 from 'public/images/blog/portfolio/portfolio-21.jpg';
import photo22 from 'public/images/blog/portfolio/portfolio-22.jpg';
import photo23 from 'public/images/blog/portfolio/portfolio-23.jpg';
import photo24 from 'public/images/blog/portfolio/portfolio-24.jpg';
import photo25 from 'public/images/blog/portfolio/portfolio-25.jpg';
import photo26 from 'public/images/blog/portfolio/portfolio-26.jpg';
import photo27 from 'public/images/blog/portfolio/portfolio-27.jpg';
import photo28 from 'public/images/blog/portfolio/portfolio-28.jpg';
import photo29 from 'public/images/blog/portfolio/portfolio-29.jpg';
import photo30 from 'public/images/blog/portfolio/portfolio-30.jpg';
import photo31 from 'public/images/blog/portfolio/portfolio-31.jpg';
import photo32 from 'public/images/blog/portfolio/portfolio-32.jpg';
import photo33 from 'public/images/blog/portfolio/portfolio-33.jpg';

export const photoImages = [
  photo1.src,
  photo2.src,
  photo3.src,
  photo4.src,
  photo5.src,
  photo6.src,
  photo7.src,
  photo8.src,
  photo9.src,
  photo10.src,
  photo11.src,
  photo12.src,
  photo13.src,
  photo14.src,
  photo15.src,
  photo16.src,
  photo17.src,
  photo18.src,
  photo19.src,
  photo20.src,
  photo21.src,
  photo22.src,
  photo23.src,
  photo24.src,
  photo25.src,
  photo26.src,
  photo27.src,
  photo28.src,
  photo29.src,
  photo30.src,
  photo31.src,
  photo32.src,
  photo33.src
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
    <div className="mx-auto my-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl"> 
      <Carousel
        className="flex w-full flex-col items-center justify-center gap-4 text-center"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-[350px] md:w-full h-[190px] md:h-full">
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
              <CarouselItem>
                <PhotoView key={index} src={item}>
                    <Image
                      src={item}
                      alt={''}
                      className="h-auto w-[300px] md:w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
                      width={500}
                      height={500}
                    />
                </PhotoView>
              </CarouselItem>
            ))}
          </PhotoProvider>
        </CarouselContent>
        <div className="flex gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
