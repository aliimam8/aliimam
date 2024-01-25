"use client";

import React, { useState, Fragment } from 'react';
import ShadeSlider from './slider';
import { hsvaToHex } from '@uiw/color-convert';

import { Wheel } from '@uiw/react-color';
import Block from "./block"
import Circle from "./solid"


function AIWheel() {
    const [hsva, setHsva] = useState({ h: 347, s: 97, v: 96, a: 1 });
    const [hex, setHex] = useState('#f50537');
    const [disableAlpha, setDisableAlpha] = useState(false);
    return (
        <div className='flex flex-wrap justify-center'>
            <div className='flex flex-wrap  justify-center gap-8 bg-slate-100 shadow-2xl dark:bg-slate-900 border border-aired/30 py-10 px-10 rounded-3xl w-auto'>
                <div className='grid gap-4 justify-center items-center'>
                    <Wheel 
                    width={300}
                    height={300}
                     color={hsva} 
                     onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
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
            </div>

            <Circle
                className='justify-center mt-10'
                colors={['#f50537', '#0000FF', '#CC5500', '#DBD650', '#03fc15', "#6b46b9", '#FFFF00', '#6FDF00', '#FF7F50', "#6b46b9", '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9", '#f50537', '#FE9200', '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9", '#FCDC00', '#DBDF00', '#36454F', "#00FFFF", '#FF00FF', '#FFBF00', '#e6e6fa' ]}
                color={hsva}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
            />
            <div className='absolute fixed -z-20 top-0 [mask-image:radial-gradient(800rem_44rem_at_top,white,transparent)]' style={{ width: '100%', height: "800px", background: hsvaToHex(hsva) }}>
            </div>

        </div>
    );
}

export default AIWheel;