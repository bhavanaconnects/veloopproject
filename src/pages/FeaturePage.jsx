import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { featurePages, referData } from '../utils/bannerData';
import styles from './FeaturePage.module.css';

/**
 * Demo destination for each banner CTA. The real feature screens need the
 * backend, which is out of scope for this task.
 */
export default function FeaturePage({ feature }) {
  const page = featurePages[feature];

  return (
    <div className={`container-xl ${styles.page}`}>
      <Link to="/" className={styles.back}>
        <ArrowLeft size={18} aria-hidden="true" /> Back to rewards
      </Link>

      <h1 className={styles.title}>{page.title}</h1>
      <p className={styles.intro}>{page.intro}</p>

      {feature === 'refer' && (
        <div className={styles.codeBox}>
          <span className={styles.codeLabel}>Your referral code</span>
          <span className={styles.code}>{referData.referralCode}</span>
          <a
            className={styles.share}
            href={`https://wa.me/?text=${encodeURIComponent(`Join me on VELOOP Rewards with my code ${referData.referralCode}: ${referData.referralLink}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} aria-hidden="true" /> Share on WhatsApp
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      )}

      <section id="how-it-works" aria-labelledby="how-title" className={styles.how}>
        <h2 id="how-title" className={styles.howTitle}>How it works</h2>
        <ol className={styles.steps}>
          {page.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <p className={styles.note}>
        <Info size={16} aria-hidden="true" />
        Demo page. The live feature connects to the VELOOP Rewards backend; amounts and rules come from the approved configuration.
      </p>
    </div>
  );
}
