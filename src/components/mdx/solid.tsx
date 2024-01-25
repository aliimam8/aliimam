import React, { CSSProperties } from 'react';
import { Icons } from '../icons'
import {
  HsvaColor,
  ColorResult,
  color as handleColor,
  validHex,
  hexToHsva,
  hsvaToHex,
  getContrastingColor,
} from '@uiw/color-convert';

type SolidProps = {
  src: string
  width: number
  hex: string
  height: number
} & React.ComponentPropsWithoutRef<'div'>


const Block = (props: SolidProps) => {

  const { src, hex, height = true, className, ...rest } = props
  return (
      <div
        title={hex}
        style={{
          backgroundColor: `${hex}`,
          color: getContrastingColor(hex),
          height: 150,
          fontSize: 18,
          borderRadius: '20px 20px 20px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...rest}
      >
       
      </div>
  );
}

export default Block;