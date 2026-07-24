
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedLogo() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    const circle = svg.querySelector("circle");
    
    gsap.set(paths, { strokeDasharray: 500, strokeDashoffset: 500 });
    
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
      stagger: 0.2,
      stroke: "var(--accent-color)"
    }).to([paths, circle], {
      filter: "drop-shadow(0px 0px 10px var(--primary-color))",
      duration: 0.4,
      yoyo: true,
      repeat: 3
    });

    return () => tl.kill();
  }, []);

  return (
    <div style={{ width: "100px", height: "100px", margin: "0 auto" }}>
      <svg ref={svgRef} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="var(--primary-color)" strokeWidth="4"/>
        <path d="M55 15 L35 55 L50 55 L45 85 L65 45 L50 45 Z" stroke="var(--primary-color)" strokeWidth="4" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
