import useSvgId from './useSvgId';

/** Gold VE coin. Decorative by default; pass `title` to expose it to screen readers. */
export default function VECoin({ size = 64, title, className, style, ...rest }) {
  const id = useSvgId('ve');
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true };
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} {...rest} {...a11y}>
      <defs>
        <radialGradient id={`${id}f`} cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#fff1c8" />
          <stop offset="0.45" stopColor="#e8bd6c" />
          <stop offset="1" stopColor="#9a6a26" />
        </radialGradient>
        <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe6a8" />
          <stop offset="0.5" stopColor="#b98434" />
          <stop offset="1" stopColor="#f2d08a" />
        </linearGradient>
        <linearGradient id={`${id}t`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff4d6" />
          <stop offset="1" stopColor="#c99140" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#${id}r)`} />
      <circle cx="50" cy="50" r="41" fill={`url(#${id}f)`} />
      <circle cx="50" cy="50" r="41" fill="none" stroke="#8a5d1f" strokeOpacity="0.45" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="#fff3cf" strokeOpacity="0.35" strokeWidth="1" />
      <text
        x="50" y="62" textAnchor="middle"
        fontFamily="Plus Jakarta Sans Variable, system-ui, sans-serif"
        fontSize="34" fontWeight="800" fontStyle="italic"
        fill="#7a4f15" stroke={`url(#${id}t)`} strokeWidth="0.8"
      >VE</text>
      <ellipse cx="36" cy="24" rx="16" ry="6" fill="#fff" opacity="0.28" transform="rotate(-25 36 24)" />
    </svg>
  );
}
