import styled from 'styled-components';

import { fontFamily } from '../../../tokens';

export const StyledDescription = styled.div<{ $w: number }>`
  position: absolute;
  left: 40px;
  top: 172px;
  width: ${({ $w }) => $w - 80}px;
  font-family: ${fontFamily.body};
  font-weight: 500;
  font-size: 44px;
  line-height: 1.2;
  color: #fff;
  pointer-events: none;
`;

export const StyledSubtitle = styled.div<{ $w: number }>`
  position: absolute;
  left: 40px;
  top: ${1156 - 32 - 36}px;
  width: ${({ $w }) => $w - 80}px;
  font-family: ${fontFamily.body};
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 1px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.92);
  pointer-events: none;
`;
