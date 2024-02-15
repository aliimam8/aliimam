'use client';

import Dashboard from './dashboard';
import Logos from './logos';
import React from 'react';
import { Graaadients, PeachFuzz, AICV, Insta, Exp, Tools } from './cards';

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
  return (
    <div className='relative'>
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
        <div className='grid md:grid-cols-2 mt-2 gap-2'>
        <PeachFuzz/>
        <div className='grid grid-cols-2 gap-2'>
        <AICV/>
        <Insta/>
        </div>
        </div> 
        </div>
    </div>
  );
};

export default AboutMe;
