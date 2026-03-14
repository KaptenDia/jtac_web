import Button from "../ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gridPattern} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Immersive Technology Solutions
        </div>
        <h1 className={styles.title}>
          Immersive Technology for the{" "}
          <span className={styles.accent}>Future</span> of Learning and Training
        </h1>
        <p className={styles.subtitle}>
          JTAC Immersive Technology develops advanced immersive digital
          solutions that enable organizations to transform how people learn,
          train, and interact with complex environments.
        </p>
        <div className={styles.actions}>
          <Button to="/#cta" variant="primary" size="lg">
            Request a Demo
          </Button>
          <Button to="/solutions" variant="secondary" size="lg">
            Explore Our Solutions
          </Button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>6+</span>
            <span className={styles.statLabel}>Simulation Products</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Immersive Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>Global</span>
            <span className={styles.statLabel}>Technology Reach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
