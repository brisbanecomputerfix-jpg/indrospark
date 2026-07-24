"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import styles from './article.module.css';
import { blogPosts } from '../blogData';

import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;
  const post = blogPosts.find((p) => p.slug === slug);
  const articleRef = useRef(null);

  if (!post) {
    notFound();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-hero', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.animate-content', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
    }, articleRef);
    return () => ctx.revert();
  }, [slug]);

  return (
    <main ref={articleRef} className={styles.main}>
      <header className={styles.hero}>
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className="animate-hero">
            <span className={styles.category}>{post.category}</span>
          </div>
          <h1 className={`animate-hero ${styles.title}`}>{post.title}</h1>
          <div className={`animate-hero ${styles.meta}`}>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <article className={`animate-content ${styles.articleBody}`}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
        
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none' }}>
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </main>
  );
}
