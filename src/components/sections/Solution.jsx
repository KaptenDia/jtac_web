import SectionHeader from "../ui/SectionHeader";
import { CheckCircle } from "lucide-react";
import styles from "./Solution.module.css";

const points = [
  "Immersive digital environments that simulate real-world scenarios",
  "Learn by doing with safer training and deeper engagement",
  "More effective knowledge transfer through practical application",
];

export default function Solution() {
  return (
    <section className={`section ${styles.section}`} id="solution">
      <div className={styles.sectionBg} />
      <div className={styles.sectionGlow} />
      <div className={styles.sectionGlow2} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeader
          tag="Our Approach"
          title="A New Approach to Learning and Training"
          subtitle="JTAC Immersive Technology addresses these challenges through immersive digital environments that simulate real-world scenarios and interactive experiences."
          light
        />
        <div className={styles.content}>
          <div className={styles.glassPanel}>
            <p className={styles.copy}>
              Our immersive solutions allow users to learn by doing, enabling
              safer training, deeper engagement, and more effective knowledge
              transfer.
            </p>
            <p className={styles.copy}>
              By combining advanced technology with practical applications, we
              empower organizations to deliver more impactful learning and
              training experiences.
            </p>
            <ul className={styles.list}>
              {points.map((p) => (
                <li key={p} className={styles.listItem}>
                  <CheckCircle size={18} className={styles.check} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
