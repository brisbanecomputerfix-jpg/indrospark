import styles from "./ProblemTicker.module.css";
import { FiAlertCircle, FiZap, FiSettings } from "react-icons/fi";

export default function ProblemTicker() {
  const problems = [
    { text: "Tripping Safety Switches", icon: <FiAlertCircle /> },
    { text: "Flickering Lights", icon: <FiZap /> },
    { text: "Power Outages", icon: <FiAlertCircle /> },
    { text: "Faulty Outlets", icon: <FiZap /> },
    { text: "Switchboard Faults", icon: <FiSettings /> },
    { text: "Hot Water Systems", icon: <FiZap /> },
    { text: "Short Circuits", icon: <FiAlertCircle /> },
    { text: "Burning Smells", icon: <FiAlertCircle /> },
  ];

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          {/* Double the array for seamless infinite scrolling */}
          {[...problems, ...problems, ...problems].map((problem, i) => (
            <div key={i} className={styles.tickerItem}>
              <span className={styles.icon}>{problem.icon}</span>
              <span className={styles.text}>{problem.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
