import { coreValues, capabilities, aboutWhyUs } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import styles from "./About.module.css";
import { Eye, Rocket, Lightbulb, Target, Users, Award } from "lucide-react";

const valueIcons = [Lightbulb, Target, Users, Award];

const capBgImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&q=80",
  "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=900&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
];

const whyUsBgImages = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
];

const valueBgImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=900&q=80",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className={styles.badge}>About Us</span>
          <h1 className={styles.heroTitle}>
            Pioneering <span className={styles.accent}>Immersive</span>{" "}
            Technology Solutions
          </h1>
          <p className={styles.heroSub}>
            JTAC Immersive Technology Pte. Ltd is a technology company
            incorporated in Singapore, established to develop and deliver
            innovative immersive digital experiences.
          </p>
        </div>
      </section>

      {/* About Body */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div>
              <SectionHeader
                tag="Who We Are"
                title="Building the Future of Digital Interaction"
                centered={false}
              />
              <p className={styles.copy}>
                Headquartered in Singapore, JTAC Immersive Technology focuses on
                building advanced solutions that integrate emerging technologies
                to enhance training, learning, and digital interaction across
                industries.
              </p>
              <p className={styles.copy}>
                Through the use of immersive platforms and interactive
                technologies, the company aims to help organizations transform
                how people learn, collaborate, and experience digital
                environments.
              </p>
              <p className={styles.copy}>
                Driven by innovation and a commitment to practical technology
                applications, JTAC Immersive Technology seeks to support
                businesses, institutions, and communities in adopting
                next-generation digital tools that improve efficiency,
                engagement, and knowledge transfer.
              </p>
            </div>
            <div className={styles.visionMission}>
              <GlassCard className={styles.vmCard}>
                <div className={styles.vmIcon}>
                  <Eye size={24} />
                </div>
                <h3 className={styles.vmTitle}>Vision</h3>
                <p className={styles.vmText}>
                  To become a global leader in immersive technology solutions
                  that transform how people learn, train, and experience the
                  digital world.
                </p>
              </GlassCard>
              <GlassCard className={styles.vmCard}>
                <div className={styles.vmIcon}>
                  <Rocket size={24} />
                </div>
                <h3 className={styles.vmTitle}>Mission</h3>
                <p className={styles.vmText}>
                  To develop innovative immersive technology solutions that
                  enable organizations to enhance learning, improve knowledge
                  transfer, create engaging digital experiences, and accelerate
                  digital transformation.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SectionHeader tag="What We Do" title="Our Capabilities" light />
        </div>
        <div
          className={styles.scrollWrapper}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className={styles.row}>
            {capabilities.map((item, i) => (
              <div
                key={item.title}
                className={styles.card}
                style={{ backgroundImage: `url(${capBgImages[i]})` }}
              >
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <SectionHeader tag="Why Choose Us" title="What Sets Us Apart" />
        </div>
        <div className={styles.scrollWrapper}>
          <div className={styles.row}>
            {aboutWhyUs.map((item, i) => {
              const Icon = valueIcons[i] || Lightbulb;
              return (
                <div
                  key={item.title}
                  className={styles.card}
                  style={{ backgroundImage: `url(${whyUsBgImages[i]})` }}
                >
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardIcon}>
                      <Icon size={22} />
                    </div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SectionHeader tag="Our Values" title="Core Values" light />
        </div>
        <div
          className={styles.scrollWrapper}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className={styles.row}>
            {coreValues.map((val, i) => {
              const Icon = valueIcons[i] || Lightbulb;
              return (
                <div
                  key={val.title}
                  className={styles.card}
                  style={{ backgroundImage: `url(${valueBgImages[i]})` }}
                >
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardIcon}>
                      <Icon size={22} />
                    </div>
                    <h3 className={styles.cardTitle}>{val.title}</h3>
                    <p className={styles.cardDesc}>{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <SectionHeader
            title="Ready to Transform Your Organization?"
            subtitle="Discover how JTAC's immersive technology solutions can elevate your training and learning programs."
          />
          <Button to="/#cta" variant="primary" size="lg">
            Request a Demo
          </Button>
        </div>
      </section>
    </>
  );
}
