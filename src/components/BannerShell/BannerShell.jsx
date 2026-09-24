import useInView from '../../hooks/useInView';
import { BannerContext } from './BannerContext';
import styles from './BannerShell.module.css';

/**
 * Shared frame for every rewards banner.
 * Owns: 100% width, the responsive height ranges, the card surface,
 * the one-time entrance, and hover elevation. Layout inside is left to
 * each banner so they don't all look the same.
 */
export default function BannerShell({ id, labelledBy, theme = 'gold', className = '', children }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <BannerContext.Provider value={{ inView }}>
      <section
        id={id}
        ref={ref}
        aria-labelledby={labelledBy}
        data-inview={inView}
        className={`${styles.banner} ${styles[theme] || ''} ${className}`}
      >
        <div className={styles.backdrop} aria-hidden="true" />
        <div className={styles.inner}>{children}</div>
      </section>
    </BannerContext.Provider>
  );
}
