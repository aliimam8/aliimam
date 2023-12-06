'use client';
import Link from 'next/link';
import CldImage from 'src/components/CldImage';
import { AIImage } from 'src/utils/types';
import { Icons } from 'src/components/icons';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';
import { Button } from '../ui/button';

export default function AliImage({ src, alt }: { src: AIImage[]; alt: AIImage[] }) {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <CldImage
            className="block h-full w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
            width={300}
            height={300}
            src={src}
            alt=""
          />
        </DialogTrigger>
        <DialogContent className="max-w-[700px]">
          <div className="mb-4 flex items-center justify-center text-center">
            <Icons.download className="w-10" />
          </div>
          <div className="flex items-center justify-center text-center">
            <CldImage
              className="cursor-close block h-full w-full object-center"
              width={1000}
              height={1000}
              src={src}
              download={true}
              alt=""
              sizes="100vw"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
