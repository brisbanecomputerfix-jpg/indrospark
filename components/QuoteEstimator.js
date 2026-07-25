"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FiZap, FiBox, FiWind, FiSun, FiTool, FiArrowRight, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { TbPlug, TbBulb } from "react-icons/tb";
import styles from "./QuoteEstimator.module.css";

const services = [
  { id: "switchboard", title: "Switchboard", icon: <FiBox />, basePrice: 1500 },
  { id: "lighting", title: "Lighting", icon: <TbBulb />, basePrice: 150 }, // per light
  { id: "powerpoints", title: "Power Points", icon: <TbPlug />, basePrice: 180 }, // per point
  { id: "ceilingfan", title: "Ceiling Fan", icon: <FiWind />, basePrice: 250 }, // per fan
  { id: "evcharger", title: "EV Charger", icon: <FiZap />, basePrice: 1200 },
  { id: "other", title: "Other / Unsure", icon: <FiTool />, basePrice: 100 } // base callout
];

export default function QuoteEstimator() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [contactDetails, setContactDetails] = useState({ name: "", phone: "", suburb: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
  }, [step]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const calculateEstimate = () => {
    if (!selectedService) return 0;
    const srv = services.find(s => s.id === selectedService);
    if (!srv) return 0;
    
    // Simple logic for multiplier
    if (['lighting', 'powerpoints', 'ceilingfan'].includes(selectedService)) {
      return srv.basePrice * quantity;
    }
    return srv.basePrice;
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.estimatorWrapper}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>

      <div ref={containerRef} className={styles.stepContainer}>
        {step === 1 && (
          <div className={styles.stepOne}>
            <h2 className={styles.stepTitle}>What do you need help with?</h2>
            <div className={styles.serviceGrid}>
              {services.map((srv) => (
                <div 
                  key={srv.id} 
                  className={`${styles.serviceCard} ${selectedService === srv.id ? styles.selected : ""}`}
                  onClick={() => setSelectedService(srv.id)}
                >
                  <div className={styles.serviceIcon}>{srv.icon}</div>
                  <h3 className={styles.serviceName}>{srv.title}</h3>
                </div>
              ))}
            </div>
            <div className={styles.actions}>
              <button 
                className={`${styles.btn} ${!selectedService ? styles.disabled : ""}`} 
                onClick={handleNext} 
                disabled={!selectedService}
              >
                Next <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepTwo}>
            <h2 className={styles.stepTitle}>Let's refine your estimate</h2>
            
            {['lighting', 'powerpoints', 'ceilingfan'].includes(selectedService) ? (
              <div className={styles.quantitySelector}>
                <p>How many do you need installed/replaced?</p>
                <div className={styles.counter}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span className={styles.qtyDisplay}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            ) : selectedService === 'switchboard' ? (
              <div className={styles.infoBox}>
                <p>Switchboard upgrades usually range from $1,200 to $2,000 depending on whether your home is single or three-phase and how many circuits are needed.</p>
              </div>
            ) : selectedService === 'evcharger' ? (
              <div className={styles.infoBox}>
                <p>EV Charger installations require dedicated circuits. Prices typically start around $1,200 (excluding the charger itself).</p>
              </div>
            ) : (
              <div className={styles.infoBox}>
                <p>For custom jobs or troubleshooting, we generally start with a base call-out fee and quote the rest on-site.</p>
              </div>
            )}

            <div className={styles.actionsBox}>
               <button className={styles.btnSecondary} onClick={handleBack}><FiArrowLeft /> Back</button>
               <button className={styles.btn} onClick={handleNext}>See Estimate <FiArrowRight /></button>
            </div>
          </div>
        )}

        {step === 3 && !isSubmitted && (
          <div className={styles.stepThree}>
            <div className={styles.estimateBanner}>
              <h3>Estimated Cost Range</h3>
              <div className={styles.priceTag}>
                ${Math.max(100, Math.floor(estimate * 0.8))} - ${Math.floor(estimate * 1.2)}
              </div>
              <p className={styles.disclaimer}>* This is a rough estimate only. Final pricing is subject to a free on-site inspection.</p>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <h4>Send this estimate to us to book your free inspection:</h4>
              <div className={styles.formGrid}>
                <input type="text" placeholder="Your Name" required className={styles.input} />
                <input type="tel" placeholder="Phone Number" required className={styles.input} />
                <input type="text" placeholder="Suburb" required className={styles.input} />
                <input type="email" placeholder="Email (Optional)" className={styles.input} />
              </div>
              <textarea placeholder="Any specific details? (Optional)" className={styles.textarea}></textarea>
              <div className={styles.actionsBox}>
                <button type="button" className={styles.btnSecondary} onClick={handleBack}><FiArrowLeft /> Back</button>
                <button type="submit" className={styles.btnSubmit}>Submit Enquiry</button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && isSubmitted && (
          <div className={styles.successMessage}>
            <FiCheckCircle className={styles.successIcon} />
            <h2>Request Sent!</h2>
            <p>Thank you! We have received your estimate request and will call you shortly to arrange your free on-site inspection.</p>
            <button className={styles.btnSecondary} onClick={() => window.location.reload()}>Start New Quote</button>
          </div>
        )}
      </div>
    </div>
  );
}
