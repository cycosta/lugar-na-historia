import React from 'react';

import { LugarNaHistRia } from '../LugarNaHistRia';

import { PSPasseioProps } from './PSPasseio.types';
// figma node: 1:124 Pós Passeio (4 variants)
const __venc_PSPasseio = (v: unknown) =>
  String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PSPasseio = (p: PSPasseioProps) =>
  'step=' + __venc_PSPasseio(p.step);
export const PSPasseio: React.FC<PSPasseioProps> = (_p = {}) => {
  const props = {
    ..._p,
    step: _p.step ?? 'cover 1',
  };
  const __body0 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          height: 1350,
          backgroundColor: 'rgb(0,0,0)',
          display: 'flex',
          flexDirection: 'column',
          padding: '171px 40px 49px 40px',
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
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            flexGrow: 1,
            alignSelf: 'stretch',
          },
        },
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'relative',
            borderRadius: 580,
            flexGrow: 1,
            alignSelf: 'stretch',
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            height: 122,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            flexShrink: 0,
            alignSelf: 'stretch',
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
              flex: '1 1 auto',
              minWidth: 0,
              paddingRight: 32,
              boxSizing: 'border-box',
            },
          },
          /*#__PURE__*/ React.createElement(
            'span',
            {
              style: {
                position: 'relative',
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontSize: 28,
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
                lineHeight: '120%',
                textBox: 'trim-both cap alphabetic',
                color: 'rgb(245,245,245)',
                flexShrink: 0,
              },
            },
            props.text1 ?? 'São João Marcos',
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
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontSize: 28,
                textAlign: 'right',
                whiteSpace: 'nowrap',
                lineHeight: '100%',
                textBox: 'trim-both cap alphabetic',
                color: 'rgb(245,245,245)',
                flexShrink: 0,
              },
            },
            props.text2 ?? '27 de Abril',
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
          backgroundColor: 'rgb(0,0,0)',
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
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            height: 1182,
            display: 'flex',
            flexDirection: 'column',
            gap: 9.999913215637207,
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            flexShrink: 0,
            alignSelf: 'stretch',
          },
        },
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'relative',
            flexGrow: 1,
            alignSelf: 'stretch',
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            height: 70,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'nowrap',
            flexShrink: 0,
            alignSelf: 'stretch',
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
              flex: '1 1 auto',
              minWidth: 0,
              paddingRight: 32,
              boxSizing: 'border-box',
            },
          },
          /*#__PURE__*/ React.createElement(
            'span',
            {
              style: {
                position: 'relative',
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontSize: 28,
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
                lineHeight: '120%',
                textBox: 'trim-both cap alphabetic',
                color: 'rgb(245,245,245)',
                flexShrink: 0,
              },
            },
            props.text1 ?? 'São João Marcos',
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
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontSize: 28,
                textAlign: 'right',
                whiteSpace: 'nowrap',
                lineHeight: '100%',
                textBox: 'trim-both cap alphabetic',
                color: 'rgb(245,245,245)',
                flexShrink: 0,
              },
            },
            props.text2 ?? '27 de Abril',
          ),
        ),
      ),
    );
  const __body2 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          overflow: 'hidden',
          backgroundColor: 'rgb(0,0,0)',
          display: 'flex',
          flexDirection: 'column',
          gap: 250,
          padding: '49px 40px 49px 40px',
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
            width: 1080,
            height: 672,
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'absolute',
            left: 498,
            top: 242,
            width: 543,
            height: 1064,
            backgroundColor: 'rgb(44,225,122)',
          },
        }),
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'absolute',
            left: 498,
            top: -49,
            width: 543,
            height: 131,
            backgroundColor: 'rgb(255,13,13)',
          },
        }),
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'absolute',
            left: -42,
            top: -49,
            width: 540,
            height: 611,
            backgroundColor: 'rgb(53,108,252)',
          },
        }),
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'absolute',
            left: -42,
            top: 562,
            width: 540,
            height: 744,
            backgroundColor: 'rgb(0,0,0)',
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            width: 489,
            height: 330,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            justifyContent: 'flex-end',
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
              width: 243,
              height: 89,
              flexShrink: 0,
            },
          },
          /*#__PURE__*/ React.createElement(LugarNaHistRia, {
            style: {
              transform: 'scale(0.702, 0.704)',
              transformOrigin: '0 0',
            },
            light: 'on',
          }),
        ),
      ),
    );
  const __impls: Record<string, () => JSX.Element> = {
    // figma: Step=Cover 1
    'step=cover 1': __body0,
    // figma: Step=Cover 2
    'step=cover 2': __body0,
    // figma: Step=Gallery
    'step=gallery': __body1,
    // figma: Step=Ending
    'step=ending': __body2,
  };
  return (__impls[__vkey_PSPasseio(props)] ?? __body0)();
};
