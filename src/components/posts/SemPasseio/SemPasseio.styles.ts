import styled from 'styled-components';

export const StyledCoverRoot = styled.div`
  width: 1080px;
  height: 1350px;
  background-color: rgb(53, 108, 252);
  display: flex;
  flex-direction: column;
  padding: 172px 40px 187px 40px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
`;

export const StyledShapeRoot = styled.div`
  width: 1080px;
  height: 1350px;
  overflow: hidden;
  background-color: rgb(53, 108, 252);
  display: flex;
  flex-direction: column;
  padding: 49px 40px 49px 40px;
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
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 500;
  font-size: 70px;
  line-height: 1.2;
  text-box: trim-both cap alphabetic;
  color: rgb(255, 255, 255);
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
  gap: 20px;
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
  font-family:
    Druk,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 700;
  font-size: 180px;
  width: 1000px;
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 160px;
  text-box: trim-both cap alphabetic;
  color: rgb(255, 255, 255);
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
  background-color: rgb(255, 13, 13);
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledStar = styled.svg`
  position: relative;
  height: 1000px;
  flex-shrink: 0;
  align-self: stretch;
`;
