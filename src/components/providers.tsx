'use client';

import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

interface Props {
  children: ReactNode;
}

export function LenisProvider({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}