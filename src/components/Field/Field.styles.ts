import styled from 'styled-components';

import { colors, fontFamily } from '../../tokens';

export const StyledField = styled.div`
  margin-bottom: 18px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 12px;
  color: ${colors.text.muted};
  margin-bottom: 6px;
  font-family: ${fontFamily.body};
`;
