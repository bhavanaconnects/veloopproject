import { useCallback, useEffect, useState } from 'react';
import { ChevronsRight, Check, RefreshCw } from 'lucide-react';
import BannerShell from '../BannerShell/BannerShell';
import { useBanner } from '../BannerShell/BannerContext';
import CTAButton from '../CTAButton/CTAButton';
import FlowSteps from '../FlowSteps/FlowSteps';
import { Gem } from '../RewardArt';
import CaptchaDevice from './CaptchaDevice';
import useTypewriter from '../../hooks/useTypewriter';
import { captchaData } from '../../utils/bannerData';
import { ROUTES } from '../../utils/routes';
import styles from './CaptchaTasksBanner.module.css';

const randomCode = (len = 4) =>
  Array.from({ length: len }, () => captchaData.alphabet[Math.floor(Math.random() * captchaData.alphabet.length)]).join('');

function CaptchaContent() {
  const { inView } = useBanner();
  const [code, setCode] = useState(captchaData.initialCode);
  const { typed, done } = useTypewriter(code, { start: inView });
  // remember which code earned the reward, so a new code starts unrewarded
  const [rewardedCode, setRewardedCode] = useState(null);
  const rewarded = done && rewardedCode === code;

  // Task → verification → reward: the gem lights up shortly after verification
  useEffect(() => {
    if (!done) return undefined;
    const t = setTimeout(() => setRewardedCode(code), 650);
    return () => clearTimeout(t);
  }, [done, code]);

  const refresh = useCallback(() => {
    setCode((prev) => {
      let next = randomCode();
      while (next === prev) next = randomCode();
      return next;
    });
  }, []);

  const stage = rewarded ? 2 : done ? 1 : 0;
  const status = rewarded ? 'Verified. Gem reward earned.' : done ? 'Answer verified.' : 'Typing the captcha answer.';

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <h2 id="captcha-title" className={styles.title}>
          <span>Solve Captchas.</span>
          <span className={styles.titleAccent}>Earn Gems.</span>
        </h2>
        <p className={styles.copy}>
          Complete simple captcha tasks accurately and earn eligible Gem rewards.
        </p>
        <CTAButton
          to={ROUTES.captcha}
          variant="goldSplit"
          leading={<ChevronsRight size={22} strokeWidth={2.4} />}
          className={styles.cta}
        >
          Start task
        </CTAButton>

        <FlowSteps
          className={styles.flow}
          label="How a captcha task works"
          active={stage}
          steps={[
            {
              key: 'task',
              srLabel: 'Solve the captcha',
              node: (
                <span className={styles.miniCaptcha}>
                  <span className={styles.miniCode}>{code}</span>
                  <span className={styles.miniField} />
                </span>
              ),
            },
            {
              key: 'verify',
              srLabel: 'Answer is verified',
              node: <span className={styles.miniCheck}><Check size={20} strokeWidth={3} /></span>,
            },
            {
              key: 'reward',
              srLabel: 'Earn Gems',
              node: <Gem size={38} />,
            },
          ]}
        />
      </div>

      <figure className={styles.art} data-verified={done} data-rewarded={rewarded}>
        <figcaption className="visually-hidden">
          Preview of a captcha task: the characters {code.split('').join(' ')} are typed into the answer
          field, verified, and a Gem reward is earned.
        </figcaption>
        <div className={styles.device}>
          <CaptchaDevice code={code} typed={typed} verified={done} />
          <button type="button" className={styles.refresh} onClick={refresh} aria-label="Show a new sample captcha">
            <RefreshCw size={20} strokeWidth={2.4} />
          </button>
          <Gem className={`${styles.gem} ${styles.gemLeft}`} size={78} />
          <Gem className={`${styles.gem} ${styles.gemRightTop}`} size={88} />
          <Gem className={`${styles.gem} ${styles.gemRightLow}`} size={70} />
          <Gem className={`${styles.gem} ${styles.gemTiny}`} size={32} />
          <Gem className={styles.earned} size={44} />
          <span className={`${styles.sparkle} ${styles.s1}`} />
          <span className={`${styles.sparkle} ${styles.s2}`} />
          <span className={`${styles.sparkle} ${styles.s3}`} />
        </div>
        <p className={styles.status} role="status" aria-live="polite">{status}</p>
      </figure>
    </div>
  );
}

export default function CaptchaTasksBanner() {
  return (
    <BannerShell id="captcha-tasks" labelledBy="captcha-title" theme="violet">
      <CaptchaContent />
    </BannerShell>
  );
}
