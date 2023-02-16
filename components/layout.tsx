import Link from 'next/link';
import styles from './layout.module.css';

export function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link rel="home" href="/">
          <img
            src="https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto/v1676497944/food-feud/header.gif"
            alt="animated sequence of a burger and a slice of pizza colliding with an explosion that says “boop!” in the middle"
          />
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a href="https://github.com/lazyplatypus/food-feuds">source code</a>
      </footer>
    </>
  );
}
