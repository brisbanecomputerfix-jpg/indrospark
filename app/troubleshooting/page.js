"use client";
import { useState } from 'react';
import styles from '../page.module.css';
import ProblemTicker from '../../components/ProblemTicker';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TroubleshootingPage() {
  const mainRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-fade-up', 
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
        }
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const [step, setStep] = useState(0);

  const steps = [
    {
      q: "What seems to be the problem?",
      options: [
        { label: "Total Power Loss", next: 1 },
        { label: "Lights Flickering/Out", next: 2 },
        { label: "Powerpoint/Appliance Issue", next: 3 },
        { label: "Sparking or Burning Smell", next: 4 }
      ]
    },
    {
      q: "Have you checked the switchboard?",
      options: [
        { label: "Yes, a safety switch is tripped", next: 5 },
        { label: "No, everything looks normal", next: 6 },
      ],
      advice: "Warning: Never open the switchboard cover or touch exposed wires."
    },
    {
      q: "Is it just one light or multiple?",
      options: [
        { label: "Just one", next: 7 },
        { label: "Multiple lights on the same circuit", next: 8 }
      ]
    },
    {
      q: "Did it happen after plugging in a specific appliance?",
      options: [
        { label: "Yes", next: 5 },
        { label: "No", next: 8 }
      ]
    }
  ];

  const results = {
    4: "DANGER: Turn off the main switch immediately if safe to do so. Do not touch the affected area. Call us immediately.",
    5: "Try unplugging all appliances, then reset the switch. If it trips again, an appliance is faulty. If it won't reset with nothing plugged in, you need an electrician.",
    6: "If your neighbors have power but you don't, and your switchboard hasn't tripped, there may be a fault at your property pole or mains. Call us for an assessment.",
    7: "It could be a blown bulb or a faulty transformer (if LED downlight). You can try changing the bulb, but if it persists, it's a fitting issue.",
    8: "This indicates a circuit issue or a tripped breaker. Check your switchboard. If it keeps happening, you need a professional."
  };

  const handleNext = (nextStep) => {
    setStep(nextStep);
  };

  return (
    <main ref={mainRef} className={styles.main} style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <ProblemTicker />
      <div className="container" style={{maxWidth: '700px'}}>
        <h1 className="gsap-fade-up" style={{textAlign: 'center', marginBottom: '2rem'}}>Interactive Troubleshooting Guide</h1>
        <p className="gsap-fade-up" style={{textAlign: 'center', color: 'var(--accent-color)', marginBottom: '3rem'}}>
          ⚠️ Safety First: If you smell burning, see sparks, or someone has received a shock, call 000 immediately.
        </p>
        
        <div className="gsap-fade-up" style={{background: 'var(--surface-color)', padding: '3rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
          {results[step] ? (
            <div>
              <h3>Analysis</h3>
              <p className="gsap-fade-up" style={{fontSize: '1.2rem', marginTop: '1rem', lineHeight: 1.6}}>{results[step]}</p>
              <div style={{marginTop: '3rem'}}>
                <Link href="/quote" className={`${styles.ctaButton} magnetic-btn`}>Request a Sparky</Link>
                <button onClick={() => setStep(0)} style={{background: 'transparent', border: '1px solid var(--primary-color)', color: 'var(--primary-color)', padding: '1.2rem 2rem', borderRadius: '50px', marginLeft: '1rem', cursor: 'pointer'}}>Restart Guide</button>
              </div>
            </div>
          ) : (
            <div>
              <h3>{steps[step].q}</h3>
              {steps[step].advice && <p className="gsap-fade-up" style={{color: '#ffaa00', margin: '1rem 0'}}>{steps[step].advice}</p>}
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem'}}>
                {steps[step].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleNext(opt.next)}
                    style={{padding: '1.2rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-light)', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '1.1rem'}}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}