"use client";
import styles from './Sections.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: ref.current, start: "top 80%" }});
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.twoCol}>
          <div>
            <h2>About Sparky Indro</h2>
            <p className={styles.lead}>Serving Brisbane and surrounding areas with over 30 years of electrical excellence.</p>
            <p>We believe every job is important, big or small. From changing a single light fitting to complete commercial fit-outs, our commitment to safety, quality, and customer satisfaction remains the same.</p>
          </div>
          <div className={styles.imagePlaceholder} style={{ background: 'transparent', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              src="/wayne_working.png" 
              alt="Wayne working with electrical wires" 
              width={600} 
              height={600} 
              style={{ borderRadius: '12px', objectFit: 'cover', width: '100%', height: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}