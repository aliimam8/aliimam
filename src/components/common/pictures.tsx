'use client';

import CldImage from 'src/components/CldImage';
import { AIImage } from 'src/utils/types';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Favo({ src, alt }: { src: AIImage[]; alt: AIImage[] }) {
  return (
    <div className="w-full">
      <PhotoProvider>
        <PhotoView src={src}>
          <CldImage
            className="block h-full w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
            width={300}
            height={300}
            src={src}
            alt={alt}
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
}
