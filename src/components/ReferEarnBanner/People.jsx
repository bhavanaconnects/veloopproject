import useSvgId from '../RewardArt/useSvgId';

/** Friendly half-body characters for the Refer & Earn scene. */
export function Inviter({ className }) {
  const id = useSvgId('boy');
  return (
    <svg viewBox="0 0 220 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}h`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4b63e0" />
          <stop offset="1" stopColor="#27329a" />
        </linearGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c29c" />
          <stop offset="1" stopColor="#d99b73" />
        </linearGradient>
      </defs>
      {/* torso */}
      <path d="M36 260 L38 176 Q40 132 100 126 Q160 132 164 176 L166 260 Z" fill={`url(#${id}h)`} />
      <path d="M72 132 Q100 156 128 132 Q118 150 100 152 Q82 150 72 132 Z" fill="#1f2878" />
      <path d="M92 150 L90 196 M108 150 L110 196" stroke="#c9d3ff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      {/* neck + head */}
      <rect x="89" y="104" width="22" height="30" rx="8" fill="#d99b73" />
      <ellipse cx="62" cy="80" rx="8" ry="11" fill="#e3ab84" />
      <ellipse cx="138" cy="80" rx="8" ry="11" fill="#e3ab84" />
      <ellipse cx="100" cy="76" rx="38" ry="42" fill={`url(#${id}s)`} />
      {/* hair */}
      <path d="M60 74 Q54 26 100 28 Q150 24 142 72 Q136 52 122 54 Q120 40 106 48 Q96 34 86 50 Q70 44 60 74 Z" fill="#1d1a36" />
      <path d="M76 38 Q92 18 118 30" stroke="#35305e" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* face */}
      <path d="M76 66 Q86 60 94 66 M106 66 Q114 60 124 66" stroke="#3a2418" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="86" cy="80" rx="4.5" ry="5.5" fill="#2a1a12" />
      <ellipse cx="114" cy="80" rx="4.5" ry="5.5" fill="#2a1a12" />
      <circle cx="87.5" cy="78" r="1.4" fill="#fff" />
      <circle cx="115.5" cy="78" r="1.4" fill="#fff" />
      <path d="M86 96 Q100 112 114 96 Q100 102 86 96 Z" fill="#7a2f2a" />
      <path d="M89 97 Q100 101 111 97" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="76" cy="94" rx="6" ry="3.5" fill="#f08a7a" opacity="0.35" />
      <ellipse cx="124" cy="94" rx="6" ry="3.5" fill="#f08a7a" opacity="0.35" />
      {/* arm pointing toward the gift */}
      <path d="M150 150 Q176 140 196 118" stroke={`url(#${id}h)`} strokeWidth="26" strokeLinecap="round" fill="none" />
      <circle cx="199" cy="114" r="11" fill="#e3ab84" />
      <path d="M204 108 L216 96" stroke="#e3ab84" strokeWidth="7" strokeLinecap="round" />
      {/* arm holding phone */}
      <path d="M52 170 Q60 206 96 206" stroke={`url(#${id}h)`} strokeWidth="26" strokeLinecap="round" fill="none" />
      <rect x="98" y="176" width="26" height="44" rx="6" transform="rotate(12 111 198)" fill="#141733" stroke="#8ea6ff" strokeWidth="2" />
      <rect x="102" y="182" width="18" height="30" rx="3" transform="rotate(12 111 198)" fill="#3e5bd6" opacity="0.8" />
      <circle cx="104" cy="208" r="10" fill="#e3ab84" />
    </svg>
  );
}

export function Friend({ className }) {
  const id = useSvgId('girl');
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}t`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9b7bf0" />
          <stop offset="1" stopColor="#5e3fc2" />
        </linearGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0c09a" />
          <stop offset="1" stopColor="#d5976f" />
        </linearGradient>
      </defs>
      {/* hair behind */}
      <path d="M52 80 Q46 20 100 22 Q156 22 150 84 L156 170 Q130 184 112 168 L88 168 Q66 184 44 170 Z" fill="#241c38" />
      {/* torso */}
      <path d="M30 260 L34 180 Q38 138 100 132 Q162 138 166 180 L170 260 Z" fill={`url(#${id}t)`} />
      <path d="M80 136 Q100 152 120 136" stroke="#4a2fa8" strokeWidth="4" fill="none" />
      {/* neck + head */}
      <rect x="90" y="108" width="20" height="30" rx="8" fill="#d5976f" />
      <ellipse cx="100" cy="80" rx="36" ry="40" fill={`url(#${id}s)`} />
      {/* fringe */}
      <path d="M62 78 Q60 36 100 36 Q140 36 138 78 Q126 52 104 50 Q82 56 62 78 Z" fill="#241c38" />
      {/* face */}
      <path d="M78 70 Q86 65 94 70 M106 70 Q114 65 122 70" stroke="#3a2418" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <ellipse cx="86" cy="84" rx="4.3" ry="5.3" fill="#2a1a12" />
      <ellipse cx="114" cy="84" rx="4.3" ry="5.3" fill="#2a1a12" />
      <circle cx="87.4" cy="82" r="1.3" fill="#fff" />
      <circle cx="115.4" cy="82" r="1.3" fill="#fff" />
      <path d="M88 100 Q100 112 112 100 Q100 104 88 100 Z" fill="#7a2f2a" />
      <path d="M91 101 Q100 104 109 101" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="76" cy="96" rx="6" ry="3.5" fill="#f08a7a" opacity="0.35" />
      <ellipse cx="124" cy="96" rx="6" ry="3.5" fill="#f08a7a" opacity="0.35" />
      {/* hands with phone */}
      <path d="M150 176 Q144 212 108 212" stroke={`url(#${id}t)`} strokeWidth="24" strokeLinecap="round" fill="none" />
      <path d="M46 180 Q52 212 84 214" stroke={`url(#${id}t)`} strokeWidth="24" strokeLinecap="round" fill="none" />
      <rect x="80" y="172" width="28" height="46" rx="6" transform="rotate(-14 94 195)" fill="#141733" stroke="#b9a6ff" strokeWidth="2" />
      <rect x="84" y="178" width="20" height="32" rx="3" transform="rotate(-14 94 195)" fill="#7a5ad8" opacity="0.85" />
      <circle cx="86" cy="212" r="10" fill="#e0a680" />
      <circle cx="110" cy="210" r="10" fill="#e0a680" />
    </svg>
  );
}
