import { DependencyList, RefObject, useLayoutEffect } from 'react';

export const useItineraryFix = (
  ref: RefObject<HTMLDivElement>,
  active: boolean | undefined,
  deps: DependencyList,
) => {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || !active) return;

    try {
      const dots = [...root.querySelectorAll<HTMLDivElement>('div')].filter(
        (el) =>
          el.style.width === '10px' &&
          el.style.height === '10px' &&
          el.style.borderRadius === '50%',
      );
      if (!dots.length) return;

      const stopGroups = dots
        .map((d) => d.parentElement?.parentElement)
        .filter((el): el is HTMLElement => Boolean(el));
      const container = stopGroups[0]?.parentElement;
      if (!container) return;

      container.style.gap = '24px';
      root.querySelectorAll<SVGElement>('svg').forEach((svg) => {
        svg.style.display = 'none';
      });
      [...container.querySelectorAll(':scope > .pg-connector')].forEach((n) =>
        n.remove(),
      );

      for (let i = 0; i < stopGroups.length - 1; i++) {
        const line = document.createElement('div');
        line.className = 'pg-connector';
        line.style.width = '2px';
        line.style.height = '32px';
        line.style.marginLeft = '4px';
        line.style.background = 'rgba(255,255,255,.35)';
        line.style.flexShrink = '0';
        container.insertBefore(line, stopGroups[i + 1]);
      }

      [...root.querySelectorAll<HTMLSpanElement>('span')]
        .filter((el) => parseInt(el.style.fontSize) === 40)
        .forEach((el) => {
          el.style.fontWeight = '400';
        });
    } catch {
      // best-effort DOM patch on materialized markup; skip on shape mismatch
    }
  }, deps);
};
