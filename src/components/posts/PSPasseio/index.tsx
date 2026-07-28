import { LugarNaHistRia } from '../LugarNaHistRia';

import { PSPasseioProps } from './PSPasseio.types';
import {
  StyledCoverRoot,
  StyledGalleryRoot,
  StyledEndingRoot,
  StyledPhotoSlotWrap,
  StyledPhotoSlotWrapTall,
  StyledPhotoSlotRound,
  StyledPhotoSlotFill,
  StyledTextRow,
  StyledTitleWrap,
  StyledTitle,
  StyledDateWrap,
  StyledDate,
  StyledEndingImage,
  StyledEndingBlockGreen,
  StyledEndingBlockRed,
  StyledEndingBlockBlue,
  StyledEndingBlockBlack,
  StyledLogoWrap,
  StyledLogoInner,
} from './PSPasseio.styles';

const TextRow = ({
  text1,
  text2,
  short,
}: {
  text1?: string;
  text2?: string;
  short?: boolean;
}) => (
  <StyledTextRow $short={short}>
    <StyledTitleWrap>
      <StyledTitle>{text1 ?? 'São João Marcos'}</StyledTitle>
    </StyledTitleWrap>
    <StyledDateWrap>
      <StyledDate>{text2 ?? '27 de Abril'}</StyledDate>
    </StyledDateWrap>
  </StyledTextRow>
);

const Logo = () => (
  <StyledLogoWrap>
    <StyledLogoInner>
      <LugarNaHistRia
        style={{ transform: 'scale(0.702, 0.704)', transformOrigin: '0 0' }}
        light="on"
      />
    </StyledLogoInner>
  </StyledLogoWrap>
);

export const PSPasseio = ({
  className,
  style,
  step = 'cover 1',
  text1,
  text2,
}: PSPasseioProps) => {
  if (step === 'gallery') {
    return (
      <StyledGalleryRoot className={className} style={style}>
        <StyledPhotoSlotWrapTall>
          <StyledPhotoSlotFill data-pg-photo-slot="1" />
        </StyledPhotoSlotWrapTall>
        <TextRow text1={text1} text2={text2} short />
      </StyledGalleryRoot>
    );
  }

  if (step === 'ending') {
    return (
      <StyledEndingRoot className={className} style={style}>
        <StyledEndingImage>
          <StyledEndingBlockGreen />
          <StyledEndingBlockRed />
          <StyledEndingBlockBlue />
          <StyledEndingBlockBlack />
        </StyledEndingImage>
        <Logo />
      </StyledEndingRoot>
    );
  }

  return (
    <StyledCoverRoot className={className} style={style}>
      <StyledPhotoSlotWrap>
        <StyledPhotoSlotRound data-pg-photo-slot="1" />
      </StyledPhotoSlotWrap>
      <TextRow text1={text1} text2={text2} />
    </StyledCoverRoot>
  );
};
