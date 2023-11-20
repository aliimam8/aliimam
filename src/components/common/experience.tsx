import Image from "next/image";
import MyExp from "src/components/common/exp";

import { ScrollArea, ScrollBar } from "src/components/ui/scroll-area";

export interface Experience {
  post: string
  comlogo: string
  company: string
  time: string
}

export const works: Experience[] = [
  {
    post: "Graphic Designer",
    comlogo: "/exp/11.png",
    company: "Steadfast Nutrition · Full-time",
    time: "Aug 2023 - Present · 3 mos"
  },
  {
    post: "Art Director",
    comlogo: "/exp/2.png",
    company: "HODM · Part-time",
    time: "Dec 2022 - July 2023 · 7 mos"
  },
  {
    post: "Graphic Designer",
    comlogo: "/exp/1.png",
    company: "SanchiConnect · Part-time",
    time: "Dec 2022 - Feb 2023 · 3 mos"
  },
  {
    post: "Sr. Graphic Designer",
    comlogo: "/exp/10.png",
    company: "Garage Productions · Full-time",
    time: "Dec 2020 - Dec 2022 · 2 yrs 1 mos"
  },
  {
    post: "Sr. Graphic Designer",
    comlogo: "/exp/9.png",
    company: "FormsADDA.com · Full-time",
    time: "Jun 2020 - Dec 2020 · 7 mos"
  },
  {
    post: "Senior Visualizer",
    comlogo: "/exp/8.png",
    company: "Yellow Straw · Full-time",
    time: "Nov 2018 - Jun 2020 · 1 yr 8 mos"
  },
  {
    post: "Faculty",
    comlogo: "/exp/7.png",
    company: "WLC College India Ltd. · Part-time",
    time: "Aug 2018 - Nov 2018 · 4 mos"
  },
  {
    post: "Animator",
    comlogo: "/exp/6.png",
    company: "Pointillist Media · Full-time",
    time: "Nov 2017 - Aug 2018 · 10 mos"
  },
  {
    post: "Tele Caller",
    comlogo: "/exp/5.png",
    company: "Jukaso Journeys · Full-time",
    time: "Nov 2016 - Aug 2017 · 10 mos"
  },
  {
    post: "Sales Executive",
    comlogo: "/exp/4.png",
    company: "Innovsource · Full-time",
    time: "Mar 2016 - Nov 2016 · 9 mos"
  },
  {
    post: "Permoter",
    comlogo: "/exp/3.png",
    company: "Cadbury Gifting India · Full-time",
    time: "Mar 2015 - Aug 2015 · 6 mos"
  },
  
]

export function Experience() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-lg font-bold mt-6">My Journey</h1>
      <MyExp/>
    <ScrollArea className="mx-auto max-w-3xl mt-4 px-2 lg:max-w-6xl whitespace-nowrap">
      <div className="flex w-max space-x-4">
        {works.map((Experience) => (
          <figure key={Experience.post} className="flex w-[340px] space-x-4 border border-slate-200 dark:border-slate-800 rounded-lg p-4 shrink-0">
            <div className="overflow-hidden">
              <Image
                src={Experience.comlogo}
                alt={`Photo by ${Experience.post}`}
                className="h-[70px] w-[70px] object-cover"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col justify-between text-md text-muted-foreground">
              <span className="font-bold text-foreground">
                {Experience.post}
              </span>
              <span className="text-sm text-slate-400 dark:text-slate-600 text-foreground">
                {Experience.company}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-600 text-foreground">
                {Experience.time}
              </span>
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    </div>
  )
}
