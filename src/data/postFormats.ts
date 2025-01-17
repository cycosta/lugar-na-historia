import { PostFormat } from '../enums';

export const postFormats: {
  format: PostFormat;
  label: string;
}[] = [
  {
    format: PostFormat.FEED,
    label: 'Feed',
  },
  {
    format: PostFormat.STORY,
    label: 'Story',
  },
  {
    format: PostFormat.REELS,
    label: 'Reels',
  },
];
