import { POST_TYPES } from '../../data';

import { TypePickerProps } from './TypePicker.types';
import { StyledWrapper, StyledButton } from './TypePicker.styles';

export const TypePicker = ({ type, onChange }: TypePickerProps) => (
  <StyledWrapper>
    {POST_TYPES.map((t) => (
      <StyledButton
        key={t.key}
        type="button"
        $active={t.key === type}
        onClick={() => onChange(t.key)}
      >
        {t.label}
      </StyledButton>
    ))}
  </StyledWrapper>
);
