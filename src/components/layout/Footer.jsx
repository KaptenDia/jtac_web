import { Link } from "react-router-dom";
import { footerLinks } from "../../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoAccent}>JTAC</span>
              <span className={styles.logoText}>Immersive Technology</span>
            </Link>
            <p className={styles.brandDesc}>
              Developing advanced immersive digital solutions that enable
              organizations to transform how people learn, train, and interact
              with complex environments.
            </p>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Company</h4>
            {footerLinks.company.map((link) => (
              <Link key={link.label} to={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Contact</h4>
            {footerLinks.contact.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.link}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Legal</h4>
            {footerLinks.legal.map((link) => (
              <Link key={link.label} to={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {year} JTAC Immersive Technology Pte. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
