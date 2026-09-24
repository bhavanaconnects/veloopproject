import useSvgId from './useSvgId';

/** Blue "V" token used around the Refer & Earn illustration. */
export default function VToken({ size = 56, className, style, ...rest }) {
  const id = useSvgId('vt');
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} {...rest} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b9c9ff" />
          <stop offset="0.5" stopColor="#6b5be0" />
          <stop offset="1" stopColor="#9fb4ff" />
        </linearGradient>
        <radialGradient id={`${id}f`} cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#3f5fd6" />
          <stop offset="1" stopColor="#1c1f6b" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="47" fill={`url(#${id}r)`} />
      <circle cx="50" cy="50" r="39" fill={`url(#${id}f)`} />
      <path d="M33 32 L50 70 L67 32" fill="none" stroke="#dfe7ff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="36" cy="24" rx="14" ry="5" fill="#fff" opacity="0.2" transform="rotate(-25 36 24)" />
    </svg>
  );
}
