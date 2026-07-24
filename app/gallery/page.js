"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function GalleryPage() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-item', 
        { y: 50, opacity: 0, scale: 0.95 },
        { 
          y: 0, opacity: 1, scale: 1,
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 85%',
          }
        }
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    { src: '/gallery1.png', alt: 'Switchboard Upgrade', title: 'Switchboard Upgrade', desc: 'Indooroopilly' },
    { src: '/gallery2.png', alt: 'LED Downlights Installation', title: 'Architectural LED Lighting', desc: 'Toowong' },
    { src: '/gallery3.png', alt: 'Outdoor Weatherproof Power Point', title: 'Outdoor Power Point', desc: 'St Lucia' },
    // We can add more items here later
  ];

  return (
    <main ref={mainRef} className={styles.main} style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{textAlign: 'center', marginBottom: '1rem'}}>Our Project Gallery</h1>
        <p style={{textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem', color: 'var(--text-light)'}}>
          Take a look at some of our recent high-quality installations across Brisbane.
        </p>

        <div className={styles.grid}>
          {projects.map((proj, idx) => (
            <div key={idx} className={`gallery-item ${styles.card}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={proj.src} 
                  alt={proj.alt} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}