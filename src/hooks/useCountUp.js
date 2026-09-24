import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

/** Animates a number from 0 to `target` once `start` becomes true. */
export default function useCountUp(target, { start = true, duration = 1200 } = {}) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || reduced) return undefined;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, reduced]);

  // reduced motion: show the final number straight away
  if (reduced) return start ? target : 0;
  return value;
}
