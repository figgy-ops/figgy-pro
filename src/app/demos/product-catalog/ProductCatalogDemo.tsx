"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./product-catalog.module.css";

const products = [
  {
    name: "Studio Cooking Pot",
    category: "Cookware",
    price: "$64",
    image: "/demos/catalog/studio-pot.jpg",
    alt: "Unglazed clay cooking pot with a fitted lid",
    tag: "Hand-finished clay",
    source: "Source A",
  },
  {
    name: "Stone Vessel",
    category: "Home decor",
    price: "$58",
    image: "/demos/catalog/stone-vessel.jpg",
    alt: "Neutral stone-colored vessel on a plain background",
    tag: "Wheel thrown",
    source: "Source B",
  },
  {
    name: "Natural Fiber Fill",
    category: "Natural fibers",
    price: "$22",
    image: "/demos/catalog/natural-fiber.jpg",
    alt: "Loose natural cotton fiber on a warm white background",
    tag: "Natural cotton",
    source: "Source A",
  },
  {
    name: "Clay Luminary",
    category: "Home decor",
    price: "$71",
    image: "/demos/catalog/clay-light.jpg",
    alt: "Handmade clay luminary with carved openings",
    tag: "Hand carved",
    source: "Source B",
  },
];

const categories = ["All", "Cookware", "Natural fibers", "Home decor"];
const focusableSelector =
  "button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])";

export default function ProductCatalogDemo() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [notesOpen, setNotesOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  useEffect(() => {
    if (!notesOpen) return;

    const previousOverflow = document.body.style.overflow;
    const notesTrigger = openButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNotesOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      notesTrigger?.focus();
    };
  }, [notesOpen]);

  return (
    <main className={styles.page} id="main-content">
      <a className={styles.skipLink} href="#collection">Skip to products</a>

      <div className={styles.demoBar}>
        <span>Sanitized interface sample</span>
        <Link href="/#work">Back to portfolio</Link>
      </div>

      <header className={styles.siteHeader}>
        <a className={styles.wordmark} href="#top" aria-label="Fieldwork Studio demo home">
          <span className={styles.wordmarkMark} aria-hidden="true">FS</span>
          <span>Fieldwork Studio</span>
        </a>
        <nav aria-label="Demo navigation">
          <a href="#collection">Products</a>
          <a href="#shop-info">Sources</a>
          <a href="#featured">Featured</a>
        </nav>
        <a className={styles.headerShop} href="#collection">
          View the collection <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Independent catalog · Source A + Source B</p>
          <h1>Goods from independent makers.</h1>
          <p className={styles.heroIntro}>
            Pottery, natural fibers, and home goods normalized from separate
            storefront sources into one accessible catalog.
          </p>
          <div className={styles.heroActions}>
            <a className={`${styles.button} ${styles.buttonPrimary}`} href="#collection">
              View products
            </a>
            <button
              ref={openButtonRef}
              className={styles.textButton}
              type="button"
              onClick={() => setNotesOpen(true)}
            >
              <span className={styles.play} aria-hidden="true">i</span>
              Interface notes
            </button>
          </div>
          <div className={styles.heroNote}>
            <span>01</span>
            <p>Records retain their source while names and identifiers are normalized.</p>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src="/demos/catalog/studio-pot.jpg"
            alt="Unglazed clay cooking pot with a fitted lid"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <div className={styles.imageLabel}>
            <span>Hand-finished clay</span>
            <strong>Studio Cooking Pot</strong>
          </div>
        </div>
      </section>

      <section className={`${styles.collection} ${styles.section}`} id="collection">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Selected products</p>
            <h2>Current collection</h2>
          </div>
          <p>
            Products are displayed in a consistent structure while their source
            assignment remains visible.
          </p>
        </div>

        <div className={styles.filters} role="group" aria-label="Filter products">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.productGrid} aria-live="polite">
          {visibleProducts.map((product) => (
            <article className={styles.productCard} key={product.name}>
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <span>{product.tag}</span>
              </div>
              <div className={styles.productMeta}>
                <div>
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <strong>{product.price}</strong>
              </div>
              <div className={styles.productLinks}>
                <span>{product.source}</span>
                <span>In stock</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.story} ${styles.section}`} id="shop-info">
        <div className={styles.storyNumber}>02</div>
        <div>
          <p className={styles.eyebrow}>Catalog sources</p>
          <h2>Two storefront adapters</h2>
        </div>
        <div className={styles.shopStats} aria-label="Sanitized catalog status">
          <div><strong>2</strong><span>Source adapters</span></div>
          <div><strong>4</strong><span>Visible records</span></div>
          <div><strong>0</strong><span>Stale records</span></div>
          <div><strong>Current</strong><span>Sample status</span></div>
          <button className={`${styles.button} ${styles.buttonPrimary}`} type="button" onClick={() => setNotesOpen(true)}>
            Review integration notes
          </button>
        </div>
      </section>

      <section className={styles.care} id="featured">
        <div className={styles.careImage}>
          <Image
            src="/demos/catalog/clay-light.jpg"
            alt="Handmade clay luminary with carved openings"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
          />
        </div>
        <div className={styles.careCopy}>
          <p className={styles.eyebrow}>Featured product</p>
          <h2>Clay Luminary</h2>
          <p>
            A product-detail callout preserves the source storefront&apos;s editorial
            layout without exposing a seller name, marketplace URL, or product listing.
          </p>
          <a href="#collection">Return to collection <span>→</span></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <div className={styles.footerMark}>Fieldwork Studio</div>
          <p>Sanitized catalog interface for independent product sources.</p>
        </div>
        <div>
          <p className={styles.footerTitle}>Explore</p>
          <a href="#collection">Products</a>
          <a href="#shop-info">Sources</a>
          <a href="#featured">Featured product</a>
        </div>
        <div>
          <p className={styles.footerTitle}>Privacy</p>
          <span>No seller identity</span>
          <span>No storefront IDs</span>
          <span>No external links</span>
        </div>
        <div className={styles.footerBottom}>
          <span>Sanitized demonstration</span>
          <span>Interface sample</span>
        </div>
      </footer>

      {notesOpen ? (
        <div className={styles.modal} onMouseDown={() => setNotesOpen(false)}>
          <div
            className={styles.notesShell}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="notes-title"
            tabIndex={-1}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className={styles.modalClose}
              type="button"
              aria-label="Close interface notes"
              onClick={() => setNotesOpen(false)}
            >
              ×
            </button>
            <p className={styles.eyebrow}>Interface notes</p>
            <h2 id="notes-title">Multi-source presentation</h2>
            <p>
              The production concept normalized product names, availability, images,
              prices, and links from separate storefront sources. This portfolio demo
              uses static, anonymous records and does not connect to a seller account.
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
