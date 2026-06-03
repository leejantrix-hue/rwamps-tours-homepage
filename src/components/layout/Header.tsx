import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { SITE, NAV_LINKS } from '../../data/site';
import { Container, Button } from '../ui';
import styles from './Header.module.scss';

export const Header = () => {
const [open, setOpen] = useState(false);

return (
  <header className={styles.header}>
    <Container>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand}>
          <MapPin size={22} className={styles.brandIcon} strokeWidth={2.5} />
          <span>{SITE.brand}</span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="sm" className={styles.navCta}>
            Book Now
          </Button>
        </nav>

        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </Container>
  </header>
);
};
