import { useParams, Navigate, Link } from "react-router-dom";
import { blogPosts } from "../data/content";
import styles from "./BlogDetail.module.css";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className={styles.category}>{post.category}</span>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.heroMeta}>
            <span className={styles.metaItem}>
              <User size={14} />
              {post.author}
            </span>
            <span className={styles.metaItem}>
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className={styles.metaItem}>
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className={styles.article}>
        <div className="container">
          <div className={styles.articleInner}>
            {post.content.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImage}>
                    <img src={r.image} alt={r.title} />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedBadge}>{r.category}</span>
                    <h3 className={styles.relatedName}>{r.title}</h3>
                    <span className={styles.relatedMeta}>
                      {formatDate(r.date)} · {r.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
