"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import Link from "next/link";

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

      // Animate wire glowing on scroll
      gsap.to(`.${styles.wireGlow}`, {
        opacity: 1,
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: `.${styles.isometricContainer}`,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });
      
      // Animate cards on scroll
      const cards = gsap.utils.toArray(`.${styles.isoCardWrapper}`);
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0, z: -100, rotationX: 45 },
          { 
            opacity: 1, 
            z: 0, 
            rotationX: card.style.transform.includes("rotateX(20deg)") ? 20 : 20, 
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
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

        {/* Residential Services */}
        <div className={styles.isoCardWrapper}>
          <div className={styles.isoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7l7 6.3v9h-2v-6H7v6H5v-9l7-6.3z"/></svg>
              </div>
              <h2 className={styles.cardTitle}>Residential Electrical</h2>
            </div>
            <div className={styles.cardContent}>
              <p>
                Your home's safety and efficiency are our top priorities. From fixing flickering lights in 
                Taringa to full smart-home automation in Kenmore, we provide reliable residential services 
                that Brisbane homeowners trust.
              </p>
              <ul className={styles.serviceList}>
                <li>Switchboard Upgrades & RCDs</li>
                <li>LED Lighting Design</li>
                <li>Ceiling Fans & Powerpoints</li>
                <li>Appliance Installation</li>
                <li>Home Automation (Smart Homes)</li>
                <li>Smoke Alarms Testing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commercial Services */}
        <div className={styles.isoCardWrapper}>
          <div className={styles.isoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h2 className={styles.cardTitle}>Commercial Services</h2>
            </div>
            <div className={styles.cardContent}>
              <p>
                Keep your business running without interruption. We specialize in commercial fit-outs, 
                compliance testing, and high-load electrical systems for retail, offices, and industrial 
                spaces across Brisbane CBD and surrounding areas.
              </p>
              <ul className={styles.serviceList}>
                <li>Shop & Office Fit-outs</li>
                <li>Test and Tagging Compliance</li>
                <li>Data and Communication Cabling</li>
                <li>Emergency Exit Lighting</li>
                <li>Three-Phase Power Installation</li>
                <li>Preventative Maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className={styles.isoCardWrapper}>
          <div className={styles.isoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h2 className={styles.cardTitle}>Emergency 24/7 Response</h2>
            </div>
            <div className={styles.cardContent}>
              <p>
                Electrical emergencies don't wait for business hours. If you have a total power outage, 
                dangerous exposed wiring, or storm damage, our rapid-response team is on call 24/7 across 
                the Western Suburbs to make your property safe immediately.
              </p>
              <ul className={styles.serviceList}>
                <li>Rapid Fault Finding</li>
                <li>Total Power Outages</li>
                <li>Storm Damage Repair</li>
                <li>Hot Water System Issues</li>
                <li>Dangerous Wiring Make-Safes</li>
                <li>Switchboard Blown Fuses</li>
              </ul>
            </div>
          </div>
        </div>

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
