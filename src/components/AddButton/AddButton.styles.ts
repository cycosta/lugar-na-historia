import styled from 'styled-components';

import { colors, fontFamily } from '../../tokens';

export const StyledButton = styled.button<{ $disabled?: boolean }>`
  width: auto;
  padding: 6px 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-family: ${fontFamily.body};
  border: 1px solid ${colors.neutral.gray[300]};
  border-radius: 7px;
  background: ${colors.neutral.white};
  color: ${colors.text.muted};
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
`;
