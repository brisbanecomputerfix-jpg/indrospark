"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  const [isReset, setIsReset] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to play electrical buzzing sound
    if (audioRef.current && !isReset) {
      audioRef.current.volume = 0.2;
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => console.log("Audio autoplay blocked"));
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isReset]);

  const handleReset = () => {
    setIsReset(true);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    // Play loud clunk sound
    const clunk = new Audio("/switch-clunk.mp3");
    clunk.play().catch(() => {});
    
    // Redirect home after 1 second
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className={`${styles.container} ${isReset ? styles.resetActive : ""}`}>
      <audio ref={audioRef} src="/buzz.mp3" preload="auto" />
      
      <div className={styles.warningBox}>
        <div className={styles.warningLight}></div>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>CIRCUIT BREAKER TRIPPED</h2>
        <p className={styles.message}>
          WARNING: The requested page could not be found. 
          Power to this sector has been automatically disconnected for safety.
        </p>
        
        <div className={styles.breakerPanel}>
          <div className={styles.breakerLabel}>MAIN ISOLATOR</div>
          <button 
            className={`${styles.breakerSwitch} ${isReset ? styles.switchOn : styles.switchOff}`}
            onClick={handleReset}
            disabled={isReset}
          >
            <div className={styles.switchHandle}></div>
            <span className={styles.stateText}>{isReset ? "ON" : "TRIPPED"}</span>
          </button>
        </div>
        
        {isReset && (
          <div className={styles.rebootingText}>
            Rebooting system... Restoring power...
          </div>
        )}
      </div>
    </div>
  );
}
