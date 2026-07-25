
import styles from "./page.module.css";
import AnimatedLogo from "@/components/AnimatedLogo";
import SwitchboardBackground from "@/components/SwitchboardBackground";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import MeetTheTeam from "@/components/MeetTheTeam";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustBadges from "@/components/TrustBadges";
import Process from "@/components/Process";
import RecentJobs from "@/components/RecentJobs";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import ProblemTicker from "@/components/ProblemTicker";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <SwitchboardBackground />
        <div className={styles.heroTextContainer}>
          <AnimatedLogo />
          <h1 className={styles.title}>Sparky Indro</h1>
          <h2 style={{fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--text-color)", marginTop: "1rem"}}>
            Best Electrician in Indooroopilly
          </h2>
          <p className={styles.subtitle}>
            30 Years of Experience. Unmatched Quality. Local Aussie Sparky.
          </p>
          <a href="tel:0468991300" className={`${styles.ctaButton} magnetic-btn`}>
            Call 0468 991 300
          </a>
        </div>
      </section>

      <ProblemTicker />

      <section className={`${styles.section} container`}>
        <h2 style={{ textAlign: "center" }}>Our Premium Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Residential Electrical</h3>
            <p>From custom lighting design to switchboard upgrades, we bring 30 years of expertise to your home in Indooroopilly.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Emergency Repairs</h3>
            <p>Power out? Sparking wires? We provide fast, reliable emergency services when you need us most.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Commercial Fit-outs</h3>
            <p>State-of-the-art electrical fit-outs for modern businesses, designed for efficiency and aesthetics.</p>
          </div>
        </div>
      </section>

      <Testimonials />
      <MeetTheTeam />
      <About />
      <WhyChooseUs />
      <TrustBadges />
      <Process />
      <RecentJobs />
      <FAQ />

      <section className={styles.hero} style={{minHeight: "50vh"}}>
        <h2>Ready to get started?</h2>
        <Link href="/quote" className={`${styles.ctaButton} magnetic-btn`}>
          Get a Free Quote Online
        </Link>
      </section>
    </main>
  );
}
