"use client";
import styles from './Sections.module.css';

export default function Process() {
  const steps = [
    { step: "1", title: "Get a Free Quote Online", desc: "Use our dedicated quote form to tell us what you need." },
    { step: "2", title: "We Assess & Schedule", desc: "We review your request and schedule a convenient time." },
    { step: "3", title: "Job Completed Safely", desc: "Our expert sparkies arrive on time and complete the work to code." },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 style={{textAlign: 'center'}}>How We Proceed</h2>
        <div className={styles.processSteps}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}