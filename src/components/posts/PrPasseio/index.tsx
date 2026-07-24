import React from 'react';

import { LugarNaHistRia } from '../LugarNaHistRia';

import { PrPasseioProps } from './PrPasseio.types';
// figma node: 1:46 Pré Passeio (5 variants)
const __venc_PrPasseio = (v: unknown) =>
  String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PrPasseio = (p: PrPasseioProps) =>
  'type=' + __venc_PrPasseio(p.type);
export const PrPasseio: React.FC<PrPasseioProps> = (_p = {}) => {
  const props = {
    ..._p,
    itinerary1: _p.itinerary1 ?? false,
    itinerary3: _p.itinerary3 ?? false,
    itinerary2: _p.itinerary2 ?? false,
    itinerary4: _p.itinerary4 ?? false,
    type: _p.type ?? 'cover',
  };
  const __body0 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          height: 1350,
          backgroundColor: 'rgb(245,245,245)',
          display: 'flex',
          flexDirection: 'column',
          gap: 129,
          padding: '176px 40px 159px 40px',
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
            height: 538,
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
            borderRadius: 106.38627624511719,
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
            gap: 32,
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
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontSize: 28,
                whiteSpace: 'nowrap',
                lineHeight: '100%',
                textBox: 'trim-both cap alphabetic',
                color: 'rgb(0,0,0)',
                flexShrink: 0,
              },
            },
            props.text1 ?? 'PASSEIO • 20 DE AGOSTO',
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
                  color: 'rgb(0,0,0)',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                },
              },
              props.text2 ?? 'Memorial vítimas',
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
                  color: 'rgb(0,0,0)',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                },
              },
              props.text3 ?? 'do holocausto',
            ),
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
            height: 672,
            display: 'flex',
            flexDirection: 'column',
            gap: 9.999913215637207,
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            flexShrink: 0,
            alignSelf: 'stretch',
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
              color: 'rgb(245,245,245)',
              flexShrink: 0,
            },
          },
          props.text1 ??
            'Conheça o Memorial às Vítimas do Holocausto. Histórias de vítimas dos horrores da Segunda Guerra Mundial',
        ),
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
  const __body2 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
          backgroundColor: 'rgb(0,0,0)',
          display: 'flex',
          flexDirection: 'column',
          gap: 250,
          padding: '49px 40px 49px 40px',
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          boxSizing: 'border-box',
          position: 'relative',
          color: 'rgb(255,255,255)',
          ...props.style,
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            height: 672,
            display: 'flex',
            flexDirection: 'column',
            gap: 9.999913215637207,
            alignItems: 'flex-start',
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
              gap: 6,
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
                gap: 7,
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
                  flexDirection: 'row',
                  gap: 40,
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  flexShrink: 0,
                },
              },
              /*#__PURE__*/ React.createElement('div', {
                style: {
                  position: 'relative',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: 'rgb(255,255,255)',
                  flexShrink: 0,
                },
              }),
              /*#__PURE__*/ React.createElement(
                'span',
                {
                  style: {
                    position: 'relative',
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    fontSize: 40,
                    lineHeight: '100%',
                    textBox: 'trim-both cap alphabetic',
                    color: 'rgb(255,255,255)',
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  },
                },
                props.text1 ?? 'First stop',
              ),
            ),
            /*#__PURE__*/ React.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  width: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  padding: '0px 4px 0px 4px',
                  alignItems: 'flex-start',
                  flexWrap: 'nowrap',
                  boxSizing: 'border-box',
                  flexShrink: 0,
                },
              },
              /*#__PURE__*/ React.createElement(
                'svg',
                {
                  width: 88,
                  height: 1,
                  viewBox: '0 -0.500 88 1',
                  fill: 'none',
                  style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: 'matrix(0,1,-1,0,4,0)',
                    transformOrigin: '0 0',
                    width: 88,
                    height: 1,
                  },
                },
                /*#__PURE__*/ React.createElement('path', {
                  d: 'M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z',
                  fill: 'currentColor',
                  fillRule: 'nonzero',
                }),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              style: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 7,
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
                  flexDirection: 'row',
                  gap: 40,
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  flexShrink: 0,
                },
              },
              /*#__PURE__*/ React.createElement('div', {
                style: {
                  position: 'relative',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: 'rgb(255,255,255)',
                  flexShrink: 0,
                },
              }),
              /*#__PURE__*/ React.createElement(
                'span',
                {
                  style: {
                    position: 'relative',
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    fontSize: 40,
                    lineHeight: '100%',
                    textBox: 'trim-both cap alphabetic',
                    color: 'rgb(255,255,255)',
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  },
                },
                props.text2 ?? 'Middle 1',
              ),
            ),
            /*#__PURE__*/ React.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  width: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  padding: '0px 4px 0px 4px',
                  alignItems: 'flex-start',
                  flexWrap: 'nowrap',
                  boxSizing: 'border-box',
                  flexShrink: 0,
                },
              },
              /*#__PURE__*/ React.createElement(
                'svg',
                {
                  width: 88,
                  height: 1,
                  viewBox: '0 -0.500 88 1',
                  fill: 'none',
                  style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: 'matrix(0,1,-1,0,4,0)',
                    transformOrigin: '0 0',
                    width: 88,
                    height: 1,
                  },
                },
                /*#__PURE__*/ React.createElement('path', {
                  d: 'M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z',
                  fill: 'currentColor',
                  fillRule: 'nonzero',
                }),
              ),
            ),
          ),
          props.itinerary1 &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 7,
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
                    flexDirection: 'row',
                    gap: 40,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement('div', {
                  style: {
                    position: 'relative',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: 'rgb(255,255,255)',
                    flexShrink: 0,
                  },
                }),
                /*#__PURE__*/ React.createElement(
                  'span',
                  {
                    style: {
                      position: 'relative',
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                      fontSize: 40,
                      lineHeight: '100%',
                      textBox: 'trim-both cap alphabetic',
                      color: 'rgb(255,255,255)',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    },
                  },
                  props.text3 ?? 'Middle 2',
                ),
              ),
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  style: {
                    position: 'relative',
                    width: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    padding: '0px 4px 0px 4px',
                    alignItems: 'flex-start',
                    flexWrap: 'nowrap',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  'svg',
                  {
                    width: 88,
                    height: 1,
                    viewBox: '0 -0.500 88 1',
                    fill: 'none',
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      transform: 'matrix(0,1,-1,0,4,0)',
                      transformOrigin: '0 0',
                      width: 88,
                      height: 1,
                    },
                  },
                  /*#__PURE__*/ React.createElement('path', {
                    d: 'M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z',
                    fill: 'currentColor',
                    fillRule: 'nonzero',
                  }),
                ),
              ),
            ),
          props.itinerary2 &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 7,
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
                    flexDirection: 'row',
                    gap: 40,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement('div', {
                  style: {
                    position: 'relative',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: 'rgb(255,255,255)',
                    flexShrink: 0,
                  },
                }),
                /*#__PURE__*/ React.createElement(
                  'span',
                  {
                    style: {
                      position: 'relative',
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                      fontSize: 40,
                      lineHeight: '100%',
                      textBox: 'trim-both cap alphabetic',
                      color: 'rgb(255,255,255)',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    },
                  },
                  props.text4 ?? 'Middle 3',
                ),
              ),
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  style: {
                    position: 'relative',
                    width: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    padding: '0px 4px 0px 4px',
                    alignItems: 'flex-start',
                    flexWrap: 'nowrap',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  'svg',
                  {
                    width: 88,
                    height: 1,
                    viewBox: '0 -0.500 88 1',
                    fill: 'none',
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      transform: 'matrix(0,1,-1,0,4,0)',
                      transformOrigin: '0 0',
                      width: 88,
                      height: 1,
                    },
                  },
                  /*#__PURE__*/ React.createElement('path', {
                    d: 'M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z',
                    fill: 'currentColor',
                    fillRule: 'nonzero',
                  }),
                ),
              ),
            ),
          props.itinerary3 &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 7,
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
                    flexDirection: 'row',
                    gap: 40,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement('div', {
                  style: {
                    position: 'relative',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: 'rgb(255,255,255)',
                    flexShrink: 0,
                  },
                }),
                /*#__PURE__*/ React.createElement(
                  'span',
                  {
                    style: {
                      position: 'relative',
                      width: 940,
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                      fontSize: 40,
                      lineHeight: '100%',
                      textBox: 'trim-both cap alphabetic',
                      color: 'rgb(255,255,255)',
                      flexShrink: 0,
                    },
                  },
                  'Middle 4',
                ),
              ),
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  style: {
                    position: 'relative',
                    width: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    padding: '0px 4px 0px 4px',
                    alignItems: 'flex-start',
                    flexWrap: 'nowrap',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  'svg',
                  {
                    width: 88,
                    height: 1,
                    viewBox: '0 -0.500 88 1',
                    fill: 'none',
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      transform: 'matrix(0,1,-1,0,4,0)',
                      transformOrigin: '0 0',
                      width: 88,
                      height: 1,
                    },
                  },
                  /*#__PURE__*/ React.createElement('path', {
                    d: 'M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z',
                    fill: 'currentColor',
                    fillRule: 'nonzero',
                  }),
                ),
              ),
            ),
          props.itinerary4 &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 7,
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
                    flexDirection: 'row',
                    gap: 40,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement('div', {
                  style: {
                    position: 'relative',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: 'rgb(255,255,255)',
                    flexShrink: 0,
                  },
                }),
                /*#__PURE__*/ React.createElement(
                  'span',
                  {
                    style: {
                      position: 'relative',
                      width: 940,
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                      fontSize: 40,
                      lineHeight: '100%',
                      textBox: 'trim-both cap alphabetic',
                      color: 'rgb(255,255,255)',
                      flexShrink: 0,
                    },
                  },
                  'Middle 5',
                ),
              ),
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  style: {
                    position: 'relative',
                    width: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    padding: '0px 4px 0px 4px',
                    alignItems: 'flex-start',
                    flexWrap: 'nowrap',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                  },
                },
                /*#__PURE__*/ React.createElement(
                  'svg',
                  {
                    width: 88,
                    height: 1,
                    viewBox: '0 -0.500 88 1',
                    fill: 'none',
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      transform: 'matrix(0,1,-1,0,4,0)',
                      transformOrigin: '0 0',
                      width: 88,
                      height: 1,
                    },
                  },
                  /*#__PURE__*/ React.createElement('path', {
                    d: 'M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z',
                    fill: 'currentColor',
                    fillRule: 'nonzero',
                  }),
                ),
              ),
            ),
        ),
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
  const __body3 = () =>
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: props.className,
        style: {
          width: 1080,
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
            height: 672,
            display: 'flex',
            flexDirection: 'column',
            gap: 9.999913215637207,
            alignItems: 'flex-start',
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
                  whiteSpace: 'nowrap',
                  lineHeight: '100%',
                  textBox: 'trim-both cap alphabetic',
                  color: 'rgb(245,245,245)',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                },
              },
              props.text1 ?? '20 de agosto',
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
                  whiteSpace: 'nowrap',
                  lineHeight: '100%',
                  textBox: 'trim-both cap alphabetic',
                  color: 'rgb(245,245,245)',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                },
              },
              props.text2 ?? 'R$ 55,00',
            ),
          ),
        ),
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
  const __body4 = () =>
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
            width: 546,
            height: 1059,
            backgroundColor: 'rgb(44,225,122)',
          },
        }),
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'absolute',
            left: 498,
            top: -48,
            width: 540,
            height: 130,
            backgroundColor: 'rgb(255,13,13)',
          },
        }),
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'absolute',
            left: -42,
            top: -48,
            width: 540,
            height: 610,
            backgroundColor: 'rgb(53,108,252)',
          },
        }),
        /*#__PURE__*/ React.createElement('div', {
          style: {
            position: 'absolute',
            left: -42,
            top: 562,
            width: 540,
            height: 739,
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
    // figma: Type=Cover
    'type=cover': __body0,
    // figma: Type=Description
    'type=description': __body1,
    // figma: Type=Itinerary
    'type=itinerary': __body2,
    // figma: Type=Prices
    'type=prices': __body3,
    // figma: Type=Ending
    'type=ending': __body4,
  };
  return (__impls[__vkey_PrPasseio(props)] ?? __body0)();
};
