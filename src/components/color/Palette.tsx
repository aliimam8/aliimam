"use client"

import React, { FC } from 'react';

// widgets
import ColourPalette from './ColourPalette';

import presets from 'src/data/presets';
import useDispatch from 'src/hooks/useDispatch';

const PaletteControls: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='mt-10'>
      {presets.palettes.map((item, index) => (
        <ColourPalette
          key={index}
          colours={item}
          handleSetPalette={(a) => {
            dispatch({ type: 'SET_COLOURS', payload: a });
          }}
        />
      ))}
    </div>
  );
};

export default PaletteControls;
