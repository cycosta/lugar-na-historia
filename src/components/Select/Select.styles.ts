import styled from 'styled-components';

import { colors, fontFamily } from '../../tokens';

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${colors.neutral.gray[300]};
  border-radius: 10px;
  font-size: 14px;
  font-family: ${fontFamily.body};
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${colors.neutral.black};
  }
`;
