import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledDropdownContainer = styled.div<{ open: boolean }>`
  position: relative;
  display: flex;
  padding: 20px;
  color: ${colors.primary.dark};
  background-color: #fff;
  border-radius: 18px;
  width: 100%;
  max-width: 300px;
  font-size: 14px;
  transition: 0.3s;

  &::after {
    position: absolute;
    top: 45%;
    right: 20px;
    content: '';
    width: 10px;
    height: 10px;
    border-right: 1px solid ${colors.primary.dark};
    border-bottom: 1px solid ${colors.primary.dark};
    transform: rotate(45deg) translateX(-45%);
    transition: 0.2s ease-in-out;

    ${({ open }) =>
      open &&
      `
      transform: rotate(-135deg) translateX(-45%);
    `}
  }
`;

export const StyledList = styled.ul<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 5px;
  overflow: hidden;
  transform: scaleY(0);
  transform-origin: top;
  border-radius: 18px;
  opacity: 0;
  transition: 0.2s ease-in-out;

  ${({ open }) =>
    open &&
    `
    transform: scaleY(1);
		opacity: 1;
  `}
`;

export const StyledItem = styled.li`
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid ${colors.neutral.offWhite};
  transition: 0.3s;

  &:last-of-type {
    border-bottom: 0;
  }

  &:hover {
    background-color: ${colors.neutral.offWhite};
  }
`;
