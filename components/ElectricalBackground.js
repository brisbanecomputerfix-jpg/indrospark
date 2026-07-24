
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ElectricalBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSpark = () => {
      const spark = document.createElement("div");
      spark.style.position = "absolute";
      spark.style.backgroundColor = "var(--primary-color)";
      spark.style.borderRadius = "50%";
      container.appendChild(spark);

      const size = Math.random() * 3 + 1;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      gsap.set(spark, {
        width: size,
        height: size * 5,
        left: startX,
        top: startY,
        opacity: 0,
        boxShadow: "0 0 15px var(--primary-color)",
        rotation: Math.random() * 360
      });

      gsap.to(spark, {
        opacity: 0.8,
        duration: 0.05,
        yoyo: true,
        repeat: 3,
        onComplete: () => {
          if (container.contains(spark)) container.removeChild(spark);
        }
      });
    };

    const interval = setInterval(createSpark, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        overflow: "hidden"
      }}
    />
  );
}
