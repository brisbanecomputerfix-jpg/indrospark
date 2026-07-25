"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { searchIndex } from "@/utils/searchIndex";
import styles from "./search.module.css";
import { FiSearch, FiChevronRight } from "react-icons/fi";

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!q) {
      setResults([]);
      return;
    }
    const query = q.toLowerCase();
    const filtered = searchIndex.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      const matchKeywords = item.keywords.some(k => k.toLowerCase().includes(query));
      return matchTitle || matchDesc || matchKeywords;
    });
    setResults(filtered);
  }, [q]);

  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>Search Results</h1>
      
      <div className={styles.searchBox}>
        <FiSearch className={styles.searchIcon} />
        <input 
          type="text" 
          defaultValue={q}
          readOnly
          className={styles.inputDisplay}
        />
      </div>

      <p className={styles.summary}>
        Showing {results.length} result{results.length !== 1 ? "s" : ""} for <strong>&quot;{q}&quot;</strong>
      </p>

      {results.length > 0 ? (
        <div className={styles.resultsList}>
          {results.map((result) => (
            <Link key={result.id} href={result.url} className={styles.resultCard}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{result.category}</span>
                <FiChevronRight className={styles.arrow} />
              </div>
              <h2 className={styles.resultTitle}>{result.title}</h2>
              <p className={styles.resultDesc}>{result.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <h3>We couldn't find what you were looking for.</h3>
          <p>Try searching for something else, or explore our services directly.</p>
          <div className={styles.actions}>
            <Link href="/services" className="magnetic-btn" style={{display:"inline-block"}}>View Services</Link>
            <Link href="/quote" className="magnetic-btn" style={{display:"inline-block", background: "var(--text-color)", color: "var(--bg-color)"}}>Get a Quote</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className={styles.main} style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <Suspense fallback={<div className="container">Loading search...</div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}
