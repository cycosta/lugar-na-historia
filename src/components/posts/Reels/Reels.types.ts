import { CSSProperties } from 'react';

export interface ReelsProps {
  className?: string;
  style?: CSSProperties;
  imageFull?: 'off' | 'on';
  /** Text content; defaults to "Conrado". */
  text1?: string;
  /** Text content; defaults to "Miguel Pereira". */
  text2?: string;
}
