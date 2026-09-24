import { useId } from 'react';

/** useId() output contains characters that break url(#id) refs in some browsers. */
export default function useSvgId(prefix) {
  return `${prefix}${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
}
