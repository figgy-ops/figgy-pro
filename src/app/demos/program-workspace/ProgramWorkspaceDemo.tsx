"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./program-workspace.module.css";

type ParticipantProfile = {
  initials: string;
  name: string;
  team: string;
  manager: string;
  assignment: string;
  bio: string;
};

const primaryCards = [
  {
    label: "Program",
    title: "Program calendar",
    text: "Review dates, milestones, and required sessions.",
    button: "View schedule",
  },
  {
    label: "Resources",
    title: "Resource center",
    text: "Open common forms, policies, and workplace references.",
    button: "Open resources",
  },
  {
    label: "Directory",
    title: "Program directory",
    text: "Find team contacts and participant information.",
    button: "View directory",
  },
  {
    label: "Help",
    title: "IT Helpdesk",
    text: "Get technical support for access, accounts, and devices.",
    button: "Get help",
  },
];

const teams = ["Operations", "Programs", "Services", "Technology"];

const people: ParticipantProfile[] = [
  {
    initials: "01",
    name: "Participant 01",
    team: "Operations",
    manager: "Team lead",
    assignment: "Resource review",
    bio: "Sample profile for a short-term internal program participant.",
  },
  {
    initials: "02",
    name: "Participant 02",
    team: "Programs",
    manager: "Team lead",
    assignment: "Content review",
    bio: "Sample profile for a short-term internal program participant.",
  },
  {
    initials: "03",
    name: "Participant 03",
    team: "Services",
    manager: "Program lead",
    assignment: "Records check",
    bio: "Sample profile for a short-term internal program participant.",
  },
  {
    initials: "04",
    name: "Participant 04",
    team: "Technology",
    manager: "Team lead",
    assignment: "Process notes",
    bio: "Sample profile for a short-term internal program participant.",
  },
  {
    initials: "05",
    name: "Participant 05",
    team: "Programs",
    manager: "Team lead",
    assignment: "Reference update",
    bio: "Sample profile for a short-term internal program participant.",
  },
  {
    initials: "06",
    name: "Participant 06",
    team: "Operations",
    manager: "Program lead",
    assignment: "Workflow notes",
    bio: "Sample profile for a short-term internal program participant.",
  },
  {
    initials: "07",
    name: "Participant 07",
    team: "Services",
    manager: "Team lead",
    assignment: "Quality check",
    bio: "Sample profile for a short-term internal program participant.",
  },
  {
    initials: "08",
    name: "Participant 08",
    team: "Technology",
    manager: "Team lead",
    assignment: "Status reporting",
    bio: "Sample profile for a short-term internal program participant.",
  },
];

const quickGuideCards = [
  {
    label: "First",
    title: "Review your schedule",
    text: "Confirm key dates, weekly requirements, and planned sessions.",
  },
  {
    label: "Next",
    title: "Find your team",
    text: "Use the team library for role-specific resources and references.",
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

export default function ProgramWorkspaceDemo() {
  const [selectedPerson, setSelectedPerson] = useState<ParticipantProfile | null>(null);
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

  const showSampleNotice = (resource: string) => {
    setDemoNotice(`${resource} is not connected in this UI sample.`);
  };

  const openProfile = (person: ParticipantProfile, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setSelectedPerson(person);
  };

  return (
    <section className={styles.workspace}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.hero}>
        <div className={styles.demoUtility}>
          <span>Portfolio UI sample · Example content</span>
          <Link href="/#work">Back to portfolio</Link>
        </div>
        <div className={styles.heroShade}>
          <div className={styles.heroContent}>
            <p className={styles.contextLabel}>Internal program workspace</p>
            <h1>Program Workspace</h1>
            <p className={styles.tagline}>
              Schedules, reference material, contacts, team links, and
              participant profiles in one place.
            </p>
          </div>
        </div>
      </header>

      <main className={styles.main} id="main-content">
        <section className={styles.intro}>
          <div>
            <p className={styles.kicker}>Welcome</p>
            <h2>Start here for program information.</h2>
          </div>
          <p>
            Use this workspace to find the program information, contacts, and
            resources used throughout the program.
          </p>
        </section>

        <section className={styles.primaryGrid} aria-label="Program resources">
          {primaryCards.map((card) => (
            <article className={styles.primaryCard} key={card.title}>
              <p className={styles.cardLabel}>{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button type="button" onClick={() => showSampleNotice(card.title)}>
                {card.button}
              </button>
            </article>
          ))}
        </section>

        <p className={styles.demoNotice} aria-live="polite">{demoNotice}</p>

        <section className={styles.managerBand}>
          <div className={styles.managerCopy}>
            <p className={styles.kicker}>Manager tools</p>
            <h2>Weekly forms and manager resources</h2>
            <p>
              Open recurring forms and supporting references used by managers.
            </p>
          </div>
          <button type="button" onClick={() => showSampleNotice("Manager tools")}>
            Open manager resources
          </button>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <p className={styles.kicker}>Team libraries</p>
            <h2>Find your team resources.</h2>
            <p>
              Open the document library for your program area to find team-specific files.
            </p>
          </div>

          <div className={styles.teamButtonGrid} aria-label="Team document libraries">
            {teams.map((team) => (
              <button
                type="button"
                key={team}
                onClick={() => showSampleNotice(`${team} library`)}
              >
                {team}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <p className={styles.kicker}>Participant profiles</p>
            <h2>Program participants</h2>
            <p>
              Select a profile to view the participant&apos;s team, assignment,
              manager, and sample biography.
            </p>
          </div>

          <div className={styles.profileGrid} aria-label="Participant profiles">
            {people.map((person) => (
              <article className={styles.profileCard} key={person.name}>
                <button
                  type="button"
                  className={styles.profileImageButton}
                  onClick={(event) => openProfile(person, event.currentTarget)}
                  aria-label={`View profile for ${person.name}`}
                >
                  <span className={styles.profileImageWrap}>
                    <span className={styles.profilePlaceholder} aria-hidden="true">
                      {person.initials}
                    </span>
                  </span>
                </button>

                <div className={styles.profileContent}>
                  <h3>{person.name}</h3>
                  <dl className={styles.compactMeta}>
                    <div><dt>Team</dt><dd>{person.team}</dd></div>
                    <div><dt>Assignment</dt><dd>{person.assignment}</dd></div>
                  </dl>
                  <button type="button" onClick={() => showSampleNotice(`${person.name} resources`)}>
                    View resources
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
              <button type="button" onClick={() => showSampleNotice(card.title)}>
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
              <span className={styles.profilePlaceholder}>{selectedPerson.initials}</span>
            </div>
            <div className={styles.profileModalContent}>
              <p className={styles.cardLabel}>Participant profile</p>
              <h2 id="profile-title">{selectedPerson.name}</h2>
              <p className={styles.profileModalBio}>{selectedPerson.bio}</p>
              <dl className={styles.profileModalMeta}>
                <div><dt>Team</dt><dd>{selectedPerson.team}</dd></div>
                <div><dt>Manager</dt><dd>{selectedPerson.manager}</dd></div>
                <div><dt>Assignment</dt><dd>{selectedPerson.assignment}</dd></div>
                <div><dt>Contact</dt><dd>Not included in sample</dd></div>
              </dl>
              <button type="button" onClick={() => showSampleNotice(`${selectedPerson.name} resources`)}>
                View resources
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
