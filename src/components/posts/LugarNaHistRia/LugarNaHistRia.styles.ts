import styled from 'styled-components';

export const StyledWrapper = styled.div<{ $light: 'on' | 'off' }>`
  position: relative;
  width: 346px;
  height: 126.443px;
  color: ${({ $light }) => ($light === 'on' ? 'rgb(255,255,255)' : 'rgb(0,0,0)')};
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
