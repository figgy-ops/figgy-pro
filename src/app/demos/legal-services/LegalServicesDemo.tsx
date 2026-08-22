"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./legal-services.module.css";

const practiceAreas = [
  {
    title: "Ownership and title disputes",
    text: "Representation involving ownership history, title defects, and contested conveyances.",
  },
  {
    title: "Royalty and accounting claims",
    text: "Disputes involving payments, deductions, accounting records, and operator obligations.",
  },
  {
    title: "Lease interpretation",
    text: "Matters involving contract language, termination, obligations, and lessor-lessee rights.",
  },
  {
    title: "Surface and access rights",
    text: "Property matters involving access, use, damage claims, and competing rights.",
  },
  {
    title: "Contract disputes",
    text: "Trial and appellate work where agreements and business records require close analysis.",
  },
  {
    title: "Inherited interests",
    text: "Representation involving inherited property interests, contested transfers, and recovery claims.",
  },
];

const stats = [
  { label: "Jurisdiction", value: "Texas" },
  { label: "Practice", value: "Trial and appellate" },
  { label: "Coverage", value: "Statewide" },
  { label: "Focus", value: "Energy and property matters" },
];

const focusableSelector =
  "button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])";

export default function LegalServicesDemo() {
  const [profileOpen, setProfileOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!profileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const profileTrigger = openButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
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
      profileTrigger?.focus();
    };
  }, [profileOpen]);

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to main content</a>

      <div className={styles.demoBar}>
        <span>Sanitized interface sample</span>
        <Link href="/#work">Back to portfolio</Link>
      </div>

      <header className={styles.siteHeader}>
        <a className={styles.brand} href="#top" aria-label="Northline Legal demo home">
          <span className={styles.brandName}>Northline Legal</span>
          <span className={styles.brandLine}>Energy and Property Litigation</span>
        </a>
        <nav className={styles.primaryNav} aria-label="Demo navigation">
          <a href="#about">About</a>
          <a href="#attorney">Attorney</a>
          <a href="#practice">Practice Areas</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="top" className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroRule} aria-hidden="true" />
            <p className={styles.eyebrow}>Texas · Statewide trial and appellate practice</p>
            <h1>Texas energy and property litigation counsel.</h1>
            <p className={styles.lede}>
              A formal legal-services interface for complex matters involving
              ownership, contracts, title history, and property rights.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href="#practice">Review practice areas</a>
              <a className={styles.buttonSecondary} href="#contact">Office information</a>
            </div>
            <p className={styles.regions}>West Texas · East Texas · Gulf Coast · Statewide</p>
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.twoColumn}`}>
          <div>
            <p className={styles.sectionKicker}>About the Firm</p>
            <h2>Focused representation for Texas energy matters.</h2>
          </div>
          <div className={styles.bodyCopy}>
            <p>
              The interface organizes a specialized practice around clear service
              descriptions, attorney background, and direct paths to office information.
            </p>
            <p>
              Client-specific biography, outcomes, addresses, and contact details have
              been replaced while the original site structure remains intact.
            </p>
          </div>
        </section>

        <section id="attorney" className={`${styles.section} ${styles.attorney}`}>
          <div className={styles.attorneyHeading}>
            <p className={styles.sectionKicker}>Attorney Profile</p>
            <h2>Avery Cole</h2>
          </div>

          <div className={styles.attorneyGrid}>
            <article className={styles.profileCard}>
              <div className={styles.headshotWrap} aria-hidden="true">
                <span className={styles.headshotPlaceholder}>AC</span>
              </div>
              <div className={styles.profileBio}>
                <p className={styles.profileCardName}>Avery Cole</p>
                <p>
                  Fictional profile content demonstrates the original biography card
                  without exposing a real attorney&apos;s identity or history.
                </p>
                <button
                  ref={openButtonRef}
                  className={styles.profileCardButton}
                  type="button"
                  onClick={() => setProfileOpen(true)}
                >
                  View full profile
                </button>
              </div>
            </article>

            <div className={styles.attorneyIntro}>
              <p>
                The source design pairs a substantial profile card with narrative
                experience and a compact grid of practice facts.
              </p>
              <p>
                The recreated interaction keeps the source layout and adds explicit
                focus placement, Escape dismissal, focus containment, and focus return.
              </p>
              <dl className={styles.statGrid}>
                {stats.map((stat) => (
                  <div className={styles.statCard} key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="practice" className={`${styles.section} ${styles.practice}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Practice Areas</p>
            <h2>Energy, contract, title, and property litigation.</h2>
            <p>
              Practice areas are outlined plainly so clients and referring counsel
              can understand the litigation scope quickly.
            </p>
          </div>
          <div className={styles.cards}>
            {practiceAreas.map((area) => (
              <article className={styles.card} key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.supreme}`}>
          <p className={styles.sectionKicker}>Appellate Experience</p>
          <h2>Depth for document-intensive property disputes.</h2>
          <p>
            This section preserves the source site&apos;s high-contrast appellate callout
            without retaining case names, outcomes, or client claims.
          </p>
        </section>

        <section id="contact" className={`${styles.section} ${styles.officeContact}`}>
          <div>
            <p className={styles.sectionKicker}>Office Information</p>
            <h2>Contact the firm.</h2>
            <p>Production office and contact details are intentionally omitted.</p>
          </div>
          <div className={styles.officeInformationGrid}>
            <article className={styles.officeDetailCard}>
              <h3>Northline Legal</h3>
              <p>Fictional name used for this sanitized interface demonstration.</p>
            </article>
            <article className={styles.officeDetailCard}>
              <h3>Contact</h3>
              <p>Phone, email, fax, and domain removed.</p>
            </article>
            <article className={styles.officeDetailCard}>
              <h3>Office Hours</h3>
              <p>Scheduling details removed.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Sanitized legal-services interface sample.</p>
        <p>No client, attorney, case, or contact data is connected.</p>
      </footer>

      {profileOpen ? (
        <div className={styles.overlay} onMouseDown={() => setProfileOpen(false)}>
          <div
            className={styles.dialog}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-dialog-title"
            tabIndex={-1}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              ref={closeButtonRef}
              type="button"
              aria-label="Close full profile"
              onClick={() => setProfileOpen(false)}
            >
              ×
            </button>
            <div className={styles.dialogLayout}>
              <span className={styles.modalHeadshot} aria-hidden="true">AC</span>
              <div>
                <p className={styles.sectionKicker}>Attorney Profile</p>
                <h2 id="profile-dialog-title">Avery Cole</h2>
                <p>
                  Avery Cole is a fictional name used for this sanitized demonstration.
                  The original profile layout and accessible dialog behavior are preserved;
                  personal history and contact information are not.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
