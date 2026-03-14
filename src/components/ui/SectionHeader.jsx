import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  title,
  subtitle,
  light = false,
  centered = true,
  tag,
}) {
  return (
    <div className={`${styles.header} ${centered ? styles.centered : ""}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={`${styles.title} ${light ? styles.light : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${styles.subtitle} ${light ? styles.subtitleLight : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
