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
  'São João Marcos foi a única cidade no Brasil a ser tombada pelo Iphan e depois destombada e demolida a marretas nos anos 1940 para fornecimento de energia e água à capital.';

export const ITINERARY_EXAMPLES = [
  'Ruínas do Antigo Povoado do Saco',
  'Mirante Imperial',
  'Cachoeira dos Escravizados',
  'Parque Arqueológico e Ambiental de São João Marcos',
];

export const AGENDA_EXAMPLES = [
  { date: '08', title: 'São João Marcos' },
  { date: '15', title: 'Memorial Vítimas do Holocausto' },
  { date: '22', title: 'Ruínas Históricas de Nova Iguaçu' },
];

export const initialState = (): PostGeneratorData => ({
  pre: {
    day: '',
    month: 'Abril',
    title: '',
    description: '',
    stops: ['', '', ''],
    price: '',
    photo: null,
  },
  pos: {
    day: '',
    month: 'Abril',
    title: '',
    coverPhoto: null,
    coverShape: 'circular',
    gallery: [{ id: 'g1', photo: null }],
  },
  agenda: {
    variant: 'spike',
    month: 'Abril',
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
