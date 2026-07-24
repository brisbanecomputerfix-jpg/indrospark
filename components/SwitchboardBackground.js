"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./SwitchboardBackground.module.css";

const NEON_COLORS = [
  "#00e5ff", // Cyan
  "#ff00ff", // Magenta
  "#39ff14", // Neon Green
  "#ffcc00", // Yellow
  "#ff3333", // Red
  "#bc13fe", // Purple
];

export default function SwitchboardBackground() {
  const NUM_SWITCHES = 35; // Grid of switches
  const [switchStates, setSwitchStates] = useState(Array(NUM_SWITCHES).fill(false));
  const [masterOn, setMasterOn] = useState(false);
  const containerRef = useRef(null);
  
  // Assign a static color to each switch based on index
  const getSwitchColor = (index) => NEON_COLORS[index % NEON_COLORS.length];

  const handleToggle = (index) => {
    const newStates = [...switchStates];
    newStates[index] = !newStates[index];
    setSwitchStates(newStates);
  };

  const handleMasterToggle = () => {
    const newMasterState = !masterOn;
    setMasterOn(newMasterState);
    
    // Turn all switches on/off
    setSwitchStates(Array(NUM_SWITCHES).fill(newMasterState));

    if (newMasterState) {
      // Overload animation
      const tl = gsap.timeline();
      
      // Flash screen white
      tl.to(`.${styles.overloadFlash}`, { opacity: 1, duration: 0.1 })
        .to(`.${styles.overloadFlash}`, { opacity: 0, duration: 0.5 });
      
      // Shake the whole panel
      tl.to(containerRef.current, {
        x: () => Math.random() * 20 - 10,
        y: () => Math.random() * 20 - 10,
        duration: 0.05,
        yoyo: true,
        repeat: 10,
      }, 0);
      
      // Reset position
      tl.set(containerRef.current, { x: 0, y: 0 });
    }
  };

  return (
    <div ref={containerRef} className={styles.panelContainer}>
      <div className={styles.overloadFlash}></div>
      
      <div className={styles.grid}>
        {switchStates.map((isOn, index) => {
          // Leave a hole for the master switch in the middle
          if (index === Math.floor(NUM_SWITCHES / 2)) {
            return (
              <div 
                key="master" 
                className={`${styles.switchHousing} ${styles.masterHousing} ${masterOn ? styles.on : ""}`}
                onClick={handleMasterToggle}
                style={masterOn ? {
                  boxShadow: `inset 0 0 20px #ef4444, 0 0 50px #ef4444`,
                  borderColor: "#ef4444"
                } : {}}
              >
                <div className={`${styles.switchLever} ${styles.masterLever}`}></div>
                <div className={styles.switchLabel} style={{fontSize: "1rem", bottom: "15px"}}>MAIN ISOLATOR</div>
              </div>
            );
          }

          const color = getSwitchColor(index);
          return (
            <div 
              key={index} 
              className={`${styles.switchHousing} ${isOn ? styles.on : ""}`}
              onClick={() => handleToggle(index)}
              style={isOn ? {
                boxShadow: `inset 0 0 10px ${color}, 0 0 20px ${color}`,
                borderColor: color
              } : {}}
            >
              <div className={styles.switchLever}></div>
              <div className={styles.switchLabel}>CB-{index + 100}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
