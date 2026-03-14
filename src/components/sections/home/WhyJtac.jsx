import { whyJtac } from "../../../data/content";
import SectionHeader from "../../ui/SectionHeader";
import styles from "./WhyJtac.module.css";

const bgImages = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=900&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
];

export default function WhyJtac() {
  return (
    <section className="section" id="why-jtac">
      <div className="container">
        <SectionHeader tag="Why Us" title="Why Choose JTAC" />
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.row}>
          {whyJtac.map((item, i) => (
            <div
              key={item.title}
              className={styles.card}
              style={{ backgroundImage: `url(${bgImages[i]})` }}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <item.icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
