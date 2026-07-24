import { useRef } from 'react';

import { useInjectPhoto, useClampTitle, useItineraryFix } from '../../../hooks';
import { PrPasseio } from '../PrPasseio';
import { PSPasseio } from '../PSPasseio';
import { SemPasseio } from '../SemPasseio';
import { Reels } from '../Reels';
import { AgendaCard } from '../AgendaCard';
import { Overlay } from '../Overlay';

import { CardBoxProps } from './CardBox.types';

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
    <div
      style={{
        width: card.w * scale,
        height: card.h * scale,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        ref={ref}
        style={{
          width: card.w,
          height: card.h,
          position: 'relative',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        <Comp {...card.props} />
        <Overlay overlay={card.overlay} w={card.w} h={card.h} />
      </div>
    </div>
  );
};
