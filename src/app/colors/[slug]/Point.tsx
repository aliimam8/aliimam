import React, { CSSProperties, useCallback } from 'react';
import { SwatchRectRenderProps, SwatchProps } from '@uiw/react-color-swatch';
import { useRef } from 'react';

interface PointProps extends SwatchRectRenderProps {
  rectProps?: SwatchProps['rectProps'];
}

export default function Point({ style, title, checked, color, onClick, rectProps }: PointProps) {
  const btn = useRef<HTMLDivElement>(null);
  const handleMouseEnter = useCallback(() => {
    btn.current!.style['transform'] = 'scale(1.02)';
  }, []);

  const handleMouseLeave = useCallback(() => {
    btn.current!.style['transform'] = 'scale(1)';
  }, []);

  const styleWrapper = {
    '--circle-point-background-color': '#fff',
    height: checked ? '100%' : 0,
    width: checked ? '100%' : 0,
    borderRadius: '50%',
    backgroundColor: 'var(--circle-point-background-color)',
    boxSizing: 'border-box',
    transition: 'height 100ms ease 0s, width 100ms ease 0s',
    ...rectProps!.style,
  } as CSSProperties;

  return (
    <div
      ref={btn}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        padding: 45,
        borderRadius: '0%',
        marginRight: 5,
        marginBottom: 5,
        boxSizing: 'border-box',
        transform: 'scale(1)',
        boxShadow: `${color} 0px 0px ${checked ? 1 : 0}px`,
        transition: 'transform 100ms ease 0s, 100ms ease 0s',
      }}
    >
      <div {...rectProps} style={styleWrapper} />
    </div>
  );
}