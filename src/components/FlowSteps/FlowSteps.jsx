import styles from './FlowSteps.module.css';

/**
 * A small ordered "A → B → C" flow. It is a real sequence, so it is an <ol>.
 * `active` highlights steps up to that index; used for the Captcha and
 * Exchange mini-flows.
 */
export default function FlowSteps({ steps, active = -1, label, shape = 'square', className = '' }) {
  return (
    <ol className={`${styles.flow} ${styles[shape]} ${className}`} aria-label={label}>
      {steps.map((step, i) => (
        <li key={step.key} className={styles.item} data-active={i <= active}>
          {i > 0 && <span className={styles.connector} aria-hidden="true" />}
          <div className={styles.step}>
            <span className={styles.node}>{step.node}</span>
            {step.label && <span className={`${styles.caption} ${step.captionClass || ''}`}>{step.label}</span>}
            {!step.label && <span className="visually-hidden">{step.srLabel}</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}
