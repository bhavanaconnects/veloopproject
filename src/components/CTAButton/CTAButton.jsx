import { Link } from 'react-router-dom';
import styles from './CTAButton.module.css';

/**
 * Link styled as a button — every CTA navigates to a real route.
 * variant: 'gold' | 'goldSplit' | 'goldPill' | 'accent' | 'ghost'
 */
export default function CTAButton({
  to,
  variant = 'gold',
  leading,
  trailing,
  children,
  className = '',
  ...rest
}) {
  return (
    <Link to={to} className={`${styles.cta} ${styles[variant]} ${className}`} {...rest}>
      {leading && <span className={styles.leading} aria-hidden="true">{leading}</span>}
      <span className={styles.label}>{children}</span>
      {trailing && <span className={styles.trailing} aria-hidden="true">{trailing}</span>}
    </Link>
  );
}
