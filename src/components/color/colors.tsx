"use client";

import React, { useState, Fragment } from 'react';
import ShadeSlider from './slider';
import { hsvaToHex } from '@uiw/color-convert';

import { Wheel } from '@uiw/react-color';
import { MiniBlock } from "./block"


function AIWheel() {
    const [hsva, setHsva] = useState({ h: 347, s: 97, v: 96, a: 1 });
    return (
        <div className='flex flex-wrap justify-center'>
            <div className='flex flex-wrap  justify-center gap-8 bg-slate-100/10 shadow-2xl backdrop-blur-md backdrop-filter dark:bg-slate-900/10 border border-slate-200 dark:border-slate-800 py-10 px-4 md:px-10 rounded-3xl w-auto'>
                <div className='grid gap-8 justify-center items-center'>
                    <Wheel
                        width={280}
                        height={280}
                        color={hsva}
                        onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
                    <ShadeSlider
                        hsva={hsva}
                        onChange={(newShade) => {
                            setHsva({ ...hsva, ...newShade });
                        }}
                    />
                </div>
                <div className='grid gap-8 justify-center items-center'>
                <MiniBlock
                    colors={['#f50537', '#FE9200', '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9"]}
                    color={hsva}
                    onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
                />
                
                </div>
            </div>
            <div className='absolute fixed -z-20 top-0 [mask-image:radial-gradient(800rem_44rem_at_top,white,transparent)]' style={{ width: '100%', height: "800px", background: hsvaToHex(hsva) }}>
            </div>

        </div>
    );
}

export default AIWheel;