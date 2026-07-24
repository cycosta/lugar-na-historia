import { fontFamily } from '../../../tokens';

import { OverlayProps } from './Overlay.types';

export const Overlay = ({ overlay, w }: OverlayProps) => {
  if (!overlay) return null;

  if (overlay.kind === 'description') {
    return (
      <div
        style={{
          position: 'absolute',
          left: 40,
          top: 172,
          width: w - 80,
          fontFamily: fontFamily.body,
          fontWeight: 500,
          fontSize: 44,
          lineHeight: 1.15,
          color: '#fff',
          pointerEvents: 'none',
        }}
      >
        {overlay.text}
      </div>
    );
  }

  if (overlay.kind === 'subtitle') {
    return (
      <div
        style={{
          position: 'absolute',
          left: 40,
          top: 1156 - 32 - 36,
          width: w - 80,
          fontFamily: fontFamily.body,
          fontWeight: 400,
          fontSize: 32,
          letterSpacing: 1,
          lineHeight: 1,
          color: 'rgba(255,255,255,.92)',
          pointerEvents: 'none',
        }}
      >
        {overlay.text}
      </div>
    );
  }

  return null;
};
