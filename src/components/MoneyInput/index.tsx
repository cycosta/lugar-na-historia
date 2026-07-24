import { ChangeEvent } from 'react';

import { StyledInput } from '../TextInput/TextInput.styles';
import { formatBRL } from '../../utils';

import { MoneyInputProps } from './MoneyInput.types';

export const MoneyInput = ({ value, onChange }: MoneyInputProps) => (
  <StyledInput
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      onChange(formatBRL(e.target.value))
    }
    placeholder="R$ 0,00"
  />
);
