'use client';

import Dashboard from './dashboard';
import { CardStackDemo } from '@/components/common/home/grid-cards-images';
import { ResizableDemo } from './resizebox';
import SparklesCore from '@/components/ui/sparkles';
import Logos from './logos';
import React from 'react';
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}


const AboutMe = () => {
  const cardsRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })
  return (
    <><motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative will-change-[transform,opacity]'
    >
      <div className="mx-auto mt-10 max-w-3xl px-6">
        <div className='grid gap-4'>
          <Dashboard />
        </div>
        <h1 className="my-6 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400 ">
        Worked with Brands Like
      </h1>
        <Logos />
      </div>
    </motion.div>
    </>
  );
};

export default AboutMe;
