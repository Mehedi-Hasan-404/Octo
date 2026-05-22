/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        cream: "#F5F0E8",
        ink: "#1A1A18",
        rust: "#C4500A",
        forest: "#1E5E3E",
        gold: "#B8960C",
        mist: "#E8E2D8",
        charcoal: "#2D2D2A",
      },
      animation: {
        "draw-line": "drawLine 2s ease forwards",
        "fade-up": "fadeUp 0.8s ease forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        orbit: "orbit 8s linear infinite",
      },
      keyframes: {
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(60px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(60px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
