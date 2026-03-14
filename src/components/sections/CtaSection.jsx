import Button from "../ui/Button";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.glow} />
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <h2 className={styles.title}>
          Experience the Future of Learning and Training
        </h2>
        <p className={styles.copy}>
          Discover how immersive technology can transform the way your
          organization trains, learns, and develops critical capabilities.
        </p>
        <Button to="/#cta" variant="primary" size="lg">
          Request a Demo
        </Button>
      </div>
    </section>
  );
}
