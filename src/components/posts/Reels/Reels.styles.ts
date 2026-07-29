import styled from 'styled-components';

import { colors, fontFamily, spacing, post } from '../../../tokens';

export const StyledRootBox = styled.div`
  width: ${post.width}px;
  height: ${post.reelsHeight}px;
  background-color: ${colors.neutral.black};
  display: flex;
  flex-direction: column;
  padding: 451px 40px 49px 40px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledRootFull = styled.div`
  width: ${post.width}px;
  height: ${post.reelsHeight}px;
  overflow: hidden;
  background-color: ${colors.neutral.black};
  position: relative;
`;

export const StyledPhotoWrap = styled.div`
  position: relative;
  height: 1008px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledPhotoSlot = styled.div`
  position: relative;
  border-radius: 580px;
  flex-grow: 1;
  align-self: stretch;
`;

export const StyledPhotoSlotFull = styled.div`
  position: absolute;
  left: -100px;
  top: 0;
  width: 1280px;
  height: ${post.reelsHeight}px;
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

export const StyledTitleBlockOverlay = styled(StyledTitleBlock)`
  position: absolute;
  left: 80px;
  right: 80px;
  top: 1156px;
  box-shadow: inset 0 0 0 1px ${colors.neutral.black};
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
