import { FieldProps } from './Field.types';
import { StyledField, StyledLabel } from './Field.styles';

export const Field = ({ label, children }: FieldProps) => (
  <StyledField>
    <StyledLabel>{label}</StyledLabel>
    {children}
  </StyledField>
);
