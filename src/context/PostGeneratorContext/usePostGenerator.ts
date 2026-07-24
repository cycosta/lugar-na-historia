import { useContext } from 'react';

import { PostGeneratorContext } from './PostGeneratorContext';

export const usePostGenerator = () => useContext(PostGeneratorContext);
