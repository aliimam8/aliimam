'use client';

import Dashboard from './dashboard';
import { CardStackDemo } from '@/components/common/home/grid-cards-images';
import { ResizableDemo } from './resizebox';
import SparklesCore from '@/components/ui/sparkles';

const AboutMe = () => {
  return (
    <>
      <div className="mx-auto mt-20 max-w-3xl px-6">
        <Dashboard />
      </div>
    </>
  );
};

export default AboutMe;
