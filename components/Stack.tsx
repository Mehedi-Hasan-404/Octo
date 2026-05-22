import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "Rust", level: 95, color: "#C4500A" },
  { name: "TypeScript", level: 92, color: "#1E5E3E" },
  { name: "Go", level: 85, color: "#1A1A18" },
  { name: "PostgreSQL", level: 88, color: "#C4500A" },
  { name: "React / Next.js", level: 90, color: "#1E5E3E" },
  { name: "Kubernetes", level: 78, color: "#1A1A18" },
  { name: "WebAssembly", level: 82, color: "#B8960C" },
  { name: "GraphQL", level: 86, color: "#C4500A" },
];

const TOOLS = [
  "VS Code", "Neovim", "Nix", "Docker", "Terraform",
  "GitHub Actions", "Datadog", "Linear", "Figma", "Vercel",
];

const STACK_CATEGORIES = [
  {
    title: "Backend",
    items: ["Rust (Axum, Tokio)", "Go (Fiber, chi)", "Node.js (Fastify)", "gRPC + Protobuf", "REST API design"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "tRPC", "Framer Motion"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Infrastructure",
    items: ["Kubernetes / Helm", "Docker", "Terraform / Pulumi", "AWS / GCP", "GitHub Actions CI/CD"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "SQLite (embedded)"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setFilled(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-ink font-medium">{name}</span>
        <span className="font-mono text-xs text-ink/40">{level}%</span>
      </div>
      <div className="h-1.5 bg-ink/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{
            width: filled ? `${level}%` : "0%",
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t border-ink/10">
      <div className="mb-16">
        <div className="ruled-line mb-3">
          <span className="font-mono text-xs text-ink/30 tracking-widest uppercase">02</span>
        </div>
        <h2 className="font-display font-black text-4xl lg:text-5xl text-ink">
          The Stack.
        </h2>
        <p className="font-body text-ink/60 mt-3 max-w-xl">
          Tools are just tools. But chosen well, they compound.
        </p>
      </div>

      {/* Category cards */}
      <div className="grid sm:grid-cols-2 gap-px bg-ink/10 mb-16 border border-ink/10">
        {STACK_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="bg-cream p-7 group hover:bg-mist transition-colors duration-200"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-rust">{cat.icon}</span>
              <h3 className="font-display font-bold text-lg text-ink">{cat.title}</h3>
            </div>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink/60 font-body">
                  <span className="w-1 h-1 rounded-full bg-rust flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skill bars */}
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
        {SKILLS.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>

      {/* Tools */}
      <div>
        <p className="font-mono text-xs text-ink/30 tracking-widest uppercase mb-4">
          Daily tools
        </p>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="border border-ink/15 text-ink/60 font-mono text-xs px-3 py-1.5 hover:border-rust hover:text-rust transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Live SVG — fractal circuit */}
      <div className="mt-16 flex justify-center opacity-30">
        <svg viewBox="0 0 400 80" className="w-full max-w-lg svg-draw" fill="none">
          <line x1="0" y1="40" x2="400" y2="40" stroke="#1A1A18" strokeWidth="0.5" />
          {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
            <g key={x}>
              <line x1={x} y1="40" x2={x} y2={i % 2 === 0 ? 20 : 60} stroke="#C4500A" strokeWidth="0.75" />
              <circle cx={x} cy={i % 2 === 0 ? 20 : 60} r="2" fill="#C4500A" />
            </g>
          ))}
          <text x="200" y="75" textAnchor="middle" fontSize="7" fill="#1A1A18" fontFamily="monospace" opacity="0.5">
            // system diagnostics nominal
          </text>
        </svg>
      </div>
    </section>
  );
}
