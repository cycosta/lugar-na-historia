import { useRef, useState } from 'react';

import {
  buildCards,
  validate,
  initialState,
  POST_TYPES,
  PostType,
  PostGeneratorData,
} from '../../data';
import { captureZip, slugify } from '../../utils';

import { PostGeneratorContext } from './PostGeneratorContext';
import { PostGeneratorProviderProps } from './PostGeneratorContext.types';

export const PostGeneratorProvider = ({
  children,
}: PostGeneratorProviderProps) => {
  const [type, setType] = useState<PostType>('pre');
  const [data, setData] = useState<PostGeneratorData>(initialState());
  const [exporting, setExporting] = useState(false);
  const offscreenRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cards = buildCards(type, data);
  const validation = validate(type, data);
  const typeLabel = POST_TYPES.find((t) => t.key === type)?.label ?? '';

  const updateTypeData = <K extends PostType>(
    t: K,
    patch: Partial<PostGeneratorData[K]>,
  ) => {
    setData((prev) => ({ ...prev, [t]: { ...prev[t], ...patch } }));
  };

  const handleExport = async () => {
    if (!validation.valid || exporting) return;
    setExporting(true);
    try {
      const nodes = offscreenRefs.current.slice(0, cards.length);
      const filenames = cards.map(
        (c, i) => `${slugify(typeLabel)}-${i + 1}-${slugify(c.label)}.jpg`,
      );
      await captureZip(
        nodes,
        filenames,
        `${slugify(typeLabel)}-lugar-na-historia.zip`,
      );
    } catch (err) {
      console.error(err);
      alert('Não foi possível exportar. Tente novamente.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <PostGeneratorContext.Provider
      value={{
        type,
        setType,
        data,
        updateTypeData,
        cards,
        validation,
        typeLabel,
        exporting,
        handleExport,
        offscreenRefs,
      }}
    >
      {children}
    </PostGeneratorContext.Provider>
  );
};
