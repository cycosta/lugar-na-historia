import { ReactNode } from 'react';

import { IconType, IconProps } from './Icon.types';

export const Icon = ({
  type,
  color = 'currentColor',
  width = '12',
  height = '12',
}: IconProps) => {
  const svgTypeMap: {
    [key in IconType]: { viewbox: string; content: ReactNode };
  } = {
    [IconType.ARROW_UP]: {
      viewbox: '0 0 12 12',
      content: (
        <path
          d="M2 7l4-4 4 4"
          stroke={color}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    [IconType.ARROW_DOWN]: {
      viewbox: '0 0 12 12',
      content: (
        <path
          d="M2 5l4 4 4-4"
          stroke={color}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    [IconType.DUPLICATE]: {
      viewbox: '0 0 12 12',
      content: (
        <>
          <rect
            x="1"
            y="1"
            width="7"
            height="7"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <rect
            x="4"
            y="4"
            width="7"
            height="7"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
        </>
      ),
    },
    [IconType.TRASH]: {
      viewbox: '0 0 12 12',
      content: (
        <path
          d="M2 3h8M4 3V2h4v1M3 3l.6 7h4.8L9 3"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    [IconType.PLUS]: {
      viewbox: '0 0 12 12',
      content: (
        <path
          d="M6 1v10M1 6h10"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      ),
    },
  };

  const { viewbox, content } = svgTypeMap[type];

  return (
    <svg width={width} height={height} viewBox={viewbox}>
      {content}
    </svg>
  );
};
