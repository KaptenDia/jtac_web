import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import jtacLogo from "../../assets/images/jtac_logo.png";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Blog", href: "/blog" },
];

/* -------- background-luminance helpers -------- */

function parseRgb(str) {
  const m = str.match(
    /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([0-9.]+))?\s*\)/,
  );
  if (!m) return null;
  return {
    r: +m[1],
    g: +m[2],
    b: +m[3],
    a: m[4] !== undefined ? parseFloat(m[4]) : 1,
  };
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: 1 };
}

function parseGradientColors(str) {
  const colors = [];
  const re = /#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)/g;
  let m;
  while ((m = re.exec(str)) !== null) {
    const c = m[0].startsWith("#") ? hexToRgb(m[0]) : parseRgb(m[0]);
    if (c && c.a > 0.3) colors.push(c);
  }
  return colors;
}

function avgColor(colors) {
  if (!colors.length) return null;
  const s = colors.reduce(
    (a, c) => ({ r: a.r + c.r, g: a.g + c.g, b: a.b + c.b }),
    { r: 0, g: 0, b: 0 },
  );
  return {
    r: s.r / colors.length,
    g: s.g / colors.length,
    b: s.b / colors.length,
  };
}

function luminance({ r, g, b }) {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function detectBgFromElement(startEl, navbarEl) {
  let el = startEl;
  while (el && el !== document.documentElement) {
    if (navbarEl.contains(el)) {
      el = el.parentElement;
      continue;
    }
    const st = window.getComputedStyle(el);
    const bgImg = st.backgroundImage;
    if (bgImg && bgImg !== "none" && bgImg.includes("gradient")) {
      const colors = parseGradientColors(bgImg);
      const avg = avgColor(colors);
      if (avg) return avg;
    }
    const bgColor = st.backgroundColor;
    if (bgColor) {
      const c = parseRgb(bgColor);
      if (c && c.a > 0.3) return c;
    }
    el = el.parentElement;
  }
  return { r: 255, g: 255, b: 255 };
}

/* -------- component -------- */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* detect background behind the navbar */
  useEffect(() => {
    let rafId = null;
    const detect = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height * 0.5;
      const els = document.elementsFromPoint(x, y);
      for (const el of els) {
        if (headerRef.current.contains(el)) continue;
        const color = detectBgFromElement(el, headerRef.current);
        setIsDarkBg(luminance(color) < 0.4);
        return;
      }
      setIsDarkBg(false);
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        detect();
      });
    };
    const timer = setTimeout(detect, 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuActive : ""} ${isDarkBg ? styles.darkBg : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img
            src={jtacLogo}
            alt="JTAC Immersive Technology"
            className={styles.logoImg}
          />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${styles.navLink} ${location.pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.navCta}>
            <Button
              href="mailto:support@jtactechnology.com?subject=Request%20a%20Demo"
              variant="primary"
              size="sm"
            >
              Request a Demo
            </Button>
          </div>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
