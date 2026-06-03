import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
children: ReactNode;
variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
size?: 'sm' | 'md' | 'lg';
fullWidth?: boolean;
icon?: ReactNode;
}

export const Button = ({
children,
variant = 'primary',
size = 'md',
fullWidth = false,
icon,
className = '',
...rest
}: Props) => (
<button
  className={`${styles.btn} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`}
  {...rest}
>
  {icon && <span className={styles.icon}>{icon}</span>}
  <span>{children}</span>
</button>
);
