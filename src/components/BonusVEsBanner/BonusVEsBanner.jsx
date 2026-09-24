import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BannerShell from '../BannerShell/BannerShell';
import { useBanner } from '../BannerShell/BannerContext';
import CTAButton from '../CTAButton/CTAButton';
import BonusScene from './BonusScene';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { bonusData } from '../../utils/bannerData';
import { ROUTES } from '../../utils/routes';
import styles from './BonusVEsBanner.module.css';

function BonusContent() {
  const { inView } = useBanner();
  const reduced = usePrefersReducedMotion();
  const total = bonusData.activities.length;
  const [ticked, setTicked] = useState(0);

  // tick the activities one by one; the bonus meter fills with each tick
  useEffect(() => {
    if (!inView || reduced || ticked >= total) return undefined;
    const t = setTimeout(() => setTicked((d) => d + 1), ticked === 0 ? 700 : 650);
    return () => clearTimeout(t);
  }, [inView, ticked, total, reduced]);

  // reduced motion: show everything completed, no sequence
  const done = reduced && inView ? total : ticked;

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <h2 id="bonus-title" className={styles.title}>
          <span>Boost Your</span>
          <span className={styles.titleGold}>VE Balance</span>
        </h2>
        <span className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.chevrons}>›››</span>
        </span>
        <p className={styles.copy}>
          Complete eligible activities and unlock additional VEs through special bonus opportunities.
        </p>
        <CTAButton to={ROUTES.bonus} variant="goldPill" trailing={<ArrowRight size={20} strokeWidth={2.4} />}>
          Explore bonuses
        </CTAButton>
      </div>

      <figure className={styles.art}>
        <figcaption className="visually-hidden">
          Daily check-in, inviting friends and completing tasks feed a bonus meter that adds extra VEs to your balance.
        </figcaption>
        <div className={styles.canvas}>
          <BonusScene activities={bonusData.activities} done={done} />
        </div>
      </figure>
    </div>
  );
}

export default function BonusVEsBanner() {
  return (
    <BannerShell id="bonus-ves" labelledBy="bonus-title" theme="blue">
      <BonusContent />
    </BannerShell>
  );
}
