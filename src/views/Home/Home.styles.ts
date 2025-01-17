import styled from 'styled-components';
import { colors, spacing } from '../../tokens';

export const StyledConfigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing.hxxsmall};
  background-color: ${colors.neutral.white};
  width: 100%;
  gap: ${spacing.hxxsmall};
`;

export const StyledPreviewWrapper = styled.div`
  background-color: ${colors.neutral.gray};
  padding: ${spacing.hxxsmall};
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
`;
