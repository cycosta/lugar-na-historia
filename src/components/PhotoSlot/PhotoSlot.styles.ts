import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledWrapper = styled.div<{ $w: number; $h: number }>`
  position: relative;
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  flex-shrink: 0;
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledPreview = styled.div<{
  $w: number;
  $h: number;
  $src: string;
}>`
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  border-radius: 10px;
  background: url(${({ $src }) => $src}) center/cover;
  cursor: pointer;
  border: 1px solid ${colors.neutral.gray[300]};
`;

export const StyledPlaceholder = styled.div<{ $w: number; $h: number }>`
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  border-radius: 10px;
  border: 1px dashed ${colors.neutral.gray[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: ${colors.neutral.gray[300]};
  cursor: pointer;
`;
