import { DependencyList, RefObject, useLayoutEffect } from 'react';

import saoJoaoMarcosRuins from '../assets/photos/sao-joao-marcos-ruins.jpg';

export const useInjectPhoto = (
  ref: RefObject<HTMLDivElement>,
  photo: string | null | undefined,
  coverShape: string | undefined,
  needsPhoto: boolean | undefined,
  deps: DependencyList,
) => {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || !needsPhoto) return;
    const url = photo || saoJoaoMarcosRuins;

    root
      .querySelectorAll<HTMLDivElement>('[data-pg-photo-slot]')
      .forEach((el) => {
        el.style.background = `url(${url}) center/cover`;
        if (!coverShape) return;

        el.style.width = '';
        el.style.height = '';
        el.style.flexGrow = '1';
        el.style.alignSelf = 'stretch';
        const parent = el.parentElement;
        if (!parent) return;

        if (coverShape === 'circular') {
          parent.style.alignItems = 'center';
          const size =
            Math.min(el.offsetWidth, el.offsetHeight) || el.offsetWidth;
          el.style.width = size + 'px';
          el.style.height = size + 'px';
          el.style.flexGrow = '0';
          el.style.alignSelf = 'center';
          el.style.borderRadius = '50%';
        } else {
          parent.style.alignItems = 'flex-start';
          const r = Math.round(el.offsetWidth / 2);
          el.style.borderRadius = r + 'px ' + r + 'px 0 0';
        }
      });
  }, deps);
};
