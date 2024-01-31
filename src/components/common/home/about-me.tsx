'use client';

import Dashboard from './dashboard';
import Logos from './logos';
import React from 'react';
import { motion, useInView } from 'framer-motion'
import { Graaadients, Exp, Tools } from './cards';
import { Stars } from './stars';

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
      <div className="mx-auto mt-14 max-w-5xl px-6">
        <h1 className="my-6 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400 ">
          Worked with Brands Like
        </h1>
        <Logos />
        <div className='grid md:grid-cols-2 mt-4 gap-2'>
          <Dashboard />
          <Graaadients />
        </div>
        <div className='grid md:grid-cols-2 mt-2 gap-2'>
          <Exp />
          <Tools />
        </div>
        <Stars/>
        </div>
      
    </motion.div>
    
    </>
  );
};

export default AboutMe;
