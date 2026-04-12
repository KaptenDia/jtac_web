import { Link } from "react-router-dom";
import { products } from "../data/content";
import Button from "../components/ui/Button";
import styles from "./Solutions.module.css";
import { ArrowRight } from "lucide-react";

const productBgImages = {
  "helicopter-simulator":
    "https://images.unsplash.com/photo-1621528079827-406e91ce54e0?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=900&q=80",
  "tank-simulator":
    "https://images.unsplash.com/photo-1719421978016-a03df5640e1c?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=900&q=80",
  "gun-simulator":
    "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=900&q=80",
  "flight-training-device":
    "https://plus.unsplash.com/premium_photo-1723527888965-59c5ec1d89de?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=900&q=80",
  gfac: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  "vts-helicopter":
    "https://images.unsplash.com/photo-1576053438572-af7be7ac4fa0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=900&q=80",
};

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className={styles.badge}>Our Solutions</span>
          <h1 className={styles.heroTitle}>
            Simulation and <span className={styles.accent}>Immersive</span>{" "}
            Training Solutions
          </h1>
          <p className={styles.heroSub}>
            JTAC Immersive Technology develops advanced simulation and immersive
            training systems designed to support modern defense, aviation, and
            professional training environments.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <p className={styles.intro}>
            Our solutions combine realistic simulation, immersive digital
            environments, and interactive technologies to help organizations
            improve operational readiness, training effectiveness, and knowledge
            retention.
          </p>
          <p className={styles.intro}>
            From aviation simulation to tactical and procedural training
            systems, our platforms enable organizations to deliver safe,
            efficient, and scalable training experiences.
          </p>
        </div>
      </section>

      {/* Products */}
      <section
        className="section"
        style={{ background: "var(--color-gray-100)", paddingTop: 0 }}
      >
        <div className={styles.scrollWrapper}>
          <div className={styles.row}>
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/solutions/${product.slug}`}
                className={styles.card}
                style={{
                  backgroundImage: `url(${productBgImages[product.slug]})`,
                }}
              >
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <product.icon size={22} />
                  </div>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardDesc}>{product.shortDescription}</p>
                  <span className={styles.cardLink}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <h2 className={styles.ctaTitle}>
            Transform Your Training with Immersive Simulation
          </h2>
          <p className={styles.ctaCopy}>
            Discover how JTAC Immersive Technology can help your organization
            build safer, smarter, and more effective training environments.
          </p>
          <Button
            href="mailto:support@jtactechnology.com?subject=Request%20a%20Demo"
            variant="primary"
            size="lg"
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </>
  );
}
