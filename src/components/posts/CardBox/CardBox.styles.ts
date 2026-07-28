import styled from 'styled-components';

export const StyledClip = styled.div<{ $w: number; $h: number }>`
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  overflow: hidden;
  position: relative;
`;

export const StyledScaled = styled.div<{
  $w: number;
  $h: number;
  $scale: number;
}>`
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  position: relative;
  transform: scale(${({ $scale }) => $scale});
  transform-origin: top left;
`;
