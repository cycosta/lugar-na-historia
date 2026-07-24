import { ReactNode } from 'react';

export interface AddButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}
