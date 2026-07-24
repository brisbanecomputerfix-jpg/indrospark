"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './MeetTheTeam.module.css';

export default function MeetTheTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-animate', 
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.teamSection} container`}>
      <div className={styles.grid}>
        <div className={`team-animate ${styles.imageWrapper}`}>
          <Image 
            src="/sparky.png" 
            alt="Sparky Indro - Expert Electrician" 
            width={600} 
            height={600} 
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className="team-animate">Meet Wayne, Your Local Sparky</h2>
          <h3 className="team-animate" style={{color: 'var(--accent-color)', marginBottom: '1.5rem'}}>Over 30 Years of Hands-On Experience</h3>
          <p className="team-animate">
            When you call Sparky Indro, you're not getting a faceless corporation or a subcontractor who doesn't care. You get me, Wayne. I've been wiring, fixing, and upgrading homes across Indooroopilly and Brisbane for three decades.
          </p>
          <p className="team-animate">
            I pride myself on showing up on time, cleaning up when the job is done, and providing honest advice. Whether it's a flickering light or a complete switchboard overhaul, I treat your home with the same respect I treat my own.
          </p>
          <div className={`team-animate ${styles.stats}`}>
            <div>
              <strong>10k+</strong>
              <span>Jobs Completed</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Safety Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}