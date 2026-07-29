import styled from 'styled-components';

import { colors, fontFamily, spacing, post } from '../../../tokens';

export const StyledCoverRoot = styled.div`
  width: ${post.width}px;
  height: ${post.height}px;
  background-color: ${colors.accent.blue};
  display: flex;
  flex-direction: column;
  padding: 172px 80px 187px 80px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledShapeRoot = styled.div`
  width: ${post.width}px;
  height: ${post.height}px;
  overflow: hidden;
  background-color: ${colors.accent.blue};
  display: flex;
  flex-direction: column;
  padding: ${post.padding};
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledTopRow = styled.div`
  position: relative;
  height: 692px;
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledDescriptionWrap = styled.div`
  position: relative;
  width: 1000px;
  height: 672px;
  display: flex;
  flex-direction: column;
  gap: 9.999913215637207px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledDescription = styled.span`
  position: relative;
  width: 820px;
  font-family: ${fontFamily.body};
  font-weight: 500;
  font-size: 70px;
  line-height: 1.2;
  text-box: trim-both cap alphabetic;
  color: ${colors.neutral.white};
  flex-shrink: 0;
`;

export const StyledImageWrap = styled.div`
  position: relative;
  width: 1017px;
  height: 672px;
  display: flex;
  flex-direction: column;
  gap: 9.999913215637207px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledImageSlot = styled.div`
  position: relative;
  width: 596px;
  height: 457px;
  border-radius: 228.5px;
  flex-shrink: 0;
`;

export const StyledTitleBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.space5};
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledTitleLineWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 19.999826431274414px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledTitleLine = styled.span`
  position: relative;
  font-family: ${fontFamily.display};
  font-weight: 700;
  font-size: 180px;
  width: 1000px;
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 160px;
  text-box: trim-both cap alphabetic;
  color: ${colors.neutral.white};
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const StyledSpacer = styled.div`
  position: relative;
  height: 831px;
  display: flex;
  flex-direction: column;
  gap: 9.999913215637207px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledCircle = styled.div`
  position: relative;
  height: 999px;
  border-radius: 519.5px;
  background-color: ${colors.accent.red};
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledStar = styled.svg`
  position: relative;
  height: 1000px;
  flex-shrink: 0;
  align-self: stretch;
`;
