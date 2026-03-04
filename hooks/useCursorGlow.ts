import { useEffect, useRef } from 'react';

/**
 * Tracks mouse position within a container and updates --mouse-x / --mouse-y
 * CSS custom properties on each child matching `cardSelector`.
 * Used to drive the `.card-glow::before` radial gradient effect.
 */
export function useCursorGlow<T extends HTMLElement = HTMLElement>(
  cardSelector = '.card-glow'
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(cardSelector);
      if (!target || !container.contains(target)) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      target.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    container.addEventListener('mousemove', onMouseMove);
    return () => container.removeEventListener('mousemove', onMouseMove);
  }, [cardSelector]);

  return containerRef;
}
