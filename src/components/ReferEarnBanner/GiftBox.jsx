import useSvgId from '../RewardArt/useSvgId';

export default function GiftBox({ className }) {
  const id = useSvgId('gift');
  return (
    <svg viewBox="0 0 200 170" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b5fe0" />
          <stop offset="1" stopColor="#2c2c9a" />
        </linearGradient>
        <linearGradient id={`${id}l`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7478f0" />
          <stop offset="1" stopColor="#4a4cc8" />
        </linearGradient>
        <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe3a6" />
          <stop offset="1" stopColor="#c9974a" />
        </linearGradient>
      </defs>
      <rect x="28" y="72" width="144" height="94" rx="8" fill={`url(#${id}b)`} />
      <rect x="20" y="52" width="160" height="30" rx="7" fill={`url(#${id}l)`} />
      <rect x="88" y="52" width="24" height="114" fill={`url(#${id}r)`} />
      <rect x="28" y="82" width="144" height="6" fill="#1d1f6e" opacity="0.5" />
      {/* bow */}
      <path d="M100 54 C 70 20, 36 30, 52 50 C 60 60, 84 58, 100 54 Z" fill={`url(#${id}r)`} />
      <path d="M100 54 C 130 20, 164 30, 148 50 C 140 60, 116 58, 100 54 Z" fill={`url(#${id}r)`} />
      <path d="M100 54 C 80 36, 60 38, 62 46" stroke="#8c6428" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M100 54 C 120 36, 140 38, 138 46" stroke="#8c6428" strokeWidth="2" fill="none" opacity="0.6" />
      <ellipse cx="100" cy="54" rx="11" ry="9" fill="#e9c37e" />
    </svg>
  );
}
