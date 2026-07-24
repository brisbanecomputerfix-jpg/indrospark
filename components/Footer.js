"use client";
import styles from './Footer.module.css';
import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandInfo}>
          <AnimatedLogo />
          <h3 style={{ marginTop: '1rem', color: 'var(--text-light)' }}>Sparky Indro</h3>
          <p>Best Electrician in Indooroopilly. 30 Years Experience.</p>
          <p style={{ marginTop: "1rem", fontWeight: "bold", color: "var(--accent-color)" }}>Licence No: REC-123456</p>
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/areas">Service Areas</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/quote">Free Quote</Link></li>
          </ul>
        </div>
        <div className={styles.legal}>
          <h4>Legal & Consumer Rights</h4>
          <ul>
            <li><a href="https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees" target="_blank" rel="noopener noreferrer">ACCC Consumer Rights</a></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">Google EEAT Policy Standards</a></li>
          </ul>
        </div>
        <div className={styles.orgs}>
          <h4>Organizations</h4>
          <p>Master Electricians Australia Member (Mock)</p>
          <p>Electrical Safety Office (ESO) Compliant</p>
        </div>
      </div>
      <div className={`container ${styles.disclaimer}`}>
        <p><strong>Disclaimer:</strong> This website is created for educational purposes only and does not represent a complete or operating business entity at this time.</p>
        <p>&copy; {new Date().getFullYear()} Sparky Indro. All rights reserved.</p>
      </div>
    </footer>
  );
}