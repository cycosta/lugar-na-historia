import { CSSProperties } from 'react';

export interface SemPasseioProps {
  className?: string;
  style?: CSSProperties;
  itinerary1?: boolean;
  showStar?: boolean;
  step?: 'cover' | 'circle' | 'spike';
  itinerary2?: boolean;
  itinerary3?: boolean;
  itinerary4?: boolean;
  showCircle?: boolean;
  showImage?: boolean;
  showDescription?: boolean;
  /** Text content; defaults to "Conheça o Memorial às Vítimas do Holocausto. Histórias de vítimas dos horrores da Segunda Guerra Mundial". */
  text1?: string;
  /** Text content; defaults to "Title". */
  text2?: string;
  /** Text content; defaults to "Title". */
  text3?: string;
}
