"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./intern-launchpad.module.css";

type InternProfile = {
  initials: string;
  name: string;
  division: string;
  supervisor: string;
  project: string;
  bio: string;
};

const primaryCards = [
  {
    label: "Program",
    title: "FY26 Schedule",
    text: "Review program dates, weekly milestones, and required events.",
    button: "View schedule",
  },
  {
    label: "Resources",
    title: "Agency Hub and resource center",
    text: "Open common administrative and workplace references.",
    button: "Open resources",
  },
  {
    label: "Directory",
    title: "Address Book",
    text: "Find program contacts, supervisors, and participant information.",
    button: "View directory",
  },
  {
    label: "Help",
    title: "IT Helpdesk",
    text: "Get technical support for access, accounts, and devices.",
    button: "Get help",
  },
];

const divisions = ["Archeology", "Architecture", "Cemeteries", "Finance"];

const people: InternProfile[] = [
  {
    initials: "ML",
    name: "Morgan Lee",
    division: "Archeology",
    supervisor: "Division supervisor",
    project: "Collections research and records review",
    bio: "Supports research, documentation, and structured content for the summer program.",
  },
  {
    initials: "JR",
    name: "Jordan Reed",
    division: "Architecture",
    supervisor: "Program architect",
    project: "Survey documentation and resource organization",
    bio: "Works with field records, reference material, and preservation documentation.",
  },
  {
    initials: "CP",
    name: "Casey Patel",
    division: "Cemeteries",
    supervisor: "Program coordinator",
    project: "Records review and metadata cleanup",
    bio: "Assists with structured records, quality review, and internal documentation.",
  },
  {
    initials: "TB",
    name: "Taylor Brooks",
    division: "Finance",
    supervisor: "Operations manager",
    project: "Process mapping and reporting support",
    bio: "Documents program workflows and supports recurring operational reporting.",
  },
  {
    initials: "RC",
    name: "Riley Chen",
    division: "Architecture",
    supervisor: "Division supervisor",
    project: "Reference library and content review",
    bio: "Organizes internal resources and reviews content for clarity and accessibility.",
  },
  {
    initials: "AD",
    name: "Avery Davis",
    division: "Archeology",
    supervisor: "Program specialist",
    project: "Research workflow documentation",
    bio: "Maps research steps and prepares reusable documentation for the program team.",
  },
  {
    initials: "SK",
    name: "Sam Kim",
    division: "Cemeteries",
    supervisor: "Division coordinator",
    project: "Digital records quality review",
    bio: "Reviews records for completeness and supports accessible digital documentation.",
  },
  {
    initials: "NP",
    name: "Noah Perez",
    division: "Finance",
    supervisor: "Operations analyst",
    project: "Weekly reporting and process support",
    bio: "Supports structured reporting and documents recurring administrative processes.",
  },
];

const quickGuideCards = [
  {
    label: "First",
    title: "Review your schedule",
    text: "Confirm program dates, weekly requirements, and planned events.",
  },
  {
    label: "Next",
    title: "Find your division",
    text: "Use the division library for role-specific resources and references.",
  },
  {
    label: "Always",
    title: "Ask early",
    text: "Contact the program team before access or technical issues block work.",
  },
];

const supportCards = [
  {
    title: "Application support",
    text: "Questions about this workspace, content, or permissions.",
    button: "Contact application support",
  },
  {
    title: "IT Helpdesk",
    text: "Account, device, connectivity, and general technical support.",
    button: "Contact IT Helpdesk",
  },
];

const focusableSelector =
  "button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])";

export default function InternLaunchpadDemo() {
  const [selectedPerson, setSelectedPerson] = useState<InternProfile | null>(null);
  const [demoNotice, setDemoNotice] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedPerson) return;

    const previousOverflow = document.body.style.overflow;
    const profileTrigger = lastTriggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPerson(null);
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
  }, [selectedPerson]);

  const showSanitizedNotice = (resource: string) => {
    setDemoNotice(`${resource} is not connected in this sanitized interface demo.`);
  };

  const openProfile = (person: InternProfile, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setSelectedPerson(person);
  };

  return (
    <section className={styles.internHub}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.hero}>
        <div className={styles.demoUtility}>
          <span>Sanitized SPFx interface sample</span>
          <Link href="/#work">Back to portfolio</Link>
        </div>
        <div className={styles.heroShade}>
          <div className={styles.heroContent}>
            <p className={styles.agency}>Public service internship program</p>
            <h1>Intern LaunchPad</h1>
            <p className={styles.tagline}>
              A central starting point for schedules, resources, contacts,
              division links, and intern profiles.
            </p>
          </div>
        </div>
      </header>

      <main className={styles.main} id="main-content">
        <section className={styles.intro}>
          <div>
            <p className={styles.kicker}>Welcome</p>
            <h2>Start here for the FY26 internship program.</h2>
          </div>
          <p>
            Use this workspace to find the program information, contacts, and
            resources needed throughout the summer.
          </p>
        </section>

        <section className={styles.primaryGrid} aria-label="Program resources">
          {primaryCards.map((card) => (
            <article className={styles.primaryCard} key={card.title}>
              <p className={styles.cardLabel}>{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button type="button" onClick={() => showSanitizedNotice(card.title)}>
                {card.button}
              </button>
            </article>
          ))}
        </section>

        <p className={styles.demoNotice} aria-live="polite">{demoNotice}</p>

        <section className={styles.supervisorBand}>
          <div className={styles.supervisorCopy}>
            <p className={styles.kicker}>Supervisor access</p>
            <h2>Weekly time and supervisor materials</h2>
            <p>
              Open the weekly time form and supporting references used by supervisors.
            </p>
          </div>
          <button type="button" onClick={() => showSanitizedNotice("Supervisor access")}>
            Open supervisor resources
          </button>
        </section>

        <section className={styles.divisionSection}>
          <div className={styles.divisionHeader}>
            <p className={styles.kicker}>Division libraries</p>
            <h2>Find your division resources.</h2>
            <p>
              Open the document library for your program area to find team-specific files.
            </p>
          </div>

          <div className={styles.divisionButtonGrid} aria-label="Division document libraries">
            {divisions.map((division) => (
              <button
                type="button"
                key={division}
                onClick={() => showSanitizedNotice(`${division} library`)}
              >
                {division}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.headshotSection}>
          <div className={styles.headshotHeader}>
            <p className={styles.kicker}>Intern profiles</p>
            <h2>Meet the interns.</h2>
            <p>
              Select a profile to view the participant&apos;s division, project,
              supervisor, and program biography.
            </p>
          </div>

          <div className={styles.headshotGrid} aria-label="Intern profiles">
            {people.map((person) => (
              <article className={styles.headshotCard} key={person.name}>
                <button
                  type="button"
                  className={styles.headshotImageButton}
                  onClick={(event) => openProfile(person, event.currentTarget)}
                  aria-label={`View profile for ${person.name}`}
                >
                  <span className={styles.headshotImageWrap}>
                    <span className={styles.headshotPlaceholder} aria-hidden="true">
                      {person.initials}
                    </span>
                  </span>
                </button>

                <div className={styles.headshotContent}>
                  <h3>{person.name}</h3>
                  <dl className={styles.compactMeta}>
                    <div><dt>Division</dt><dd>{person.division}</dd></div>
                    <div><dt>Project</dt><dd>{person.project}</dd></div>
                  </dl>
                  <button type="button" onClick={() => showSanitizedNotice(`${person.name} contact`)}>
                    Contact
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.quickGuideSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Quick guide</p>
            <h2>What to know first</h2>
          </div>
          <div className={styles.quickGuideGrid}>
            {quickGuideCards.map((card) => (
              <article className={styles.quickGuideCard} key={card.title}>
                <p className={styles.cardLabel}>{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.supportGrid} aria-label="Support links">
          {supportCards.map((card) => (
            <article className={styles.supportCard} key={card.title}>
              <div>
                <p className={styles.cardLabel}>Support</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              <button type="button" onClick={() => showSanitizedNotice(card.title)}>
                {card.button}
              </button>
            </article>
          ))}
        </section>
      </main>

      {selectedPerson ? (
        <div className={styles.profileModalOverlay} onMouseDown={() => setSelectedPerson(null)}>
          <div
            className={styles.profileModal}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            tabIndex={-1}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.profileModalClose}
              ref={closeButtonRef}
              onClick={() => setSelectedPerson(null)}
              aria-label="Close profile"
            >
              ×
            </button>
            <div className={styles.profileModalImageWrap} aria-hidden="true">
              <span className={styles.headshotPlaceholder}>{selectedPerson.initials}</span>
            </div>
            <div className={styles.profileModalContent}>
              <p className={styles.cardLabel}>Intern Profile</p>
              <h2 id="profile-title">{selectedPerson.name}</h2>
              <p className={styles.profileModalBio}>{selectedPerson.bio}</p>
              <dl className={styles.profileModalMeta}>
                <div><dt>Division</dt><dd>{selectedPerson.division}</dd></div>
                <div><dt>Supervisor</dt><dd>{selectedPerson.supervisor}</dd></div>
                <div><dt>Project</dt><dd>{selectedPerson.project}</dd></div>
                <div><dt>Contact</dt><dd>Omitted from sanitized demo</dd></div>
              </dl>
              <button type="button" onClick={() => showSanitizedNotice(`${selectedPerson.name} contact`)}>
                Contact
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
