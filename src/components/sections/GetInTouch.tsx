import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { SITE } from '../../data/site';
import { Container, SectionHeading, Button } from '../ui';
import styles from './GetInTouch.module.scss';

export const GetInTouch = () => {
const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
const [submitted, setSubmitted] = useState(false);

const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setForm({ ...form, [k]: e.target.value });

const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);
};

return (
  <section className={styles.section} id="contact">
    <Container>
      <SectionHeading
        eyebrow="✦ Get In Touch"
        title={<>Let's plan your <em>next adventure</em></>}
        subtitle="Tell us where you'd like to go and we'll handle the rest."
      />

      <div className={styles.layout}>
        <div className={styles.info}>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.icon}><Phone size={18} /></span>
              <div><strong>Phone</strong><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></div>
            </li>
            <li>
              <span className={styles.icon}><Mail size={18} /></span>
              <div><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            </li>
            <li>
              <span className={styles.icon}><MapPin size={18} /></span>
              <div><strong>Office</strong><span>{SITE.address}</span></div>
            </li>
            <li>
              <span className={styles.icon}><Clock size={18} /></span>
              <div><strong>Hours</strong><span>{SITE.hours}</span></div>
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.row}>
            <label>
              <span>Full Name</span>
              <input type="text" required value={form.name} onChange={update('name')} placeholder="Jane Doe" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" required value={form.email} onChange={update('email')} placeholder="jane@example.com" />
            </label>
          </div>
          <div className={styles.row}>
            <label>
              <span>Phone</span>
              <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+971 ..." />
            </label>
            <label>
              <span>Subject</span>
              <input type="text" value={form.subject} onChange={update('subject')} placeholder="Tell us about your trip" />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea rows={5} required value={form.message} onChange={update('message')} placeholder="Where would you like to go?" />
          </label>

          <Button type="submit" variant="primary" size="lg" icon={<Send size={16} />}>
            {submitted ? 'Sent — we\'ll be in touch!' : 'Send Message'}
          </Button>
        </form>
      </div>
    </Container>
  </section>
);
};
