"use client";

import React, { useState, Fragment } from 'react';
import ShadeSlider from '@uiw/react-color-shade-slider';
import { hsvaToHex } from '@uiw/color-convert';

import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';


function AIWheel() {
    const [hsva, setHsva] = useState({ h: 347, s: 97, v: 96, a: 1 });
    const [hex, setHex] = useState('#f50537');
    const [disableAlpha, setDisableAlpha] = useState(false);
    return (
        <>
            <div className='grid gap-4'>
                <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
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
            <Circle
                colors={['#f50537', '#FE9200', '#FCDC00', '#DBDF00', '#03fc15', "#6b46b9"]}
                color={hsva}
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
            />
            <div className='absolute fixed -z-20 top-0' style={{ width: '100%', height: "50%", background: hsvaToHex(hsva) }}>
            </div>
        </>
    );
}

export default AIWheel;