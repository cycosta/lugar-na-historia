import { useRef } from 'react';

import { useInjectPhoto, useClampTitle, useItineraryFix } from '../../../hooks';
import { PrPasseio } from '../PrPasseio';
import { PSPasseio } from '../PSPasseio';
import { SemPasseio } from '../SemPasseio';
import { Reels } from '../Reels';
import { AgendaCard } from '../AgendaCard';
import { Overlay } from '../Overlay';

import { CardBoxProps } from './CardBox.types';
import { StyledClip, StyledScaled } from './CardBox.styles';

const COMPONENTS = { PrPasseio, PSPasseio, SemPasseio, Reels, AgendaCard };

export const CardBox = ({ card, scale }: CardBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useInjectPhoto(ref, card.photo, card.coverShape, card.needsPhoto, [
    card.component,
    JSON.stringify(card.props),
    card.coverShape,
    card.needsPhoto,
    card.photo,
    scale,
  ]);
  useClampTitle(ref, card.clampTitle, [
    card.component,
    JSON.stringify(card.props),
    card.clampTitle,
    scale,
  ]);
  useItineraryFix(ref, card.fixItinerary, [
    card.component,
    JSON.stringify(card.props),
    card.fixItinerary,
    scale,
  ]);

  const Comp = COMPONENTS[card.component];
  if (!Comp) return null;

  return (
    <StyledClip $w={card.w * scale} $h={card.h * scale}>
      <StyledScaled ref={ref} $w={card.w} $h={card.h} $scale={scale}>
        <Comp {...card.props} />
        <Overlay overlay={card.overlay} w={card.w} h={card.h} />
      </StyledScaled>
    </StyledClip>
  );
};
