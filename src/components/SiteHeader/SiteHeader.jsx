import { Link } from 'react-router-dom';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container-xl ${styles.bar}`}>
        <Link to="/" className={styles.brand} aria-label="VELOOP Rewards home">
          <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
            <defs>
              <linearGradient id="brandg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f3d595" />
                <stop offset="1" stopColor="#c9974a" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="9" fill="#23264a" />
            <path d="M9 10 L16 23 L23 10" fill="none" stroke="url(#brandg)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>VELOOP <span className={styles.brandSub}>Rewards</span></span>
        </Link>
      </div>
    </header>
  );
}
