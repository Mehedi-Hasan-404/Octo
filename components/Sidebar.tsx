import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "#about", num: "01" },
  { label: "Stack", href: "#stack", num: "02" },
  { label: "Work", href: "#work", num: "03" },
  { label: "Writing", href: "#writing", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

const SOCIAL = [
  {
    name: "GitHub",
    href: "https://github.com/wasmer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/wasmer",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/wasmer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Dev.to",
    href: "https://dev.to/wasmer",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.79 6.68z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((n) => n.href.replace("#", ""));
      let current = sections[0];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-ink text-cream flex flex-col z-40 hidden lg:flex">
        {/* Logo */}
        <div className="px-8 pt-10 pb-8 border-b border-white/10">
          <Link href="/" className="block group">
            <svg
              viewBox="0 0 80 80"
              className="w-12 h-12 mb-3 svg-draw"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="38" stroke="#C4500A" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="28" stroke="#C4500A" strokeWidth="0.75" strokeDasharray="4 4" />
              <path
                d="M22 52 L32 28 L40 44 L48 28 L58 52"
                stroke="#F5F0E8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="40" cy="44" r="3" fill="#C4500A" />
            </svg>
            <span className="font-display font-black text-xl tracking-tight text-cream">
              Wasmer
            </span>
            <p className="text-xs text-cream/40 font-mono mt-0.5 tracking-widest uppercase">
              Full Stack Engineer
            </p>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-8 pt-8">
          <p className="text-xs font-mono text-cream/30 tracking-[0.2em] uppercase mb-6">
            Navigate
          </p>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-item group flex items-center gap-3 py-2.5 text-sm font-body transition-all duration-200 relative
                    ${active === item.href.replace("#", "")
                      ? "text-rust"
                      : "text-cream/50 hover:text-cream"
                    }`}
                >
                  <span
                    className={`font-mono text-xs transition-all duration-300 ${
                      active === item.href.replace("#", "")
                        ? "text-rust"
                        : "text-cream/20"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`h-px bg-rust transition-all duration-300 ${
                      active === item.href.replace("#", "") ? "w-6" : "w-0"
                    }`}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Status indicator */}
        <div className="px-8 py-6 border-t border-white/10">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs text-cream/50 font-mono">Available for work</span>
          </div>
          <div className="flex gap-3 flex-wrap">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-cream/40 hover:text-rust transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-ink text-cream flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="w-8 h-8 svg-draw" fill="none">
            <circle cx="20" cy="20" r="19" stroke="#C4500A" strokeWidth="1.5" />
            <path d="M10 28L15 14L20 22L25 14L30 28" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display font-black text-lg">Wasmer</span>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-8 h-8 flex flex-col justify-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5 w-full" : "w-full"
            }`}
          />
          <span
            className={`h-px bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0 w-full" : "w-3/4"
            }`}
          />
          <span
            className={`h-px bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5 w-full" : "w-1/2"
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-ink transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <nav className="flex-1 flex flex-col justify-center stagger">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 py-4 border-b border-white/10 group"
              >
                <span className="font-mono text-xs text-rust">{item.num}</span>
                <span className="font-display text-4xl font-bold text-cream group-hover:text-rust transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="flex gap-6 py-8">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-cream/50 hover:text-rust transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
