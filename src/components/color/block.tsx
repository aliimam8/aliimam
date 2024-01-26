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

export const MiniBlock = React.forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
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
    background: '',
    boxShadow: '',
    position: 'relative',
    ...style,
  } as CSSProperties;
  return (
    <div ref={ref} className={[prefixCls, className].filter(Boolean).join(' ')} style={stylePointer} {...other}>
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
      >
        {hex.toLocaleUpperCase()}
      </div>
      <p className='text-center text-xs text-slate-600 dark:text-slate-400 mt-4'>Pick a Color</p>
      <EditableInput
      className='mt-4'
        value={hex.toLocaleUpperCase()}
        onChange={(evn, val) => handleHex(val, evn)}
        onBlur={(evn) => {
          const value = evn.target.value;
          evn.target.value = value.slice(0, 6);
          handleHex(value.slice(0, 6), evn);
        }}
        inputStyle={{
          height: 40,
          borderRadius: 30,
          padding: '0 14px',
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </div>
  );
});

export const CardBlock = React.forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
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
    borderRadius: 6,
    background: '',
    boxShadow: '',
    position: 'relative',
    ...style,
  } as CSSProperties;
  return (
    <div ref={ref} className={[prefixCls, className].filter(Boolean).join(' ')} style={stylePointer} {...other}>
      <div
        title={hex}
        style={{
          backgroundColor: `${hex}`,
          color: getContrastingColor(hex),
          height: 80,
          borderRadius: '20px 20px 0px 0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      </div>
    </div>
  );
});


export const MaxBlock = React.forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
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
    borderRadius: 6,
    background: '',
    boxShadow: '',
    position: 'relative',
    ...style,
  } as CSSProperties;
  return (
    <div ref={ref} className={[prefixCls, className].filter(Boolean).join(' ')} style={stylePointer} {...other}>
      <div
        title={hex}
        style={{
          backgroundColor: `${hex}`,
          color: getContrastingColor(hex),
          height: 250,
          fontSize: 18,
          borderRadius: '20px 20px 20px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {hex.toLocaleUpperCase()}
      </div>
      
      
    </div>
  );
});
 