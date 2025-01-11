import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';

export const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);
