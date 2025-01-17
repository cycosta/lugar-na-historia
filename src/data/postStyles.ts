import { PostStyle } from '../enums';

export const postStyles: {
  style: PostStyle;
  label: string;
}[] = [
  { style: PostStyle.PRE_PASSEIO, label: 'Pré passeio' },
  { style: PostStyle.POS_PASSEIO, label: 'Pós Passeio' },
  { style: PostStyle.GENERICO, label: 'Genérico' },
  { style: PostStyle.AGENDA, label: 'Agenda' },
];
