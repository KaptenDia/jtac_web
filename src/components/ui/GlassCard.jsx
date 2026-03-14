import styles from "./GlassCard.module.css";

export default function GlassCard({
  children,
  dark = false,
  className = "",
  hover = true,
}) {
  const cls = [
    styles.card,
    dark ? styles.dark : styles.light,
    hover ? styles.hoverable : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={cls}>{children}</div>;
}
