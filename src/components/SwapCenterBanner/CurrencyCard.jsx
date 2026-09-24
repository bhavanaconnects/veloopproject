import styles from './SwapCenterBanner.module.css';

/** Metal-style currency card (VE = black/gold, SVE = blue/silver). */
export default function CurrencyCard({ code, name, tone, position }) {
  return (
    <div className={`${styles.card} ${styles[tone]}`} data-pos={position}>
      <span className={styles.cardSheen} aria-hidden="true" />
      <span className={styles.cardCode}>{code}</span>
      <span className={styles.cardName}>{name}</span>
      <span className={styles.chip} aria-hidden="true" />
      <span className={styles.emblem} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="100%" height="100%">
          <path d="M12 2 C12.8 8.5 15.5 11.2 22 12 C15.5 12.8 12.8 15.5 12 22 C11.2 15.5 8.5 12.8 2 12 C8.5 11.2 11.2 8.5 12 2 Z" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
