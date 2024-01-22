"use client";

import React, { useState, Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import { hsvaToHex } from '@uiw/color-convert';

function Demo() {
    const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
    return (
        <div className='grid gap-4'>
            <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
            <ShadeSlider
                hsva={hsva}
                onChange={(newShade) => {
                    setHsva({ ...hsva, ...newShade });
                }}
            />
            <div className='rounded-full' style={{ width: '100%', height: 50, background: hsvaToHex(hsva) }}>
            </div>
        </div>
    );
}

export default Demo;