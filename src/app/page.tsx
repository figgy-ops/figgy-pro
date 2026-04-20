const projects = [
  {
    title: "THC Intranet Architecture",
    tag: "SharePoint / Information Architecture",
    description:
      "Designed and deployed a multi-site intranet used across the organization, improving content discovery, search, and long-term governance.",
  },
  {
    title: "SPFx Command Center",
    tag: "SPFx / Custom Development",
    description:
      "Built a custom administrative web part for site health, navigation control, and platform visibility across SharePoint environments.",
  },
  {
    title: "M365 Governance Audit",
    tag: "PnP PowerShell / Governance",
    description:
      "Audited 500+ SharePoint sites using scripting and admin reporting to standardize ownership, permissions, and lifecycle controls.",
  },
  {
    title: "Infrastructure Rollout",
    tag: "Networking / Systems",
    description:
      "Implemented firewall and switch stack deployment including planning, configuration, and vendor coordination in a lab environment.",
  },
];

const strengths = [
  "SharePoint Online architecture and governance",
  "SPFx web part development",
  "Microsoft 365 automation and administration",
  "Infrastructure and network rollout support",
];

export default function Home() {
  return (
    <main className="page-shell px-6 pb-20">
      <div className="mx-auto max-w-[1180px]">

        {/* NAV */}
        <header className="sticky top-0 z-50 pt-4">
          <div className="glass-panel rounded-full px-5 py-4">
            <div className="flex items-center justify-between gap-6">
              <span className="font-semibold tracking-[-0.03em]">
                Friggy
              </span>

              <nav className="hidden md:flex gap-8 text-sm">
                <a className="nav-link" href="#projects">Projects</a>
                <a className="nav-link" href="#experience">Experience</a>
                <a className="nav-link" href="#contact">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="hero-grid pt-16 md:pt-24">

          <div>
            <div className="pill rounded-full">
              Systems Engineer · SharePoint · M365
            </div>

            <h1 className="mt-8 text-[clamp(3.4rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              I build systems that actually hold up.
            </h1>

            <p className="mt-8 max-w-[700px] text-lg leading-8 text-[var(--muted)]">
              SharePoint architecture, Microsoft 365 governance, and infrastructure work
              focused on real-world environments. Not theory. Not demos. Systems people rely on.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="primary-button">
                View Work
              </a>

              <a
                href="https://github.com/figgy-ops"
                target="_blank"
                className="secondary-button"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* SIDE PANEL */}
          <aside className="glass-panel rounded-[28px] p-6 md:p-7">

            <p className="kicker">Quick Impact</p>

            <div className="mt-6 grid gap-4">

              <div className="stat-card rounded-2xl">
                <p className="text-3xl font-semibold">500+</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  SharePoint sites audited and standardized
                </p>
              </div>

              <div className="stat-card rounded-2xl">
                <p className="text-3xl font-semibold">SPFx</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Custom tooling for admin visibility and control
                </p>
              </div>

              <div className="stat-card rounded-2xl">
                <p className="text-3xl font-semibold">M365</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Governance, automation, and tenant operations
                </p>
              </div>

            </div>
          </aside>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="top-rule mt-24 pt-16">

          <div className="max-w-[760px]">
            <p className="section-label">Selected Work</p>
            <div className="accent-line mt-5" />

            <h2 className="section-title mt-8">
              Built in production environments.
            </h2>

            <p className="section-copy mt-6">
              Work focused on real organizational problems, platform limitations,
              and long-term maintainability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="project-card rounded-[24px]">
                <p className="kicker">{project.tag}</p>
                <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-[var(--muted)]">{project.description}</p>
              </div>
            ))}
          </div>

        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="top-rule mt-24 pt-16">

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <p className="section-label">Experience</p>
              <div className="accent-line mt-5" />

              <h2 className="section-title mt-8">
                Technical depth, not surface-level admin work.
              </h2>

              <p className="section-copy mt-6">
                Experience across SharePoint, M365, scripting, governance,
                and infrastructure work in environments that require real ownership.
              </p>
            </div>

            <div className="glass-panel rounded-[28px] p-8">

              <div className="border-b border-[var(--border)] pb-6 mb-6">
                <h3 className="text-xl font-semibold">
                  Systems Engineer
                </h3>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Microsoft 365 · SharePoint · Infrastructure
                </p>
              </div>

              <div className="grid gap-4">
                {strengths.map((s) => (
                  <div key={s} className="stat-card rounded-xl">
                    <p className="text-sm text-[var(--muted)]">{s}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="top-rule mt-24 pt-16">

          <div className="glass-panel rounded-[32px] px-8 py-10">

            <p className="section-label">Contact</p>
            <div className="accent-line mt-5" />

            <h2 className="section-title mt-8">
              Ready for the next role.
            </h2>

            <p className="section-copy mt-6">
              Open to roles involving SharePoint, M365, systems engineering,
              and platform ownership.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/figgy-ops"
                target="_blank"
                className="primary-button"
              >
                GitHub
              </a>

              <a
                href="mailto:your-email-here"
                className="secondary-button"
              >
                Email
              </a>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}