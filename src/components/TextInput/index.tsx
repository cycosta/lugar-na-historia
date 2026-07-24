import { ChangeEvent } from 'react';

import { TextInputProps } from './TextInput.types';
import { StyledInput } from './TextInput.styles';

export const TextInput = ({ value, onChange, placeholder }: TextInputProps) => (
  <StyledInput
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);
