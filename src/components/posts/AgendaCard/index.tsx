import stairsWalk from '../../../assets/photos/stairs-walk.jpg';

import { AgendaCardProps, AgendaItem, AgendaVariant } from './AgendaCard.types';

const AgendaShape = ({ variant }: { variant: AgendaVariant }) => {
  if (variant === 'circle') {
    return (
      <div
        style={{
          position: 'absolute',
          left: 40,
          top: -500,
          width: 1000,
          height: 999,
          borderRadius: 519.5,
          background: 'rgb(44,225,122)',
        }}
      />
    );
  }
  if (variant === 'spike') {
    return (
      <svg
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        fill="none"
        style={{
          position: 'absolute',
          left: 40,
          top: -480,
          width: 1000,
          height: 1000,
        }}
      >
        <path
          d="M 500 0 L 513.323 309.465 L 569.587 4.866 L 539.711 313.174 L 637.819 19.369 L 565.326 320.519 L 703.368 43.227 L 589.669 331.357 L 764.96 75.976 L 612.267 345.478 L 821.394 116.978 L 632.68 362.606 L 871.572 165.435 L 650.51 382.409 L 914.519 220.404 L 665.411 404.5 L 949.397 280.814 L 677.092 428.45 L 975.528 345.492 L 685.326 453.793 L 992.404 413.176 L 689.954 480.035 L 999.695 482.55 L 690.884 506.666 L 997.261 552.264 L 688.098 533.167 L 985.148 620.961 L 681.652 559.022 L 963.592 687.303 L 671.67 583.729 L 933.013 750 L 658.346 606.806 L 894.005 807.831 L 641.941 627.804 L 847.329 859.67 L 622.772 646.314 L 793.893 904.508 L 601.215 661.977 L 734.736 941.474 L 577.687 674.487 L 671.01 969.846 L 552.647 683.601 L 603.956 989.074 L 526.582 689.141 L 534.878 998.782 L 500 691 L 465.122 998.782 L 473.418 689.141 L 396.044 989.074 L 447.353 683.601 L 328.99 969.846 L 422.313 674.487 L 265.264 941.474 L 398.785 661.977 L 206.107 904.508 L 377.228 646.314 L 152.671 859.67 L 358.059 627.804 L 105.995 807.831 L 341.654 606.806 L 66.987 750 L 328.33 583.729 L 36.408 687.303 L 318.348 559.022 L 14.852 620.961 L 311.902 533.167 L 2.739 552.264 L 309.116 506.666 L 0.305 482.55 L 310.046 480.035 L 7.596 413.176 L 314.674 453.793 L 24.472 345.492 L 322.908 428.45 L 50.603 280.814 L 334.589 404.5 L 85.481 220.404 L 349.49 382.409 L 128.428 165.435 L 367.32 362.606 L 178.606 116.978 L 387.733 345.478 L 235.04 75.976 L 410.331 331.357 L 296.632 43.227 L 434.674 320.519 L 362.181 19.369 L 460.289 313.174 L 430.413 4.866 L 486.677 309.465 L 500 0 Z"
          fill="rgb(44,225,122)"
        />
      </svg>
    );
  }
  return null;
};

const AgendaItems = ({ items }: { items: AgendaItem[] }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {items.map((it, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 64,
          alignItems: 'flex-start',
        }}
      >
        <span
          style={{
            width: 174,
            flexShrink: 0,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 50,
            lineHeight: '100%',
            color: 'rgb(245,245,245)',
          }}
        >
          {it.date || '01'}
        </span>
        <span
          style={{
            flex: 1,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 50,
            lineHeight: '100%',
            color: 'rgb(245,245,245)',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
          }}
        >
          {it.title || 'Passeio'}
        </span>
      </div>
    ))}
  </div>
);

export function AgendaCard({
  variant = 'spike',
  month = 'Dezembro',
  items = [],
  photo,
}: AgendaCardProps) {
  const bg = photo || stairsWalk;
  if (variant === 'none') {
    return (
      <div
        style={{
          position: 'relative',
          width: 1080,
          height: 1350,
          overflow: 'hidden',
          background: `url(${bg}) center/cover`,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 40,
            top: 120,
            width: 1000,
            height: 1079,
            borderRadius: 100,
            background: 'rgb(0,0,0)',
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
            padding: '80px 60px',
            justifyContent: 'flex-end',
            boxSizing: 'border-box',
          }}
        >
          <AgendaItems items={items} />
          <div
            style={{
              fontFamily: 'Druk, sans-serif',
              fontWeight: 700,
              fontSize: 180,
              lineHeight: 1,
              textTransform: 'uppercase',
              color: '#fff',
              marginTop: 24,
            }}
          >
            {month}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        position: 'relative',
        width: 1080,
        height: 1350,
        overflow: 'hidden',
        background: 'rgb(0,0,0)',
        boxSizing: 'border-box',
      }}
    >
      <AgendaShape variant={variant} />
      <div
        style={{
          position: 'absolute',
          left: 40,
          right: 40,
          bottom: 189,
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        <AgendaItems items={items} />
        <div
          style={{
            fontFamily: 'Druk, sans-serif',
            fontWeight: 700,
            fontSize: 180,
            lineHeight: 1,
            textTransform: 'uppercase',
            color: '#fff',
          }}
        >
          {month}
        </div>
      </div>
    </div>
  );
}
