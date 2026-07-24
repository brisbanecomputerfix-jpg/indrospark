"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogPage() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card', 
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 85%',
          }
        }
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const posts = [
    {
      title: "When to Upgrade Your Switchboard in an Older Brisbane Home",
      excerpt: "If your home still has ceramic fuses or trips frequently, it might be time for an upgrade. Learn the warning signs of a dangerous switchboard.",
      date: "August 15, 2026",
      category: "Safety",
      readTime: "4 min read"
    },
    {
      title: "5 Signs Your Safety Switch (RCD) is Failing",
      excerpt: "Your safety switch is designed to save lives, but what happens when it malfunctions? Here's how to test it and what to look out for.",
      date: "August 02, 2026",
      category: "Maintenance",
      readTime: "3 min read"
    },
    {
      title: "LED Lighting: How Much Can You Actually Save?",
      excerpt: "Upgrading to LED downlights isn't just about aesthetics. We break down the exact energy savings you can expect on your quarterly power bill.",
      date: "July 20, 2026",
      category: "Energy Saving",
      readTime: "5 min read"
    }
  ];

  return (
    <main ref={mainRef} className={styles.main} style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{textAlign: 'center', marginBottom: '1rem'}}>Electrical Tips & News</h1>
        <p style={{textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem', color: 'var(--text-light)'}}>
          Expert advice from your local Indooroopilly Sparky.
        </p>

        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <article key={idx} className={`blog-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>{post.date}</span>
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.cardFooter}>
                <span className={styles.readTime}>{post.readTime}</span>
                <span className={styles.readMore}>Read Article &rarr;</span>
              </div>
            </article>
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '4rem'}}>
           <p style={{color: 'var(--text-light)', fontStyle: 'italic'}}>More articles coming soon...</p>
        </div>
      </div>
    </main>
  );
}