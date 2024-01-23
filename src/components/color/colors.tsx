"use client";

import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { useState } from 'react';

export default function Demo() {
    const [hex, setHex] = useState("#fff");
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
    return (
        <div><h1>{hex}</h1>
        <Colorful
        color={hsva}
        onChange={(color) => {
          setHsva(color.hsva);
        }}
      />
            <Sketch
                color={hex}
                onChange={(color) => {
                    setHex(color.hex);
                }}
            />
        </div>
    );
}