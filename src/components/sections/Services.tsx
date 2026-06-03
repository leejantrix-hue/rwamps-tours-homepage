import { Plane, Hotel, Map as MapIcon, Headphones } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { Container, SectionHeading, Card } from '../ui';
import styles from './Services.module.scss';

const ICONS: Record<string, JSX.Element> = {
plane: <Plane size={24} />,
hotel: <Hotel size={24} />,
map: <MapIcon size={24} />,
headphones: <Headphones size={24} />,
};

export const Services = () => (
<section className={styles.section} id="services">
  <Container>
    <SectionHeading
      eyebrow="✦ Our Services"
      title={<>Everything you need for a <em>perfect</em> trip</>}
      subtitle="From booking to landing, we handle every detail so you can focus on the experience."
    />

    <div className={styles.grid}>
      {SERVICES.map((s) => (
        <Card key={s.id} interactive className={styles.card}>
          <div className={styles.iconWrap}>{ICONS[s.icon] || <Plane size={24} />}</div>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <a href="#contact" className={styles.link}>Learn more →</a>
        </Card>
      ))}
    </div>
  </Container>
</section>
);
