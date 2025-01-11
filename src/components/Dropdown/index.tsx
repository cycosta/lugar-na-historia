import { useState } from 'react';

import { DropdownProps } from './Dropdown.types';
import {
  StyledDropdownContainer,
  StyledList,
  StyledItem,
} from './Dropdown.styles';

export const Dropdown = ({ options }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <StyledDropdownContainer open={open} onClick={() => setOpen(!open)}>
      {selected || 'Selecione um estilo'}
      <StyledList open={open}>
        {options.map((option) => (
          <StyledItem
            key={option}
            onClick={() => {
              setSelected(option);
              setOpen(false);
            }}
          >
            {option}
          </StyledItem>
        ))}
      </StyledList>
    </StyledDropdownContainer>
  );
};
