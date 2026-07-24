"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactForm.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const el = containerRef.current;
    
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Thanks! We will be in touch shortly.");
      e.target.reset();
    }, 1500);
  };

  return (
    <section className={styles.contactSection}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Get a Free Quote</h2>
        <div ref={containerRef} className={styles.contactContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input type="text" id="name" required className={styles.input} placeholder="John Doe" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" required className={styles.input} placeholder="0400 000 000" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">How can we help?</label>
              <textarea id="message" required className={styles.textarea} placeholder="Describe your electrical needs..."></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              {status || "Web Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
