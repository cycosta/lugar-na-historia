import { MutableRefObject, ReactNode } from 'react';

import {
  Card,
  PostGeneratorData,
  PostType,
  ValidationResult,
} from '../../data';

export interface PostGeneratorContextProps {
  type: PostType;
  setType: (type: PostType) => void;
  data: PostGeneratorData;
  updateTypeData: <K extends PostType>(
    type: K,
    patch: Partial<PostGeneratorData[K]>,
  ) => void;
  cards: Card[];
  validation: ValidationResult;
  typeLabel: string;
  exporting: boolean;
  handleExport: () => Promise<void>;
  offscreenRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export interface PostGeneratorProviderProps {
  children: ReactNode;
}
