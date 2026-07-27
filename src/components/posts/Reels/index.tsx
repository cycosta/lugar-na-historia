import React from 'react';

import '../../fig-assets.css';

import { ReelsProps } from './Reels.types';
// figma node: 1:191 Reels (2 variants)
const __venc_Reels = (v: unknown) =>
  String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Reels = (p: ReelsProps) =>
  'imageFull=' + __venc_Reels(p.imageFull);
export const Reels: React.FC<ReelsProps> = (_p = {}) => {
  const props = {
    ..._p,
    imageFull: _p.imageFull ?? 'off',
  };
  const __body0 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          height: 1920,
          backgroundColor: 'rgb(0,0,0)',
          display: 'flex',
          flexDirection: 'column',
          padding: '451px 40px 49px 40px',
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
            height: 1008,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            flexShrink: 0,
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
            props.text2 ?? '',
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
          height: 1920,
          overflow: 'hidden',
          backgroundColor: 'rgb(0,0,0)',
          position: 'relative',
          ...props.style,
        },
      },
      /*#__PURE__*/ React.createElement('div', {
        className: 'fig-asset-4161505e3e1b5b2e',
        style: {
          position: 'absolute',
          left: -100,
          top: 0,
          width: 1280,
          height: 1920,
        },
      }),
      /*#__PURE__*/ React.createElement('div', {
        className: 'fig-asset-4161505e3e1b5b2e',
        style: {
          position: 'absolute',
          left: -100,
          top: 0,
          width: 1280,
          height: 1920,
        },
      }),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            left: 40,
            top: 1156,
            boxShadow: 'inset 0 0 0 1px rgb(0,0,0)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
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
            props.text2 ?? '',
          ),
        ),
      ),
    );
  const __impls: Record<string, () => JSX.Element> = {
    // figma: Image Full=Off
    'imageFull=off': __body0,
    // figma: Image Full=On
    'imageFull=on': __body1,
  };
  return (__impls[__vkey_Reels(props)] ?? __body0)();
};
