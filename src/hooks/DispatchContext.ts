"use client"

import { createContext, Dispatch } from 'react';

export const DispatchContext = createContext<Dispatch<{ 
  type: string; 
  payload: any }>>(
  () => null
);

export default DispatchContext;