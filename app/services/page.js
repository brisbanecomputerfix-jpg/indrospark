"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import Link from "next/link";
import { servicesData } from "./servicesData";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("residential");
  const mainRef = useRef(null);
  const cardsRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".gsap-fade-up", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate cards on tab switch
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  const filteredServices = servicesData.filter(s => s.category === activeTab);

  return (
    <main ref={mainRef} className={styles.main}>
      <div className={`container ${styles.header}`}>
        <h1 className="gsap-fade-up">Our Premium Electrical Services</h1>
        <p className="gsap-fade-up">
          Sparky Indro delivers top-tier electrical solutions across the Brisbane Western Suburbs. 
          Select a category below to explore how our licensed experts can help you.
        </p>
      </div>

      <div className={`container ${styles.tabsContainer}`}>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'residential' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('residential')}
        >
          🏡 Residential
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'commercial' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('commercial')}
        >
          🏢 Commercial
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'emergency' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('emergency')}
        >
          ⚡ Emergency
        </button>
      </div>
      
      <div className={styles.servicesContainer} ref={cardsRef}>
        {filteredServices.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <IconComponent />
                </div>
                <h2 className={styles.cardTitle}>{service.title}</h2>
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.cardTextContent}>
                  <p>{service.description}</p>
                  <ul className={styles.serviceList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
                
                {service.beforeImage && service.afterImage && (
                  <div className={styles.beforeAfterContainer}>
                    <div className={styles.baWrapper}>
                       <img src={service.afterImage} alt={`${service.title} After`} className={styles.baImage} />
                       <div className={styles.beforeOverlay}>
                         <img src={service.beforeImage} alt={`${service.title} Before`} className={styles.baImage} />
                       </div>
                       <div className={styles.sliderHandle}></div>
                       <input 
                         type="range" 
                         min="0" 
                         max="100" 
                         defaultValue="50" 
                         className={styles.sliderInput} 
                         onInput={(e) => {
                           e.target.parentElement.style.setProperty('--clip', `${e.target.value}%`);
                         }}
                       />
                    </div>
                    <div className={styles.baLabels}>
                      <span>Before</span>
                      <span>After</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <section className={styles.hero}>
        <h2 className="gsap-fade-up">Ready for a Premium Upgrade?</h2>
        <p className="gsap-fade-up" style={{marginBottom: "2rem", color: "var(--text-color)"}}>
          Contact Sparky Indro today for a free estimate or immediate emergency dispatch.
        </p>
        <Link href="/quote" className={styles.ctaButton}>Get a Fast Quote</Link>
      </section>
    </main>
  );
}
