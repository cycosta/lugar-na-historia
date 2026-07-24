import { DependencyList, RefObject, useLayoutEffect } from 'react';

export const useClampTitle = (
  ref: RefObject<HTMLDivElement>,
  clampTitle: boolean | undefined,
  deps: DependencyList,
) => {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || !clampTitle) return;

    const spans = [...root.querySelectorAll<HTMLSpanElement>('span')].filter(
      (el) => parseInt(el.style.fontSize) === 180,
    );

    if (spans[0]) {
      Object.assign(spans[0].style, {
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        lineHeight: '0.9',
        paddingTop: '10px',
        paddingBottom: '14px',
        marginTop: '-10px',
        marginBottom: '-14px',
      });
    }

    if (spans[1]) {
      const empty = !spans[1].textContent || !spans[1].textContent.trim();
      const wrap = spans[1].closest<HTMLElement>('div');
      if (empty && wrap) wrap.style.display = 'none';
    }
  }, deps);
};
