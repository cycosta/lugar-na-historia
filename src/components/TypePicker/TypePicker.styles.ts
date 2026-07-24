import styled from 'styled-components';

import { colors, fontFamily } from '../../tokens';

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
`;

export const StyledButton = styled.button<{ $active: boolean }>`
  padding: 14px 18px;
  border-radius: 12px;
  border: ${({ $active }) => ($active ? `2px solid ${colors.neutral.black}` : `1px solid ${colors.neutral.gray[300]}`)};
  background: ${colors.neutral.white};
  cursor: pointer;
  font-family: ${fontFamily.body};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
`;
