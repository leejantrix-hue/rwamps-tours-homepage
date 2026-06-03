import { ReactNode, HTMLAttributes } from 'react';
import styles from './Card.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'soft';
  interactive?: boolean;
}

export const Card = ({ children, variant = 'default', interactive = false, className = '', ...rest }: Props) => (
  <div
    className={`${styles.card} ${styles[variant]} ${interactive ? styles.interactive : ''} ${className}`}
    {...rest}
  >
    {children}
  </div>
);
