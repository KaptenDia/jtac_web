import SectionHeader from "../ui/SectionHeader";
import styles from "./Technology.module.css";
import { Cpu, Layers, Zap } from "lucide-react";

const techs = [
  { icon: Cpu, label: "Immersive Environments" },
  { icon: Layers, label: "Simulation Systems" },
  { icon: Zap, label: "Interactive Learning" },
];

export default function Technology() {
  return (
    <section className={`section ${styles.section}`} id="technology">
      <div className={styles.bgGlow} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeader
          tag="Technology"
          title="Powered by Advanced Immersive Technology"
          subtitle="Our technology platform integrates immersive digital environments, simulation systems, and interactive learning experiences to deliver scalable and effective training solutions."
          light
        />
        <p className={styles.copy}>
          Through innovative design and advanced digital capabilities, we enable
          organizations to create realistic environments where users can learn,
          practice, and develop critical skills.
        </p>
        <div className={styles.pillRow}>
          {techs.map((t) => (
            <div key={t.label} className={styles.pill}>
              <t.icon size={20} />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
