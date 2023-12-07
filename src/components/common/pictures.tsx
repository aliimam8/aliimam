'use client';
import Link from 'next/link';
import CldImage from 'src/components/CldImage';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'react-photo-view/dist/react-photo-view.css';

export default function AliImage({ images }: { images: { src: string; altText: string }[] }) {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className="w-full">
      <LightGallery onInit={onInit} speed={500} plugins={[lgZoom]}>
        <CldImage
          className="block h-full w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
          width={2000}
          height={2000}
          src={images}
          alt={images}
          sizes="(min-width: 1024px) 66vw, 100vw"
        />
      </LightGallery>
    </div>
  );
}
