import { ReactElement } from 'react';
import styles from './contenders.module.css';

interface ContenderProps {
  src: string;
  alt: string;
  name: string;
  description: string;
}

export function Contender({
  src,
  alt,
  name,
  description,
}: ContenderProps): ReactElement {
  return (
    <div className={styles.contender}>
      <img
        className={styles.contenderImage}
        width={250}
        height={250}
        src={src}
        alt={alt}
      />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

interface ContendersProps {
  contenders: ContenderProps[];
}

export function Contenders({ contenders }: ContendersProps) {
  return (
    <section className={styles.contenders}>
      {contenders.map((contender) => (
        <Contender {...contender} />
      ))}
    </section>
  );
}
