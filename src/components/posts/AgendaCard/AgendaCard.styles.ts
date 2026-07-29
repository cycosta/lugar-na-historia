import styled from 'styled-components';

export const StyledRoot = styled.div<{ $bg?: string }>`
  position: relative;
  width: 1080px;
  height: 1350px;
  overflow: hidden;
  box-sizing: border-box;
  ${({ $bg }) =>
    $bg ? `background: url(${$bg}) center/cover;` : 'background: rgb(0,0,0);'}
`;

export const StyledCircleShape = styled.div`
  position: absolute;
  left: 80px;
  top: -500px;
  width: 920px;
  height: 999px;
  border-radius: 519.5px;
  background: rgb(44, 225, 122);
`;

export const StyledSpikeShape = styled.svg`
  position: absolute;
  left: 80px;
  top: -480px;
  width: 920px;
  height: 1000px;
`;

export const StyledPhotoPanel = styled.div`
  position: absolute;
  left: 80px;
  top: 120px;
  width: 920px;
  height: 1079px;
  border-radius: 100px;
  background: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 80px 60px;
  justify-content: flex-end;
  box-sizing: border-box;
`;

export const StyledContent = styled.div`
  position: absolute;
  left: 80px;
  right: 80px;
  bottom: 189px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const StyledItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledItemRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`;

export const StyledItemDate = styled.span`
  width: 174px;
  flex-shrink: 0;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  color: rgb(245, 245, 245);
`;

export const StyledItemTitle = styled.span`
  flex: 1;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  color: rgb(245, 245, 245);
  white-space: normal;
  word-break: break-word;
`;

export const StyledMonth = styled.div<{ $extraMarginTop?: boolean }>`
  font-family: Druk, sans-serif;
  font-weight: 700;
  font-size: 180px;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  ${({ $extraMarginTop }) => $extraMarginTop && 'margin-top: 24px;'}
`;
