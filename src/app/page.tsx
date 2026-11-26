import Image from "next/image";
import Link from "next/link";

const workSections = [
  {
    id: "ai-automation",
    title: "AI and automation",
    projects: [
      {
        title: "SharePoint LMS assignment and certificate workflows",
        context: "Power Platform",
        description:
          "Extended a SharePoint learning management system with Power Automate workflows that create annual training and learning-path assignments. Added eligibility checks and checked existing assignments, completion records, and verified certificates before creating new records. Logged which assignments were created, skipped, or failed for each employee. Built a separate workflow that generates a PDF certificate after verified completion and updates the employee’s training record.",
        implementation:
          "Used AI to trace the existing flow actions and diagnose failures from run history. When a group assignment failed, checked the SharePoint group lookup and assignment filters against the data the flow actually received. Verified annual training and learning-path assignments for individuals. Kept All Staff outside that test scope.",
        stack: "Power Automate · SharePoint Online · Microsoft Entra ID",
      },
      {
        title: "SharePoint Copilot and knowledge retrieval",
        context: "Enterprise AI",
        description:
          "Configured and deployed Copilot agents that help staff find information across SharePoint sites using retrieval-augmented generation (RAG).",
        implementation:
          "Connected Copilot agents to SharePoint content, managed Microsoft 365 Copilot license assignments, and trained staff on how to use the tools.",
        stack: "Microsoft 365 Copilot · SharePoint · RAG",
      },
      {
        title: "AI agent reliability research",
        context: "Independent evaluation",
        description:
          "Built a local Python test harness to study how AI agents follow instructions, complete tasks, and resume interrupted workflows.",
        implementation:
          "Designed controlled scenarios that varied instructions and checkpoint conditions. Compared task completion and recovery behavior across scenarios and used pytest to make the checks repeatable. The test suite passed 14 automated checks.",
        stack: "Python · pytest · Git",
      },
    ],
  },
  {
    id: "sharepoint-administration",
    title: "SharePoint administration",
    projects: [
      {
        title: "SharePoint intranet and governance",
        context: "Microsoft 365",
        description:
          "Rebuilt the agency intranet and organized contract documents in a repository with custom metadata and views.",
        implementation:
          "Improved navigation, disabled anonymous sharing links, and removed self-service site creation in a 500+ site SharePoint environment. Used PnP PowerShell for repeatable administration and wrote procedures for site owners.",
        stack: "SharePoint Online · PnP PowerShell · Microsoft 365",
      },
      {
        title: "Intern onboarding workspace",
        context: "Internal application",
        description:
          "Built a SharePoint hub for interns to find schedules, onboarding resources, division links, and staff contacts.",
        implementation:
          "Built the interface in SPFx and connected a weekly Microsoft Forms timesheet to a SharePoint list through Power Automate.",
        stack: "SPFx · React · TypeScript · Microsoft Forms · Power Automate",
      },
    ],
  },
  {
    id: "web-accessibility",
    title: "Web operations and accessibility",
    projects: [
      {
        title: "Web publishing and CMS operations",
        context: "Web operations",
        description:
          "Managed a law firm’s WordPress intranet and supported public-sector publishing across SharePoint, Teams, and the agency website.",
        implementation:
          "Used Google Analytics to identify hard-to-find, high-demand content and improve navigation, worked with Drupal developers on Outlook-managed calendar embeds, and revised vendor requirements for accessibility and security across WordPress, Drupal, Craft CMS, and custom PHP sites.",
        stack: "WordPress · Drupal · Craft CMS · Google Analytics · WCAG",
      },
      {
        title: "Application inventory and accessibility tracking",
        context: "AI-assisted development",
        description:
          "Built a SharePoint application that brought 39 application records and their accessibility and compliance statuses into one place.",
        implementation:
          "Set the requirements for a SharePoint list-backed inventory and directed an AI coding assistant through the SPFx implementation. Specified which statuses staff needed to see and what the print view should include. Reviewed the generated changes against those requirements, then used WAVE and keyboard testing to assess public websites and documented findings for remediation.",
        stack: "SPFx · React · TypeScript · WCAG · WAVE",
      },
    ],
  },
];

const technicalGroups = [
  {
    label: "Automation",
    items: "Power Automate, PowerShell, PnP PowerShell, REST APIs, Microsoft Forms, Python",
  },
  {
    label: "Microsoft 365",
    items: "SharePoint Online, SPFx, Microsoft Entra ID, permissions, information architecture",
  },
  {
    label: "Web development and CMS",
    items: "WordPress, Drupal, Craft CMS, React, TypeScript, Next.js, HTML/CSS, Git",
  },
  {
    label: "AI research and development",
    items: "OpenAI Codex, Microsoft 365 Copilot, RAG, local Python and pytest evaluation, Git, AI-assisted code review",
  },
  {
    label: "Accessibility and analytics",
    items: "WCAG 2.1/2.2, keyboard testing, WAVE, Google Analytics",
  },
];

const experience = [
  {
    period: "Aug 2026 to present",
    title: "Systems Analyst III / Automation Specialist",
    employer: "Texas Historical Commission",
    detail:
      "Build workflow automations and SharePoint applications and assess public websites for accessibility. Connect Copilot agents in SharePoint to help staff find content, manage Microsoft 365 Copilot license assignments, and train staff on SharePoint and AI tools.",
  },
  {
    period: "Feb 2024 to Jul 2026",
    title: "IT Support Specialist III",
    employer: "Texas Historical Commission",
    detail:
      "Rebuilt the agency intranet, developed staff-facing tools, and supported Microsoft 365, guest access, endpoints, and connectivity across field sites.",
  },
  {
    period: "Jun 2025 to present",
    title: "Microsoft 365 / SharePoint Consultant",
    employer: "Independent consulting",
    detail:
      "Advise on SharePoint permissions, navigation, information architecture, and collaboration workflows.",
  },
  {
    period: "May 2020 to Feb 2024",
    title: "IT / Operations Support Specialist",
    employer: "Private law firm",
    detail:
      "Managed the WordPress intranet, rebuilt the public website, and supported Microsoft 365, user access, endpoints, and business applications.",
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
              I build Microsoft 365 workflows and internal applications for the
              Texas Historical Commission. My work includes automating staff
              training and certificates, rebuilding the agency’s SharePoint
              intranet, and making accessibility findings easier to track. I use
              AI coding assistants to implement requirements I define, review the
              changes against those requirements, and train staff on AI tools and
              SharePoint. My independent AI research focuses on instruction
              following and recovery from interrupted tasks.
            </p>

            <nav className="work-links" aria-label="Browse projects by specialty">
              {workSections.map(({ id, title }) => (
                <a href={`#${id}`} key={id}>{title}</a>
              ))}
            </nav>

            <dl className="profile-grid">
              <div>
                <dt>Specialties</dt>
                <dd>Workflow automation, SharePoint, web operations</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Austin, Texas</dd>
              </div>
              <div>
                <dt>Core tools</dt>
                <dd>Power Automate · SharePoint · SPFx · PowerShell</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <div className="container">
            <SectionHeader index="01" title="Selected work" id="work-heading" />

            {workSections.map((section) => (
              <section className="work-category" id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
                <h3 id={`${section.id}-heading`}>{section.title}</h3>
                <div className="project-list">
                  {section.projects.map((project) => (
                    <article className="project-row" key={project.title}>
                      <div className="project-id">
                        <p>{project.context}</p>
                      </div>
                      <div className="project-title">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                      <div className="project-implementation">
                        <p>{project.implementation}</p>
                        <p className="stack">{project.stack}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <div className="interface-samples" aria-labelledby="samples-heading">
              <div className="samples-heading">
                <div>
                  <h3 id="samples-heading">Interface samples</h3>
                  <p>
                    Interactive demos use fictional content to show how the
                    interfaces work.
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

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-inner">
            <div>
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
          <p>Automation · Microsoft 365 · Web operations</p>
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
