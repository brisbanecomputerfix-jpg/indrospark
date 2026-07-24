"use client";
import { useEffect, useState } from 'react';
import styles from './FloatingCallButton.module.css';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down slightly so it doesn't clash with the hero immediately
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href="tel:0468991300" 
      className={`${styles.floatingBtn} ${isVisible ? styles.visible : ''}`}
      aria-label="Call Now"
    >
      <span className={styles.icon}>📞</span>
      <span className={styles.text}>Call Now</span>
    </a>
  );
}