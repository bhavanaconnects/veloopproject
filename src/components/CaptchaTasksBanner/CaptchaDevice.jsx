import { useMemo } from 'react';
import useSvgId from '../RewardArt/useSvgId';

/**
 * The captcha "device": screen with a noisy captcha image, answer field and
 * verify button, standing on a keyboard base. Pure SVG, sized by its parent.
 */
export default function CaptchaDevice({ code, typed, verified }) {
  const id = useSvgId('cd');

  // a stable-looking but code-dependent tilt per character
  const glyphs = useMemo(
    () =>
      code.split('').map((ch, i) => ({
        ch,
        x: 222 + i * 56,
        rot: [(-8), 6, (-4), 9, (-6), 5][i % 6],
        dy: [0, -4, 3, -2, 4, -3][i % 6],
      })),
    [code],
  );

  const keys = [];
  for (let r = 0; r < 4; r += 1) {
    const count = r === 3 ? 1 : 11 - r;
    const w = r === 3 ? 150 : 24;
    const rowWidth = count * w + (count - 1) * 6;
    const start = 320 - rowWidth / 2;
    for (let k = 0; k < count; k += 1) {
      keys.push(<rect key={`${r}-${k}`} x={start + k * (w + 6)} y={286 + r * 15} width={w} height={11} rx={3} fill="#34305a" />);
    }
  }

  return (
    <svg viewBox="0 0 640 420" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`${id}screen`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2650" />
          <stop offset="1" stopColor="#181631" />
        </linearGradient>
        <linearGradient id={`${id}rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a08cff" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#5b44c8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#a08cff" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={`${id}base`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2849" />
          <stop offset="1" stopColor="#15142a" />
        </linearGradient>
        <linearGradient id={`${id}paper`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e7e2f3" />
          <stop offset="1" stopColor="#c9c2de" />
        </linearGradient>
        <linearGradient id={`${id}btn`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8f7bff" />
          <stop offset="1" stopColor="#5a45d6" />
        </linearGradient>
        <radialGradient id={`${id}halo`} cx="50%" cy="40%" r="55%">
          <stop offset="0" stopColor="#7b5cf0" stopOpacity="0.45" />
          <stop offset="1" stopColor="#7b5cf0" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}noise`} width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="4" r="0.9" fill="#6b6385" opacity="0.5" />
          <circle cx="10" cy="9" r="0.7" fill="#6b6385" opacity="0.4" />
          <path d="M0 12 L5 10" stroke="#8a82a3" strokeWidth="0.6" opacity="0.5" />
        </pattern>
        <clipPath id={`${id}clip`}>
          <rect x="196" y="52" width="248" height="92" rx="10" />
        </clipPath>
      </defs>

      {/* glow behind the screen */}
      <ellipse cx="320" cy="150" rx="250" ry="130" fill={`url(#${id}halo)`} />

      {/* base slab */}
      <path d="M58 318 Q58 298 80 296 L560 296 Q582 298 582 318 L582 350 Q582 372 560 374 L80 374 Q58 372 58 350 Z" fill="#100f22" />
      <path d="M62 312 Q62 292 84 290 L556 290 Q578 292 578 312 L578 338 Q578 358 556 360 L84 360 Q62 358 62 338 Z" fill={`url(#${id}base)`} stroke="#4b4380" strokeOpacity="0.6" />
      <rect x="470" y="352" width="30" height="4" rx="2" fill="#8f7bff" opacity="0.9" />

      {/* keyboard */}
      <rect x="170" y="276" width="300" height="72" rx="12" fill="#221f3f" stroke="#3d3770" />
      {keys}

      {/* screen */}
      <rect x="168" y="22" width="304" height="238" rx="26" fill={`url(#${id}screen)`} />
      <rect x="168" y="22" width="304" height="238" rx="26" fill="none" stroke={`url(#${id}rim)`} strokeWidth="2.5" />

      {/* captcha image */}
      <g clipPath={`url(#${id}clip)`}>
        <rect x="196" y="52" width="248" height="92" fill={`url(#${id}paper)`} />
        <rect x="196" y="52" width="248" height="92" fill={`url(#${id}noise)`} />
        <path d="M196 112 C 250 86, 300 132, 350 104 S 420 92, 444 116" stroke="#4a4360" strokeWidth="1.6" fill="none" opacity="0.7" />
        <path d="M196 88 C 260 110, 320 70, 380 96 S 430 110, 444 84" stroke="#4a4360" strokeWidth="1" fill="none" opacity="0.5" />
        {glyphs.map((g) => (
          <text
            key={`${g.ch}-${g.x}`}
            x={g.x}
            y={116 + g.dy}
            textAnchor="middle"
            fontFamily="Plus Jakarta Sans Variable, system-ui, sans-serif"
            fontSize="48"
            fontWeight="600"
            fill="#1d1a2b"
            transform={`rotate(${g.rot} ${g.x} ${100 + g.dy})`}
          >
            {g.ch}
          </text>
        ))}
      </g>
      <rect x="196" y="52" width="248" height="92" rx="10" fill="none" stroke="#fff" strokeOpacity="0.25" />

      {/* answer field */}
      <rect x="196" y="166" width="190" height="46" rx="11" fill="#12112a" stroke={verified ? '#8f7bff' : '#433c78'} strokeWidth="1.5" />
      <text x="214" y="196" fontFamily="Plus Jakarta Sans Variable, system-ui, sans-serif" fontSize="20" fontWeight="600" fill="#ecebff" letterSpacing="1">
        {typed}
      </text>
      {!verified && (
        <rect x={218 + typed.length * 14.5} y="178" width="2" height="22" fill="#cfc6ff">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      )}

      {/* verify button */}
      <rect x="398" y="166" width="46" height="46" rx="11" fill={`url(#${id}btn)`} opacity={verified ? 1 : 0.55} />
      <path d="M410 190 L418 198 L433 181" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity={verified ? 1 : 0.6} />
      {verified && <rect x="394" y="162" width="54" height="54" rx="14" fill="none" stroke="#b9a6ff" strokeOpacity="0.6" strokeWidth="2" />}

      {/* motion swoosh that the gems ride on */}
      <path d="M470 40 C 560 20, 610 70, 560 120" fill="none" stroke="#8f7bff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
      <path d="M478 56 C 548 44, 588 80, 552 118" fill="none" stroke="#8f7bff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
