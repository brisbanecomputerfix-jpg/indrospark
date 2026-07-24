"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import Link from "next/link";
import { servicesData } from "./servicesData";

export default function ServicesPage() {
  const mainRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Fade up header
      gsap.fromTo(".gsap-fade-up", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
      
      // Animate cards on scroll
      const cards = gsap.utils.toArray(`.${styles.isoCardWrapper}`);
      cards.forEach((card, i) => {
        const isEven = i % 2 === 0;
        gsap.fromTo(card, 
          { opacity: 0, z: -100, rotationX: isEven ? 10 : 20 },
          { 
            opacity: 1, 
            z: 0, 
            rotationX: card.style.transform.includes("rotateX(10deg)") ? 10 : (card.style.transform.includes("rotateX(5deg)") ? 5 : 10), 
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className={styles.main}>
      <div className={`container ${styles.header}`}>
        <h1 className="gsap-fade-up">Master Electricians in Indooroopilly</h1>
        <p className="gsap-fade-up">
          Sparky Indro delivers premium electrical services across the Brisbane Western Suburbs. 
          Whether you need an emergency electrician, a switchboard upgrade, or a complete commercial fit-out, 
          our licensed experts ensure the highest safety and performance standards.
        </p>
      </div>
      
      <div className={styles.isometricContainer}>
        {/* Animated Background Wire */}
        <svg className={styles.wireSvg} viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path className={styles.wirePath} d="M50,0 Q80,250 50,500 T50,1000" />
          <path className={styles.wireGlow} d="M50,0 Q80,250 50,500 T50,1000" strokeDasharray="1000" strokeDashoffset="1000" />
        </svg>

        {servicesData.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={service.id} className={styles.isoCardWrapper}>
              <div className={styles.isoCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <IconComponent />
                  </div>
                  <h2 className={styles.cardTitle}>{service.title}</h2>
                </div>
                <div className={styles.cardContent}>
                  <p>{service.description}</p>
                  <ul className={styles.serviceList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <section className={styles.hero}>
        <h2 className="gsap-fade-up">Need a Sparky Now?</h2>
        <p className="gsap-fade-up" style={{marginBottom: "2rem", color: "var(--text-color)"}}>
          Contact Sparky Indro today for a free quote or immediate emergency dispatch.
        </p>
        <Link href="/quote" className={styles.ctaButton}>Get a Fast Quote</Link>
      </section>
    </main>
  );
}
