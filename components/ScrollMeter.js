"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollMeter.module.css";

export default function ScrollMeter() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      let scroll = 0;
      if (windowHeight > 0) {
        scroll = totalScroll / windowHeight;
      }
      
      // Clamp between 0 and 1 (fixes overscroll bounce on Mac/iOS)
      if (scroll < 0) scroll = 0;
      if (scroll > 1) scroll = 1;
      
      setScrollProgress(scroll * 100);
    };

    // Initialize on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.meterContainer}>
      <div className={styles.meterBar} style={{ width: `${scrollProgress}%` }}>
         <div className={styles.ledGlow} />
      </div>
    </div>
  );
}
