import { useState } from "react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    handle: "@wasmer",
    href: "https://github.com/wasmer",
    desc: "Open source projects and contributions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    handle: "@wasmer",
    href: "https://twitter.com/wasmer",
    desc: "Quick thoughts on systems and dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "wasmer",
    href: "https://linkedin.com/in/wasmer",
    desc: "Professional background and experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Dev.to",
    handle: "wasmer",
    href: "https://dev.to/wasmer",
    desc: "Long-form technical writing",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.79 6.68z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "hi@wasmer.dev",
    href: "mailto:hi@wasmer.dev",
    desc: "Direct line for serious inquiries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hi@wasmer.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-ink/10">
      <div className="mb-16">
        <div className="ruled-line mb-3">
          <span className="font-mono text-xs text-ink/30 tracking-widest uppercase">05</span>
        </div>
        <h2 className="font-display font-black text-4xl lg:text-5xl text-ink">
          Get In Touch.
        </h2>
        <p className="font-body text-ink/60 mt-3 max-w-xl">
          Open to interesting problems, contract work, and conversations about
          distributed systems, Rust, or anything in between.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: email CTA */}
        <div>
          <div className="border border-ink/10 p-8 relative overflow-hidden">
            {/* Background W */}
            <span
              className="absolute -right-8 -bottom-8 font-display text-[12rem] font-black text-ink/3 leading-none select-none pointer-events-none"
              aria-hidden
            >
              W
            </span>

            <p className="font-mono text-xs text-ink/30 tracking-widest uppercase mb-3">
              Primary contact
            </p>
            <p className="font-display font-bold text-2xl text-ink mb-6">
              hi@wasmer.dev
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:hi@wasmer.dev"
                className="inline-flex items-center gap-3 bg-ink text-cream px-6 py-3 font-mono text-sm font-bold tracking-wider uppercase hover:bg-rust transition-colors duration-200"
              >
                Send Email
                <svg viewBox="0 0 14 8" className="w-3 h-2" fill="none">
                  <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
                  <polyline points="8,1 12,4 8,7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={copyEmail}
                className="border border-ink/15 text-ink/60 px-4 py-3 font-mono text-xs hover:border-ink hover:text-ink transition-all duration-200"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-ink/10">
              <p className="font-mono text-xs text-ink/30 mb-2">Response time</p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                <span className="font-mono text-sm text-ink">Usually within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: social links */}
        <div className="space-y-0 divide-y divide-ink/10">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-4 hover:bg-mist -mx-4 px-4 transition-colors duration-150"
            >
              <span className="text-ink/30 group-hover:text-rust transition-colors">
                {s.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-sm font-medium text-ink group-hover:text-rust transition-colors">
                  {s.handle}
                </p>
                <p className="text-xs text-ink/40 font-body truncate">{s.desc}</p>
              </div>
              <svg
                viewBox="0 0 14 14"
                className="w-3 h-3 text-ink/20 group-hover:text-rust group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                fill="none"
              >
                <line x1="2" y1="12" x2="12" y2="2" stroke="currentColor" strokeWidth="1.2" />
                <polyline points="6,2 12,2 12,8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-ink/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" className="w-5 h-5 svg-draw" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#C4500A" strokeWidth="1" />
            <path d="M7 14L10 8L12 12L14 8L17 14" stroke="#1A1A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display font-black text-ink">Wasmer</span>
        </div>
        <p className="font-mono text-xs text-ink/30">
          Built with Next.js + Tailwind · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-ink/20">
          No trackers. No analytics. Just code.
        </p>
      </div>
    </section>
  );
}
