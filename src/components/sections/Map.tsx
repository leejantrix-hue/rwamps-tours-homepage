import { MapPin } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import styles from './Map.module.scss';

const PINS = [
{ name: 'Dubai', top: '55%', left: '52%' },
{ name: 'Abu Dhabi', top: '62%', left: '42%' },
{ name: 'Sharjah', top: '50%', left: '56%' },
{ name: 'Fujairah', top: '48%', left: '68%' },
{ name: 'Ras Al Khaimah', top: '38%', left: '60%' },
{ name: 'Al Ain', top: '70%', left: '54%' },
];

export const Map = () => (
<section className={styles.section} id="map">
  <Container>
    <SectionHeading
      eyebrow="✦ Explore the Map"
      title={<>Discover destinations across the <em>region</em></>}
      subtitle="Tap any pin to learn more about our tours in each location."
    />

    <div className={styles.mapWrap}>
      <div className={styles.map}>
        {PINS.map((p) => (
          <div
            key={p.name}
            className={styles.pin}
            style={{ top: p.top, left: p.left }}
          >
            <MapPin size={20} fill="currentColor" />
            <span className={styles.label}>{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>
);
