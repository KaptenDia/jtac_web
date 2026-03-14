import { useParams, Navigate, Link } from "react-router-dom";
import { products } from "../data/content";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import styles from "./ProductDetail.module.css";
import { CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";

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

// Different images for feature cards per product
const featureBgSets = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&q=80",
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/solutions" replace />;

  const Icon = product.icon;
  const heroBgUrl = productBgImages[slug];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={heroBgUrl ? { backgroundImage: `url(${heroBgUrl})` } : {}}
        />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Link to="/solutions" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Solutions
          </Link>
          <div className={styles.heroIcon}>
            <Icon size={40} />
          </div>
          <h1 className={styles.heroTitle}>{product.title}</h1>
          <p className={styles.heroSub}>{product.heroDescription}</p>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <div
          className="container"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <p className={styles.bodyText}>{product.subDescription}</p>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SectionHeader
            tag="Features"
            title={`${product.title} Features`}
            light
          />
        </div>
        <div
          className={styles.scrollWrapper}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className={styles.row}>
            {product.features.map((f, i) => (
              <div
                key={f.title}
                className={styles.card}
                style={{
                  backgroundImage: `url(${featureBgSets[i % featureBgSets.length]})`,
                }}
              >
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <ChevronRight size={22} />
                  </div>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                  <p className={styles.cardDesc}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className={styles.advSection}>
        <div className={styles.advGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SectionHeader tag="Advantages" title="Key Advantages" light />
          <div className={styles.advantagesList}>
            {product.advantages.map((adv) => (
              <div key={adv} className={styles.advItem}>
                <CheckCircle size={20} className={styles.advCheck} />
                <span>{adv}</span>
              </div>
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
          <h2 className={styles.ctaTitle}>{product.cta.title}</h2>
          <p className={styles.ctaCopy}>{product.cta.description}</p>
          <Button to="/#cta" variant="primary" size="lg">
            {product.cta.button}
          </Button>
        </div>
      </section>
    </>
  );
}
