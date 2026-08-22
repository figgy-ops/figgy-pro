import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    index: "01",
    title: "Program operations workspace",
    context: "Internal web application",
    description:
      "Internal hub for schedules, resources, contacts, team files, and recurring submissions.",
    implementation:
      "Built the SPFx interface in React and TypeScript; connected Microsoft Forms and Power Automate; implemented keyboard and screen-reader support.",
    stack: "SPFx · React · TypeScript · Power Automate · SharePoint",
  },
  {
    index: "02",
    title: "Enterprise intranet and governance",
    context: "Platform administration",
    description:
      "Rebuilt the intranet for an agency SharePoint environment with more than 500 sites.",
    implementation:
      "Restructured navigation and information architecture; standardized ownership and permissions; built reusable provisioning and PnP PowerShell reporting.",
    stack: "SharePoint Online · PnP PowerShell · Governance · WCAG",
  },
  {
    index: "03",
    title: "Operational automation",
    context: "Workflow automation",
    description:
      "Workflows for onboarding, approvals, reporting, provisioning, access reviews, and recurring administrative work.",
    implementation:
      "Mapped business rules and dependencies, connected source systems, built the automation, and documented monitoring and support procedures.",
    stack: "Power Automate · PowerShell · APIs · Microsoft 365",
  },
  {
    index: "04",
    title: "Accessible web platforms",
    context: "Web development",
    description:
      "Responsive public and internal websites with maintainable content structure and accessible interactions.",
    implementation:
      "Developed React and Next.js interfaces, including a production site for a private law firm, with WCAG requirements built into the implementation.",
    stack: "Next.js · React · TypeScript · WCAG",
  },
];

const technicalGroups = [
  {
    label: "Automation",
    items: "Power Automate, PowerShell, Python, PnP PowerShell, REST APIs, Forms",
  },
  {
    label: "Applications",
    items: "SharePoint Online, SPFx, Microsoft 365, Entra ID, Intune, information architecture",
  },
  {
    label: "Development",
    items: "TypeScript, JavaScript, React, Next.js, HTML/CSS, Git",
  },
  {
    label: "Operations",
    items: "Cisco switching, Fortinet, VPN, VLANs, DNS, DHCP, endpoint support",
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
              Python, React/Next.js, identity, governance, accessibility, reporting,
              and network and endpoint support.
            </p>

            <dl className="profile-grid">
              <div>
                <dt>Primary scope</dt>
                <dd>Automation, applications, platform support</dd>
              </div>
              <div>
                <dt>Environment</dt>
                <dd>40+ sites · 500+ SharePoint sites · 300+ users</dd>
              </div>
              <div>
                <dt>Core tools</dt>
                <dd>Power Automate · PowerShell · Python · TypeScript · SPFx</dd>
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

            <div className="interface-samples" aria-labelledby="samples-heading">
              <div className="samples-heading">
                <p className="section-index">UI samples</p>
                <div>
                  <h3 id="samples-heading">Interface samples</h3>
                  <p>
                    UI samples based on completed work. Client names, branding,
                    images, and identifying content are not included.
                  </p>
                </div>
              </div>

              <div className="sample-grid">
                <article className="sample-card">
                  <Link className="sample-image" href="/demos/program-workspace">
                    <Image
                      src="/demos/program-workspace-preview.jpg"
                      alt="Preview of a generic SPFx program workspace"
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="sample-copy">
                    <div>
                      <p>SPFx · React · TypeScript · Power Automate · WCAG 2.2</p>
                      <h4>Program workspace</h4>
                    </div>
                    <Link href="/demos/program-workspace">
                      Open interactive demo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>

                <article className="sample-card">
                  <Link className="sample-image" href="/demos/legal-services">
                    <Image
                      src="/demos/legal-services-preview.jpg"
                      alt="Preview of a generic legal services website interface"
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="sample-copy">
                    <div>
                      <p>Next.js · React · WCAG 2.1</p>
                      <h4>Legal services interface</h4>
                    </div>
                    <Link href="/demos/legal-services">
                      Open interactive demo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>

                <article className="sample-card">
                  <Link className="sample-image" href="/demos/product-catalog">
                    <Image
                      src="/demos/product-catalog-preview.jpg"
                      alt="Preview of a generic product catalog interface"
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="sample-copy">
                    <div>
                      <p>React · Data imports · Accessible UI</p>
                      <h4>Product catalog</h4>
                    </div>
                    <Link href="/demos/product-catalog">
                      Open interactive demo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </div>
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

        <section
          className="section section-muted"
          id="accessibility"
          aria-labelledby="accessibility-heading"
        >
          <div className="container">
            <SectionHeader
              index="04"
              title="Accessibility implementation"
              id="accessibility-heading"
            />

            <div className="depth-layout">
              <p className="depth-intro">
                Builds WCAG 2.1/2.2 and Section 508 requirements into internal
                applications, SharePoint components, and public websites.
              </p>

              <dl className="depth-list">
                <div>
                  <dt>Structure</dt>
                  <dd>
                    Semantic HTML, useful heading and list structure, accessible
                    names, and ARIA when native controls are not sufficient.
                  </dd>
                </div>
                <div>
                  <dt>Interaction</dt>
                  <dd>
                    Keyboard operation, visible focus, logical tab order, modal
                    focus management, and clear form labels and errors.
                  </dd>
                </div>
                <div>
                  <dt>Verification</dt>
                  <dd>
                    Screen-reader checks, contrast review, zoom and responsive
                    reflow, and testing against defined acceptance criteria.
                  </dd>
                </div>
                <div>
                  <dt>Applied work</dt>
                  <dd>
                    SPFx components, internal program tools, intranet navigation,
                    and responsive public websites.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="networking"
          aria-labelledby="networking-heading"
        >
          <div className="container">
            <SectionHeader
              index="05"
              title="Networking in automation"
              id="networking-heading"
            />

            <div className="depth-layout">
              <div className="depth-intro">
                <p>
                  Works directly with Cisco switching, Fortinet firewalls, VPNs,
                  VLANs, DHCP, DNS, site connectivity, and incident response across
                  more than 40 locations.
                </p>
                <p className="scope-note">
                  This is operational and troubleshooting work. The network team owns
                  core architecture.
                </p>
              </div>

              <dl className="depth-list">
                <div>
                  <dt>Before changes</dt>
                  <dd>
                    Checks whether a failure is in the application, API, identity,
                    DNS, VPN, firewall, or site connection before changing a workflow.
                  </dd>
                </div>
                <div>
                  <dt>Access and routing</dt>
                  <dd>
                    Accounts for authentication, permissions, VLANs, routing, and
                    remote-site limits when connecting systems.
                  </dd>
                </div>
                <div>
                  <dt>What to automate</dt>
                  <dd>
                    Inventory, validation, reporting, monitoring, and repeatable
                    administrative changes are good candidates for automation.
                  </dd>
                </div>
                <div>
                  <dt>Support</dt>
                  <dd>
                    Documents network and infrastructure dependencies so failures can
                    be traced and handed to the correct team.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-inner">
            <div>
              <p className="section-index">06 / Contact</p>
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
