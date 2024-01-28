import styled from 'styled-components';
import { rowCSS, columnCSS } from './generic';

export const Row = styled.div`
  ${rowCSS};
`;

export const Column = styled.div<{ width?: number }>`
  ${columnCSS};
  width: 0.5rem);
`;
