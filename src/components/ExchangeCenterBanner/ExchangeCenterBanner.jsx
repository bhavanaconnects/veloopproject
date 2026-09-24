import { useEffect, useState } from 'react';
import { ArrowLeftRight, Check, ChevronsRight } from 'lucide-react';
import BannerShell from '../BannerShell/BannerShell';
import { useBanner } from '../BannerShell/BannerContext';
import CTAButton from '../CTAButton/CTAButton';
import FlowSteps from '../FlowSteps/FlowSteps';
import { Gem, VECoin } from '../RewardArt';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { ROUTES } from '../../utils/routes';
import styles from './ExchangeCenterBanner.module.css';

function ExchangeContent() {
  const { inView } = useBanner();
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(-1);

  // Gem → convert → VE: light each step in turn, then show the "received" check
  useEffect(() => {
    if (!inView || reduced || step >= 2) return undefined;
    const t = setTimeout(() => setStep((s) => s + 1), step < 0 ? 300 : 700);
    return () => clearTimeout(t);
  }, [inView, step, reduced]);

  const stage = reduced && inView ? 2 : step;

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <h2 id="exchange-title" className={styles.title}>
          <span className={styles.line}>Convert <span className={styles.violet}>Gems</span></span>{' '}
          <span className={styles.line}>to <span className={styles.gold}>VEs</span></span>
        </h2>
        <p className={styles.copy}>Exchange eligible Gems into VEs and grow your VE balance.</p>
        <CTAButton to={ROUTES.exchange} variant="gold" className={styles.cta}>
          Open Exchange Center
        </CTAButton>
        <FlowSteps
          className={styles.flow}
          shape="round"
          label="How an exchange works"
          active={stage}
          steps={[
            { key: 'gem', label: 'Gem', captionClass: styles.capViolet, node: <Gem shape="diamond" size={34} /> },
            { key: 'convert', label: 'Convert', node: <ArrowLeftRight className={styles.convertIcon} size={26} strokeWidth={2.2} /> },
            { key: 've', label: 'VE', captionClass: styles.capGold, node: <VECoin size={40} /> },
          ]}
        />
      </div>

      <figure className={styles.art} data-stage={stage}>
        <figcaption className="visually-hidden">
          Gems flow from your Gem balance through the exchange and arrive as VEs in your VE balance.
        </figcaption>
        <div className={styles.stage}>
          <div className={styles.gemCard} aria-hidden="true">
            <span className={styles.cardLabel}>Gem</span>
            <Gem shape="diamond" className={styles.bigGem} size={120} />
          </div>

          <div className={styles.stream} aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Gem key={i} shape="diamond" size={20} className={styles.particle} style={{ animationDelay: `${i * 0.55}s`, '--lane': `${[-18, 10, -4, 20, -12][i]}%` }} />
            ))}
          </div>

          <div className={styles.convert} aria-hidden="true">
            <ArrowLeftRight className={styles.convertGlyph} strokeWidth={2.4} />
          </div>
          <span className={styles.bigArrow} aria-hidden="true" />

          <div className={styles.veCard} aria-hidden="true">
            <span className={styles.cardLabel}>VE</span>
            <VECoin className={styles.bigCoin} size={130} />
            <span className={styles.received}><Check strokeWidth={3} /></span>
          </div>

          <div className={styles.rate} aria-hidden="true">
            <span className={styles.rateLabel}>Exchange rate</span>
            <span className={styles.rateRow}>
              <Gem shape="diamond" size={22} />
              <ChevronsRight className={styles.rateChevrons} />
              <VECoin size={24} />
            </span>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default function ExchangeCenterBanner() {
  return (
    <BannerShell id="exchange-center" labelledBy="exchange-title" theme="exchange">
      <ExchangeContent />
    </BannerShell>
  );
}
