'use client';

import Image from 'next/image';
import MyExp from 'src/components/common/exp';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import React from 'react';

export interface Experience {
  post: string;
  comlogo: string;
  company: string;
  time: string;
}

export const works: Experience[] = [
  {
    post: 'Graphic Designer',
    comlogo: '/exp/11.png',
    company: 'Steadfast Nutrition · Full-time',
    time: 'Aug 2023 - Present · 6 mos'
  },
  {
    post: 'Art Director',
    comlogo: '/exp/2.png',
    company: 'HODM · Part-time',
    time: 'Dec 2022 - July 2023 · 7 mos'
  },
  {
    post: 'Graphic Designer',
    comlogo: '/exp/1.png',
    company: 'SanchiConnect · Part-time',
    time: 'Dec 2022 - Feb 2023 · 3 mos'
  },
  {
    post: 'Sr. Graphic Designer',
    comlogo: '/exp/10.png',
    company: 'Garage Productions · Full-time',
    time: 'Dec 2020 - Dec 2022 · 2 yrs 1 mos'
  },
  {
    post: 'Sr. Graphic Designer',
    comlogo: '/exp/9.png',
    company: 'FormsADDA.com · Full-time',
    time: 'Jun 2020 - Dec 2020 · 7 mos'
  },
  {
    post: 'Senior Visualizer',
    comlogo: '/exp/8.png',
    company: 'Yellow Straw · Full-time',
    time: 'Nov 2018 - Jun 2020 · 1 yr 8 mos'
  },
  {
    post: 'Faculty',
    comlogo: '/exp/7.png',
    company: 'WLC College India Ltd. · Part-time',
    time: 'Aug 2018 - Nov 2018 · 4 mos'
  },
  {
    post: 'Animator',
    comlogo: '/exp/6.png',
    company: 'Pointillist Media · Full-time',
    time: 'Nov 2017 - Aug 2018 · 10 mos'
  },
  {
    post: 'Tele Caller',
    comlogo: '/exp/5.png',
    company: 'Jukaso Journeys · Full-time',
    time: 'Nov 2016 - Aug 2017 · 10 mos'
  },
  {
    post: 'Sales Executive',
    comlogo: '/exp/4.png',
    company: 'Innovsource · Full-time',
    time: 'Mar 2016 - Nov 2016 · 9 mos'
  },
  {
    post: 'Permoter',
    comlogo: '/exp/3.png',
    company: 'Cadbury Gifting India · Full-time',
    time: 'Mar 2015 - Aug 2015 · 6 mos'
  }
];

export function Experience() {
  return (
    <div className="mt-20">
      <h1 className="mt-6 text-center text-lg font-bold">My Journey</h1>
      <MyExp />
      <div className="px-2">
        <Carousel
          className="w-full max-w-sm md:max-w-full"
          opts={{
            align: 'start'
          }}
        >
          <CarouselContent className="">
            {works.map((Experience) => (
              <CarouselItem className="md:basis-1/2">
                <figure
                  key={Experience.post}
                  className="flex w-auto shrink-0 space-x-4 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={Experience.comlogo}
                      alt={`Photo by ${Experience.post}`}
                      className="h-[80px] w-[80px] object-cover"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="text-md text-muted-foreground flex flex-col justify-between">
                    <span className="text-foreground font-bold">{Experience.post}</span>
                    <span className="text-foreground text-sm text-slate-400 dark:text-slate-600">
                      {Experience.company}
                    </span>
                    <span className="text-foreground text-xs text-slate-400 dark:text-slate-600">
                      {Experience.time}
                    </span>
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-10 gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
