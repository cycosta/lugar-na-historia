import { ReelsProps } from './Reels.types';
import {
  StyledRootBox,
  StyledRootFull,
  StyledPhotoWrap,
  StyledPhotoSlot,
  StyledPhotoSlotFull,
  StyledTitleBlock,
  StyledTitleBlockOverlay,
  StyledTitleLineWrap,
  StyledTitleLine,
} from './Reels.styles';

const TitleLines = ({ text1, text2 }: { text1?: string; text2?: string }) => (
  <>
    <StyledTitleLineWrap>
      <StyledTitleLine data-pg-clamp-title="1">
        {text1 ?? 'São João Marcos'}
      </StyledTitleLine>
    </StyledTitleLineWrap>
    <StyledTitleLineWrap>
      <StyledTitleLine data-pg-clamp-title="1">{text2 ?? ''}</StyledTitleLine>
    </StyledTitleLineWrap>
  </>
);

export const Reels = ({
  className,
  style,
  imageFull = 'off',
  text1,
  text2,
}: ReelsProps) => {
  if (imageFull === 'on') {
    return (
      <StyledRootFull className={className} style={style}>
        <StyledPhotoSlotFull data-pg-photo-slot="1" />
        <StyledTitleBlockOverlay>
          <TitleLines text1={text1} text2={text2} />
        </StyledTitleBlockOverlay>
      </StyledRootFull>
    );
  }

  return (
    <StyledRootBox className={className} style={style}>
      <StyledPhotoWrap>
        <StyledPhotoSlot data-pg-photo-slot="1" />
      </StyledPhotoWrap>
      <StyledTitleBlock>
        <TitleLines text1={text1} text2={text2} />
      </StyledTitleBlock>
    </StyledRootBox>
  );
};
