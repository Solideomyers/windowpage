import { useCallback } from 'react';
import { animate } from 'framer-motion';

export const useSmoothScroll = () => {
  const handleSmoothScroll = useCallback((id: string) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const scrollToPosition = targetElement.offsetTop;
    const startPosition = window.scrollY || window.pageYOffset;
    const duration = 1.8;

    const isFixed = window.getComputedStyle(targetElement).position === 'fixed';
    const offset = isFixed ? 0 : scrollToPosition;

    animate(startPosition, offset, {
      duration,
      ease: [0.42, 0, 0.58, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }, []);

  return { handleSmoothScroll };
};
