import styled from 'styled-components';

import { colors, fontFamily, spacing, post } from '../../../tokens';

export const StyledCoverRoot = styled.div`
  width: ${post.width}px;
  height: ${post.height}px;
  background-color: ${colors.neutral.offWhite};
  display: flex;
  flex-direction: column;
  gap: 129px;
  padding: 176px 80px 159px 80px;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledDescriptionRoot = styled.div`
  width: ${post.width}px;
  background-color: ${colors.neutral.black};
  display: flex;
  flex-direction: column;
  gap: 250px;
  padding: ${post.padding};
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledItineraryRoot = styled(StyledDescriptionRoot)`
  color: ${colors.neutral.white};
`;

export const StyledPricesRoot = styled(StyledDescriptionRoot)``;

export const StyledEndingRoot = styled(StyledDescriptionRoot)`
  overflow: hidden;
`;

export const StyledCoverPhotoWrap = styled.div`
  position: relative;
  height: 538px;
  display: flex;
  flex-direction: column;
  gap: 9.999913215637207px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledCoverPhotoSlot = styled.div`
  position: relative;
  border-radius: 106.38627624511719px;
  flex-grow: 1;
  align-self: stretch;
`;

export const StyledCoverTextBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.space8};
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledEyebrowWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 19.999826431274414px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledEyebrow = styled.span`
  position: relative;
  font-family: ${fontFamily.body};
  font-weight: 400;
  font-size: 28px;
  white-space: nowrap;
  line-height: 100%;
  text-box: trim-both cap alphabetic;
  color: ${colors.neutral.black};
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

export const StyledTitleLine = styled.span<{ $dark?: boolean }>`
  position: relative;
  font-family: ${fontFamily.display};
  font-weight: 700;
  font-size: 180px;
  width: 1000px;
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 160px;
  text-box: trim-both cap alphabetic;
  color: ${({ $dark }) => ($dark ? colors.neutral.black : colors.neutral.white)};
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const StyledDescriptionTextWrap = styled.div`
  position: relative;
  height: 672px;
  display: flex;
  flex-direction: column;
  gap: 9.999913215637207px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledDescriptionText = styled.span`
  position: relative;
  width: 820px;
  font-family: ${fontFamily.body};
  font-weight: 500;
  font-size: 70px;
  line-height: 1.2;
  text-box: trim-both cap alphabetic;
  color: ${colors.neutral.offWhite};
  flex-shrink: 0;
`;

export const StyledItineraryWrap = styled.div`
  position: relative;
  height: 672px;
  display: flex;
  flex-direction: column;
  gap: 9.999913215637207px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledItineraryList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledStopGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledStopRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${spacing.space10};
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledStopDot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.neutral.white};
  flex-shrink: 0;
`;

export const StyledStopText = styled.span<{ $wide?: boolean }>`
  position: relative;
  ${({ $wide }) => $wide && 'width: 940px;'}
  font-family: ${fontFamily.body};
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  text-box: trim-both cap alphabetic;
  color: ${colors.neutral.white};
  flex-shrink: 0;
  ${({ $wide }) => !$wide && 'white-space: nowrap;'}
`;

export const StyledConnectorWrap = styled.div`
  position: relative;
  width: 8px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 0 ${spacing.space1} 0 ${spacing.space1};
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const StyledConnectorSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  transform: matrix(0, 1, -1, 0, 4, 0);
  transform-origin: 0 0;
`;

export const StyledPricesTextWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.space5};
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledPricesLine = styled.span`
  position: relative;
  font-family: ${fontFamily.display};
  font-weight: 700;
  font-size: 180px;
  white-space: nowrap;
  line-height: 100%;
  text-box: trim-both cap alphabetic;
  color: ${colors.neutral.offWhite};
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const StyledEndingImage = styled.div`
  position: relative;
  width: ${post.width}px;
  height: 672px;
  flex-shrink: 0;
`;

export const StyledEndingBlockGreen = styled.div`
  position: absolute;
  left: 498px;
  top: 242px;
  width: 546px;
  height: 1059px;
  background-color: ${colors.accent.green};
`;

export const StyledEndingBlockRed = styled.div`
  position: absolute;
  left: 498px;
  top: -48px;
  width: 540px;
  height: 130px;
  background-color: ${colors.accent.red};
`;

export const StyledEndingBlockBlue = styled.div`
  position: absolute;
  left: -42px;
  top: -48px;
  width: 540px;
  height: 610px;
  background-color: ${colors.accent.blue};
`;

export const StyledEndingBlockBlack = styled.div`
  position: absolute;
  left: -42px;
  top: 562px;
  width: 540px;
  height: 739px;
  background-color: ${colors.neutral.black};
`;

export const StyledLogoWrap = styled.div`
  position: relative;
  width: 489px;
  height: 330px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledLogoInner = styled.div`
  position: relative;
  width: 243px;
  height: 89px;
  flex-shrink: 0;
`;
