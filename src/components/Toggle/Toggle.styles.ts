import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  margin-bottom: 16px;
  cursor: pointer;
  color: ${colors.text.primary};
`;

export const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
`;
