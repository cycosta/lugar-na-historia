import { ChangeEvent } from 'react';

import { SelectProps, SelectOption } from './Select.types';
import { StyledSelect } from './Select.styles';

export const Select = ({ value, onChange, options }: SelectProps) => {
  const normalized: SelectOption[] = options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o,
  );

  return (
    <StyledSelect
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
    >
      {normalized.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </StyledSelect>
  );
};
