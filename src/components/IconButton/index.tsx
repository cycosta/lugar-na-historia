import { IconButtonProps } from './IconButton.types';
import { StyledButton } from './IconButton.styles';

export const IconButton = ({
  onClick,
  title,
  children,
  disabled,
}: IconButtonProps) => (
  <StyledButton
    type="button"
    onClick={onClick}
    title={title}
    disabled={disabled}
    $disabled={disabled}
  >
    {children}
  </StyledButton>
);
