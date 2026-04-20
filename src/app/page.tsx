type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
};

const projects = [
  {
    title: "Enterprise Intranet Architecture",
    tag: "Microsoft 365 / SharePoint Online",
    description:
      "Designed and deployed a multi-site intranet structure used across a large organization, improving content discovery, search performance, and long-term governance.",
  },
  {
    title: "SPFx Administrative Tooling",
    tag: "SPFx / Platform Engineering",
    description:
      "Built custom SharePoint Framework components to improve administrative visibility, navigation control, and site-level health awareness.",
  },
  {
    title: "M365 Governance Audit",
    tag: "PnP PowerShell / Automation",
    description:
      "Audited 500+ SharePoint sites using scripting and reporting to standardize ownership, permissions, and lifecycle practices across the tenant.",
  },
  {
    title: "Network & Systems Rollout",
    tag: "Infrastructure / Networking",
    description:
      "Supported firewall and switch deployments including planning, configuration, and coordination in a live operational environment.",
  },
];

const strengths = [
  "Microsoft 365 platform administration and ownership",
  "SharePoint architecture, governance, and customization",
  "SPFx development and PowerShell-based automation",
  "Infrastructure support across networking and system rollout work",
];

async function getRepos(): Promise<Repo[]> {
  try {
    const response = await fetch("https://api.github.com/users/figgy-ops/repos?per_page=100&sort=updated", {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return [];
    }

    const repos: Repo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      )
      .slice(0, 6);
  } catch {
    return [];
  }
}

function formatRepoName(name: string) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function Home() {
  const repos = await getRepos();

  return (
    <main className="page-shell px-6 pb-20">
      <div className="mx-auto max-w-[1180px]">
        <header className="sticky top-0 z-50 pt-4">
          <div className="glass-panel rounded-full px-5 py-4">
            <div className="flex items-center justify-between gap-6">
              <span className="font-semibold tracking-[-0.03em]">
                Caroline McLallen
              </span>

              <nav className="hidden md:flex gap-8 text-sm">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
                <a className="nav-link" href="#github">
                  GitHub
                </a>
                <a className="nav-link" href="#experience">
                  Experience
                </a>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        <section className="hero-grid pt-16 md:pt-24">
          <div>
            <div className="pill rounded-full">
              Systems Engineer · Microsoft 365 · SharePoint · Infrastructure
            </div>

            <h1 className="mt-8 text-[clamp(3.4rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              Microsoft 365 and infrastructure systems.
            </h1>

            <p className="mt-8 max-w-[720px] text-lg leading-8 text-[var(--muted)]">
              Work across Microsoft 365, SharePoint, automation, and infrastructure focused on usability,
              governance, and systems that hold up in real environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="primary-button">
                View Work
              </a>

              <a
                href="https://github.com/figgy-ops"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="glass-panel rounded-[28px] p-6 md:p-7">
            <p className="kicker">Highlights</p>

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
                  Custom platform tooling and extensions
                </p>
              </div>

              <div className="stat-card rounded-2xl">
                <p className="text-3xl font-semibold">Infra</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Hands-on network and systems work
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="top-rule mt-24 pt-16">
          <div className="max-w-[760px]">
            <p className="section-label">Selected Work</p>
            <div className="accent-line mt-5" />

            <h2 className="section-title mt-8">
              Built for real-world environments.
            </h2>

            <p className="section-copy mt-6">
              Work focused on platform reliability, governance, and systems that are usable and maintainable over time.
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

        <section id="github" className="top-rule mt-24 pt-16">
          <div className="max-w-[760px]">
            <p className="section-label">GitHub</p>
            <div className="accent-line mt-5" />

            <h2 className="section-title mt-8">
              Recent code and active builds.
            </h2>

            <p className="section-copy mt-6">
              A live pull from my public GitHub repositories. This section updates from the repos directly,
              so the work shown here stays current.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {repos.length > 0 ? (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card rounded-[24px] block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="kicker">
                        {repo.language ?? "Repository"}
                      </p>
                      <h3 className="mt-5 text-2xl font-semibold">
                        {formatRepoName(repo.name)}
                      </h3>
                    </div>

                    <span className="text-sm text-[var(--muted)] whitespace-nowrap">
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>

                  <p className="mt-4 text-[var(--muted)]">
                    {repo.description?.trim() || "Public repository on GitHub."}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
                    <span>★ {repo.stargazers_count}</span>
                    <span>Updated {formatDate(repo.updated_at)}</span>
                    {repo.homepage ? <span>Live site available</span> : null}
                  </div>
                </a>
              ))
            ) : (
              <div className="glass-panel rounded-[24px] p-8 md:col-span-2">
                <h3 className="text-xl font-semibold">GitHub section unavailable</h3>
                <p className="mt-3 text-[var(--muted)]">
                  The site could not load repository data right now. Your profile link still works:
                </p>
                <a
                  href="https://github.com/figgy-ops"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex secondary-button"
                >
                  Visit GitHub Profile
                </a>
              </div>
            )}
          </div>
        </section>

        <section id="experience" className="top-rule mt-24 pt-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-label">Experience</p>
              <div className="accent-line mt-5" />

              <h2 className="section-title mt-8">
                Systems-focused, not tool-limited.
              </h2>

              <p className="section-copy mt-6">
                Experience across Microsoft 365, SharePoint architecture, automation, governance,
                and infrastructure support. Strongest in environments that require ownership and
                practical problem solving.
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
                {strengths.map((strength) => (
                  <div key={strength} className="stat-card rounded-xl">
                    <p className="text-sm text-[var(--muted)]">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="top-rule mt-24 pt-16">
          <div className="glass-panel rounded-[32px] px-8 py-10">
            <p className="section-label">Contact</p>
            <div className="accent-line mt-5" />

            <h2 className="section-title mt-8">
              Open to new opportunities.
            </h2>

            <p className="section-copy mt-6">
              Looking for roles involving Microsoft 365, SharePoint, systems engineering,
              automation, and infrastructure growth.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="https://github.com/figgy-ops"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                GitHub
              </a>

              <a
                href="mailto:caroline360@gmail.com"
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