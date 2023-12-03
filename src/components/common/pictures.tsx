'use client';
import { useState, useEffect } from 'react';
import CldImage from 'src/components/CldImage';
import { AIImage } from 'src/utils/types';

export default function Favo({ src, alt }: { src: AIImage[]; alt: AIImage[] }) {

  return (
    <div className="w-full">
      
      <CldImage
        className="block h-full w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
        width={2000}
        height={2000}
        src={src}
        alt={alt}
      />
    </div>
  );
}
