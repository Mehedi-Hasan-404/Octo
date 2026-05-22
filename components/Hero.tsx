import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Full Stack Engineer",
  "Systems Programmer",
  "Open Source Contributor",
  "WebAssembly Enthusiast",
  "API Architect",
];

function RotatingRole() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-rust font-display italic transition-opacity duration-400 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {ROLES[idx]}
    </span>
  );
}

function HeroSVG() {
  return (
    <div className="relative w-full max-w-sm mx-auto mt-8 lg:mt-0">
      {/* Large decorative W mark */}
      <svg
        viewBox="0 0 320 320"
        className="w-full opacity-[0.06] absolute inset-0"
        fill="none"
      >
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="320"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          fill="#1A1A18"
        >
          W
        </text>
      </svg>

      {/* Tech constellation */}
      <svg viewBox="0 0 320 320" className="w-full svg-draw relative z-10" fill="none">
        {/* Grid lines */}
        <line x1="0" y1="160" x2="320" y2="160" stroke="#1A1A18" strokeWidth="0.5" opacity="0.15" />
        <line x1="160" y1="0" x2="160" y2="320" stroke="#1A1A18" strokeWidth="0.5" opacity="0.15" />

        {/* Constellation connections */}
        <polyline
          points="60,80 120,140 160,100 200,160 260,120"
          stroke="#C4500A"
          strokeWidth="1"
          opacity="0.6"
        />
        <polyline
          points="80,200 140,240 200,200 260,240"
          stroke="#1E5E3E"
          strokeWidth="1"
          opacity="0.5"
        />
        <line x1="160" y1="100" x2="140" y2="240" stroke="#1A1A18" strokeWidth="0.5" opacity="0.2" />

        {/* Nodes */}
        {[
          [60, 80], [120, 140], [160, 100], [200, 160], [260, 120],
          [80, 200], [140, 240], [200, 200], [260, 240],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 2 ? 6 : 3}
            fill={i === 2 ? "#C4500A" : "#1A1A18"}
            opacity={i === 2 ? 1 : 0.5}
          />
        ))}

        {/* Node labels */}
        <text x="155" y="88" fontSize="8" fill="#C4500A" fontFamily="monospace" textAnchor="middle">
          wasmer
        </text>
        <text x="45" y="78" fontSize="7" fill="#1A1A18" fontFamily="monospace" opacity="0.5">
          Rust
        </text>
        <text x="255" y="118" fontSize="7" fill="#1A1A18" fontFamily="monospace" opacity="0.5">
          Go
        </text>
        <text x="65" y="198" fontSize="7" fill="#1E5E3E" fontFamily="monospace" opacity="0.7">
          TypeScript
        </text>
        <text x="244" y="255" fontSize="7" fill="#1A1A18" fontFamily="monospace" opacity="0.5">
          SQL
        </text>

        {/* Outer ring */}
        <circle cx="160" cy="160" r="140" stroke="#1A1A18" strokeWidth="0.5" strokeDasharray="6 8" opacity="0.1" />
        <circle cx="160" cy="160" r="100" stroke="#C4500A" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.15" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#1A1A18 1px, transparent 1px),
            linear-gradient(90deg, #1A1A18 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24 lg:py-0">
        {/* Text */}
        <div className="stagger">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-ink/40 mb-6">
            Available for freelance &amp; full-time
          </p>

          <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-[1.05] text-ink mb-4">
            Voice of the
            <br />
            <span className="text-rust">Builder</span>
            <br />
            &amp;{" "}
            <em className="not-italic text-forest">Maker.</em>
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-ink/30" />
            <RotatingRole />
          </div>

          <p className="font-body text-lg text-ink/70 leading-relaxed max-w-lg mb-10">
            I build systems that scale — from WebAssembly runtimes to production APIs
            serving millions. Seven years at the intersection of Rust, TypeScript, and
            whatever needs to be fast.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-ink text-cream px-7 py-3.5 font-mono text-sm font-bold tracking-widest uppercase hover:bg-rust transition-colors duration-200 group"
            >
              View Work
              <svg viewBox="0 0 20 10" className="w-5 h-2.5 group-hover:translate-x-1 transition-transform" fill="none">
                <line x1="0" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <polyline points="13,1 18,5 13,9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-ink/30 text-ink px-7 py-3.5 font-mono text-sm font-bold tracking-widest uppercase hover:border-ink hover:bg-ink hover:text-cream transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Ticker */}
          <div className="mt-14 border-t border-b border-ink/10 py-3 overflow-hidden -mx-4 lg:-mx-8">
            <div className="ticker-inner text-xs font-mono text-ink/30 tracking-widest uppercase">
              {Array(3)
                .fill(
                  "Rust · TypeScript · Go · WebAssembly · PostgreSQL · Redis · Docker · Kubernetes · GraphQL · gRPC · Next.js · Axum · Linux · "
                )
                .join("")}
            </div>
          </div>
        </div>

        {/* Hero SVG */}
        <HeroSVG />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <svg viewBox="0 0 10 16" className="w-2.5 h-4" fill="none">
          <line x1="5" y1="0" x2="5" y2="14" stroke="currentColor" strokeWidth="1" />
          <polyline points="1,10 5,14 9,10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
