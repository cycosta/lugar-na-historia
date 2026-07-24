export enum IconType {
  ARROW_UP = 'arrow-up',
  ARROW_DOWN = 'arrow-down',
  DUPLICATE = 'duplicate',
  TRASH = 'trash',
  PLUS = 'plus',
}

export interface IconProps {
  type: IconType;
  color?: string;
  width?: string;
  height?: string;
}
