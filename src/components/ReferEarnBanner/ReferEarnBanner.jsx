import { useCallback, useEffect, useState } from 'react';
import { ArrowRight, Check, Copy, Gift, ShieldCheck, Share2, Trophy, UserPlus, Users, Zap } from 'lucide-react';
import BannerShell from '../BannerShell/BannerShell';
import { useBanner } from '../BannerShell/BannerContext';
import CTAButton from '../CTAButton/CTAButton';
import { VECoin, VToken } from '../RewardArt';
import { Inviter, Friend } from './People';
import GiftBox from './GiftBox';
import useCountUp from '../../hooks/useCountUp';
import { copyText } from '../../utils/clipboard';
import { referData } from '../../utils/bannerData';
import { ROUTES } from '../../utils/routes';
import styles from './ReferEarnBanner.module.css';

const PERKS = [
  { icon: Zap, title: 'Easy to share', text: 'Share your link or code in one tap.', tone: 'blue' },
  { icon: Gift, title: 'Rewards together', text: 'You and your friend both earn on eligible activity.', tone: 'violet' },
  { icon: ShieldCheck, title: 'Secure tracking', text: 'Every referral is tracked to your account.', tone: 'teal' },
  { icon: Trophy, title: 'Invite more', text: 'More eligible friends, more VEs.', tone: 'gold' },
];

function ReferContent() {
  const { inView } = useBanner();
  const [copied, setCopied] = useState(false);
  const youEarn = useCountUp(referData.youEarn.amount, { start: inView, duration: 1400 });
  const friendGets = useCountUp(referData.friendGets.amount, { start: inView, duration: 1400 });

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const onCopy = useCallback(async () => {
    const ok = await copyText(referData.referralCode);
    setCopied(ok);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.top}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <Users size={16} aria-hidden="true" /> Refer &amp; Earn
          </span>
          <h2 id="refer-title" className={styles.title}>
            <span>Refer Friends,</span>
            <span className={styles.titleAccent}>Earn Rewards</span>
          </h2>
          <p className={styles.copy}>
            Invite your friends to VELOOP Rewards and earn rewards together when they complete eligible activities.
          </p>
          <div className={styles.actions}>
            <CTAButton to={ROUTES.refer} variant="accent" trailing={<ArrowRight size={20} strokeWidth={2.4} />}>
              Invite now
            </CTAButton>
            <CTAButton to={ROUTES.referHowItWorks} variant="ghost" leading={<Gift size={18} strokeWidth={2} />} className={styles.secondary}>
              How it works
            </CTAButton>
          </div>
        </div>

        <figure className={styles.art}>
          <figcaption className="visually-hidden">
            Two friends with phones on either side of a gift box, showing a shareable referral code and the rewards each
            person receives.
          </figcaption>
          <div className={styles.stage}>
            <svg className={styles.platform} viewBox="0 0 600 340" preserveAspectRatio="none" aria-hidden="true">
              <ellipse cx="300" cy="300" rx="250" ry="30" fill="none" stroke="#8b6cf0" strokeOpacity="0.8" strokeWidth="3" />
              <ellipse cx="300" cy="300" rx="250" ry="30" fill="#5a3fc4" opacity="0.12" />
              <ellipse cx="300" cy="306" rx="200" ry="20" fill="none" stroke="#5b82f0" strokeOpacity="0.5" strokeWidth="2" />
            </svg>

            <span className={`${styles.confetti} ${styles.c1}`} />
            <span className={`${styles.confetti} ${styles.c2}`} />
            <span className={`${styles.confetti} ${styles.c3}`} />
            <span className={`${styles.confetti} ${styles.c4}`} />

            <VToken className={`${styles.token} ${styles.t1}`} />
            <VToken className={`${styles.token} ${styles.t2}`} />
            <VToken className={`${styles.token} ${styles.t3}`} />
            <VToken className={`${styles.token} ${styles.t4}`} />

            <span className={`${styles.tile} ${styles.tileLeft}`} aria-hidden="true"><UserPlus /></span>
            <span className={`${styles.tile} ${styles.tileRight}`} aria-hidden="true"><Share2 /></span>

            <Inviter className={styles.inviter} />
            <Friend className={styles.friend} />
            <GiftBox className={styles.gift} />

            <div className={styles.codeCard}>
              <span className={styles.codeLabel} id="refer-code-label">Your referral code</span>
              <div className={styles.codeRow}>
                <span className={styles.code} aria-labelledby="refer-code-label">{referData.referralCode}</span>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={onCopy}
                  data-copied={copied}
                  aria-label={copied ? 'Referral code copied' : `Copy referral code ${referData.referralCode}`}
                >
                  {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                </button>
              </div>
            </div>

            <div className={styles.rewardPanel}>
              <div className={styles.rewardCol}>
                <span className={styles.rewardLabel}>You earn</span>
                <span className={styles.rewardValue}>
                  <VECoin size={22} className={styles.rewardCoin} />
                  <b>{youEarn}</b> <small>{referData.youEarn.unit}</small>
                </span>
              </div>
              <span className={styles.rewardDivider} aria-hidden="true" />
              <div className={styles.rewardCol}>
                <span className={styles.rewardLabel}>Your friend gets</span>
                <span className={styles.rewardValue}>
                  <VECoin size={22} className={styles.rewardCoin} />
                  <b>{friendGets}</b> <small>{referData.friendGets.unit}</small>
                </span>
              </div>
              {referData.isSample && <span className={styles.sample}>Sample values</span>}
            </div>

            <span className={styles.morePill}>
              <Users aria-hidden="true" /> More friends, more rewards
            </span>
          </div>
          <p className="visually-hidden" role="status" aria-live="polite">{copied ? 'Referral code copied to clipboard.' : ''}</p>
        </figure>
      </div>

      <ul className={styles.perks} aria-label="Why refer friends">
        {PERKS.map(({ icon: Icon, title, text, tone }) => (
          <li key={title} className={styles.perk}>
            <span className={`${styles.perkIcon} ${styles[tone]}`} aria-hidden="true"><Icon /></span>
            <span className={styles.perkText}>
              <b>{title}</b>
              <span>{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReferEarnBanner() {
  return (
    <BannerShell id="refer-earn" labelledBy="refer-title" theme="refer">
      <ReferContent />
    </BannerShell>
  );
}
