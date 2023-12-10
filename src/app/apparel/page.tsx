import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'src/components/carousel';

export const metadata: Metadata = {
  title: 'Apparel',
  description: 'Explore the latest news and updates from the community'
};

export default async function HomePage() {
  return (
    <div>
      <div className="relative h-[35vh] w-full md:h-[40vh]">
        <div className="small:p-32 absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center">
          <Image
            src="/bg.jpg"
            alt="A skateboarder doing a high drop"
            className="h-full w-full object-cover"
            fill={true}
            priority={true}
            sizes="(max-width: 1920px) 100vw, 33vw"
          />
          <div className="absolute bottom-0 h-[600px] w-full bg-gradient-to-b from-white/0 to-white dark:from-black/0 dark:to-black md:h-[300px]">
            <h1 className="absolute bottom-[10%] left-0 right-0 items-center text-center text-2xl font-bold sm:text-4xl">
              Apparel
              <hr className="mx-auto my-4 h-1 w-6 rounded-full border-0 bg-aired"></hr>
            </h1>
          </div>
        </div>
      </div>
      
      <Carousel />
    </div>
  );
}
