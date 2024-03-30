'use client';

import Image from 'next/image';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export function Resizable() {
  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border border-slate-200 dark:border-slate-800"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center">
            <Image
              src="/images/ba/Wallpaper1.jpg"
              alt={''}
              loading="lazy"
              className="block h-full w-full object-cover object-center "
              width={300}
              height={300}
            />
          </div>
        </ResizablePanel>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center">
          <Image
              src="/images/ba/Wallpaper2.jpg"
              alt={''}
              loading="lazy"
              className="block h-full w-full object-cover object-center "
              width={300}
              height={300}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
