'use client';
import Link from 'next/link';
import CldImage from 'src/components/CldImage';
import { AIImage } from 'src/utils/types';
import { Icons } from 'src/components/icons';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';

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
          <div className="flex items-center justify-center text-center">
            <CldImage
              className="cursor-close block h-full w-full object-center"
              width={1000}
              height={1000}
              target="_blank"
              src={src}
              download={true}
              alt=""
              sizes="100vw"
            />
            <Icons.download className="w-5 h-5" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
