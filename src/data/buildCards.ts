import {
  AgendaData,
  Card,
  OutrosData,
  PosData,
  PostGeneratorData,
  PostType,
  PreData,
  ReelsData,
} from './types';
import { LABELS, DEFAULT_DESC, ITINERARY_EXAMPLES } from './postTypes';

const buildPreCards = (d: PreData): Card[] => {
  const eyebrow =
    d.day && d.month
      ? `PASSEIO • ${d.day} DE ${d.month.toUpperCase()}`
      : undefined;
  const date = d.day && d.month ? `${d.day} de ${d.month}` : undefined;
  const stops = d.stops.filter((s) => s.trim() !== '');
  return [
    {
      component: 'PrPasseio',
      label: LABELS.cover,
      w: 1080,
      h: 1350,
      photo: d.photo,
      needsPhoto: true,
      clampTitle: true,
      props: {
        type: 'cover',
        text1: eyebrow,
        text2: d.title || undefined,
        text3: d.title ? '' : undefined,
      },
    },
    {
      component: 'PrPasseio',
      label: LABELS.description,
      w: 1080,
      h: 1350,
      props: { type: 'description', text1: d.description || undefined },
    },
    {
      component: 'PrPasseio',
      label: LABELS.itinerary,
      w: 1080,
      h: 1350,
      fixItinerary: true,
      props: {
        type: 'itinerary',
        text1: stops[0] || ITINERARY_EXAMPLES[0],
        text2: stops[1] || ITINERARY_EXAMPLES[1],
        text3: stops[2] || ITINERARY_EXAMPLES[2],
        text4: stops[3],
        itinerary1: true,
        itinerary2: stops.length > 3,
      },
    },
    {
      component: 'PrPasseio',
      label: LABELS.prices,
      w: 1080,
      h: 1350,
      props: { type: 'prices', text1: date, text2: d.price || undefined },
    },
    {
      component: 'PrPasseio',
      label: LABELS.ending,
      w: 1080,
      h: 1350,
      props: { type: 'ending' },
    },
  ];
};

const buildPosCards = (d: PosData): Card[] => {
  const date = d.day && d.month ? `${d.day} de ${d.month}` : undefined;
  const cards: Card[] = [
    {
      component: 'PSPasseio',
      label: LABELS.cover,
      w: 1080,
      h: 1350,
      photo: d.coverPhoto,
      coverShape: d.coverShape,
      needsPhoto: true,
      props: { step: 'cover 1', text1: d.title || undefined, text2: date },
    },
  ];
  d.gallery.forEach((g, i) =>
    cards.push({
      component: 'PSPasseio',
      label: `${LABELS.gallery} ${i + 1}`,
      w: 1080,
      h: 1350,
      photo: g.photo,
      needsPhoto: true,
      props: { step: 'gallery', text1: d.title || undefined, text2: date },
    }),
  );
  cards.push({
    component: 'PSPasseio',
    label: LABELS.ending,
    w: 1080,
    h: 1350,
    props: { step: 'ending' },
  });
  return cards;
};

const buildAgendaCards = (d: AgendaData): Card[] => [
  {
    component: 'AgendaCard',
    label: LABELS.agenda,
    w: 1080,
    h: 1350,
    photo: d.variant === 'none' ? d.photo : null,
    needsPhoto: d.variant === 'none',
    props: {
      variant: d.variant,
      month: d.month,
      items: d.items,
      photo: d.photo,
    },
  },
];

const buildOutrosCards = (d: OutrosData): Card[] => {
  if (d.variant === 'cover') {
    return [
      {
        component: 'SemPasseio',
        label: LABELS.outros,
        w: 1080,
        h: 1350,
        photo: d.showImage ? d.photo : null,
        needsPhoto: d.showImage,
        clampTitle: true,
        props: {
          step: 'cover',
          showImage: d.showImage,
          showDescription: d.showDescription,
          text1: d.description || undefined,
          text2: d.title || undefined,
          text3: d.title ? '' : undefined,
        },
      },
    ];
  }
  if (d.variant === 'circle') {
    return [
      {
        component: 'SemPasseio',
        label: LABELS.outros,
        w: 1080,
        h: 1350,
        props: { step: 'circle', showCircle: true },
        overlay: { kind: 'description', text: d.description || DEFAULT_DESC },
      },
    ];
  }
  return [
    {
      component: 'SemPasseio',
      label: LABELS.outros,
      w: 1080,
      h: 1350,
      props: { step: 'spike', showStar: true },
      overlay: { kind: 'description', text: d.description || DEFAULT_DESC },
    },
  ];
};

const buildReelsCards = (d: ReelsData): Card[] => [
  {
    component: 'Reels',
    label: LABELS.reels,
    w: 1080,
    h: 1920,
    photo: d.photo,
    needsPhoto: true,
    clampTitle: true,
    props: {
      imageFull: 'on',
      text1: d.title || undefined,
      text2: d.title ? '' : undefined,
    },
    overlay: d.showSubtitle
      ? {
          kind: 'subtitle',
          text: (d.subtitle || 'Roteiro histórico').toUpperCase(),
        }
      : null,
  },
];

export const buildCards = (type: PostType, data: PostGeneratorData): Card[] => {
  if (type === 'pre') return buildPreCards(data.pre);
  if (type === 'pos') return buildPosCards(data.pos);
  if (type === 'agenda') return buildAgendaCards(data.agenda);
  if (type === 'outros') return buildOutrosCards(data.outros);
  if (type === 'reels') return buildReelsCards(data.reels);
  return [];
};
