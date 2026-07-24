"use client";
import styles from './Sections.module.css';

export default function WhyChooseUs() {
  const reasons = [
    { title: "30 Years Experience", desc: "Decades of hands-on expertise you can trust." },
    { title: "All Jobs Welcome", desc: "No job is too big or too small for our team." },
    { title: "Fully Licensed & Insured", desc: "Compliance with all ACCC and ESO standards." },
    { title: "Local to Brisbane", desc: "Fast response times across Indooroopilly and beyond." },
  ];
  return (
    <section className={`${styles.section} ${styles.altBg}`}>
      <div className="container">
        <h2 style={{textAlign: 'center'}}>Why Choose Us</h2>
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div key={i} className={styles.card}>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}