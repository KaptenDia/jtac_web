import SectionHeader from "../ui/SectionHeader";
import styles from "./Problem.module.css";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Low Retention",
    desc: "Traditional methods struggle with knowledge retention in complex training scenarios.",
  },
  {
    icon: TrendingDown,
    title: "Slow Skill Growth",
    desc: "Conventional training fails to keep pace with rapidly evolving industry demands.",
  },
  {
    icon: Clock,
    title: "Limited Readiness",
    desc: "Without realistic environments, workforce readiness remains a persistent challenge.",
  },
];

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <SectionHeader
              tag="The Challenge"
              title="The Challenge of Modern Training and Learning"
              centered={false}
            />
            <p className={styles.copy}>
              Organizations today face increasing challenges in delivering
              effective training and knowledge transfer. Traditional learning
              methods often struggle to keep pace with rapidly evolving
              industries, complex operational environments, and the growing need
              for hands-on experience.
            </p>
            <p className={styles.copy}>
              Without realistic and engaging training environments,
              organizations risk reduced knowledge retention, slower skill
              development, and limited workforce readiness.
            </p>
          </div>
          <div className={styles.cards}>
            {challenges.map((item) => (
              <div key={item.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
