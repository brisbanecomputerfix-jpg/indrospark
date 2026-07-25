"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./areas.module.css";

export default function AreasPage() {
  const mainRef = useRef(null);
  const [postcode, setPostcode] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [status, setStatus] = useState("idle");
  
  const defaultMapUrl = "https://maps.google.com/maps?q=Brisbane+QLD+Australia&t=&z=10&ie=UTF8&iwloc=&output=embed";
  const [mapUrl, setMapUrl] = useState(defaultMapUrl);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-fade-up",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 85%",
          },
        }
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    if (!postcode) return;
    
    const isNowOn = !isOn;
    setIsOn(isNowOn);

    if (isNowOn) {
      // Validate postcode (4000 to 4500)
      const num = parseInt(postcode, 10);
      if (num >= 4000 && num <= 4500) {
        setStatus("in_area");
        setMapUrl(`https://maps.google.com/maps?q=${postcode}+QLD+Australia&t=&z=13&ie=UTF8&iwloc=&output=embed`);
        
        // Animate electricity wire to full
        gsap.to(`.${styles.electricity}`, { height: "100%", duration: 0.5, ease: "power2.inOut" });
        gsap.to(`.${styles.resultText}`, { opacity: 1, color: "#00e5ff", delay: 0.5 });
      } else {
        setStatus("out_area");
        setMapUrl(defaultMapUrl); // Reset map
        // Short circuit / error animation
        gsap.to(`.${styles.electricity}`, { height: "30%", duration: 0.2, yoyo: true, repeat: 3, ease: "power2.inOut", onComplete: () => {
           gsap.to(`.${styles.electricity}`, { height: "0%" });
        }});
        gsap.to(`.${styles.resultText}`, { opacity: 1, color: "#ff3333", delay: 0.6 });
      }
    } else {
      setStatus("idle");
      setMapUrl(defaultMapUrl);
      gsap.to(`.${styles.electricity}`, { height: "0%", duration: 0.3 });
      gsap.to(`.${styles.resultText}`, { opacity: 0, duration: 0.2 });
    }
  };

  
  return (
    <main ref={mainRef} className={styles.main}>
      

      <div className={styles.header}>
        <h1 className="gsap-fade-up">Areas We Service</h1>
        <p className="gsap-fade-up" style={{ fontSize: "1.2rem", color: "var(--text-color)" }}>
          Based in Indooroopilly, we provide top-tier electrical services to the Greater Brisbane region. Check if you're in our zone!
        </p>
      </div>

      <div className={`gsap-fade-up ${styles.checkerContainer}`}>
        <div className={styles.inputGroup}>
          <input
            type="number"
            className={styles.postcodeInput}
            placeholder="Postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.slice(0, 4))}
            maxLength={4}
          />
          <div className={`${styles.switchWrapper} ${isOn ? styles.on : ""}`} onClick={handleToggle}>
            <div className={styles.switchBase}>
              <div className={styles.switchLever}></div>
            </div>
            <div className={styles.switchLabel}>{isOn ? "ON" : "OFF"}</div>
          </div>
        </div>

        <div className={styles.wireContainer}>
          <div className={styles.electricity}></div>
        </div>

        <div className={styles.bulbContainer}>
          <div className={`${styles.bulbIcon} ${status === 'in_area' ? styles.glow : ''} ${status === 'out_area' ? styles.error : ''}`}>
             💡
          </div>
          <div className={styles.resultText}>
            {status === "in_area" && "Great! You are in our service area."}
            {status === "out_area" && "Sorry, we don't cover that postcode yet."}
          </div>
        </div>
      </div>

      <section className={`gsap-fade-up ${styles.mapSection}`}>
        <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Our Coverage Map</h2>
        <div className={styles.mapWrapper}>
          <iframe 
            src={mapUrl} 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      <section className={`gsap-fade-up ${styles.suburbSection}`}>
        <h2 style={{textAlign: "center", marginTop: "4rem"}}>Popular Service Areas</h2>
        <div className={styles.suburbGrid}>
          <div className={styles.suburbColumn}>
            <h3>Inner West</h3>
            <ul>
              <li>Indooroopilly</li>
              <li>Toowong</li>
              <li>St Lucia</li>
              <li>Taringa</li>
              <li>Chapel Hill</li>
              <li>Fig Tree Pocket</li>
            </ul>
          </div>
          <div className={styles.suburbColumn}>
            <h3>Brisbane CBD & Inner City</h3>
            <ul>
              <li>Brisbane City</li>
              <li>Spring Hill</li>
              <li>Fortitude Valley</li>
              <li>New Farm</li>
              <li>Teneriffe</li>
              <li>South Brisbane</li>
            </ul>
          </div>
          <div className={styles.suburbColumn}>
            <h3>Western Suburbs</h3>
            <ul>
              <li>Kenmore</li>
              <li>Brookfield</li>
              <li>Pullenvale</li>
              <li>Jindalee</li>
              <li>Mount Ommaney</li>
              <li>Sinnamon Park</li>
            </ul>
          </div>
          <div className={styles.suburbColumn}>
            <h3>Northside & Southside</h3>
            <ul>
              <li>Ashgrove</li>
              <li>Bardon</li>
              <li>Paddington</li>
              <li>Moorooka</li>
              <li>Annerley</li>
              <li>Yeronga</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
