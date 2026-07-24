"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../app/page.module.css';

gsap.registerPlugin(ScrollTrigger);

const GoogleLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(
      cardsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const reviews = [
    {
      name: "Sarah Jenkins",
      initial: "S",
      color: "#EA4335",
      time: "2 weeks ago",
      quote: "Sparky Indro came out the same day when our power tripped. Friendly, professional, and explained everything clearly. Highly recommend!",
    },
    {
      name: "David O'Connor",
      initial: "D",
      color: "#4285F4",
      time: "1 month ago",
      quote: "Best sparky in Brisbane. Upgraded our switchboard and installed new downlights. The house looks amazing and we finally feel safe.",
    },
    {
      name: "Emma Williams",
      initial: "E",
      color: "#34A853",
      time: "2 months ago",
      quote: "Reasonably priced and top-notch work. They cleaned up after themselves and were very respectful of our home. Will use again.",
    },
    {
      name: "Mark Thompson",
      initial: "M",
      color: "#FBBC05",
      time: "3 months ago",
      quote: "Fast response for an emergency after hours. Diagnosed the fault quickly and had our power back on in no time. Absolute lifesaver.",
    }
  ];

  return (
    <section ref={sectionRef} className={styles.testimonialSection}>
      <div className="container">
        
        {/* Google Reviews Header */}
        <div className={styles.googleHeader}>
          <h2 style={{ textAlign: "center", marginBottom: '1rem' }}>Excellent</h2>
          <div className={styles.googleSummary}>
             <div className={styles.starRow}>
               <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
             </div>
             <p>Based on <strong>128 reviews</strong></p>
             <div className={styles.poweredBy}>
                <GoogleLogo />
             </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.googleReviewsGrid}>
          {reviews.map((r, index) => (
            <div key={index} ref={addToRefs} className={styles.googleCard}>
              <div className={styles.googleCardHeader}>
                <div className={styles.avatar} style={{backgroundColor: r.color}}>{r.initial}</div>
                <div className={styles.reviewerInfo}>
                  <p className={styles.reviewerName}>{r.name}</p>
                  <p className={styles.reviewTime}>{r.time}</p>
                </div>
                <div className={styles.googleIconSmall}><GoogleLogo /></div>
              </div>
              <div className={styles.starRowSmall}>
                 <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className={styles.googleQuote}>{r.quote}</p>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}
