import { Link } from "react-router-dom";
import { blogPosts } from "../data/content";
import styles from "./Blog.module.css";
import { Calendar, Clock, ArrowRight } from "lucide-react";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGlow} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className={styles.badge}>Blog</span>
          <h1 className={styles.heroTitle}>
            Insights & <span className={styles.accent}>Updates</span>
          </h1>
          <p className={styles.heroSub}>
            Stay informed with the latest trends, insights, and news in
            immersive technology, simulation training, and digital innovation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className={styles.featuredSection}>
        <div className="container">
          <Link to={`/blog/${featured.slug}`} className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img src={featured.image} alt={featured.title} />
              <span className={styles.featuredBadge}>{featured.category}</span>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <Calendar size={14} />
                  {formatDate(featured.date)}
                </span>
                <span className={styles.metaItem}>
                  <Clock size={14} />
                  {featured.readTime}
                </span>
              </div>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <span className={styles.readMore}>
                Read Article <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className={styles.postsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <div className={styles.grid}>
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.cardBadge}>{post.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <Calendar size={13} />
                      {formatDate(post.date)}
                    </span>
                    <span className={styles.metaItem}>
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.readMore}>
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
