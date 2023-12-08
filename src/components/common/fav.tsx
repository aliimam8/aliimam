'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Icons } from 'src/components/icons';

import photo1 from 'public/images/fav/img1.jpg';
import photo2 from 'public/images/fav/img2.jpg';
import photo3 from 'public/images/fav/img3.jpg';
import photo4 from 'public/images/fav/img4.jpg';
import photo5 from 'public/images/fav/img5.jpg';
import photo6 from 'public/images/fav/img6.jpg';
import photo7 from 'public/images/fav/img7.jpg';
import photo8 from 'public/images/fav/img8.jpg';
import photo9 from 'public/images/fav/img9.jpg';
import photo10 from 'public/images/fav/img10.jpg';
import photo11 from 'public/images/fav/img11.jpg';
import photo12 from 'public/images/fav/img12.jpg';

export const photoImages = [photo12.src, photo11.src, photo10.src, photo9.src, photo8.src, photo7.src, photo1.src, photo2.src, photo3.src, photo4.src, photo5.src, photo6.src];

export default function Favo() {
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
    <main className="">
      <h1 className="my-10 mt-20 text-center text-2xl font-bold sm:text-4xl">
          Images Captured
          <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-6xl">
        <div className="grid grid-cols-3 lg:grid-cols-6">
          <PhotoProvider
            maskOpacity={0.9}
            toolbarRender={({ onScale, scale }) => {
              return (
                <div className="flex items-center gap-4 px-1">
                  <Link href={''} target="_blank" className="hover:opacity-80" download={true}>
                    <div className="flex items-center gap-2">
                      <Icons.download
                        onClick={() => onScale(scale + 0.5)}
                        strokeWidth={1.5}
                        className="w-5 hover:opacity-80"
                      />
                      <p className="text-md">Free Download</p>
                    </div>
                  </Link>
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
              <PhotoView key={index} src={item}>
                <div className="w-full p-1">
                  <Image
                    src={item}
                    alt={''}
                    className="block h-full w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
                    width={300}
                    height={300}
                  />
                </div>
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </main>
  );
}
