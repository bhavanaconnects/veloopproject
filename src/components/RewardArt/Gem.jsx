import useSvgId from './useSvgId';

/**
 * Violet Gem.
 * shape="faceted" — rounded multi-face gem (Captcha design)
 * shape="diamond" — brilliant-cut diamond (Exchange design)
 */
export default function Gem({ size = 64, shape = 'faceted', title, className, style, ...rest }) {
  const id = useSvgId('gem');
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true };
  const light = `url(#${id}l)`;
  const mid = `url(#${id}m)`;
  const dark = `url(#${id}d)`;

  const defs = (
    <defs>
      <linearGradient id={`${id}l`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#e6dcff" />
        <stop offset="1" stopColor="#a58cf6" />
      </linearGradient>
      <linearGradient id={`${id}m`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#a48af5" />
        <stop offset="1" stopColor="#6f50dc" />
      </linearGradient>
      <linearGradient id={`${id}d`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#6a4ad6" />
        <stop offset="1" stopColor="#3b2596" />
      </linearGradient>
    </defs>
  );

  if (shape === 'diamond') {
    return (
      <svg viewBox="0 0 100 92" width={size} height={size * 0.92} className={className} style={style} {...rest} {...a11y}>
        {defs}
        <g stroke="#f3eeff" strokeOpacity="0.35" strokeWidth="0.8" strokeLinejoin="round">
          <polygon points="4,32 22,8 36,32" fill={mid} />
          <polygon points="22,8 50,8 36,32" fill={light} />
          <polygon points="36,32 50,8 64,32" fill="#efe9ff" />
          <polygon points="50,8 78,8 64,32" fill={light} />
          <polygon points="96,32 78,8 64,32" fill={mid} />
          <polygon points="4,32 36,32 50,88" fill={mid} />
          <polygon points="36,32 64,32 50,88" fill={light} />
          <polygon points="64,32 96,32 50,88" fill={dark} />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} {...rest} {...a11y}>
      {defs}
      <g stroke="#f3eeff" strokeOpacity="0.3" strokeWidth="0.8" strokeLinejoin="round">
        <polygon points="50,4 90,27 50,30" fill={light} />
        <polygon points="50,4 50,30 10,27" fill="#e2d8ff" />
        <polygon points="90,27 74,66 50,30" fill={mid} />
        <polygon points="90,27 90,73 74,66" fill={dark} />
        <polygon points="90,73 50,96 74,66" fill={dark} />
        <polygon points="50,96 26,66 74,66" fill={mid} />
        <polygon points="50,96 10,73 26,66" fill={dark} />
        <polygon points="10,73 10,27 26,66" fill={mid} />
        <polygon points="10,27 50,30 26,66" fill={light} />
        <polygon points="50,30 74,66 26,66" fill="#c7b6ff" />
      </g>
    </svg>
  );
}
