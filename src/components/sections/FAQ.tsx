import { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS, FAQ_CATEGORIES } from '../../data/faqs';
import { Container, SectionHeading, Button } from '../ui';
import styles from './FAQ.module.scss';

export const FAQ = () => {
const [category, setCategory] = useState<string>(FAQ_CATEGORIES[0]);
const [openId, setOpenId] = useState<string | null>(null);

const filtered = FAQS.filter((f) => f.category === category);

return (
  <section className={styles.section} id="faq">
    <Container>
      <SectionHeading
        eyebrow="✦ FAQ"
        title={<>Got <em>questions?</em> We have answers</>}
        subtitle="Everything you need to know before booking your trip."
      />

      <div className={styles.layout}>
        <div className={styles.left}>
          <ul className={styles.categories}>
            {FAQ_CATEGORIES.map((c) => (
              <li key={c}>
                <button
                  className={`${styles.catBtn} ${category === c ? styles.catActive : ''}`}
                  onClick={() => { setCategory(c); setOpenId(null); }}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.helpCard}>
            <div className={styles.helpIcon}><MessageCircle size={20} /></div>
            <h4>Need more help?</h4>
            <p>Our travel experts are available 24/7 to answer any question.</p>
            <Button variant="primary" size="md" icon={<ArrowRight size={14} />}>
              Contact Us
            </Button>
          </div>
        </div>

        <div className={styles.right}>
          <ul className={styles.accordion}>
            {filtered.map((f) => {
              const open = openId === f.id;
              return (
                <li key={f.id} className={open ? styles.open : ''}>
                  <button
                    className={styles.qBtn}
                    onClick={() => setOpenId(open ? null : f.id)}
                  >
                    <span>{f.question}</span>
                    {open ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  {open && <div className={styles.answer}>{f.answer}</div>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);
};
