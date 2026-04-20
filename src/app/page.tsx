export default function Home() {
  return (
    <main className="min-h-screen bg-[#17170f] text-[#f4efe3]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#d6a85a]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(214,168,90,0.18),transparent_32%),radial-gradient(circle_at_85%_5%,rgba(194,91,36,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-6 inline-flex rounded-full border border-[#d6a85a]/30 bg-[#242417]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6a85a]">
            Platform Operations · Microsoft 365 · Infrastructure
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#fff8e8] md:text-6xl">
            Microsoft 365, infrastructure, and support work that holds up in production.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d9d0bd]">
            I work across Microsoft 365, SharePoint, endpoint support, identity,
            automation, networking, and hybrid infrastructure to make production
            environments easier to govern, secure, and support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-[#d6a85a] px-5 py-3 text-sm font-semibold text-[#17170f] transition hover:bg-[#e6bd73]"
            >
              View Work
            </a>
            <a
              href="https://github.com/figgy-ops"
              className="rounded-full border border-[#d6a85a]/30 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:bg-[#d6a85a]/10"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#c25b24]/35 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:bg-[#c25b24]/10"
            >
              Contact
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <Metric
              value="40+"
              label="Sites supported across hybrid infrastructure and Microsoft 365"
            />
            <Metric
              value="300+"
              label="User accounts covered by MFA, Conditional Access, and device policy"
            />
            <Metric
              value="900+"
              label="Support and infrastructure tickets handled in 12 months"
            />
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Selected Work"
          title="Work shaped by real operational constraints."
          body="My strongest work sits where Microsoft 365 administration, SharePoint governance, automation, identity, endpoint support, and infrastructure overlap. I do best in environments that need practical fixes, cleaner structure, and follow-through."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <WorkCard
            tag="Microsoft 365 · SharePoint · PowerShell"
            title="Microsoft 365 Governance & SharePoint Audit"
            body="Audited SharePoint and OneDrive exposure, reviewed external sharing patterns, and built repeatable reporting with PowerShell and PnP to make governance work easier to maintain."
          />
          <WorkCard
            tag="Entra ID · Intune · Endpoint Controls"
            title="Identity & Endpoint Controls"
            body="Supported MFA, Conditional Access, device compliance, endpoint enrollment, and account governance across a multi-site Microsoft 365 environment."
          />
          <WorkCard
            tag="Infrastructure · Networking · Site Support"
            title="Distributed Infrastructure Support"
            body="Supported switching, ISP transition work, segmentation planning, and network stability improvements across dozens of live production sites."
          />
          <WorkCard
            tag="SharePoint · Information Architecture"
            title="Enterprise Intranet Rebuild"
            body="Led intranet rebuild work focused on permissions, governance, usability, navigation, and a cleaner structure for long-term administration."
          />
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
            title="Training aligned with infrastructure, security, and systems work."
            body="I’m building formal credentials around the same areas I work in day to day: network security, systems administration, endpoint support, and platform operations."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.9fr]">
            <article className="rounded-3xl border border-[#d6a85a]/30 bg-[#17170f]/80 p-6 shadow-2xl shadow-black/20">
              <div className="grid gap-6 md:grid-cols-[1fr_230px]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d6a85a]">
                    Fortinet · Network Security
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#fff8e8]">
                    Fortinet Network Security Expert Level 3: Certified Associate
                  </h3>
                  <p className="mt-4 leading-7 text-[#d9d0bd]">
                    Supports hands-on infrastructure work involving firewalls,
                    network security, segmentation, and production support across
                    distributed environments.
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-[#d9d0bd]">
                    <li>
                      <span className="text-[#9f967f]">Issued:</span> October 2025
                    </li>
                    <li>
                      <span className="text-[#9f967f]">Expires:</span> October 2027
                    </li>
                    <li>
                      <span className="text-[#9f967f]">Credential ID:</span>{" "}
                      5036577450CM
                    </li>
                  </ul>
                </div>

                <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-[#d6a85a]/40 bg-[#242417] p-4 text-center text-sm text-[#b9ae99]">
                  <div>
                    <p className="font-medium text-[#fff8e8]">
                      Certificate image
                    </p>
                    <p className="mt-2">
                      Placeholder for Fortinet cert image
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-[#d6a85a]/20 bg-[#17170f]/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c25b24]">
                Microsoft · Systems Administration
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#fff8e8]">
                Career Essentials in System Administration
              </h3>
              <p className="mt-4 leading-7 text-[#d9d0bd]">
                Reinforces core systems administration concepts across identity,
                endpoint support, Windows-based environments, and operational IT
                work.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#d9d0bd]">
                <li>
                  <span className="text-[#9f967f]">Issued:</span> January 2025
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Experience"
          title="Broad enough to support, technical enough to improve."
          body="My work includes Microsoft 365 administration, SharePoint structure and governance, PowerShell automation, identity controls, endpoint compliance, and hybrid infrastructure support. I’m strongest where operations and engineering start to overlap."
        />

        <div className="mt-10 space-y-5">
          <ExperienceCard
            title="Information Technology Specialist"
            company="Texas Historical Commission"
            dates="January 2024 to present"
            body="Support Microsoft 365, SharePoint, endpoint operations, account governance, and infrastructure work across a distributed public-sector environment."
            bullets={[
              "Administer Microsoft 365 services including SharePoint, Teams, Exchange, OneDrive, and Entra ID.",
              "Use PowerShell and PnP for reporting, governance cleanup, and administrative automation.",
              "Support identity and endpoint controls including MFA, Conditional Access, Intune, and compliance policy work.",
              "Assist with hybrid infrastructure support involving Windows Server, Active Directory, DNS, DHCP, switching, and site connectivity.",
              "Contribute to accessibility and compliance work involving Section 508, WCAG, remediation tracking, and documentation."
            ]}
          />

          <ExperienceCard
            title="IT Specialist"
            company="Private Law Firm"
            dates="January 2022 to August 2024"
            body="Provided IT support in a professional services environment with exposure to Microsoft cloud services, user support, device troubleshooting, and operational technology needs."
            bullets={[
              "Supported users, devices, Microsoft services, and day-to-day IT operations.",
              "Handled troubleshooting across accounts, applications, endpoints, and support requests.",
              "Built a foundation in service delivery, documentation, and issue ownership before moving into broader platform and infrastructure work."
            ]}
          />
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="border-y border-[#d6a85a]/20 bg-[#202013]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Background"
            title="Support background, infrastructure direction."
            body="Before moving deeper into IT, I built a foundation in high-volume support, customer service, documentation, and team leadership. That background still shows up in how I troubleshoot, communicate, and keep messy operational work moving."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FocusCard
              title="Platform Operations"
              body="Microsoft 365, SharePoint, Entra ID, endpoint compliance, and user-facing systems that need steady administration."
            />
            <FocusCard
              title="Infrastructure Support"
              body="Switching, site connectivity, Windows Server, Active Directory, DNS, DHCP, and production troubleshooting."
            />
            <FocusCard
              title="Governance & Automation"
              body="PowerShell, PnP reporting, permissions review, external sharing cleanup, and repeatable administrative processes."
            />
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
          <a
            href="https://github.com/figgy-ops/figgy-pro"
            className="rounded-3xl border border-[#d6a85a]/20 bg-[#202013] p-6 transition hover:border-[#d6a85a]/50 hover:bg-[#252517]"
          >
            <p className="text-sm font-semibold text-[#d6a85a]">
              TypeScript · Apr 2026
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[#fff8e8]">
              Figgy Pro
            </h3>
            <p className="mt-3 leading-7 text-[#d9d0bd]">
              Portfolio site work and frontend experimentation for professional
              positioning, project display, and custom embeds.
            </p>
          </a>

          <a
            href="https://github.com/figgy-ops/spfx-command-center"
            className="rounded-3xl border border-[#d6a85a]/20 bg-[#202013] p-6 transition hover:border-[#d6a85a]/50 hover:bg-[#252517]"
          >
            <p className="text-sm font-semibold text-[#d6a85a]">
              TypeScript · Apr 2026
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[#fff8e8]">
              SPFx Command Center
            </h3>
            <p className="mt-3 leading-7 text-[#d9d0bd]">
              SharePoint Framework project work focused on practical admin
              visibility, site support, and Microsoft 365 operational tooling.
            </p>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#d6a85a]/25 bg-[#202013] p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(194,91,36,0.16),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(214,168,90,0.14),transparent_34%)]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6a85a]">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#fff8e8] md:text-5xl">
              Open to remote platform, Microsoft 365, and infrastructure roles.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#d9d0bd]">
              I’m targeting remote roles where I can keep growing in platform
              operations, Microsoft 365 administration, SharePoint governance,
              automation, endpoint management, and infrastructure support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:caroline360@gmail.com"
                className="rounded-full bg-[#d6a85a] px-5 py-3 text-sm font-semibold text-[#17170f] transition hover:bg-[#e6bd73]"
              >
                Email Me
              </a>
              <a
                href="https://github.com/figgy-ops"
                className="rounded-full border border-[#d6a85a]/30 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:bg-[#d6a85a]/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/caroline-mclallen/"
                className="rounded-full border border-[#c25b24]/35 px-5 py-3 text-sm font-semibold text-[#fff8e8] transition hover:bg-[#c25b24]/10"
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

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-[#d6a85a]/20 bg-[#202013]/85 p-6 shadow-lg shadow-black/15">
      <p className="text-4xl font-semibold text-[#fff8e8]">{value}</p>
      <p className="mt-3 text-sm leading-6 text-[#b9ae99]">{label}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body
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
  body
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-3xl border border-[#d6a85a]/20 bg-[#202013] p-6 shadow-lg shadow-black/10 transition hover:border-[#d6a85a]/45 hover:bg-[#252517]">
      <p className="text-sm font-semibold text-[#d6a85a]">{tag}</p>
      <h3 className="mt-3 text-xl font-semibold text-[#fff8e8]">{title}</h3>
      <p className="mt-3 leading-7 text-[#d9d0bd]">{body}</p>
    </article>
  );
}

function ExperienceCard({
  title,
  company,
  dates,
  body,
  bullets
}: {
  title: string;
  company: string;
  dates: string;
  body: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-3xl border border-[#d6a85a]/20 bg-[#202013] p-6 shadow-lg shadow-black/10">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#fff8e8]">{title}</h3>
          <p className="mt-1 text-[#b9ae99]">{company}</p>
        </div>
        <p className="text-sm text-[#9f967f]">{dates}</p>
      </div>

      <p className="mt-5 leading-7 text-[#d9d0bd]">{body}</p>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-[#d9d0bd]">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#c25b24]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FocusCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-3xl border border-[#d6a85a]/20 bg-[#17170f]/80 p-6 shadow-lg shadow-black/10">
      <h3 className="text-xl font-semibold text-[#fff8e8]">{title}</h3>
      <p className="mt-3 leading-7 text-[#d9d0bd]">{body}</p>
    </article>
  );
}
