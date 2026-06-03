import { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';

interface Props {
eyebrow?: ReactNode;
title: ReactNode;
subtitle?: ReactNode;
align?: 'left' | 'center';
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }: Props) => (
<header className={`${styles.heading} ${styles[align]}`}>
  {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
  <h2 className={styles.title}>{title}</h2>
  {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
</header>
);
