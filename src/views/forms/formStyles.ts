import styled from 'styled-components';

import { fontFamily } from '../../tokens';

export const StyledSection = styled.div`
  margin-bottom: 28px;
`;

export const StyledSectionTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  font-family: ${fontFamily.body};
`;

export const StyledRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledItemRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  align-items: center;
`;
