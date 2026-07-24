"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./pricing.module.css";
import Link from "next/link";

export default function PricingPage() {
  const mainRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Fade up headers
      gsap.fromTo(".gsap-fade-up", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // Animate circuit glow down the central wire
      gsap.to(`.${styles.circuitGlow}`, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.circuitGrid}`,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });
      
      // Animate Knowledge Base nodes
      const nodes = gsap.utils.toArray(`.${styles.kbNode}`);
      nodes.forEach((node, index) => {
        const isLeft = node.classList.contains(styles.left);
        gsap.fromTo(node,
          { opacity: 0, x: isLeft ? -50 : 50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.6,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: node,
              start: "top 70%",
            }
          }
        );
      });

    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className={styles.main}>
      <div className={styles.header}>
        <h1 className="gsap-fade-up">Transparent Pricing</h1>
        <p className="gsap-fade-up">
          No hidden fees, no nasty surprises. We believe in upfront, honest pricing for every electrical job in Brisbane.
        </p>
      </div>
      
      <div className={styles.pricingGrid}>
        <div className={`gsap-fade-up ${styles.priceCard}`}>
          <h3 className={styles.priceTitle}>Service Call-Out</h3>
          <div className={styles.priceAmount}>$110<span>+GST</span></div>
          <p className={styles.priceDesc}>
            Covers vehicle costs, travel time, and the first 30 minutes of expert fault finding on site.
          </p>
        </div>

        <div className={`gsap-fade-up ${styles.priceCard}`}>
          <h3 className={styles.priceTitle}>Hourly Rate</h3>
          <div className={styles.priceAmount}>$95<span>/hr</span></div>
          <p className={styles.priceDesc}>
            Standard labor rate charged in 15-minute increments after the initial 30-minute call-out.
          </p>
        </div>

        <div className={`gsap-fade-up ${styles.priceCard}`}>
          <h3 className={styles.priceTitle}>Fixed Price Quotes</h3>
          <div className={styles.priceAmount}>Custom</div>
          <p className={styles.priceDesc}>
            For switchboard upgrades, full rewires, and major installations. We provide a detailed itemised quote.
          </p>
        </div>
      </div>

      <section className={styles.kbSection}>
        <div className={styles.kbHeader}>
          <h2 className="gsap-fade-up">Consumer Protection Guide</h2>
          <p className="gsap-fade-up" style={{color: "var(--text-color)", fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto"}}>
            Your safety and wallet matter to us. Read our essential knowledge base to protect yourself and make informed decisions before hiring an electrician.
          </p>
        </div>

        <div className={styles.circuitGrid}>
          <div className={styles.circuitWire}>
            <div className={styles.circuitGlow}></div>
          </div>

          <div className={`${styles.kbNode} ${styles.left}`}>
            <h3><span style={{fontSize: "1.5rem"}}>🔍</span> How to Choose an Electrician</h3>
            <p>Don't just hire the first number you see online. To ensure quality and safety:</p>
            <ul>
              <li><strong>Verify Licenses:</strong> Check their electrical contractor licence number.</li>
              <li><strong>Insurance:</strong> Ensure they have comprehensive public liability insurance.</li>
              <li><strong>Reviews:</strong> Look for consistent, genuine local reviews on Google.</li>
              <li><strong>Guarantees:</strong> Ask if they offer a lifetime workmanship warranty.</li>
            </ul>
          </div>

          <div className={`${styles.kbNode} ${styles.right}`}>
            <h3><span style={{fontSize: "1.5rem"}}>⚠️</span> Spotting a "Dodgy" Sparky</h3>
            <p>Unfortunately, some operators cut corners. Be highly suspicious if an electrician:</p>
            <ul>
              <li>Refuses to provide a written, itemised quote for a large job.</li>
              <li>Demands large amounts of cash upfront before starting work.</li>
              <li>Has no physical business address or branded uniform/vehicle.</li>
              <li>Tells you a safety certificate (Form 16/17) isn't necessary.</li>
            </ul>
          </div>

          <div className={`${styles.kbNode} ${styles.left}`}>
            <h3><span style={{fontSize: "1.5rem"}}>🛡️</span> Preventing Bill Shock</h3>
            <p>Nobody likes unexpected invoices. To protect your wallet:</p>
            <ul>
              <li><strong>Ask about Call-outs:</strong> Always confirm the initial call-out fee and what it includes.</li>
              <li><strong>Parts vs Labour:</strong> Ask if the quoted price includes parts and materials, or just labor.</li>
              <li><strong>Fixed Price:</strong> For installations, insist on a fixed-price quote rather than an hourly rate.</li>
              <li><strong>After Hours:</strong> Clarify exactly when emergency/after-hours rates apply.</li>
            </ul>
          </div>

          <div className={`${styles.kbNode} ${styles.right}`}>
            <h3><span style={{fontSize: "1.5rem"}}>📞</span> What to Know Before Calling</h3>
            <p>Save time and money by being prepared before the electrician arrives:</p>
            <ul>
              <li><strong>Isolate the Issue:</strong> Check if a specific appliance is tripping the power (unplug everything and re-test).</li>
              <li><strong>Safety First:</strong> If you see sparking or smell burning, turn off the MAIN switch at your switchboard immediately.</li>
              <li><strong>Clear Access:</strong> Ensure the electrician has clear access to the switchboard and the work area.</li>
            </ul>
          </div>

          <div className={styles.clearfix}></div>
        </div>
      </section>

      <div className="gsap-fade-up" style={{textAlign: "center", marginTop: "4rem", marginBottom: "4rem"}}>
        <Link href="/quote" className="magnetic-btn" style={{
          display: "inline-block", padding: "1rem 2.5rem", background: "linear-gradient(45deg, #ffcc00, #ff8800)", 
          color: "#000", fontWeight: "bold", borderRadius: "50px", textDecoration: "none", fontSize: "1.2rem",
          boxShadow: "0 5px 15px rgba(255, 204, 0, 0.3)"
        }}>Request a Detailed Quote</Link>
      </div>
    </main>
  );
}
