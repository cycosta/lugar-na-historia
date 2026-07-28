import styled from 'styled-components';

export const StyledRootBox = styled.div`
  width: 1080px;
  height: 1920px;
  background-color: rgb(0, 0, 0);
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
  width: 1080px;
  height: 1920px;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
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
  height: 1920px;
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

export const StyledTitleBlockOverlay = styled(StyledTitleBlock)`
  position: absolute;
  left: 80px;
  right: 80px;
  top: 1156px;
  box-shadow: inset 0 0 0 1px rgb(0, 0, 0);
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
