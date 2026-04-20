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

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/figgy-ops/repos?per_page=100&sort=updated",
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!res.ok) return [];

    const repos: Repo[] = await res.json();

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

const featuredWork = [
  {
    title: "Microsoft 365 Governance & SharePoint Audit",
    tag: "Microsoft 365 / SharePoint / PowerShell",
    description:
      "Audited and remediated SharePoint and OneDrive exposure, built repeatable reporting with PowerShell and PnP, and improved governance patterns for long-term maintainability.",
  },
  {
    title: "Identity & Endpoint Controls",
    tag: "Entra ID / Intune / Security",
    description:
      "Implemented MFA, Conditional Access, and device compliance controls to strengthen identity and endpoint security across a multi-site environment.",
  },
  {
    title: "Distributed Infrastructure Support",
    tag: "Infrastructure / Networking",
    description:
      "Supported switching, segmentation, ISP transition work, and network stability improvements across dozens of sites in a live production environment.",
  },
  {
    title: "Enterprise Intranet Rebuild",
    tag: "SharePoint / Information Architecture",
    description:
      "Led intranet rebuild work focused on permissions, governance, usability, and a cleaner structure for long-term administration.",
  },
];

const strengths = [
  "Microsoft 365 administration across SharePoint, Teams, Exchange, OneDrive, and Entra ID",
  "PowerShell and PnP automation for governance, reporting, and administrative cleanup",
  "Hybrid infrastructure support including Windows Server, Active Directory, DNS, DHCP, and switching",
  "Identity and endpoint controls including MFA, Conditional Access, Intune, and compliance policy work",
  "SharePoint architecture, permissions modeling, external sharing governance, and intranet administration",
  "Accessibility and compliance support spanning Section 508, WCAG, remediation tracking, and documentation",
];

export default async function Home() {
  const repos = await getRepos();

  return (
    <main className="relative page-shell px-6 pb-20">
      <div className="hero-banner" />

      <div className="mx-auto max-w-[1120px]">
        <header className="sticky top-0 z-50 pt-4">
          <div className="glass-panel rounded-full px-5 py-4">
            <div className="flex items-center justify-between gap-6">
              <a href="#top" className="font-semibold tracking-[-0.03em]">
                Caroline McLallen
              </a>

              <nav className="hidden items-center gap-8 text-sm md:flex">
                <a className="nav-link" href="#work">
                  Work
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

        <section id="top" className="pt-16 md:pt-20">
          <div className="pill rounded-full">
            Platform Operations · Microsoft 365 · Infrastructure
          </div>

          <h1 className="mt-7 max-w-[14ch] text-[clamp(2.5rem,5vw,4.35rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
            Remote-ready platform and infrastructure work.
          </h1>

          <p className="mt-6 max-w-[720px] text-lg leading-8 text-[var(--muted)]">
            I work across Microsoft 365, SharePoint, automation, identity,
            and hybrid infrastructure to make production environments more
            reliable, more governable, and easier to support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="primary-button">
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
        </section>

        <section className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="stat-card rounded-2xl">
            <p className="text-3xl font-semibold tracking-[-0.04em]">40+</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Sites supported across hybrid infrastructure and Microsoft 365
            </p>
          </div>

          <div className="stat-card rounded-2xl">
            <p className="text-3xl font-semibold tracking-[-0.04em]">300+</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              User accounts covered by MFA, Conditional Access, and device policy
            </p>
          </div>

          <div className="stat-card rounded-2xl">
            <p className="text-3xl font-semibold tracking-[-0.04em]">900+</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Support and infrastructure tickets handled in 12 months
            </p>
          </div>
        </section>

        <section id="work" className="top-rule mt-24 pt-16 md:pt-20">
          <div className="max-w-[760px]">
            <p className="section-label">Selected Work</p>
            <div className="accent-line mt-5" />
            <h2 className="section-title mt-8">
              Work shaped by real operational constraints.
            </h2>
            <p className="section-copy mt-6 max-w-[700px]">
              The strongest part of my background is the overlap between
              Microsoft 365 administration, SharePoint governance, automation,
              and infrastructure support. I do best in environments that need
              practical fixes, structure, and follow-through.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredWork.map((item) => (
              <article key={item.title} className="project-card rounded-[24px]">
                <p className="kicker">{item.tag}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="top-rule mt-24 pt-16 md:pt-20">
          <div className="max-w-[760px]">
            <p className="section-label">GitHub</p>
            <div className="accent-line mt-5" />
            <h2 className="section-title mt-8">Recent code and active work.</h2>
            <p className="section-copy mt-6 max-w-[700px]">
              Public repositories pulled directly from GitHub. This keeps the
              site current without pretending every repo is a polished product.
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
                      <p className="kicker">{repo.language ?? "Repository"}</p>
                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">
                        {formatRepoName(repo.name)}
                      </h3>
                    </div>

                    <span className="text-sm whitespace-nowrap text-[var(--muted)]">
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>

                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    {repo.description?.trim() || "Public repository on GitHub."}
                  </p>
                </a>
              ))
            ) : (
              <div className="glass-panel rounded-[24px] p-8 md:col-span-2">
                <h3 className="text-xl font-semibold">
                  GitHub data unavailable right now
                </h3>
                <p className="mt-3 text-[var(--muted)]">
                  The profile link still works and can be used directly.
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

        <section id="experience" className="top-rule mt-24 pt-16 md:pt-20">
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="section-label">Experience</p>
              <div className="accent-line mt-5" />
              <h2 className="section-title mt-8">
                Broad enough to support, technical enough to improve.
              </h2>
              <p className="section-copy mt-6">
                My work includes Microsoft 365 administration, SharePoint
                structure and governance, PowerShell automation, identity
                controls, endpoint compliance, and hybrid infrastructure support.
                I’m strongest where operations and engineering start to overlap.
              </p>
            </div>

            <div className="glass-panel rounded-[28px] p-7 md:p-8">
              <div className="border-b border-[var(--border)] pb-7">
                <p className="text-xl font-semibold tracking-[-0.03em]">
                  Platform Operations / Infrastructure Support
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Microsoft 365, SharePoint, identity, automation, networking
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border)] bg-white/[0.02] p-5"
                  >
                    <p className="text-sm leading-6 text-[var(--muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="top-rule mt-24 pt-16 md:pt-20">
          <div className="glass-panel rounded-[32px] px-7 py-8 md:px-10 md:py-12">
            <p className="section-label">Contact</p>
            <div className="accent-line mt-5" />

            <h2 className="section-title mt-8 max-w-[15ch]">
              Open to remote platform, Microsoft 365, and infrastructure roles.
            </h2>

            <p className="section-copy mt-6 max-w-[720px]">
              I’m targeting remote roles where I can keep growing in platform
              operations, Microsoft 365 administration, SharePoint governance,
              automation, and infrastructure support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:caroline360@gmail.com"
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href="https://github.com/figgy-ops"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/caroline-mclallen"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
