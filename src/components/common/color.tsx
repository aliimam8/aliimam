'use client';

import ColorPicker, { Color } from '@rc-component/color-picker';
import '@/styles/color.css';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(new Color('#f50537'));

  return (
    <div className="mx-auto mt-10 w-full">
      <div className="mb-6 flex justify-center">
        <ColorPicker color={value} onChange={setValue} />
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-6">
        <p className="text-slate-400 dark:slate-600">
          hex:
          <span className="px-2 text-black text-lg font-semibold dark:text-white">
            {value.getAlpha() < 1 ? value.toHex8String() : value.toHexString()}
          </span>
        </p>
        <p className="text-slate-400 dark:slate-600">
          rgb:
          <span className="px-2 text-black text-lg font-semibold dark:text-white">{value.toRgbString()}</span>
        </p>
        <p className="text-slate-400 dark:slate-600">
          hsb:
          <span className="px-2 text-black text-lg font-semibold dark:text-white">{value.toHsbString()}</span>
        </p>
      </div>
    </div>
  );
};
