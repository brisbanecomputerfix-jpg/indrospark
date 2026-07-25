"use client";
import QuoteEstimator from '@/components/QuoteEstimator';
import styles from '../page.module.css';

export default function QuotePage() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <QuoteEstimator />
    </main>
  );
}