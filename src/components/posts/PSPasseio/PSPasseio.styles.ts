import styled from 'styled-components';

export const StyledCoverRoot = styled.div`
  width: 1080px;
  height: 1350px;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  padding: 171px 80px 49px 80px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledGalleryRoot = styled(StyledCoverRoot)`
  padding: 49px 40px 49px 40px;
`;

export const StyledEndingRoot = styled.div`
  width: 1080px;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  gap: 250px;
  padding: 49px 40px 49px 40px;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledPhotoSlotWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-grow: 1;
  align-self: stretch;
`;

export const StyledPhotoSlotWrapTall = styled.div`
  position: relative;
  height: 1182px;
  display: flex;
  flex-direction: column;
  gap: 9.999913215637207px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledPhotoSlotRound = styled.div`
  position: relative;
  border-radius: 580px;
  flex-grow: 1;
  align-self: stretch;
`;

export const StyledPhotoSlotFill = styled.div`
  position: relative;
  flex-grow: 1;
  align-self: stretch;
`;

export const StyledTextRow = styled.div<{ $short?: boolean }>`
  position: relative;
  height: ${({ $short }) => ($short ? '70px' : '122px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledTitleWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 19.999826431274414px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  padding-right: 32px;
  box-sizing: border-box;
`;

export const StyledTitle = styled.span`
  position: relative;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  font-size: 28px;
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 120%;
  text-box: trim-both cap alphabetic;
  color: rgb(245, 245, 245);
  flex-shrink: 0;
`;

export const StyledDateWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 19.999826431274414px;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
`;

export const StyledDate = styled.span`
  position: relative;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  font-size: 28px;
  text-align: right;
  white-space: nowrap;
  line-height: 100%;
  text-box: trim-both cap alphabetic;
  color: rgb(245, 245, 245);
  flex-shrink: 0;
`;

export const StyledEndingImage = styled.div`
  position: relative;
  width: 1080px;
  height: 672px;
  flex-shrink: 0;
`;

export const StyledEndingBlockGreen = styled.div`
  position: absolute;
  left: 498px;
  top: 242px;
  width: 543px;
  height: 1064px;
  background-color: rgb(44, 225, 122);
`;

export const StyledEndingBlockRed = styled.div`
  position: absolute;
  left: 498px;
  top: -49px;
  width: 543px;
  height: 131px;
  background-color: rgb(255, 13, 13);
`;

export const StyledEndingBlockBlue = styled.div`
  position: absolute;
  left: -42px;
  top: -49px;
  width: 540px;
  height: 611px;
  background-color: rgb(53, 108, 252);
`;

export const StyledEndingBlockBlack = styled.div`
  position: absolute;
  left: -42px;
  top: 562px;
  width: 540px;
  height: 744px;
  background-color: rgb(0, 0, 0);
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
