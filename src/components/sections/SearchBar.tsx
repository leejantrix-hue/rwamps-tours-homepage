import { useState } from 'react';
import { MapPin, Users, Wallet, Search } from 'lucide-react';
import { SEARCH_LOCATIONS, BUDGET_OPTIONS } from '../../data/destinations';
import { Container, Button } from '../ui';
import styles from './SearchBar.module.scss';

export const SearchBar = () => {
const [location, setLocation] = useState('');
const [people, setPeople] = useState('');
const [budget, setBudget] = useState('');

return (
  <section className={styles.wrapper}>
    <Container>
      <div className={styles.bar}>
        <div className={styles.field}>
          <MapPin size={18} className={styles.icon} />
          <div className={styles.col}>
            <label>Location</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Where to?</option>
              {SEARCH_LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </div>
        <div className={styles.divider} />

        <div className={styles.field}>
          <Users size={18} className={styles.icon} />
          <div className={styles.col}>
            <label>People</label>
            <select value={people} onChange={(e) => setPeople(e.target.value)}>
              <option value="">Group size</option>
              <option>1-2</option><option>3-4</option><option>5-8</option><option>9+</option>
            </select>
          </div>
        </div>
        <div className={styles.divider} />

        <div className={styles.field}>
          <Wallet size={18} className={styles.icon} />
          <div className={styles.col}>
            <label>Budget</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">Any budget</option>
              {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>

        <Button variant="primary" size="lg" icon={<Search size={16} />} className={styles.cta}>
          Search
        </Button>
      </div>
    </Container>
  </section>
);
};
