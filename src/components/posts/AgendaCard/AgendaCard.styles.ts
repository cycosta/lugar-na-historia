import styled from 'styled-components';

import { colors, fontFamily, spacing, post } from '../../../tokens';

export const StyledRoot = styled.div<{ $bg?: string }>`
  position: relative;
  width: ${post.width}px;
  height: ${post.height}px;
  overflow: hidden;
  box-sizing: border-box;
  ${({ $bg }) =>
    $bg
      ? `background: url(${$bg}) center/cover;`
      : `background: ${colors.neutral.black};`}
`;

export const StyledCircleShape = styled.div`
  position: absolute;
  left: ${spacing.space20};
  top: -500px;
  width: 920px;
  height: 999px;
  border-radius: 519.5px;
  background: ${colors.accent.green};
`;

export const StyledSpikeShape = styled.svg`
  position: absolute;
  left: ${spacing.space20};
  top: -480px;
  width: 920px;
  height: 1000px;
`;

export const StyledPhotoPanel = styled.div`
  position: absolute;
  left: ${spacing.space20};
  top: 120px;
  width: 920px;
  height: 1079px;
  border-radius: 100px;
  background: ${colors.neutral.black};
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 80px 60px;
  justify-content: flex-end;
  box-sizing: border-box;
`;

export const StyledContent = styled.div`
  position: absolute;
  left: ${spacing.space20};
  right: ${spacing.space20};
  bottom: 189px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const StyledItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.space6};
`;

export const StyledItemRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.space2};
  align-items: flex-start;
`;

export const StyledItemDate = styled.span`
  width: 174px;
  flex-shrink: 0;
  font-family: ${fontFamily.body};
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  color: ${colors.neutral.offWhite};
`;

export const StyledItemTitle = styled.span`
  flex: 1;
  font-family: ${fontFamily.body};
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  color: ${colors.neutral.offWhite};
  white-space: normal;
  word-break: break-word;
`;

export const StyledMonth = styled.div<{ $extraMarginTop?: boolean }>`
  font-family: ${fontFamily.display};
  font-weight: 700;
  font-size: 180px;
  line-height: 1;
  text-transform: uppercase;
  color: ${colors.neutral.white};
  ${({ $extraMarginTop }) => $extraMarginTop && `margin-top: ${spacing.space6};`}
`;
