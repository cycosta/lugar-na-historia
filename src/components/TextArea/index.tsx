import { ChangeEvent } from 'react';

import { TextAreaProps } from './TextArea.types';
import { StyledTextArea } from './TextArea.styles';

export const TextArea = ({
  value,
  onChange,
  placeholder,
  rows = 3,
}: TextAreaProps) => (
  <StyledTextArea
    rows={rows}
    value={value}
    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);
