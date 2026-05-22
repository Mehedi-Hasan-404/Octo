# Wasmer — Bio Page

A production-grade personal bio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Design

- **Editorial aesthetic** — inspired by "Voice of the Lazy & Unemployed" reference: bold serif typography, rust/forest/cream palette, raw grid layouts
- **Left sidebar** — sticky navigation with active section highlighting, social links, availability status
- **Right panel** — live clock, orbiting SVG graphic, metrics, "now listening" widget (xl screens)
- **Live SVGs** — animated constellation in hero, circuit board in stack section, stroke-draw animations throughout
- **Scroll-spy navigation** — sidebar highlights active section as you scroll
- **Mobile menu** — full-screen overlay with animated hamburger
- **No emojis** — pure typographic and SVG visual language

## Sections

1. **Hero** — animated role rotator, constellation SVG, scrolling tech ticker
2. **Stack** — skill bars (Intersection Observer triggered), category cards, tool tags
3. **Work** — 6 projects in a responsive grid with featured (dark) cards
4. **Writing** — 4 blog post entries with hover interactions
5. **Contact** — email CTA with copy button, all social links

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customise

- **Your details**: Edit `components/Hero.tsx`, `components/Contact.tsx`
- **Projects**: Edit `components/Work.tsx` — update `PROJECTS` array
- **Blog posts**: Edit `components/Writing.tsx` — update `POSTS` array
- **Skills/tools**: Edit `components/Stack.tsx`
- **Social links**: Edit `components/Sidebar.tsx` `SOCIAL` array and `components/Contact.tsx` `SOCIAL_LINKS`
- **Colour palette**: Edit `styles/globals.css` CSS variables and `tailwind.config.js`

## Stack

- Next.js 14 (Pages Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display, DM Sans, JetBrains Mono)
- Pure CSS animations (no animation library dependency)
- Intersection Observer for scroll-triggered skill bars

## Deploy

```bash
npm run build
npm start
```

Or deploy to Vercel with zero config.
