const PROJECTS = [
  {
    num: "01",
    title: "Ferrum Gateway",
    type: "Open Source · Rust",
    year: "2024",
    description:
      "High-performance API gateway built in Rust using Axum and Tokio. Handles 200k+ req/s with sub-millisecond P99 latency. Plugin system via WebAssembly modules.",
    tags: ["Rust", "Axum", "WASM", "Redis"],
    href: "https://github.com/wasmer/ferrum-gateway",
    metrics: "200k req/s · 0.4ms P99",
    featured: true,
  },
  {
    num: "02",
    title: "Logstream",
    type: "SaaS Product · Go + React",
    year: "2023",
    description:
      "Real-time log ingestion and querying platform. Ingest via agents or HTTP. Query with SQL over ClickHouse. Dashboard built with Next.js and tRPC.",
    tags: ["Go", "Next.js", "ClickHouse", "Kafka"],
    href: "#",
    metrics: "50TB/day ingestion",
    featured: true,
  },
  {
    num: "03",
    title: "Typewire",
    type: "OSS Library · TypeScript",
    year: "2023",
    description:
      "End-to-end type safety for REST APIs — schema-first with codegen for both server and client. Zero runtime overhead.",
    tags: ["TypeScript", "Zod", "Codegen"],
    href: "https://github.com/wasmer/typewire",
    metrics: "1.2k GitHub stars",
    featured: false,
  },
  {
    num: "04",
    title: "Crate Index",
    type: "Platform · Rust + PostgreSQL",
    year: "2022",
    description:
      "Private package registry for Rust crates. Full Cargo protocol implementation, access control, and mirroring of crates.io.",
    tags: ["Rust", "PostgreSQL", "S3"],
    href: "#",
    metrics: "Used at 3 enterprises",
    featured: false,
  },
  {
    num: "05",
    title: "Helix Scheduler",
    type: "Infrastructure · Go + K8s",
    year: "2022",
    description:
      "Custom Kubernetes scheduler for ML workloads. Bin-packing with GPU affinity, spot instance support, and preemption policies.",
    tags: ["Go", "Kubernetes", "Prometheus"],
    href: "#",
    metrics: "40% cost reduction",
    featured: false,
  },
  {
    num: "06",
    title: "Prismatic",
    type: "Developer Tool · TypeScript",
    year: "2021",
    description:
      "VS Code extension for visualizing database schemas. Auto-discovers relations, renders ER diagrams, and inline explains query plans.",
    tags: ["TypeScript", "VS Code API", "SQL"],
    href: "#",
    metrics: "8k installs",
    featured: false,
  },
];

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <article
      className={`project-card border border-ink/10 p-6 lg:p-8 relative group ${
        project.featured ? "bg-ink text-cream" : "bg-cream text-ink"
      }`}
    >
      {/* Number */}
      <span
        className={`font-mono text-xs tracking-widest ${
          project.featured ? "text-cream/30" : "text-ink/20"
        }`}
      >
        {project.num}
      </span>

      {/* Year badge */}
      <span
        className={`absolute top-6 right-6 font-mono text-xs border px-2 py-0.5 ${
          project.featured
            ? "border-cream/20 text-cream/40"
            : "border-ink/10 text-ink/30"
        }`}
      >
        {project.year}
      </span>

      <h3
        className={`font-display font-bold text-xl mt-3 mb-1 ${
          project.featured ? "text-cream" : "text-ink"
        }`}
      >
        {project.title}
      </h3>
      <p
        className={`font-mono text-xs mb-4 ${
          project.featured ? "text-rust" : "text-rust"
        }`}
      >
        {project.type}
      </p>
      <p
        className={`text-sm font-body leading-relaxed mb-5 ${
          project.featured ? "text-cream/60" : "text-ink/60"
        }`}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`font-mono text-xs px-2 py-0.5 ${
              project.featured
                ? "bg-white/10 text-cream/70"
                : "bg-ink/5 text-ink/50"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Metrics + link */}
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-xs ${
            project.featured ? "text-gold" : "text-forest"
          }`}
        >
          {project.metrics}
        </span>
        {project.href !== "#" && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-mono text-xs group-hover:gap-3 transition-all duration-200 ${
              project.featured ? "text-cream/50 hover:text-cream" : "text-ink/40 hover:text-rust"
            }`}
          >
            View
            <svg viewBox="0 0 14 8" className="w-3.5 h-2" fill="none">
              <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
              <polyline points="8,1 12,4 8,7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-ink/10">
      <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="ruled-line mb-3">
            <span className="font-mono text-xs text-ink/30 tracking-widest uppercase">03</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-ink">
            Selected Work.
          </h2>
        </div>
        <a
          href="https://github.com/wasmer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink/40 hover:text-rust transition-colors border-b border-ink/10 hover:border-rust pb-0.5"
        >
          All projects on GitHub
          <svg viewBox="0 0 14 8" className="w-3 h-2" fill="none">
            <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
            <polyline points="8,1 12,4 8,7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>
    </section>
  );
}
