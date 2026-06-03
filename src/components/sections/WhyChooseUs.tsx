import { Plane, Shield, Award, Heart } from 'lucide-react';
import { WHY_CHOOSE_US, STATS, ASSETS } from '../../data/site';
import { Container, SectionHeading } from '../ui';
import styles from './WhyChooseUs.module.scss';

const ICONS: Record<string, JSX.Element> = {
shield: <Shield size={22} />,
award: <Award size={22} />,
heart: <Heart size={22} />,
plane: <Plane size={22} />,
};

export const WhyChooseUs = () => (
<section className={styles.section} id="why">
  <Container>
    <div className={styles.grid}>
      <div className={styles.visual}>
        <img src={ASSETS.whyImage} alt="Travel experiences" />
        <div className={styles.airplane}><Plane size={28} /></div>
        <div className={styles.statsBubble}>
          <strong>{STATS[0].value}</strong>
          <small>{STATS[0].label}</small>
        </div>
      </div>

      <div className={styles.copy}>
        <SectionHeading
          align="left"
          eyebrow="✦ Why Choose Us"
          title={<>The smart way to <em>travel</em> the UAE</>}
          subtitle="Our team handles everything end-to-end so your trip is seamless from booking to arrival."
        />

        <ul className={styles.reasons}>
          {WHY_CHOOSE_US.map((w) => (
            <li key={w.id}>
              <span className={styles.icon}>{ICONS[w.icon] || <Plane size={22} />}</span>
              <div>
                <h4>{w.title}</h4>
                <p>{w.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className={styles.stats}>
      {STATS.map((s) => (
        <div key={s.label} className={styles.stat}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  </Container>
</section>
);
