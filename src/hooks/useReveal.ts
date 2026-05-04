'use client';

import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container element.
 * All `.reveal` children inside become visible when they enter the viewport.
 *
 * Usage:
 *   const ref = useReveal();
 *   <section ref={ref}>
 *     <div className="reveal">...</div>
 *   </section>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>('.reveal');
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    items.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref as React.RefObject<HTMLElement>;
}
