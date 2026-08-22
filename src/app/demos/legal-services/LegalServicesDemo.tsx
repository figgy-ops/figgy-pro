"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./legal-services.module.css";

const practiceAreas = [
  {
    title: "Contract review and disputes",
    text: "Review of agreements, obligations, timelines, and related business records.",
  },
  {
    title: "Business claims",
    text: "Civil matters involving payments, services, records, and commercial relationships.",
  },
  {
    title: "Employment matters",
    text: "Advice and representation involving workplace agreements and disputes.",
  },
  {
    title: "Regulatory matters",
    text: "General advice involving policies, filings, deadlines, and administrative requirements.",
  },
  {
    title: "Administrative appeals",
    text: "Review and appeal work involving agency records, deadlines, and written decisions.",
  },
  {
    title: "General counsel",
    text: "Practical advice for policies, contracts, risk review, and recurring legal questions.",
  },
];

const stats = [
  { label: "Profile", value: "Example only" },
  { label: "Practice", value: "Civil and business" },
  { label: "Coverage", value: "Regional" },
  { label: "Availability", value: "By appointment" },
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
        <span>Portfolio UI sample · Example content</span>
        <Link href="/#work">Back to portfolio</Link>
      </div>

      <header className={styles.siteHeader}>
        <a className={styles.brand} href="#top" aria-label="Sample Legal Office home">
          <span className={styles.brandName}>Sample Legal Office</span>
          <span className={styles.brandLine}>Counsel and Representation</span>
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
            <p className={styles.eyebrow}>Regional · Civil and business practice</p>
            <h1>Clear counsel for complex business matters.</h1>
            <p className={styles.lede}>
              A formal legal-services interface for contracts, disputes,
              transactions, and appeals.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href="#practice">Review practice areas</a>
              <a className={styles.buttonSecondary} href="#contact">Office information</a>
            </div>
            <p className={styles.regions}>Advisory · Disputes · Transactions · Appeals</p>
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.twoColumn}`}>
          <div>
            <p className={styles.sectionKicker}>About the Firm</p>
            <h2>Clear information and direct navigation.</h2>
          </div>
          <div className={styles.bodyCopy}>
            <p>
              The interface organizes services, attorney background, and office
              information without a marketing-heavy front page.
            </p>
            <p>
              All names, credentials, locations, outcomes, and contact details on this
              page are example content.
            </p>
          </div>
        </section>

        <section id="attorney" className={`${styles.section} ${styles.attorney}`}>
          <div className={styles.attorneyHeading}>
            <p className={styles.sectionKicker}>Attorney Profile</p>
            <h2>Sample Attorney</h2>
          </div>

          <div className={styles.attorneyGrid}>
            <article className={styles.profileCard}>
              <div className={styles.headshotWrap} aria-hidden="true">
                <span className={styles.headshotPlaceholder}>SA</span>
              </div>
              <div className={styles.profileBio}>
                <p className={styles.profileCardName}>Sample Attorney</p>
                <p>
                  Example biography copy. No real person, credential, employer, or
                  case history is represented.
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
                The profile area presents background information beside a compact
                grid of practice details.
              </p>
              <p>
                The profile opens in a keyboard-accessible dialog with Escape
                dismissal, contained focus, and focus return.
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
            <h2>Civil, business, and advisory services.</h2>
            <p>
              Practice areas are listed plainly so visitors can understand the
              sample service structure quickly.
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

        <section className={`${styles.section} ${styles.highlight}`}>
          <p className={styles.sectionKicker}>Appeals and Review</p>
          <h2>Support for document-heavy disputes and appeals.</h2>
          <p>
            Example copy only. No real case names, outcomes, courts, or client
            claims are included.
          </p>
        </section>

        <section id="contact" className={`${styles.section} ${styles.officeContact}`}>
          <div>
            <p className={styles.sectionKicker}>Office Information</p>
            <h2>Contact the firm.</h2>
              <p>Office and contact details are not included in this sample.</p>
          </div>
          <div className={styles.officeInformationGrid}>
            <article className={styles.officeDetailCard}>
              <h3>Sample Legal Office</h3>
              <p>Placeholder name used only for this UI sample.</p>
            </article>
            <article className={styles.officeDetailCard}>
              <h3>Contact</h3>
              <p>Phone, email, fax, and domain are not included.</p>
            </article>
            <article className={styles.officeDetailCard}>
              <h3>Office Hours</h3>
              <p>Scheduling details are not included.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Portfolio UI sample.</p>
        <p>Example content only.</p>
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
              <span className={styles.modalHeadshot} aria-hidden="true">SA</span>
              <div>
                <p className={styles.sectionKicker}>Attorney Profile</p>
                <h2 id="profile-dialog-title">Sample Attorney</h2>
                <p>
                  This example profile is not based on a real person. Names,
                  credentials, employment history, and contact details are not included.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
