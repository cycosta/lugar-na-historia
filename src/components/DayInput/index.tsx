import { ChangeEvent } from 'react';

import { StyledInput } from '../TextInput/TextInput.styles';

import { DayInputProps } from './DayInput.types';

export const DayInput = ({
  value,
  onChange,
  placeholder = '27',
}: DayInputProps) => (
  <StyledInput
    type="number"
    min="1"
    max="31"
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      let v = e.target.value;
      if (v !== '') v = String(Math.max(1, Math.min(31, parseInt(v, 10) || 1)));
      onChange(v);
    }}
    placeholder={placeholder}
  />
);
