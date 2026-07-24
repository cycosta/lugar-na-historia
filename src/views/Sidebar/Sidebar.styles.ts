import styled from 'styled-components';

import { colors, fontFamily } from '../../tokens';

export const StyledSidebar = styled.div`
  width: 400px;
  min-width: 400px;
  background: ${colors.neutral.white};
  padding: 32px 30px;
  overflow-y: auto;
  border-right: 1px solid ${colors.border.hairline};
  font-family: ${fontFamily.body};
`;

export const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
