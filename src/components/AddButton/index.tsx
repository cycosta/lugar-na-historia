import { Icon } from '../Icon';
import { IconType } from '../Icon/Icon.types';

import { AddButtonProps } from './AddButton.types';
import { StyledButton } from './AddButton.styles';

export const AddButton = ({ onClick, disabled, children }: AddButtonProps) => (
  <StyledButton
    type="button"
    onClick={onClick}
    disabled={disabled}
    $disabled={disabled}
  >
    <Icon type={IconType.PLUS} />
    {children}
  </StyledButton>
);
