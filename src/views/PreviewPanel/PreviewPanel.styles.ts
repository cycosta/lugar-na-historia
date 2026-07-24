import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledPanel = styled.div`
  flex: 1;
  padding: 32px 30px 110px;
  overflow-y: auto;
`;

export const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 28px;
  align-items: start;
`;

export const StyledCardFrame = styled.div`
  box-shadow: ${colors.shadow.card};
  display: inline-block;
  line-height: 0;
`;

export const StyledCardLabel = styled.div`
  font-size: 12px;
  color: ${colors.text.muted};
  margin-top: 8px;
`;
