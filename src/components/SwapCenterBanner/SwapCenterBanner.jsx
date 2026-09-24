import { useState } from 'react';
import { ChevronRight, RefreshCw } from 'lucide-react';
import BannerShell from '../BannerShell/BannerShell';
import CTAButton from '../CTAButton/CTAButton';
import CurrencyCard from './CurrencyCard';
import { swapData } from '../../utils/bannerData';
import { ROUTES } from '../../utils/routes';
import styles from './SwapCenterBanner.module.css';

function FlowArrows() {
  // gold arrows stream in from the left (VE side), blue from the right (SVE side)
  return (
    <svg className={styles.arrows} viewBox="0 0 640 400" preserveAspectRatio="none" aria-hidden="true">
      <g className={styles.goldArrows}>
        {[150, 196, 232, 300].map((y, i) => (
          <g key={y} style={{ animationDelay: `${-i * 0.45}s` }}>
            <line x1={-10 + i * 6} y1={y} x2={46 + i * 4} y2={y} />
            <polyline points={`${38 + i * 4},${y - 6} ${46 + i * 4},${y} ${38 + i * 4},${y + 6}`} />
          </g>
        ))}
      </g>
      <g className={styles.blueArrows}>
        {[120, 206, 250, 318].map((y, i) => (
          <g key={y} style={{ animationDelay: `${-i * 0.5}s` }}>
            <line x1={650 - i * 6} y1={y} x2={596 - i * 4} y2={y} />
            <polyline points={`${604 - i * 4},${y - 6} ${596 - i * 4},${y} ${604 - i * 4},${y + 6}`} />
          </g>
        ))}
      </g>
      <g className={styles.orbits}>
        <ellipse cx="330" cy="372" rx="250" ry="26" />
        <ellipse cx="330" cy="372" rx="170" ry="17" />
        <ellipse cx="330" cy="372" rx="90" ry="9" />
      </g>
    </svg>
  );
}

export default function SwapCenterBanner() {
  const [flipped, setFlipped] = useState(false);
  const from = flipped ? swapData.to : swapData.from;
  const to = flipped ? swapData.from : swapData.to;

  return (
    <BannerShell id="swap-center" labelledBy="swap-title" theme="blue">
      <div className={styles.layout}>
        <div className={styles.content}>
          <h2 id="swap-title" className={styles.title}>
            <span className={styles.titleGold}>Swap</span> Center
          </h2>
          <span className={styles.divider} aria-hidden="true" />
          <p className={styles.copy}>
            Convert eligible reward balances between supported currencies.
          </p>
          <CTAButton to={ROUTES.swap} variant="gold" trailing={<ChevronRight size={20} strokeWidth={2.6} />}>
            Open Swap Center
          </CTAButton>
        </div>

        <figure className={styles.art}>
          <figcaption className="visually-hidden">
            A reward wallet converting between the VE and SVE reward currencies.
          </figcaption>
          <div className={styles.stage} data-flipped={flipped}>
            <FlowArrows />

            <div className={styles.phone} aria-hidden="true">
              <div className={styles.phoneTop}>
                <span>Reward wallet</span>
                <span className={styles.dots}>•••</span>
              </div>
              <span className={styles.phoneLabel}>Eligible balances</span>
              <div className={styles.row}><i className={styles.dotBlue} /><b /><em /></div>
              <div className={styles.row}><i className={styles.dotGold} /><b /><em /></div>
              <div className={styles.phoneBottom}>
                <div className={styles.row}><i className={styles.dotGold} /><b className={styles.barGold} /><span className={styles.arrowRight}>→</span></div>
                <div className={styles.row}><i className={styles.dotBlue} /><b className={styles.barBlue} /><span className={styles.arrowLeft}>←</span></div>
              </div>
            </div>

            <CurrencyCard {...swapData.from} position={flipped ? 'right' : 'left'} />
            <CurrencyCard {...swapData.to} position={flipped ? 'left' : 'right'} />

            <button
              type="button"
              className={styles.swapButton}
              onClick={() => setFlipped((f) => !f)}
              aria-label={`Preview swap direction. Currently ${from.code} to ${to.code}. Press to reverse.`}
            >
              <span className={styles.swapRing} aria-hidden="true" />
              <RefreshCw className={styles.swapIcon} aria-hidden="true" strokeWidth={2.6} />
            </button>
          </div>
          <p className={styles.direction} aria-live="polite">
            <span className={styles[`dir_${from.tone}`]}>{from.code}</span>
            <span aria-hidden="true">→</span>
            <span className="visually-hidden">to</span>
            <span className={styles[`dir_${to.tone}`]}>{to.code}</span>
          </p>
        </figure>
      </div>
    </BannerShell>
  );
}
