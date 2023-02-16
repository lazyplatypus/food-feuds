import Link from 'next/link';
import styles from './big-link.module.css';

export function BigLink({ href, children }) {
  return (
    <p className={styles.bigLinkContainer}>
      <Link href={href} className={styles.bigLink}>
        {children}
      </Link>
    </p>
  );
}
