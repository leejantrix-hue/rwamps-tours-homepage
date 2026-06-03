import { Star } from 'lucide-react';
import styles from './StarRating.module.scss';

interface Props {
value: number;
max?: number;
size?: number;
showValue?: boolean;
}

export const StarRating = ({ value, max = 5, size = 14, showValue = false }: Props) => (
<span className={styles.rating}>
  {Array.from({ length: max }).map((_, i) => (
    <Star
      key={i}
      size={size}
      className={i < Math.round(value) ? styles.filled : styles.empty}
      fill={i < Math.round(value) ? 'currentColor' : 'none'}
      strokeWidth={1.5}
    />
  ))}
  {showValue && <span className={styles.value}>{value.toFixed(1)}</span>}
</span>
);
