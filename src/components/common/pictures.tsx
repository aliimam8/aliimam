'use client';
import Link from 'next/link';
import CldImage from 'src/components/CldImage';
import { usePathname, useSearchParams } from 'next/navigation';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function AliImage({ images }: { images: { src: string; altText: string }[] }) {
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());

  return (
    <div className="w-full">
        <PhotoProvider maskOpacity={0.9}>
          <PhotoView src={images}>  
           
            <CldImage
              className="block h-full w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
              width={200}
              height={200}
              src={images}
              alt={images}
              priority={true}
            />
          </PhotoView>
        </PhotoProvider>
      
    </div>
  );
}
