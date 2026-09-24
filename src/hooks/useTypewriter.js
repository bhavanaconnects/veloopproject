import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

/**
 * Types `text` one character at a time once `start` is true.
 * Returns the visible string and whether typing finished.
 * Changing `text` restarts the typing.
 */
export default function useTypewriter(text, { start = true, speed = 170, delay = 400 } = {}) {
  const reduced = usePrefersReducedMotion();
  // progress is stored with the text it belongs to, so a new text starts at 0
  const [progress, setProgress] = useState({ text, count: 0 });
  const count = progress.text === text ? progress.count : 0;

  useEffect(() => {
    if (!start || reduced || count >= text.length) return undefined;
    const id = setTimeout(
      () => setProgress({ text, count: count + 1 }),
      count === 0 ? delay : speed,
    );
    return () => clearTimeout(id);
  }, [start, count, text, speed, delay, reduced]);

  const shown = reduced && start ? text.length : count;
  return { typed: text.slice(0, shown), done: shown >= text.length };
}
