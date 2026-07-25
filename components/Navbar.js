"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/areas", label: "Service Areas" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/troubleshooting", label: "Troubleshooting" },
    { href: "/quote", label: "Free Quote" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      // Basic implementation for now, redirects to a search page or shows alert
      alert(`Search feature coming soon! You searched for: ${searchQuery}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <>
    <div className={styles.topBar}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Elec. Contractor Lic: REC-123456</span>
        <span><a href="tel:0468991300" style={{color: "inherit", textDecoration: "none"}}>Call 24/7: <strong>0468 991 300</strong></a></span>
      </div>
    </div>
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span style={{ color: "var(--primary-color)" }}>Sparky</span> Indro
        </Link>
        <div className={styles.navLinks}>
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`nav-link ${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className={styles.searchContainer}>
            <form onSubmit={handleSearchSubmit} className={`${styles.searchForm} ${isSearchOpen ? styles.searchOpen : ""}`}>
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                onBlur={() => !searchQuery && setIsSearchOpen(false)}
              />
              <button 
                type={isSearchOpen ? "submit" : "button"} 
                className={styles.searchButton}
                onClick={() => {
                  if(!isSearchOpen) {
                    setIsSearchOpen(true);
                  }
                }}
                aria-label="Search"
              >
                <FiSearch />
              </button>
            </form>
          </div>

          <div style={{marginLeft: "1rem"}}>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
