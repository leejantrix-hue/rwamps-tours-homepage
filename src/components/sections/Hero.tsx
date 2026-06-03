import { ArrowRight, Play } from 'lucide-react';
import { ASSETS } from '../../data/site';
import { Container, Button } from '../ui';
import styles from './Hero.module.scss';

export const Hero = () => (
<section className={styles.hero} id="home">
  <Container>
    <div className={styles.grid}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>✦ Welcome to Rwamps Tours</span>
        <h1 className={styles.title}>
          Let's Explore
          <br />
          the <em>scenery</em> with
          <br />
          Rwamps Tours
        </h1>
        <p className={styles.lead}>
          Discover handcrafted journeys across the UAE and the Middle East — luxury stays, expert guides, and unforgettable moments curated by our local team.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg" icon={<ArrowRight size={16} />}>
            Get Started
          </Button>
          <button className={styles.playBtn}>
            <span className={styles.playIcon}><Play size={14} fill="currentColor" /></span>
            Watch Video
          </button>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.cardOne}>
          <img src={ASSETS.heroOne} alt="Desert dunes" />
        </div>
        <div className={styles.cardTwo}>
          <img src={ASSETS.heroTwo} alt="Mountain lake" />
        </div>
        <div className={styles.floatingTag}>
          <span className={styles.dot} />
          <div>
            <strong>50K+</strong>
            <small>Happy Travelers</small>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
);
