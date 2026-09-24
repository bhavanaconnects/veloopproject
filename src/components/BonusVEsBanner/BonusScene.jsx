import { ClipboardCheck, Users, TrendingUp } from 'lucide-react';
import useSvgId from '../RewardArt/useSvgId';
import { VECoin } from '../RewardArt';
import styles from './BonusVEsBanner.module.css';

const ICONS = { checkin: ClipboardCheck, invite: Users, tasks: TrendingUp };
const RING_R = 78;
const RING_C = 2 * Math.PI * RING_R;

/**
 * Activities → bonus meter → more VEs.
 * `done` is how many activities are ticked; the ring fills with it.
 */
export default function BonusScene({ activities, done }) {
  const id = useSvgId('bs');
  const progress = done / activities.length;

  return (
    <svg viewBox="0 0 660 420" width="100%" height="100%" aria-hidden="true" className={styles.scene}>
      <defs>
        <linearGradient id={`${id}card`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2c3468" stopOpacity="0.75" />
          <stop offset="1" stopColor="#1b2048" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id={`${id}gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe3a6" />
          <stop offset="1" stopColor="#c9974a" />
        </linearGradient>
        <radialGradient id={`${id}disc`} cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#262b57" />
          <stop offset="1" stopColor="#12152f" />
        </radialGradient>
        <linearGradient id={`${id}beam`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ffd98f" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffd98f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}ped`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a4070" />
          <stop offset="1" stopColor="#151833" />
        </linearGradient>
        <linearGradient id={`${id}vault`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#343a66" />
          <stop offset="1" stopColor="#161a36" />
        </linearGradient>
        <radialGradient id={`${id}inside`} cx="45%" cy="50%" r="60%">
          <stop offset="0" stopColor="#6b4b18" />
          <stop offset="1" stopColor="#1d1609" />
        </radialGradient>
        <linearGradient id={`${id}blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7d9bff" />
          <stop offset="1" stopColor="#3d58d6" />
        </linearGradient>
        <marker id={`${id}arrow`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#8fa9ff" />
        </marker>
      </defs>

      {/* activity cards */}
      {activities.map((a, i) => {
        const y = 92 + i * 88;
        const Icon = ICONS[a.icon];
        const ticked = i < done;
        return (
          <g key={a.id} className={styles.activity} data-ticked={ticked}>
            <rect x="8" y={y} width="230" height="72" rx="14" fill={`url(#${id}card)`} stroke="#9db6ff" strokeOpacity="0.22" />
            <rect x="22" y={y + 17} width="38" height="38" rx="10" fill="#2f3a7a" />
            <Icon x={29} y={y + 24} width={24} height={24} color="#b7c7ff" strokeWidth={1.8} />
            <text x="74" y={y + 32} className={styles.actTitle}>{a.title}</text>
            <text x="74" y={y + 52} className={styles.actHint}>{a.hint}</text>
            <g className={styles.tick} style={{ transformOrigin: `212px ${y + 36}px` }}>
              <circle cx="212" cy={y + 36} r="13" fill={`url(#${id}blue)`} />
              <path d={`M205 ${y + 36} l5 5 l9 -10`} fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path
              className={styles.flowLine}
              d={`M246 ${y + 36} C 290 ${y + 36}, 300 ${140 + (i - 1) * 26}, ${338 + Math.abs(i - 1) * 4} ${140 + (i - 1) * 30}`}
              fill="none"
              stroke="#8fa9ff"
              strokeWidth="2"
              markerEnd={`url(#${id}arrow)`}
            />
          </g>
        );
      })}

      {/* bonus meter */}
      <circle cx="430" cy="140" r="98" fill="#6b83ff" opacity="0.07" />
      <circle cx="430" cy="140" r={RING_R} fill="none" stroke="#3a3f6e" strokeWidth="12" strokeDasharray="22 6" />
      <circle
        className={styles.ring}
        cx="430" cy="140" r={RING_R}
        fill="none"
        stroke={`url(#${id}gold)`}
        strokeWidth="12"
        strokeDasharray={RING_C}
        strokeDashoffset={RING_C * (1 - progress)}
        transform="rotate(-90 430 140)"
      />
      <circle cx="430" cy="140" r="64" fill={`url(#${id}disc)`} stroke="#fbe3a6" strokeOpacity="0.25" />
      <text x="430" y="128" textAnchor="middle" className={styles.meterLabel}>BONUS</text>
      <text x="430" y="170" textAnchor="middle" className={styles.meterValue} fill={`url(#${id}gold)`}>VE</text>

      {/* plus badge */}
      <path d="M500 84 L528 56" stroke="#8fa9ff" strokeOpacity="0.6" strokeWidth="2" />
      <g className={styles.plus}>
        <circle cx="542" cy="42" r="30" fill="#5b82f0" opacity="0.12" />
        <circle cx="542" cy="42" r="21" fill={`url(#${id}blue)`} stroke="#c3d1ff" strokeOpacity="0.6" />
        <path d="M542 32 v20 M532 42 h20" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      </g>

      {/* pedestal + rising coin */}
      <polygon points="392,352 468,352 452,250 408,250" fill={`url(#${id}beam)`} opacity="0.55" />
      <ellipse cx="430" cy="356" rx="80" ry="16" fill="#ffd98f" opacity="0.18" />
      <path d="M352 356 L352 392 Q352 404 366 404 L494 404 Q508 404 508 392 L508 356 Z" fill={`url(#${id}ped)`} stroke="#4b5294" />
      <ellipse cx="430" cy="356" rx="78" ry="15" fill="#2a2f5c" stroke="#ffd98f" strokeOpacity="0.55" />
      <rect x="420" y="384" width="20" height="4" rx="2" fill="#7d9bff" />
      <g className={styles.heroCoin}>
        <VECoin x={384} y={242} width={92} height={92} size={92} />
      </g>

      {/* vault with VE coins */}
      <g className={styles.vault}>
        <rect x="530" y="178" width="124" height="176" rx="16" fill={`url(#${id}vault)`} stroke="#4a5190" />
        <circle cx="584" cy="266" r="50" fill={`url(#${id}inside)`} stroke="#8c6428" strokeWidth="3" />
        <VECoin x={552} y={262} width={40} height={40} size={40} />
        <VECoin x={580} y={276} width={38} height={38} size={38} />
        <VECoin x={560} y={228} width={34} height={34} size={34} />
        <VECoin x={592} y={240} width={32} height={32} size={32} />
        {/* open door */}
        <path d="M634 206 Q 668 214 668 266 Q 668 318 634 326 Z" fill="#262b52" stroke="#6c73b8" strokeOpacity="0.6" />
        <circle cx="652" cy="266" r="11" fill="none" stroke="#c9974a" strokeWidth="3" />
        <path d="M652 255 v22 M641 266 h22" stroke="#c9974a" strokeWidth="2" />
      </g>

      {/* loose coins */}
      <g className={`${styles.looseCoin} ${styles.lc1}`}><VECoin x={596} y={-4} width={48} height={48} size={48} /></g>
      <g className={`${styles.looseCoin} ${styles.lc2}`}><VECoin x={590} y={362} width={46} height={46} size={46} /></g>
      <g className={`${styles.looseCoin} ${styles.lc3}`}><VECoin x={262} y={352} width={42} height={42} size={42} /></g>
    </svg>
  );
}
