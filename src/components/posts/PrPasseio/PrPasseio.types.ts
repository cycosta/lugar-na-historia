import { CSSProperties } from 'react';

export interface PrPasseioProps {
  className?: string;
  style?: CSSProperties;
  itinerary1?: boolean;
  itinerary3?: boolean;
  itinerary2?: boolean;
  itinerary4?: boolean;
  type?: 'cover' | 'description' | 'itinerary' | 'prices' | 'ending';
  /** Text content; defaults to "PASSEIO • 20 DE AGOSTO". */
  text1?: string;
  /** Text content; defaults to "Memorial vítimas". */
  text2?: string;
  /** Text content; defaults to "do holocausto". */
  text3?: string;
  /** Text content; defaults to "Middle 3". */
  text4?: string;
}
