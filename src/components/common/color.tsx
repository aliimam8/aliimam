'use client';

import ColorPicker, { Color, ColorBlock } from '@rc-component/color-picker';
import '@/styles/color.css';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(new Color('#f50537'));

  return (
    <div className="mx-auto mt-10 w-full">
      <div className="mb-6 grid items-center justify-center gap-4">
        <ColorPicker defaultValue={value} color={value} onChange={setValue} />
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        <p className="dark:slate-600 text-slate-400">
          hex:
          <span className="px-2 text-lg font-semibold text-black dark:text-white">
            {value.getAlpha() < 1 ? value.toHex8String() : value.toHexString()}
          </span>
        </p>
        <p className="dark:slate-600 text-slate-400">
          rgb:
          <span className="px-2 text-lg font-semibold text-black dark:text-white">
            {value.toRgbString()}
          </span>
        </p>
        <p className="dark:slate-600 text-slate-400">
          hsb:
          <span className="px-2 text-lg font-semibold text-black dark:text-white">
            {value.toHsbString()}
          </span>
        </p>
      </div>
    </div>
  );
};
