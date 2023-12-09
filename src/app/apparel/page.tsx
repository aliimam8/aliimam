import { Suspense } from 'react';
import { type Metadata } from 'next';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apparel',
  description: 'Explore the latest news and updates from the community'
};

export default async function HomePage() {
  return (
<div className="grid min-h-screen grid-cols-1 overflow-hidden">
      
        <Image
          src="/bg.jpg"
          alt="A skateboarder doing a high drop"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="(max-width: 268px) 50vw, (max-width: 1920px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        
        <h1 className="absolute z-10 my-10 mt-40 text-center text-2xl font-bold sm:text-4xl">
          Gallery
          <hr className="bg-aired rounded-full mx-auto my-4 h-1 w-6 border-0"></hr>
        </h1>
      
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        
      </main>
    </div>
  );
}
