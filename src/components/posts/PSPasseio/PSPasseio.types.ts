import { CSSProperties } from 'react';

export interface PSPasseioProps {
  className?: string;
  style?: CSSProperties;
  step?: 'cover 1' | 'cover 2' | 'gallery' | 'ending';
  /** Text content; defaults to "Memorial Vítimas do Holocausto". */
  text1?: string;
  /** Text content; defaults to "20 de Agosto". */
  text2?: string;
}
