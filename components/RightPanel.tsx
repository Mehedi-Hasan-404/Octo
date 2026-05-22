import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setDate(
        now.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center">
      <p className="font-mono text-2xl text-ink font-bold tracking-tight cursor-blink">
        {time}
      </p>
      <p className="font-mono text-xs text-ink/40 mt-1 uppercase tracking-widest">
        {date} · GMT+0
      </p>
    </div>
  );
}

const METRICS = [
  { label: "Years exp.", value: "7+" },
  { label: "Projects shipped", value: "43" },
  { label: "Open source PRs", value: "210" },
  { label: "Blog posts", value: "28" },
];

function LiveSVGOrbit() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
        {/* Outer orbit ring */}
        <circle cx="60" cy="60" r="50" stroke="#1A1A18" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.2" />
        {/* Inner orbit ring */}
        <circle cx="60" cy="60" r="30" stroke="#C4500A" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.4" />
        {/* Center */}
        <circle cx="60" cy="60" r="8" fill="#1A1A18" />
        <text x="60" y="64" textAnchor="middle" fontSize="8" fill="#F5F0E8" fontFamily="serif" fontWeight="bold">W</text>
      </svg>
      {/* Orbiting dots via CSS animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-3 h-3 rounded-full bg-rust absolute"
          style={{
            animation: "orbitDot 4s linear infinite",
            transformOrigin: "center",
          }}
        />
        <div
          className="w-2 h-2 rounded-full bg-forest absolute"
          style={{
            animation: "orbitDot 7s linear infinite reverse",
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  );
}

const NOW_LISTENING = {
  track: "Overgrown",
  artist: "James Blake",
  bpm: 78,
};

export default function RightPanel() {
  const [barW, setBarW] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setBarW(72), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <aside className="fixed right-0 top-0 h-full w-56 border-l border-ink/10 flex flex-col gap-0 z-30 hidden xl:flex bg-cream">
      {/* Time widget */}
      <div className="px-6 pt-10 pb-8 border-b border-ink/10">
        <Clock />
      </div>

      {/* Live orbit graphic */}
      <div className="px-6 py-8 border-b border-ink/10">
        <p className="text-xs font-mono text-ink/30 tracking-widest uppercase mb-4 text-center">
          Systems
        </p>
        <LiveSVGOrbit />
      </div>

      {/* Metrics */}
      <div className="px-6 py-6 border-b border-ink/10">
        <p className="text-xs font-mono text-ink/30 tracking-widest uppercase mb-4">
          Numbers
        </p>
        <div className="space-y-3">
          {METRICS.map((m) => (
            <div key={m.label} className="flex justify-between items-baseline">
              <span className="text-xs text-ink/50 font-body">{m.label}</span>
              <span className="font-mono font-bold text-sm text-ink">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Now listening */}
      <div className="px-6 py-6 border-b border-ink/10">
        <p className="text-xs font-mono text-ink/30 tracking-widest uppercase mb-3">
          Now listening
        </p>
        <div className="flex gap-2 items-start">
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 mt-0.5 flex-shrink-0 text-rust animate-pulse">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1" />
            <circle cx="10" cy="10" r="3" fill="currentColor" />
            <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <div>
            <p className="text-xs font-semibold text-ink leading-snug">
              {NOW_LISTENING.track}
            </p>
            <p className="text-xs text-ink/40">{NOW_LISTENING.artist}</p>
            <div className="mt-2 w-full bg-ink/10 rounded-full h-0.5">
              <div
                className="skill-bar-fill bg-rust h-0.5 rounded-full"
                style={{ width: `${barW}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="px-6 py-6 mt-auto">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-rust flex-shrink-0">
            <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="6" r="1.5" fill="currentColor" />
          </svg>
          <span className="text-xs text-ink/40 font-mono">Remote — Earth</span>
        </div>
      </div>
    </aside>
  );
}
