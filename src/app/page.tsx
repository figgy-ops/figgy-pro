const projects = [
  {
    index: "01",
    title: "Intern LaunchPad",
    context: "Internal application",
    description:
      "Employee-facing program hub for intern information, supervisor resources, and weekly time reporting.",
    implementation:
      "Built the SPFx interface in React and TypeScript; connected Microsoft Forms and Power Automate; implemented keyboard and screen-reader support.",
    stack: "SPFx · React · TypeScript · Power Automate · SharePoint",
  },
  {
    index: "02",
    title: "Enterprise intranet and governance",
    context: "Platform modernization",
    description:
      "Intranet rebuild and operating model for an agency SharePoint environment with more than 500 sites.",
    implementation:
      "Restructured navigation and information architecture; standardized ownership and permissions; built reusable provisioning and PnP PowerShell reporting.",
    stack: "SharePoint Online · PnP PowerShell · Governance · WCAG",
  },
  {
    index: "03",
    title: "Operational automation",
    context: "Process engineering",
    description:
      "Workflows for onboarding, approvals, reporting, provisioning, access reviews, and recurring administrative work.",
    implementation:
      "Mapped business rules and dependencies, connected source systems, built the automation, and documented monitoring and support procedures.",
    stack: "Power Automate · PowerShell · APIs · Microsoft 365",
  },
  {
    index: "04",
    title: "Accessible web platforms",
    context: "Web engineering",
    description:
      "Responsive public and internal websites with maintainable content structure and accessible interactions.",
    implementation:
      "Developed React and Next.js interfaces, including a production site for a private law firm, with WCAG requirements treated as implementation constraints.",
    stack: "Next.js · React · TypeScript · WCAG",
  },
];

const technicalGroups = [
  {
    label: "Automation",
    items: "Power Automate, PowerShell, PnP, REST APIs, approvals, provisioning, reporting",
  },
  {
    label: "Applications",
    items: "SharePoint Online, SPFx, Microsoft 365, Forms, internal tools, information architecture",
  },
  {
    label: "Engineering",
    items: "TypeScript, React, Next.js, Git, accessible interfaces, systems integration",
  },
  {
    label: "Operations",
    items: "Entra ID, permissions, Intune, Cisco switching, Fortinet, VPN, DNS, DHCP",
  },
];

const experience = [
  {
    period: "Current",
    title: "Systems Analyst / Automation Specialist",
    employer: "Texas Historical Commission",
    detail:
      "Automation, systems integration, enterprise applications, SharePoint and Power Platform administration, governance, identity, reporting, and technical support across a distributed public-sector environment.",
  },
  {
    period: "Earlier agency scope",
    title: "IT support and platform administration",
    employer: "Texas Historical Commission",
    detail:
      "Microsoft 365 administration, endpoint support, field-site connectivity, switching, firewalls, access management, and incident coordination.",
  },
  {
    period: "2022–2024",
    title: "IT Specialist",
    employer: "Private law firm",
    detail:
      "Technology operations, user and endpoint support, Microsoft cloud administration, documentation, troubleshooting, and a public website rebuild.",
  },
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
            Caroline McLallen
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div id="content">
        <section className="resume-intro" aria-labelledby="intro-heading">
          <div className="container">
            <div className="intro-heading">
              <div>
                <p className="role">Automation Specialist / Systems Analyst</p>
                <h1 id="intro-heading">Caroline McLallen</h1>
              </div>
              <div className="contact-strip" aria-label="Profile links">
                <a href="mailto:caroline360@gmail.com">Email</a>
                <a
                  href="https://github.com/figgy-ops"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/caroline-mclallen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <p className="summary">
              Builds and supports automation, integrations, enterprise applications,
              and internal platforms in a distributed public-sector environment.
              Current work spans Power Platform, SharePoint/SPFx, PowerShell/PnP,
              React/Next.js, identity, governance, reporting, and infrastructure-aware
              operations.
            </p>

            <dl className="profile-grid">
              <div>
                <dt>Organization</dt>
                <dd>Texas Historical Commission</dd>
              </div>
              <div>
                <dt>Primary scope</dt>
                <dd>Automation, integration, modernization</dd>
              </div>
              <div>
                <dt>Environment</dt>
                <dd>40+ sites · 500+ SharePoint sites · 300+ users</dd>
              </div>
              <div>
                <dt>Core tools</dt>
                <dd>Power Automate · PowerShell · TypeScript · React · SPFx</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <div className="container">
            <SectionHeader index="01" title="Selected systems work" id="work-heading" />

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.title}>
                  <div className="project-id">
                    <span>{project.index}</span>
                    <p>{project.context}</p>
                  </div>
                  <div className="project-title">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-implementation">
                    <p>{project.implementation}</p>
                    <p className="stack">{project.stack}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="experience" aria-labelledby="experience-heading">
          <div className="container">
            <SectionHeader index="02" title="Experience" id="experience-heading" />

            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-row" key={`${item.title}-${item.period}`}>
                  <p className="period">{item.period}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="employer">{item.employer}</p>
                  </div>
                  <p className="experience-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-heading">
          <div className="container">
            <SectionHeader index="03" title="Technical profile" id="skills-heading" />

            <dl className="technical-grid">
              {technicalGroups.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>

            <div className="credentials" aria-labelledby="credentials-heading">
              <h3 id="credentials-heading">Credentials</h3>
              <div className="credential-row">
                <p>Fortinet Network Security Expert Level 3: Certified Associate</p>
                <span>2025–2027</span>
              </div>
              <div className="credential-row">
                <p>Career Essentials in System Administration</p>
                <span>Issued 2025</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-inner">
            <div>
              <p className="section-index">04 / Contact</p>
              <h2 id="contact-heading">Contact</h2>
            </div>
            <div className="contact-details">
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
          <p>Automation · Systems integration · Enterprise applications</p>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div className="section-header">
      <p className="section-index">{index}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
