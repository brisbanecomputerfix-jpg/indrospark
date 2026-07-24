"use client";
import { useState } from 'react';
import styles from './Sections.module.css';

export default function FAQ() {
  const faqs = [
    { q: "Do you offer free quotes?", a: "Yes, you can get a free estimate online via our dedicated quote page." },
    { q: "What areas$do you service?", a: "We are based in Indooroopilly and service all of Brisbane and surrounding areas." },
    { q: "Is any job too small?", a: "Absolutely not! Every job is important to us, whether it's changing a lightbulb or wiring a new house." },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 style={{textAlign: 'center'}}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem} onClick={() => setOpen(open === i ? null : i)}>
              <h3 className={styles.faqQ}>{faq.q} <span className={styles.faqIcon}>{open === i ? '-' : '+'}</span></h3>
              {open === i && <p className={styles.faqA}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}