const metrics = [
  {
    value: "40+",
    label: "Sites across hybrid infrastructure and Microsoft 365",
  },
  {
    value: "300+",
    label: "User accounts covered by MFA, Conditional Access, and device policy",
  },
  {
    value: "900+",
    label: "Operational and infrastructure tickets handled in 12 months",
  },
];

const workItems = [
  {
    tag: "Microsoft 365 · SharePoint · PowerShell",
    title: "Microsoft 365 Governance & SharePoint Audit",
    body: "Audited SharePoint and OneDrive exposure, reviewed external sharing patterns, and built repeatable reporting with PowerShell and PnP to make governance work easier to maintain.",
  },
  {
    tag: "Entra ID · Intune · Endpoint Management",
    title: "Identity & Endpoint Controls",
    body: "Worked across MFA, Conditional Access, device compliance, endpoint enrollment, and account governance in a multi-site Microsoft 365 environment.",
  },
  {
    tag: "Infrastructure · Networking · Site Connectivity",
    title: "Distributed Infrastructure Operations",
    body: "Worked on switching, ISP transition work, segmentation planning, and network stability improvements across dozens of live production sites.",
  },
  {
    tag: "SharePoint · Information Architecture",
    title: "Enterprise Intranet Rebuild",
    body: "Led intranet rebuild work focused on permissions, governance, usability, navigation, and a cleaner structure for long-term administration.",
  },
];

const thcBullets = [
  "Administer Microsoft 365 services including SharePoint, Teams, Exchange, OneDrive, and Entra ID.",
  "Use PowerShell and PnP for reporting, governance cleanup, and administrative automation.",
  "Work with identity and endpoint controls including MFA, Conditional Access, Intune, and compliance policy configuration.",
  "Contribute to hybrid infrastructure administration involving Windows Server, Active Directory, DNS, DHCP, switching, and site connectivity.",
  "Participate in accessibility and compliance work involving Section 508, WCAG, remediation tracking, and documentation.",
];

const lawFirmBullets = [
  "Worked across users, devices, Microsoft services, and day-to-day technology operations.",
  "Handled troubleshooting across accounts, applications, endpoints, and operational requests.",
  "Built a foundation in service delivery, documentation, and issue ownership before moving into broader platform and infrastructure work.",
];

const capabilities = [
  {
    title: "Platform Operations",
    body: "Microsoft 365, SharePoint, Entra ID, endpoint compliance, and user-facing systems that need steady administration.",
  },
  {
    title: "Infrastructure Administration",
    body: "Switching, site connectivity, Windows Server, Active Directory, DNS, DHCP, and production troubleshooting.",
  },
  {
    title: "Governance & Automation",
    body: "PowerShell, PnP reporting, permissions review, external sharing cleanup, and repeatable administrative processes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#17170f] text-[#f4efe3]">
      <header className="sticky top-0 z-20 border-b border-[#d6a85a]/20 bg-[#17170f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="/" className="text-sm font-bold tracking-wide text-[#fff8e8]">
            Caroline McLallen
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 text-sm text-[#b9ae99] md:flex"
          >
            <a className="transition hover:text-[#d6a85a]" href="/work">
              Work
            </a>
            <a className="transition hover:text-[#d6a85a]" href="/sharepoint">
              SharePoint / M365
            </a>
            <a className="transition hover:text-[#d6a85a]" href="/projects">
              Projects
            </a>
            <a className="transition hover:text-[#d6a85a]" href="#certifications">
              Certifications
            </a>
            <a className="transition hover:text-[#d6a85a]" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#d6a85a]/20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,232,0.045),transparent_52%)]" />
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b9652d]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-6 inline-flex border border-[#d6a85a]/30 bg-[#242417]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6a85a]">
            Platform Operations · Microsoft 365 · Infrastructure
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#fff8e8] md:text-6xl">
            Microsoft 365 and infrastructure work built for real production
            environments.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d9d0bd]">
            I work across Microsoft 365, SharePoint, endpoint management,
            identity, automation, networking, and hybrid infrastructure to make
            production environments easier to govern, secure, and operate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/work"
              className="border border-[#d6a85a] bg-[#d6a85a] px-5 py-3 text-sm font-semibold text-[#17170f] transition hover:bg-[#e6bd73]"
            >
              View Work
            </a>
            <a
              href="https://github.com/figgy-ops"
              className="border border-[#d6a85a]/35 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:bg-[#d6a85a]/10"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="border border-[#b9652d]/55 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:border-[#d6a85a]/45 hover:bg-[#d6a85a]/10"
            >
              Contact
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.value}
                className="relative overflow-hidden border border-[#d6a85a]/20 bg-[#202013]/85 p-6 shadow-lg shadow-black/15"
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b9652d]/85" />
                <p className="pl-2 text-4xl font-semibold text-[#fff8e8]">
                  {metric.value}
                </p>
                <p className="mt-3 pl-2 text-sm leading-6 text-[#b9ae99]">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Selected Work"
          title="Operational work with governance, automation, and infrastructure impact."
          body="My strongest work sits where Microsoft 365 administration, SharePoint governance, automation, identity, endpoint management, and infrastructure overlap. I do best in environments that need practical fixes, cleaner structure, and follow-through."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {workItems.map((item) => (
            <WorkCard
              key={item.title}
              tag={item.tag}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/work"
            className="inline-flex border-b border-[#b9652d] pb-1 text-sm font-semibold text-[#d6a85a] transition hover:text-[#fff8e8]"
          >
            View more work
          </a>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="border-y border-[#d6a85a]/20 bg-[#202013]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Certifications"
            title="Credentials aligned with network security and systems administration."
            body="I’m building formal credentials around the same areas I work in day to day: network security, systems administration, endpoint management, infrastructure, and platform operations."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.9fr]">
            <article className="relative overflow-hidden border border-[#d6a85a]/30 bg-[#17170f]/85 p-6 shadow-2xl shadow-black/20">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b9652d]" />

              <div className="grid gap-6 pl-2 md:grid-cols-[1fr_230px]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d6a85a]">
                    Fortinet · Network Security
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#fff8e8]">
                    Fortinet Network Security Expert Level 3: Certified Associate
                  </h3>
                  <p className="mt-4 leading-7 text-[#d9d0bd]">
                    Supports hands-on infrastructure work involving firewalls,
                    network security, segmentation, and production operations across
                    distributed environments.
                  </p>

                  <SquareList
                    items={[
                      "Issued: October 2025",
                      "Expires: October 2027",
                      "Credential ID: 5036577450CM",
                    ]}
                  />
                </div>

                <div className="flex min-h-[220px] items-center justify-center border border-dashed border-[#d6a85a]/40 bg-[#242417] p-4 text-center text-sm text-[#b9ae99]">
                  <div>
                    <p className="font-medium text-[#fff8e8]">
                      Certificate image
                    </p>
                    <p className="mt-2">Placeholder for Fortinet cert image</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="border border-[#d6a85a]/20 bg-[#17170f]/85 p-6 shadow-lg shadow-black/15">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b9652d]">
                Microsoft · Systems Administration
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#fff8e8]">
                Career Essentials in System Administration
              </h3>
              <p className="mt-4 leading-7 text-[#d9d0bd]">
                Reinforces core systems administration concepts across identity,
                endpoint management, Windows-based environments, and operational IT
                work.
              </p>

              <SquareList items={["Issued: January 2025"]} />
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Experience"
          title="Platform operations across systems, identity, and infrastructure."
          body="My work includes Microsoft 365 administration, SharePoint structure and governance, PowerShell automation, identity controls, endpoint compliance, and hybrid infrastructure administration. I’m strongest where operations, governance, and engineering start to overlap."
        />

        <div className="mt-10 space-y-5">
          <ExperienceCard
            title="Information Technology Specialist"
            company="Texas Historical Commission"
            dates="January 2024 to present"
            body="Work across Microsoft 365, SharePoint, endpoint operations, account governance, and infrastructure administration in a distributed public-sector environment."
            bullets={thcBullets}
          />

          <ExperienceCard
            title="IT Specialist"
            company="Private Law Firm"
            dates="January 2022 to August 2024"
            body="Worked in a professional services environment with exposure to Microsoft cloud services, endpoint troubleshooting, account administration, and operational technology needs."
            bullets={lawFirmBullets}
          />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-[#d6a85a]/20 bg-[#202013]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Capabilities"
            title="Practical technical range without losing the operational thread."
            body="I’m interested in roles that combine systems administration, Microsoft 365 platform work, governance, automation, infrastructure, and endpoint management."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability) => (
              <FocusCard
                key={capability.title}
                title={capability.title}
                body={capability.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GITHUB */}
      <section id="github" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="GitHub"
          title="Recent code and active work."
          body="Public repositories pulled directly from GitHub. This keeps the site current without pretending every repo is a polished product."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <ProjectCard
            href="https://github.com/figgy-ops/figgy-pro"
            tag="TypeScript · Apr 2026"
            title="Figgy Pro"
            body="Portfolio site work and frontend experimentation for professional positioning, project display, and custom embeds."
          />

          <ProjectCard
            href="https://github.com/figgy-ops/spfx-command-center"
            tag="TypeScript · Apr 2026"
            title="SPFx Command Center"
            body="SharePoint Framework project work focused on practical admin visibility, site administration, and Microsoft 365 operational tooling."
          />
        </div>

        <div className="mt-8">
          <a
            href="/projects"
            className="inline-flex border-b border-[#b9652d] pb-1 text-sm font-semibold text-[#d6a85a] transition hover:text-[#fff8e8]"
          >
            View projects
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden border border-[#d6a85a]/25 bg-[#202013] p-8 md:p-10">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b9652d]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d6a85a]/45 to-transparent" />

          <div className="relative pl-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6a85a]">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#fff8e8] md:text-5xl">
              Open to remote platform, Microsoft 365, and infrastructure roles.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#d9d0bd]">
              I’m targeting remote roles where I can keep growing in platform
              operations, Microsoft 365 administration, SharePoint governance,
              automation, endpoint management, and infrastructure administration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:caroline360@gmail.com"
                className="border border-[#d6a85a] bg-[#d6a85a] px-5 py-3 text-sm font-semibold text-[#17170f] transition hover:bg-[#e6bd73]"
              >
                Email Me
              </a>
              <a
                href="https://github.com/figgy-ops"
                className="border border-[#d6a85a]/35 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:bg-[#d6a85a]/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/caroline-mclallen/"
                className="border border-[#b9652d]/55 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:border-[#d6a85a]/45 hover:bg-[#d6a85a]/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6a85a]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#fff8e8] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 leading-8 text-[#d9d0bd]">{body}</p>
    </div>
  );
}

function WorkCard({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <article className="group border border-[#d6a85a]/20 bg-[#202013] p-6 shadow-lg shadow-black/10 transition hover:border-[#d6a85a]/45 hover:bg-[#252517]">
      <div className="mb-5 h-1 w-12 bg-[#b9652d]" />
      <p className="text-sm font-semibold text-[#d6a85a]">{tag}</p>
      <h3 className="mt-3 text-xl font-semibold text-[#fff8e8]">{title}</h3>
      <p className="mt-3 leading-7 text-[#d9d0bd]">{body}</p>
      <div className="mt-5 h-1 w-10 bg-[#b9652d]/75 transition-all group-hover:w-20" />
    </article>
  );
}

function ExperienceCard({
  title,
  company,
  dates,
  body,
  bullets,
}: {
  title: string;
  company: string;
  dates: string;
  body: string;
  bullets: string[];
}) {
  return (
    <article className="border border-[#d6a85a]/20 bg-[#202013] p-6 shadow-lg shadow-black/10">
      <div className="flex flex-col gap-2 border-b border-[#d6a85a]/15 pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#fff8e8]">{title}</h3>
          <p className="mt-1 text-[#b9ae99]">{company}</p>
        </div>
        <p className="text-sm text-[#9f967f]">{dates}</p>
      </div>

      <p className="mt-5 leading-7 text-[#d9d0bd]">{body}</p>
      <SquareList items={bullets} />
    </article>
  );
}

function FocusCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="border border-[#d6a85a]/20 bg-[#17170f]/80 p-6 shadow-lg shadow-black/10">
      <div className="mb-4 h-1 w-12 bg-[#b9652d]" />
      <h3 className="text-xl font-semibold text-[#fff8e8]">{title}</h3>
      <p className="mt-3 leading-7 text-[#d9d0bd]">{body}</p>
    </article>
  );
}

function ProjectCard({
  href,
  tag,
  title,
  body,
}: {
  href: string;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <a
      href={href}
      className="group border border-[#d6a85a]/20 bg-[#202013] p-6 text-inherit no-underline shadow-lg shadow-black/10 transition hover:border-[#d6a85a]/45 hover:bg-[#252517]"
    >
      <p className="text-sm font-semibold text-[#d6a85a]">{tag}</p>
      <h3 className="mt-3 text-xl font-semibold text-[#fff8e8]">{title}</h3>
      <p className="mt-3 leading-7 text-[#d9d0bd]">{body}</p>
      <div className="mt-5 h-1 w-14 bg-[#b9652d] transition-all group-hover:w-24" />
    </a>
  );
}

function SquareList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm leading-6 text-[#d9d0bd]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 flex-none bg-[#b9652d]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
