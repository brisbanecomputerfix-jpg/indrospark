"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import styles from "./ThemeSwitch.module.css";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const switchRef = useRef(null);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const isDark = theme === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    // Animate the physical switch
    gsap.to(switchRef.current, {
      y: isDark ? 8 : -8, // Push down for light, up for dark
      duration: 0.15,
      ease: "power2.inOut",
    });

    setTheme(newTheme);
  };

  if (!mounted) {
    return <div className={styles.switchPlaceholder} />;
  }

  const isDark = theme === 'dark';

  return (
    <button 
      className={styles.switchContainer} 
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <div className={styles.plate}>
        <div className={styles.switchWrapper}>
          <div 
            ref={switchRef} 
            className={`${styles.physicalSwitch} ${isDark ? styles.switchUp : styles.switchDown}`}
          >
            <div className={styles.indicator} />
          </div>
        </div>
        <div className={styles.screws}>
          <div className={styles.screw} />
          <div className={styles.screw} />
        </div>
      </div>
    </button>
  );
}
