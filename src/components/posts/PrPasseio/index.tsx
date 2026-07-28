import { LugarNaHistRia } from '../LugarNaHistRia';

import { PrPasseioProps } from './PrPasseio.types';
import {
  StyledCoverRoot,
  StyledDescriptionRoot,
  StyledItineraryRoot,
  StyledPricesRoot,
  StyledEndingRoot,
  StyledCoverPhotoWrap,
  StyledCoverPhotoSlot,
  StyledCoverTextBlock,
  StyledEyebrowWrap,
  StyledEyebrow,
  StyledTitleBlock,
  StyledTitleLineWrap,
  StyledTitleLine,
  StyledDescriptionTextWrap,
  StyledDescriptionText,
  StyledItineraryWrap,
  StyledItineraryList,
  StyledStopGroup,
  StyledStopRow,
  StyledStopDot,
  StyledStopText,
  StyledConnectorWrap,
  StyledConnectorSvg,
  StyledPricesTextWrap,
  StyledPricesLine,
  StyledEndingImage,
  StyledEndingBlockGreen,
  StyledEndingBlockRed,
  StyledEndingBlockBlue,
  StyledEndingBlockBlack,
  StyledLogoWrap,
  StyledLogoInner,
} from './PrPasseio.styles';

const Connector = () => (
  <StyledConnectorWrap>
    <StyledConnectorSvg
      width={88}
      height={1}
      viewBox="0 -0.500 88 1"
      fill="none"
    >
      <path
        d="M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </StyledConnectorSvg>
  </StyledConnectorWrap>
);

const StopItem = ({ text, wide }: { text: string; wide?: boolean }) => (
  <StyledStopGroup>
    <StyledStopRow>
      <StyledStopDot data-pg-itinerary-dot="1" />
      <StyledStopText data-pg-itinerary-text="1" $wide={wide}>
        {text}
      </StyledStopText>
    </StyledStopRow>
    <Connector />
  </StyledStopGroup>
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

export const PrPasseio = ({
  className,
  style,
  type = 'cover',
  itinerary1 = false,
  itinerary2 = false,
  itinerary3 = false,
  itinerary4 = false,
  text1,
  text2,
  text3,
  text4,
}: PrPasseioProps) => {
  if (type === 'description') {
    return (
      <StyledDescriptionRoot className={className} style={style}>
        <StyledDescriptionTextWrap>
          <StyledDescriptionText>
            {text1 ??
              'Roteiro histórico em uma rica cidade do ciclo do café no estado do Rio de Janeiro que acabou sendo totalmente demolida e despovoada na década de 1940, e onde hoje funciona um Parque Arqueológico e Ambiental aberto para turismo cultural.'}
          </StyledDescriptionText>
        </StyledDescriptionTextWrap>
        <Logo />
      </StyledDescriptionRoot>
    );
  }

  if (type === 'itinerary') {
    return (
      <StyledItineraryRoot className={className} style={style}>
        <StyledItineraryWrap>
          <StyledItineraryList>
            <StopItem text={text1 ?? 'Ruínas do Antigo Povoado do Saco'} />
            <StopItem text={text2 ?? 'Mirante Imperial'} />
            {itinerary1 && (
              <StopItem text={text3 ?? 'Cachoeira dos Escravizados'} />
            )}
            {itinerary2 && (
              <StopItem
                text={
                  text4 ?? 'Parque Arqueológico e Ambiental de São João Marcos'
                }
              />
            )}
            {itinerary3 && <StopItem text="Middle 4" wide />}
            {itinerary4 && <StopItem text="Middle 5" wide />}
          </StyledItineraryList>
        </StyledItineraryWrap>
        <Logo />
      </StyledItineraryRoot>
    );
  }

  if (type === 'prices') {
    return (
      <StyledPricesRoot className={className} style={style}>
        <StyledItineraryWrap>
          <StyledPricesTextWrap>
            <StyledTitleLineWrap>
              <StyledPricesLine>{text1 ?? '27 de abril'}</StyledPricesLine>
            </StyledTitleLineWrap>
            <StyledTitleLineWrap>
              <StyledPricesLine>{text2 ?? 'R$ 150,00'}</StyledPricesLine>
            </StyledTitleLineWrap>
          </StyledPricesTextWrap>
        </StyledItineraryWrap>
        <Logo />
      </StyledPricesRoot>
    );
  }

  if (type === 'ending') {
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
      <StyledCoverPhotoWrap>
        <StyledCoverPhotoSlot data-pg-photo-slot="1" />
      </StyledCoverPhotoWrap>
      <StyledCoverTextBlock>
        <StyledEyebrowWrap>
          <StyledEyebrow>{text1 ?? 'PASSEIO • 27 DE ABRIL'}</StyledEyebrow>
        </StyledEyebrowWrap>
        <StyledTitleBlock>
          <StyledTitleLineWrap>
            <StyledTitleLine $dark data-pg-clamp-title="1">
              {text2 ?? 'São João Marcos'}
            </StyledTitleLine>
          </StyledTitleLineWrap>
          <StyledTitleLineWrap>
            <StyledTitleLine $dark data-pg-clamp-title="1">
              {text3 ?? ''}
            </StyledTitleLine>
          </StyledTitleLineWrap>
        </StyledTitleBlock>
      </StyledCoverTextBlock>
    </StyledCoverRoot>
  );
};
