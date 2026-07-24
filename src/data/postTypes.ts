import { PostGeneratorData, PostTypeMeta } from './types';

export const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const POST_TYPES: PostTypeMeta[] = [
  { key: 'pre', label: 'Pré Passeio' },
  { key: 'pos', label: 'Pós Passeio' },
  { key: 'outros', label: 'Outros Conteúdos' },
  { key: 'agenda', label: 'Agenda' },
  { key: 'reels', label: 'Reels' },
];

export const LABELS = {
  cover: 'Capa',
  description: 'Descrição',
  itinerary: 'Itinerário',
  prices: 'Preços',
  ending: 'Encerramento',
  gallery: 'Galeria',
  agenda: 'Agenda',
  reels: 'Reels',
  outros: 'Outros Conteúdos',
};

export const DEFAULT_DESC =
  'Histórias de vítimas dos horrores da Segunda Guerra Mundial.';

export const initialState = (): PostGeneratorData => ({
  pre: {
    day: '',
    month: 'Agosto',
    title: '',
    description: '',
    stops: ['', '', ''],
    price: '',
    photo: null,
  },
  pos: {
    day: '',
    month: 'Agosto',
    title: '',
    coverPhoto: null,
    coverShape: 'circular',
    gallery: [{ id: 'g1', photo: null }],
  },
  agenda: {
    variant: 'spike',
    month: 'Dezembro',
    items: [
      { date: '', title: '' },
      { date: '', title: '' },
    ],
    photo: null,
  },
  outros: {
    title: '',
    description: '',
    photo: null,
    variant: 'cover',
    showImage: false,
    showDescription: false,
  },
  reels: { title: '', photo: null, showSubtitle: false, subtitle: '' },
});
