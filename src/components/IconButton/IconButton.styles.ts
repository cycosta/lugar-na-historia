import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledButton = styled.button<{ $disabled?: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.neutral.gray[300]};
  border-radius: 7px;
  background: ${colors.neutral.white};
  color: ${colors.text.muted};
  flex-shrink: 0;
  opacity: ${({ $disabled }) => ($disabled ? 0.35 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
`;
