import { OverlayProps } from './Overlay.types';
import { StyledDescription, StyledSubtitle } from './Overlay.styles';

export const Overlay = ({ overlay, w }: OverlayProps) => {
  if (!overlay) return null;

  if (overlay.kind === 'description') {
    return <StyledDescription $w={w}>{overlay.text}</StyledDescription>;
  }

  if (overlay.kind === 'subtitle') {
    return <StyledSubtitle $w={w}>{overlay.text}</StyledSubtitle>;
  }

  return null;
};
