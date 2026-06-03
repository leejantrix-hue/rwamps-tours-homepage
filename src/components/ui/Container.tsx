import { ReactNode, HTMLAttributes } from 'react';
import styles from './Container.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
children: ReactNode;
size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container = ({ children, size = 'lg', className = '', ...rest }: Props) => (
<div className={`${styles.container} ${styles[size]} ${className}`} {...rest}>
  {children}
</div>
);
