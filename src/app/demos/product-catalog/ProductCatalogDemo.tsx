"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./product-catalog.module.css";

const products = [
  {
    name: "Desk Lamp",
    category: "Lighting",
    price: "$96",
    image: "/demos/catalog/desk-lamp.jpg",
    alt: "Minimal brass desk lamp on a warm gray background",
    tag: "Aged brass",
    source: "Feed 01",
  },
  {
    name: "Desk Tray",
    category: "Desk",
    price: "$42",
    image: "/demos/catalog/desk-tray.jpg",
    alt: "Rectangular walnut desk tray on a warm gray background",
    tag: "Walnut",
    source: "Feed 02",
  },
  {
    name: "Paper Notebook",
    category: "Stationery",
    price: "$18",
    image: "/demos/catalog/paper-notebook.jpg",
    alt: "Plain recycled-paper notebook with a charcoal spine",
    tag: "Recycled paper",
    source: "Feed 01",
  },
  {
    name: "Canvas Utility Pouch",
    category: "Accessories",
    price: "$28",
    image: "/demos/catalog/canvas-pouch.jpg",
    alt: "Muted rust canvas utility pouch on a warm gray background",
    tag: "Woven canvas",
    source: "Feed 02",
  },
];

const categories = ["All", "Lighting", "Desk", "Stationery", "Accessories"];
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
        <span>Portfolio UI sample · Example records</span>
        <Link href="/#work">Back to portfolio</Link>
      </div>

      <header className={styles.siteHeader}>
        <a className={styles.wordmark} href="#top" aria-label="Catalog Sample home">
          <span className={styles.wordmarkMark} aria-hidden="true">CS</span>
          <span>Catalog Sample</span>
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
          <p className={styles.eyebrow}>Sample catalog · Feed 01 + Feed 02</p>
          <h1>Products from multiple data feeds.</h1>
          <p className={styles.heroIntro}>
            Example records displayed in one consistent, accessible catalog.
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
              Import details
            </button>
          </div>
          <div className={styles.heroNote}>
            <span>01</span>
            <p>Each record keeps its feed label while fields use one display format.</p>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src="/demos/catalog/desk-lamp.jpg"
            alt="Minimal brass desk lamp on a warm gray background"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <div className={styles.imageLabel}>
            <span>Aged brass</span>
            <strong>Desk Lamp</strong>
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
            Each product uses the same field order while its feed label remains visible.
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
          <p className={styles.eyebrow}>Data feeds</p>
          <h2>Two sample imports</h2>
        </div>
        <div className={styles.shopStats} aria-label="Sample catalog status">
          <div><strong>2</strong><span>Data feeds</span></div>
          <div><strong>4</strong><span>Visible records</span></div>
          <div><strong>0</strong><span>Stale records</span></div>
          <div><strong>Current</strong><span>Sample status</span></div>
          <button className={`${styles.button} ${styles.buttonPrimary}`} type="button" onClick={() => setNotesOpen(true)}>
            Review import details
          </button>
        </div>
      </section>

      <section className={styles.care} id="featured">
        <div className={styles.careImage}>
          <Image
            src="/demos/catalog/canvas-pouch.jpg"
            alt="Muted rust canvas utility pouch on a warm gray background"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
          />
        </div>
        <div className={styles.careCopy}>
          <p className={styles.eyebrow}>Featured product</p>
          <h2>Canvas Utility Pouch</h2>
          <p>
            A product-detail callout for one static example record.
          </p>
          <a href="#collection">Return to collection <span>→</span></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <div className={styles.footerMark}>Catalog Sample</div>
          <p>Portfolio UI sample with fictional records.</p>
        </div>
        <div>
          <p className={styles.footerTitle}>Explore</p>
          <a href="#collection">Products</a>
          <a href="#shop-info">Sources</a>
          <a href="#featured">Featured product</a>
        </div>
        <div>
          <p className={styles.footerTitle}>Privacy</p>
          <span>No real seller</span>
          <span>No marketplace IDs</span>
          <span>No external links</span>
        </div>
        <div className={styles.footerBottom}>
          <span>Example content</span>
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
            <p className={styles.eyebrow}>Import details</p>
            <h2 id="notes-title">Shared product fields</h2>
            <p>
              Four static records show how names, availability, images, prices, and
              feed labels can be displayed together. No external account is connected.
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
