"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./gallery.module.css";

export default function GalleryPage() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".gallery-item", 
        { y: 50, opacity: 0, scale: 0.95 },
        { 
          y: 0, opacity: 1, scale: 1,
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 85%",
          }
        }
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    { src: "/gallery1.png", alt: "Switchboard Upgrade", title: "Residential Switchboard Upgrade", desc: "Complete modernization of an outdated switchboard to current safety standards with RCD protection. Located in Indooroopilly." },
    { src: "/gallery2.png", alt: "LED Downlights Installation", title: "Architectural LED Lighting", desc: "Installation of premium, energy-efficient LED downlights to brighten up a modern living space in Toowong." },
    { src: "/gallery3.png", alt: "Outdoor Weatherproof Power Point", title: "Outdoor Power Point Installation", desc: "Installed a secure, Australian standard 240V dual weatherproof outdoor power point for an entertainment area in St Lucia." },
    { src: "/gallery4.png", alt: "Kitchen Pendant and LED Lighting", title: "Designer Kitchen Lighting", desc: "Elegant black pendant lights and warm-white LED strip lighting installed for a stunning kitchen renovation in Taringa." },
    { src: "/gallery5.png", alt: "Modern Electrical Switchboard", title: "Commercial-Grade Switchboard Wiring", desc: "A neat and professional commercial-grade electrical switchboard installation, ensuring maximum safety and reliability." },
    { src: "/gallery6.png", alt: "Electric Vehicle Charger Installation", title: "EV Wall Charger Setup", desc: "Professional installation of a modern electric vehicle wall charger in a residential garage, ready for fast charging." },
  ];

  return (
    <main ref={mainRef} className={styles.main} style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
        <h1 style={{textAlign: "center", marginBottom: "1rem"}}>Our Project Gallery</h1>
        <p style={{textAlign: "center", marginBottom: "4rem", fontSize: "1.2rem", color: "var(--text-light)"}}>
          Take a look at some of our recent high-quality installations and upgrades across Brisbane's Western Suburbs. We pride ourselves on neat, safe, and professional workmanship.
        </p>

        <div className={styles.grid}>
          {projects.map((proj, idx) => (
            <div key={idx} className={`gallery-item ${styles.card}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={proj.src} 
                  alt={proj.alt} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.info}>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
