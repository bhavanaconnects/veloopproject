import ReferEarnBanner from '../components/ReferEarnBanner/ReferEarnBanner';
import SwapCenterBanner from '../components/SwapCenterBanner/SwapCenterBanner';
import BonusVEsBanner from '../components/BonusVEsBanner/BonusVEsBanner';
import CaptchaTasksBanner from '../components/CaptchaTasksBanner/CaptchaTasksBanner';
import ExchangeCenterBanner from '../components/ExchangeCenterBanner/ExchangeCenterBanner';
import styles from './RewardsPage.module.css';

export default function RewardsPage() {
  return (
    <div className={`container-xl ${styles.page}`}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>Rewards</h1>
        <p className={styles.lede}>Ways to earn, boost, swap and exchange your VELOOP rewards.</p>
      </div>
      <div className={styles.stack}>
        <ReferEarnBanner />
        <SwapCenterBanner />
        <BonusVEsBanner />
        <CaptchaTasksBanner />
        <ExchangeCenterBanner />
      </div>
    </div>
  );
}
