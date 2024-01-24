"use client";

import React, { useState, Fragment } from 'react';
import ShadeSlider from '@uiw/react-color-shade-slider';
import { hsvaToHex } from '@uiw/color-convert';

import { Slider, Sketch, Material, Colorful, Compact, Wheel, Github, Chrome } from '@uiw/react-color';
import Block from "./block"
import Circle from "./solid"


function AIWheel() {
    const [hsva, setHsva] = useState({ h: 347, s: 97, v: 96, a: 1 });
    const [hex, setHex] = useState('#f50537');
    const [disableAlpha, setDisableAlpha] = useState(false);
    return (
        <div className='flex flex-wrap justify-center'>
            <div className='flex flex-wrap  justify-center gap-8  bg-slate-100 shadow-2xl dark:bg-slate-900 border border-aired/25 py-20 px-6 rounded-3xl w-full'>
                <div className='grid gap-4 '>
                    <Wheel className='' color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
                    <ShadeSlider
                        hsva={hsva}
                        onChange={(newShade) => {
                            setHsva({ ...hsva, ...newShade });
                        }}
                    />
                </div>
                <Block
                    colors={['#f50537', '#FE9200', '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9"]}
                    color={hsva}
                    onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
                />
                <Colorful
                    color={hsva}
                    disableAlpha={disableAlpha}
                    onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
                />
            </div>

            <Circle
                className='justify-center mt-10'
                colors={['#f50537', '#FE9200', '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9", '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9", '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9"]}
                color={hsva}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
            />
            <div className='absolute fixed -z-20 top-0 [mask-image:radial-gradient(800rem_44rem_at_top,white,transparent)]' style={{ width: '100%', height: "800px", background: hsvaToHex(hsva) }}>
            </div>
            
        </div>
    );
}

export default AIWheel;