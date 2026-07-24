import sys
path = '/Users/mac/.gemini/antigravity-ide/brain/559b1c3b-5eb3-4381-942f-71841fd12f81/sparky-indro/app/blog/page.js'

new_content = """"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.css';
import { blogPosts } from './blogData';

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

  return (
    <main ref={mainRef} className={styles.main} style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{textAlign: 'center', marginBottom: '1rem'}}>Electrical Tips & News</h1>
        <p style={{textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem', color: 'var(--text-light)'}}>
          Expert advice from your local Indooroopilly Sparky.
        </p>

        <div className={styles.grid}>
          {blogPosts.map((post, idx) => (
            <Link href={`/blog/${post.slug}`} key={idx} className={`blog-card ${styles.card}`}>
              <div className={styles.imageContainer}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.cardContent}>
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
              </div>
            </Link>
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '4rem'}}>
           <p style={{color: 'var(--text-light)', fontStyle: 'italic'}}>More articles coming soon...</p>
        </div>
      </div>
    </main>
  );
}
"""
with open(path, 'w') as f:
    f.write(new_content)
