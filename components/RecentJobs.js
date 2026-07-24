"use client";
import styles from './Sections.module.css';

export default function RecentJobs() {
  const jobs = [
    { title: "Switchboard Upgrade", location: "Indooroopilly", desc: "Replaced an outdated fuse box with a modern, safe RCD switchboard." },
    { title: "LED Downlight Install", location: "St Lucia", desc: "Installed 15 energy-efficient LED downlights in a living area." },
    { title: "Emergency Fault Finding", location: "Toowong", desc: "Located and repaired a dangerous short circuit causing frequent tripping." },
  ];
  return (
    <section className={`${styles.section} ${styles.altBg}`}>
      <div className="container">
        <h2 style={{textAlign: 'center'}}>Recent Completed Jobs</h2>
        <div className={styles.grid}>
          {jobs.map((job, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.locationTag}>{job.location}</div>
              <h3>{job.title}</h3>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}