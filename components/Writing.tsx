const POSTS = [
  {
    num: "01",
    title: "Why I Rewrote Our API Gateway in Rust",
    date: "Mar 2025",
    readTime: "12 min",
    tags: ["Rust", "Performance"],
    excerpt:
      "Moving from Node.js to Axum wasn't just about speed — it changed how we reason about correctness at the boundary.",
    href: "#",
  },
  {
    num: "02",
    title: "WebAssembly Is Not the Future. It's the Present.",
    date: "Jan 2025",
    readTime: "9 min",
    tags: ["WASM", "Architecture"],
    excerpt:
      "Plugin systems, edge compute, sandboxed execution — WASM is quietly eating every layer of the stack.",
    href: "#",
  },
  {
    num: "03",
    title: "Designing for Failure: Distributed Systems Lessons",
    date: "Nov 2024",
    readTime: "15 min",
    tags: ["Distributed Systems", "Reliability"],
    excerpt:
      "After three production outages in two years, here is what I actually learned about building resilient systems — not the textbook version.",
    href: "#",
  },
  {
    num: "04",
    title: "The Boring Architecture That Scales",
    date: "Sep 2024",
    readTime: "8 min",
    tags: ["Architecture", "Postgres"],
    excerpt:
      "Postgres, Redis, and a queue. Before you reach for Kafka, read this.",
    href: "#",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 border-t border-ink/10">
      <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="ruled-line mb-3">
            <span className="font-mono text-xs text-ink/30 tracking-widest uppercase">04</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-ink">
            Writing.
          </h2>
          <p className="font-body text-ink/50 mt-2">
            Thinking in public about systems, craft, and code.
          </p>
        </div>
        <a
          href="https://dev.to/wasmer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink/40 hover:text-rust transition-colors border-b border-ink/10 hover:border-rust pb-0.5 self-start"
        >
          All posts on Dev.to
          <svg viewBox="0 0 14 8" className="w-3 h-2" fill="none">
            <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
            <polyline points="8,1 12,4 8,7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="space-y-0 divide-y divide-ink/10">
        {POSTS.map((post, i) => (
          <a
            key={post.num}
            href={post.href}
            className="group flex gap-6 lg:gap-10 py-7 hover:bg-mist -mx-4 lg:-mx-8 px-4 lg:px-8 transition-colors duration-200"
          >
            {/* Number */}
            <span className="font-mono text-xs text-ink/20 pt-1 w-6 flex-shrink-0 group-hover:text-rust transition-colors">
              {post.num}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-rust/80">
                    #{t}
                  </span>
                ))}
              </div>
              <h3 className="font-display font-bold text-lg lg:text-xl text-ink group-hover:text-rust transition-colors duration-200 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-ink/50 font-body leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>

            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span className="font-mono text-xs text-ink/30">{post.date}</span>
              <span className="font-mono text-xs text-ink/20">{post.readTime}</span>
              <svg
                viewBox="0 0 14 14"
                className="w-3.5 h-3.5 text-ink/20 group-hover:text-rust group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                fill="none"
              >
                <line x1="2" y1="12" x2="12" y2="2" stroke="currentColor" strokeWidth="1.2" />
                <polyline points="6,2 12,2 12,8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
