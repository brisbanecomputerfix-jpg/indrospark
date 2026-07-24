"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TrustBadges.module.css';

export default function TrustBadges() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.badge-item', 
        { y: 50, opacity: 0, scale: 0.9 },
        { 
          y: 0, opacity: 1, scale: 1,
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const badges = [
    { title: "Master Electrician", desc: "Certified Excellence", icon: "🏆" },
    { title: "Fully Insured", desc: "$20M Public Liability", icon: "🛡️" },
    { title: "Lifetime Guarantee", desc: "On All Workmanship", icon: "✨" },
    { title: "Lic: REC-123456", desc: "Verified Contractor", icon: "📜" }
  ];

  return (
    <section ref={containerRef} className={styles.trustSection}>
      <div className={`container ${styles.badgeGrid}`}>
        {badges.map((badge, idx) => (
          <div key={idx} className={`badge-item ${styles.badgeCard}`}>
            <div className={styles.icon}>{badge.icon}</div>
            <h3>{badge.title}</h3>
            <p>{badge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}