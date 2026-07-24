import { createContext } from 'react';

import { initialState } from '../../data';

import { PostGeneratorContextProps } from './PostGeneratorContext.types';

export const PostGeneratorContext = createContext<PostGeneratorContextProps>({
  type: 'pre',
  setType: () => {},
  data: initialState(),
  updateTypeData: () => {},
  cards: [],
  validation: { valid: false, missing: [] },
  typeLabel: '',
  exporting: false,
  handleExport: async () => {},
  offscreenRefs: { current: [] },
});
