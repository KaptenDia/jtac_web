import { solutions } from "../../../data/content";
import SectionHeader from "../../ui/SectionHeader";
import styles from "./SolutionsOverview.module.css";

const bgImages = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&q=80",
  "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=900&q=80",
];

export default function SolutionsOverview() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <SectionHeader
          tag="What We Offer"
          title="Our Solutions"
          subtitle="We develop immersive technology solutions designed to enhance learning, training, and digital interaction across industries."
        />
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.row}>
          {solutions.map((item, i) => (
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
