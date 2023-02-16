import styles from './header.module.css';

export function Header({ headline, lede }) {
  return (
    <div className={styles.header}>
      <h1>{headline}</h1>
      <p>{lede}</p>
    </div>
  );
}
