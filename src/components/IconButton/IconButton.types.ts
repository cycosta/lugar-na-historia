import { ReactNode } from 'react';

export interface IconButtonProps {
  onClick: () => void;
  title?: string;
  disabled?: boolean;
  children: ReactNode;
}
