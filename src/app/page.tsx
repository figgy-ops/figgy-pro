const projects = [
  {
    number: "01",
    title: "Intern LaunchPad",
    summary:
      "A custom employee-facing application that gave interns and supervisors one clear place for program information, people, and weekly time reporting.",
    contribution:
      "Built the SharePoint Framework experience in React and TypeScript, connected the logging flow through Forms and Power Automate, and designed the interface for keyboard and screen-reader use.",
    stack: ["SPFx", "React", "TypeScript", "Power Automate", "SharePoint"],
  },
  {
    number: "02",
    title: "Enterprise intranet and governance",
    summary:
      "A long-term rebuild of the agency intranet and the operating model around hundreds of SharePoint sites.",
    contribution:
      "Restructured navigation and information architecture, clarified ownership and permissions, created reusable provisioning patterns, and automated reporting and governance work with PnP PowerShell.",
    stack: ["SharePoint Online", "PnP PowerShell", "Governance", "Accessibility"],
  },
  {
    number: "03",
    title: "Operational automation",
    summary:
      "Repeatable workflows for onboarding, approvals, reporting, provisioning, access reviews, and other work that should not depend on someone remembering every step.",
    contribution:
      "Translate the actual business process, connect the systems involved, build the automation, and leave behind monitoring and documentation that make it supportable.",
    stack: ["Power Automate", "PowerShell", "APIs", "Microsoft 365"],
  },
  {
    number: "04",
    title: "Accessible web platforms",
    summary:
      "Modern public and internal web experiences that are easier to navigate, maintain, and trust.",
    contribution:
      "Build responsive interfaces with clear content structure, accessible interaction patterns, and practical administration in mind, including a production site for a private law firm.",
    stack: ["Next.js", "React", "TypeScript", "WCAG"],
  },
];

const capabilities = [
  {
    title: "Automation and integration",
    detail:
      "Power Automate, PowerShell, APIs, approvals, provisioning, reporting, and cross-system workflow design.",
  },
  {
    title: "Enterprise applications",
    detail:
      "SharePoint Online, SPFx, Microsoft 365, internal tools, information architecture, and application modernization.",
  },
  {
    title: "Web engineering",
    detail:
      "React, TypeScript, Next.js, accessible interface development, and maintainable content experiences.",
  },
  {
    title: "Governance and identity",
    detail:
      "Permissions, guest access, Entra ID, lifecycle controls, accessibility, documentation, and operational ownership.",
  },
  {
    title: "Infrastructure fluency",
    detail:
      "Cisco switching, Fortinet, VPN, DNS, DHCP, site connectivity, incident response, and infrastructure-aware design.",
  },
  {
    title: "Systems analysis",
    detail:
      "Process discovery, requirements, risk and dependency mapping, stakeholder translation, testing, and support handoff.",
  },
];

const scope = [
  { value: "40+", label: "distributed agency sites" },
  { value: "500+", label: "SharePoint sites in the environment" },
  { value: "300+", label: "users supported by shared platforms" },
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Caroline McLallen, home">
            <span className="brand-mark" aria-hidden="true">
              CM
            </span>
            <span>Caroline McLallen</span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="header-link"
            href="https://github.com/figgy-ops"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <div id="content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Automation Specialist / Systems Analyst</p>
              <h1>I turn operational friction into reliable systems.</h1>
              <p className="hero-intro">
                I design and build automations, integrations, internal tools, and
                enterprise platforms. My work spans Power Platform, SharePoint,
                APIs, identity, reporting, websites, and the infrastructure around
                them.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  See selected work
                </a>
                <a className="button button-secondary" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>

            <aside className="role-card" aria-label="Current role overview">
              <div className="role-card-header">
                <p>Current role</p>
                <span>Texas public sector</span>
              </div>
              <h2>Systems Analyst</h2>
              <p className="role-subtitle">Working title: Automation Specialist</p>

              <ol className="work-flow" aria-label="How I approach systems work">
                <li>
                  <span>01</span>
                  <p>Find the manual work, failure point, or missing connection.</p>
                </li>
                <li>
                  <span>02</span>
                  <p>Map the systems, owners, risks, and real operating constraints.</p>
                </li>
                <li>
                  <span>03</span>
                  <p>Build a reliable solution that can be governed and supported.</p>
                </li>
              </ol>
            </aside>
          </div>

          <div className="container scope-grid" aria-label="Current environment scope">
            {scope.map((item) => (
              <div className="scope-item" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <SectionHeading
              label="Selected work"
              title="Systems work that solves a real operating problem."
              copy="The common thread is not one vendor or platform. It is taking work that is fragmented, manual, difficult to govern, or hard to use and making it function better."
            />

            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <p className="project-number">{project.number}</p>
                  <div className="project-main">
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                  </div>
                  <div className="project-detail">
                    <p>{project.contribution}</p>
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="capabilities">
          <div className="container">
            <SectionHeading
              label="Capabilities"
              title="Broad enough to connect the system. Grounded enough to run it."
              copy="I work across the application, automation, governance, and infrastructure layers without pretending they are the same discipline."
            />

            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className="capability" key={capability.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container experience-layout">
            <SectionHeading
              label="Experience"
              title="Engineering-minded work, built on operational reality."
              copy="I came up through hands-on support and platform administration. That background still matters: I know the difference between a clever build and a system people can actually operate."
            />

            <div className="timeline">
              <article className="timeline-item current">
                <div className="timeline-marker" aria-hidden="true" />
                <p className="timeline-date">Current</p>
                <h3>Systems Analyst / Automation Specialist</h3>
                <p className="timeline-company">Texas Historical Commission</p>
                <p>
                  Lead automation, modernization, integration, and enterprise
                  application work while continuing to own complex SharePoint,
                  Power Platform, governance, web, identity, and cross-functional
                  systems problems.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <p className="timeline-date">Earlier agency scope</p>
                <h3>IT support and platform administration</h3>
                <p className="timeline-company">Texas Historical Commission</p>
                <p>
                  Worked across end-user support, Microsoft 365 administration,
                  SharePoint development, field-site connectivity, switching,
                  firewalls, access, and incident coordination across a distributed
                  environment.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <p className="timeline-date">2022 to 2024</p>
                <h3>IT Specialist</h3>
                <p className="timeline-company">Private law firm</p>
                <p>
                  Owned day-to-day technology operations, user and endpoint support,
                  Microsoft cloud administration, troubleshooting, documentation,
                  and an accessible public website rebuild.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section credential-section">
          <div className="container credential-grid">
            <div>
              <p className="section-label">Credentials</p>
              <h2>Formal learning that follows the work.</h2>
            </div>

            <div className="credential-list">
              <article>
                <div>
                  <p>Fortinet</p>
                  <h3>Network Security Expert Level 3: Certified Associate</h3>
                </div>
                <span>2025 to 2027</span>
              </article>
              <article>
                <div>
                  <p>Microsoft / LinkedIn</p>
                  <h3>Career Essentials in System Administration</h3>
                </div>
                <span>Issued 2025</span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner">
            <p className="section-label">Contact</p>
            <h2>Interested in systems that need more than a patch.</h2>
            <p>
              I am most useful where automation, enterprise applications,
              governance, and infrastructure need to work as one operating system.
            </p>
            <div className="contact-links">
              <a href="mailto:caroline360@gmail.com">caroline360@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/caroline-mclallen/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/figgy-ops"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="container">
          <p>Caroline McLallen</p>
          <p>Systems analysis · automation · enterprise applications</p>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
