import styled from 'styled-components';

import { colors, fontFamily } from '../../tokens';

export const StyledBar = styled.div`
  position: fixed;
  left: 400px;
  right: 0;
  bottom: 0;
  background: ${colors.neutral.black};
  color: ${colors.neutral.white};
`;

export const StyledMissing = styled.div`
  padding: 10px 24px;
  font-size: 12px;
  opacity: 0.75;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

export const StyledButton = styled.button<{ $enabled: boolean }>`
  width: 100%;
  border: none;
  background: transparent;
  color: ${colors.neutral.white};
  padding: 18px;
  font-weight: 600;
  font-size: 15px;
  font-family: ${fontFamily.body};
  cursor: ${({ $enabled }) => ($enabled ? 'pointer' : 'default')};
  opacity: ${({ $enabled }) => ($enabled ? 1 : 0.5)};
`;
