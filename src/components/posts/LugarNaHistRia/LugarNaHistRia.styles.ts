import styled from 'styled-components';

import { colors } from '../../../tokens';

export const StyledWrapper = styled.div<{ $light: 'on' | 'off' }>`
  position: relative;
  width: 346px;
  height: 126.443px;
  color: ${({ $light }) => ($light === 'on' ? colors.neutral.white : colors.neutral.black)};
`;

export const StyledWordmark = styled.svg`
  position: absolute;
  left: 2.012px;
  top: 3.016px;
`;

export const StyledLugar = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledHistoria = styled.svg`
  position: absolute;
  left: 107.199px;
  top: 0.256px;
`;
