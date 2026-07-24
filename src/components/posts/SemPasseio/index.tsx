import React from 'react';

import { SemPasseioProps } from './SemPasseio.types';
// figma node: 1:157 Sem passeio (3 variants)
const __venc_SemPasseio = (v: unknown) =>
  String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_SemPasseio = (p: SemPasseioProps) =>
  'step=' + __venc_SemPasseio(p.step);
export const SemPasseio: React.FC<SemPasseioProps> = (_p = {}) => {
  const props = {
    ..._p,
    itinerary1: _p.itinerary1 ?? false,
    showStar: _p.showStar ?? true,
    step: _p.step ?? 'cover',
    itinerary2: _p.itinerary2 ?? false,
    itinerary3: _p.itinerary3 ?? false,
    itinerary4: _p.itinerary4 ?? false,
    showCircle: _p.showCircle ?? true,
    showImage: _p.showImage ?? false,
    showDescription: _p.showDescription ?? false,
  };
  const __body0 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          height: 1350,
          backgroundColor: 'rgb(53,108,252)',
          display: 'flex',
          flexDirection: 'column',
          padding: '172px 40px 187px 40px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          boxSizing: 'border-box',
          position: 'relative',
          ...props.style,
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            height: 692,
            display: 'flex',
            flexDirection: 'row',
            padding: '10px 0px 10px 0px',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            boxSizing: 'border-box',
            flexShrink: 0,
            alignSelf: 'stretch',
          },
        },
        props.showDescription &&
          /*#__PURE__*/ React.createElement(
            'div',
            {
              style: {
                position: 'relative',
                width: 1000,
                height: 672,
                display: 'flex',
                flexDirection: 'column',
                gap: 9.999913215637207,
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                flexShrink: 0,
              },
            },
            /*#__PURE__*/ React.createElement(
              'span',
              {
                style: {
                  position: 'relative',
                  width: 820,
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: 70,
                  lineHeight: '100%',
                  textBox: 'trim-both cap alphabetic',
                  color: 'rgb(255,255,255)',
                  flexShrink: 0,
                },
              },
              props.text1 ??
                'Conheça o Memorial às Vítimas do Holocausto. Histórias de vítimas dos horrores da Segunda Guerra Mundial',
            ),
          ),
        props.showImage &&
          /*#__PURE__*/ React.createElement(
            'div',
            {
              style: {
                position: 'relative',
                width: 1017,
                height: 672,
                display: 'flex',
                flexDirection: 'column',
                gap: 9.999913215637207,
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                flexShrink: 0,
              },
            },
            /*#__PURE__*/ React.createElement('div', {
              style: {
                position: 'relative',
                width: 596,
                height: 457,
                borderRadius: 228.5,
                flexShrink: 0,
              },
            }),
          ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            style: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 19.999826431274414,
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
              flexShrink: 0,
            },
          },
          /*#__PURE__*/ React.createElement(
            'span',
            {
              style: {
                position: 'relative',
                fontFamily:
                  'Druk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 700,
                fontSize: 180,
                width: 1000,
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
                lineHeight: '160px',
                textBox: 'trim-both cap alphabetic',
                color: 'rgb(255,255,255)',
                textTransform: 'uppercase',
                flexShrink: 0,
              },
            },
            props.text2 ?? 'Title',
          ),
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            style: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 19.999826431274414,
              alignItems: 'flex-start',
              flexWrap: 'nowrap',
              flexShrink: 0,
            },
          },
          /*#__PURE__*/ React.createElement(
            'span',
            {
              style: {
                position: 'relative',
                fontFamily:
                  'Druk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 700,
                fontSize: 180,
                width: 1000,
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
                lineHeight: '160px',
                textBox: 'trim-both cap alphabetic',
                color: 'rgb(255,255,255)',
                textTransform: 'uppercase',
                flexShrink: 0,
              },
            },
            props.text3 ?? 'Title',
          ),
        ),
      ),
    );
  const __body1 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          height: 1350,
          overflow: 'hidden',
          backgroundColor: 'rgb(53,108,252)',
          display: 'flex',
          flexDirection: 'column',
          padding: '49px 40px 49px 40px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          boxSizing: 'border-box',
          position: 'relative',
          ...props.style,
        },
      },
      /*#__PURE__*/ React.createElement('div', {
        style: {
          position: 'relative',
          height: 831,
          display: 'flex',
          flexDirection: 'column',
          gap: 9.999913215637207,
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          flexShrink: 0,
          alignSelf: 'stretch',
        },
      }),
      props.showCircle &&
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'relative',
            height: 999,
            borderRadius: 519.5,
            backgroundColor: 'rgb(255,13,13)',
            flexShrink: 0,
            alignSelf: 'stretch',
          },
        }),
    );
  const __body2 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          height: 1350,
          overflow: 'hidden',
          backgroundColor: 'rgb(53,108,252)',
          display: 'flex',
          flexDirection: 'column',
          padding: '49px 40px 49px 40px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          boxSizing: 'border-box',
          position: 'relative',
          color: 'rgb(255,13,13)',
          ...props.style,
        },
      },
      /*#__PURE__*/ React.createElement('div', {
        style: {
          position: 'relative',
          height: 831,
          display: 'flex',
          flexDirection: 'column',
          gap: 9.999913215637207,
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          flexShrink: 0,
          alignSelf: 'stretch',
        },
      }),
      props.showStar &&
        /*#__PURE__*/ React.createElement(
          'svg',
          {
            height: 1000,
            viewBox: '0 0 1000 1000',
            fill: 'none',
            style: {
              position: 'relative',
              height: 1000,
              flexShrink: 0,
              alignSelf: 'stretch',
            },
          },
          /*#__PURE__*/ React.createElement('path', {
            d: 'M 500 0 L 517.12 309.786 L 589.278 8.035 L 550.809 315.899 L 675.687 31.883 L 582.864 327.93 L 756.45 70.776 L 612.257 345.492 L 828.969 123.464 L 638.042 368.019 L 890.916 188.255 L 659.389 394.788 L 940.298 263.066 L 675.614 424.939 L 975.528 345.492 L 686.195 457.502 L 995.475 432.883 L 690.791 491.432 L 999.497 522.432 L 689.255 525.636 L 987.464 611.26 L 681.636 559.017 L 959.764 696.513 L 668.179 590.501 L 917.287 775.448 L 649.317 619.076 L 861.397 845.531 L 625.655 643.824 L 793.893 904.508 L 597.955 663.949 L 716.942 950.484 L 567.107 678.805 L 633.018 981.981 L 534.101 687.914 L 544.82 997.987 L 500 690.983 L 455.18 997.987 L 465.899 687.914 L 366.982 981.981 L 432.893 678.805 L 283.058 950.484 L 402.045 663.949 L 206.107 904.508 L 374.345 643.824 L 138.603 845.531 L 350.683 619.076 L 82.713 775.448 L 331.821 590.501 L 40.236 696.513 L 318.364 559.017 L 12.536 611.26 L 310.745 525.636 L 0.503 522.432 L 309.209 491.432 L 4.525 432.883 L 313.805 457.502 L 24.472 345.492 L 324.386 424.939 L 59.702 263.066 L 340.611 394.788 L 109.084 188.255 L 361.958 368.019 L 171.031 123.464 L 387.743 345.492 L 243.55 70.776 L 417.136 327.93 L 324.313 31.883 L 449.191 315.899 L 410.722 8.035 L 482.88 309.786 L 500 0 Z',
            fill: 'currentColor',
            fillRule: 'nonzero',
          }),
        ),
    );
  const __impls: Record<string, () => JSX.Element> = {
    // figma: Step=Cover
    'step=cover': __body0,
    // figma: Step=Circle
    'step=circle': __body1,
    // figma: Step=Spike
    'step=spike': __body2,
  };
  return (__impls[__vkey_SemPasseio(props)] ?? __body0)();
};
