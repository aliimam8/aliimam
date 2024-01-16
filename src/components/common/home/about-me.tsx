'use client';

import Dashboard from './dashboard';
import { CardStackDemo } from '@/components/common/home/grid-cards-images';
import { ResizableDemo } from './resizebox';
import SparklesCore from '@/components/ui/sparkles';

const AboutMe = () => {
  return (
    <>
      <div className="mx-auto mt-10 max-w-3xl px-6">
        <div className='grid gap-4'>
          <Dashboard />

        </div>
      </div>
    </>
  );
};

export default AboutMe;
