import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { SITE, NAV_LINKS } from '../../data/site';
import { Container } from '../ui';
import styles from './Footer.module.scss';

export const Footer = () => (
<footer className={styles.footer}>
  <Container>
    <div className={styles.grid}>
      <div className={styles.brandCol}>
        <a href="#home" className={styles.brand}>
          <MapPin size={22} strokeWidth={2.5} />
          <span>{SITE.brand}</span>
        </a>
        <p className={styles.tagline}>
          Curated tours across the UAE and Middle East. Travel with experts who know every destination by heart.
        </p>
        <div className={styles.social}>
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </div>

      <div className={styles.col}>
        <h4>Explore</h4>
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </div>

      <div className={styles.col}>
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </div>

      <div className={styles.col}>
        <h4>Contact</h4>
        <ul className={styles.contact}>
          <li><MapPin size={14} /> {SITE.address}</li>
          <li><Phone size={14} /> {SITE.phone}</li>
          <li><Mail size={14} /> {SITE.email}</li>
          <li className={styles.hours}>{SITE.hours}</li>
        </ul>
      </div>
    </div>

    <div className={styles.bottom}>
      <p>© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
    </div>
  </Container>
</footer>
);
