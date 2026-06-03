import { ReactNode } from 'react';
import styles from './Badge.module.scss';

interface Props {
children: ReactNode;
variant?: 'green' | 'orange' | 'gray' | 'white';
icon?: ReactNode;
}

export const Badge = ({ children, variant = 'green', icon }: Props) => (
<span className={`${styles.badge} ${styles[variant]}`}>
  {icon && <span className={styles.icon}>{icon}</span>}
  {children}
</span>
);
