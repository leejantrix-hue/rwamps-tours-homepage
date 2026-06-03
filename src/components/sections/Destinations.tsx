import { useState, useMemo } from 'react';
import { MapPin, Clock, Users, Heart, ArrowRight } from 'lucide-react';
import { DESTINATIONS, DESTINATION_FILTERS } from '../../data/destinations';
import { Container, SectionHeading, Card, Button, StarRating } from '../ui';
import styles from './Destinations.module.scss';

export const Destinations = () => {
const [filter, setFilter] = useState('All');

const filtered = useMemo(() => {
  if (filter === 'All') return DESTINATIONS;
  return DESTINATIONS.filter((d) => d.tags.includes(filter));
}, [filter]);

return (
  <section className={styles.section} id="destinations">
    <Container>
      <SectionHeading
        eyebrow="✦ Top Destinations"
        title={<>Explore the most <em>beautiful</em> places</>}
        subtitle="Hand-picked tours across the UAE and Middle East, designed for every kind of traveler."
      />

      <div className={styles.filters}>
        {DESTINATION_FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.pill} ${filter === f ? styles.active : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((d) => (
          <Card key={d.id} interactive className={styles.card}>
            <div className={styles.media}>
              <img src={d.image} alt={d.name} loading="lazy" />
              <button className={styles.fav} aria-label="Save"><Heart size={16} /></button>
              <span className={styles.priceTag}>From AED {d.price}</span>
            </div>
            <div className={styles.body}>
              <div className={styles.locationRow}>
                <MapPin size={12} />
                <span>{d.location}</span>
                <StarRating value={d.rating} size={12} showValue />
              </div>
              <h3 className={styles.name}>{d.name}</h3>
              <div className={styles.meta}>
                <span><Clock size={12} /> {d.duration}</span>
                <span><Users size={12} /> {d.groupSize}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.viewAll}>
        <Button variant="outline" icon={<ArrowRight size={16} />}>
          View All Destinations
        </Button>
      </div>
    </Container>
  </section>
);
};
