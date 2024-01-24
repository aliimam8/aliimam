import React, { CSSProperties } from 'react';
import {
  HsvaColor,
  ColorResult,
  color as handleColor,
  validHex,
  hexToHsva,
  hsvaToHex,
  getContrastingColor,
} from '@uiw/color-convert';
import EditableInput from '@uiw/react-color-editable-input';

const CORLER_HEX = ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'];

export interface BlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  colors?: string[];
  onChange?: (color: ColorResult) => void;
}

const Block = React.forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  const { prefixCls = 'w-color-block', className, style, color, colors = CORLER_HEX, onChange, ...other } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const handleChange = (hsv: HsvaColor) => {
    onChange && onChange(handleColor(hsv));
  };
  const handleHex = (value: string | number, evn: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'string' && validHex(value) && /(3|6)/.test(String(value.replace(/^#/, '').length))) {
      onChange && onChange(handleColor(hexToHsva(value)));
    }
  };
  const stylePointer = {
    '--block-background-color': 'rgb(255, 255, 255)',
    width: 300,
    borderRadius: 6,
    background: 'var(--block-background-color)',
    boxShadow: '',
    position: 'relative',
    ...style,
  } as CSSProperties;
  return (
    <div ref={ref} className={[prefixCls, className].filter(Boolean).join(' ')} style={stylePointer} {...other}>
      <div
        style={{
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '0 10px 10px',
          borderColor: `transparent transparent ${hex}`,
          position: 'absolute',
          top: -10,
          left: '50%',
          marginLeft: -10,
        }}
      />
      <div
        title={hex}
        style={{
          backgroundColor: `${hex}`,
          color: getContrastingColor(hex),
          height: 150,
          fontSize: 18,
          borderRadius: '6px 6px 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {hex.toLocaleUpperCase()}
      </div>
      
      <EditableInput
      className='mt-2'
        value={hex.toLocaleUpperCase()}
        onChange={(evn, val) => handleHex(val, evn)}
        onBlur={(evn) => {
          const value = evn.target.value;
          evn.target.value = value.slice(0, 6);
          handleHex(value.slice(0, 6), evn);
        }}
        inputStyle={{
          height: 30,
          outline: 0,
          borderRadius: 3,
          padding: '0 10px',
        }}
        style={{
          padding: 10,
          paddingTop: 0,
        }}
      />
    </div>
  );
});

Block.displayName = 'Block';

export default Block;