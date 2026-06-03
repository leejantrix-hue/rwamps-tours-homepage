import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { Container, SectionHeading, Card, StarRating } from '../ui';
import styles from './Testimonials.module.scss';

export const Testimonials = () => (
<section className={styles.section} id="testimonials">
  <Container>
    <SectionHeading
      eyebrow="✦ Testimonials"
      title={<>What our <em>travelers</em> say</>}
      subtitle="Real stories from the people who explored the UAE with us."
    />

    <div className={styles.grid}>
      {TESTIMONIALS.map((t) => (
        <Card key={t.id} className={styles.card}>
          <Quote size={32} className={styles.quoteIcon} />
          <StarRating value={t.rating} size={16} />
          <p className={styles.quote}>"{t.quote}"</p>
          <div className={styles.author}>
            <img src={t.avatar} alt={t.name} />
            <div>
              <strong>{t.name}</strong>
              <small>{t.location}</small>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Container>
</section>
);
