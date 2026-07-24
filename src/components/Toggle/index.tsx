import { ChangeEvent } from 'react';

import { ToggleProps } from './Toggle.types';
import { StyledLabel, StyledCheckbox } from './Toggle.styles';

export const Toggle = ({ label, checked, onChange }: ToggleProps) => (
  <StyledLabel>
    <StyledCheckbox
      type="checkbox"
      checked={checked}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.checked)
      }
    />
    {label}
  </StyledLabel>
);
