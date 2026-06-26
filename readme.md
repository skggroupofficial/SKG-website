# SKG — Shri Kuber Group · Design System

> **The Power of Trust.** Brand & UI system for Shri Kuber Group (SKG), a vertically-integrated real estate developer — *develop · build · host* — based in Ahmedabad, Gujarat, India.

This system is the single source of truth for SKG's digital and presentation surfaces. It carries the brand's foundations (colour, type, motifs), reusable React UI primitives, a full marketing-website UI kit, and a presentation slide set — built so a design or engineering agent can produce on-brand work, or feed it straight into Claude Code for production.

---

## 1 · Company context

Shri Kuber Group is **not a single-discipline developer**. It acquires land, builds the structure in-house, and operates the hospitality within its developments — three disciplines under one accountable roof:

| Division | What it is |
|---|---|
| **Develop** | Land acquisition & assembly, feasibility & underwriting, masterplanning & approvals. |
| **Build** | In-house construction management, material & finish governance, delivery. |
| **Host** | Hospitality operations, asset/estate management, guest & resident experience. |

The positioning is **long-horizon and material-honest**: *"We build places that outlast the conversation about them."* Success is measured in a building's tenth year, not its opening week. The audience is landowners, investors, JV partners, and hospitality guests.

**Identity at a glance**
- Wordmark **SKG** — an interlocked serif cipher with a skyscraper rising through the **K** and an arc grounding the mark, rendered in brushed metallic gold.
- Tagline **"The Power of Trust."**
- Statement **"Ground. Form. Experience."** · labels **Develop · Build · Host**.
- Full name **Shri Kuber Group**; office **Shri Kuber House**, S.G. Highway, Ahmedabad.

---

## 2 · Sources

This system was built from the SKG brand assets supplied by the client (no Figma file or codebase was provided):

- `assets/reference/brandboard.pdf` — **SKG Brand Board 2026** (7 pp): monogram construction, colour palette ("Architectural Earth"), typography, voice & tone, imagery direction, pattern & material library, brand principles. Rendered pages live in `assets/reference/brandboard/`.
- `assets/logo/skg-logo-gold.png` — primary lockup (gold, transparent).
- `assets/logo/skg-monogram-gold.png` — monogram only (extracted from the lockup).
- `assets/reference/skg-letterhead.png`, `assets/reference/skg-business-card.png` — stationery mockups (contact details, applied use).

> If a Figma library or website codebase exists, re-attach it and this system can be reconciled against the live source — screenshots and stationery were the only applied references available here.

---

## 3 · Quick start (for consumers / Claude Code)

**1. Link the one stylesheet.** Everything (tokens + fonts + base + component classes) ships through it:

```html
<link rel="stylesheet" href="styles.css" />
```

**2a. Use the brand with plain HTML/CSS** — reference the tokens and `.skg-*` classes:

```html
<span class="skg-eyebrow skg-eyebrow--dash">Develop · Build · Host</span>
<h1 class="skg-display">Built to last beyond the current cycle.</h1>
<button class="skg-btn skg-btn--accent">Enquire</button>
```

**2b. Use the React components** — load the compiled bundle, read from the namespace:

```html
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, Logo, Stat } = window.SKGShriKuberGroupDesignSystem_2a6fdb;
</script>
```

Icons are **Phosphor** (CDN) — see §7.

---

## 4 · Content fundamentals (voice & tone)

SKG's voice is **plain-spoken, declarative and confident — never corporate.** It states what is true and stops. It never reaches for hype, scale-bragging, or buzzwords.

**Principles**
- **First person plural, present tense.** "We develop ground others overlook." We speak as the firm — *we / our*, not *I*. Address partners as *you* sparingly and directly.
- **Short, load-bearing sentences.** A claim, then silence. No stacking of adjectives.
- **Concrete over abstract.** Name the material, the year, the place. "Limestone, oiled timber, unlacquered brass" — not "premium finishes."
- **Long-horizon framing.** Talk about year ten, the next cycle, ageing well, accountability over time.
- **No jargon.** No "solutions," "ecosystems," "world-class," "disrupting," "leveraging," "vibrant communities."

**We say → not → We don't say** (from the brand board)
- "We develop ground others overlook." → *not* "Unlocking the potential of underserved markets."
- "Built to last beyond the current cycle." → *not* "Delivering world-class properties at scale."
- "Every material has a reason to be here." → *not* "Premium finishes and luxury amenities throughout."
- "We operate what we build." → *not* "End-to-end integrated real estate solutions."
- "This land has a story. We continue it." → *not* "Transforming spaces into vibrant communities."
- "Considered. Not cautious." → *not* "Disrupting traditional real estate paradigms."

**Casing & mechanics**
- **Display & headings:** sentence case ("Built to last beyond the current cycle.").
- **Labels / eyebrows / buttons / wayfinding:** UPPERCASE, wide-tracked, DM Mono ("PHASE 01 — SITE ACQUISITION").
- Use the em dash **—** liberally for asides; use the middot **·** to separate label items (Develop · Build · Host).
- The four-point star **✦** is the brand's punctuation mark — section breaks, list bullets, sign-offs.
- **No emoji. Ever.** No exclamation marks. Numerals as digits in data ("1.4M ft²", "Phase 01").
- British/Indian English ("masterplan", "programme", "colour" in prose); ₹ / lakh / crore where money appears.

---

## 5 · Visual foundations

### Colour — "Architectural Earth"
Four anchors, used in a deliberate ratio: **Bone 60 · Tobacco 25 · Brass 10 · Jade 5.**

| Token | Hex | PMS | Role |
|---|---|---|---|
| `--skg-bone-cream` | `#F4EFE4` | 9123 C | Primary ground (warm, paper-like) |
| `--skg-tobacco` | `#2C1C10` | 476 C | Type, dark sections, inverse ground |
| `--skg-aged-brass` | `#A07830` | 131 C | Accent, rules, the single key action |
| `--skg-smoky-jade` | `#3E5E50` | 627 C | Quiet highlight (~5%), never dominant |

Full warm ramps exist for each (`--bone-*`, `--tobacco-*`, `--brass-*`, `--jade-*`) plus **semantic aliases** you should reference instead of raw ramps: `--surface-page/-dark`, `--text-primary/-secondary/-muted`, `--accent`, `--border-subtle`, `--text-on-dark`, etc. Functional colours stay earthy: positive = jade, notice = brass, critical = burnt terracotta `#9B4A2F` (never neon).

### Typography
Three families, all **self-hosted** (`assets/fonts/`, latin woff2):
- **Playfair Display** — display serif. Headlines (Bold 700, tracking −0.02em), editorial accents (Italic 400), subheadings (Medium 500).
- **Libre Franklin** — body & UI sans. Long-form copy (Regular 400, line-height 1.65), captions (Light 300).
- **DM Mono** — labels & wayfinding. UPPERCASE, tracking +0.20em. Eyebrows, tags, buttons, data captions.

The pairing is the signature: **serif display + sans body + mono labels.** Reach for the role classes (`.skg-display`, `.skg-display-italic`, `.skg-subheading`, `.skg-body`, `.skg-caption`, `.skg-eyebrow`) or the `--role-*` tokens.

### Space, layout & form
- **4px grid** (`--space-1…12`). Generous whitespace — the brand breathes; sections use `--section-pad-y` (clamped 4–9rem).
- **Containers** `--container-md/lg/xl` centred with a clamped `--gutter`. Editorial, asymmetric two-column splits (e.g. 0.8fr / 1.2fr) are the house layout move.
- **Architectural, near-square corners.** `--radius-card: 0` (panels stay square, as on the brand board); buttons/inputs soften to just `2px`. Pills only for tags & avatars.
- **Borders:** hairlines — `--border-subtle` (rgba tobacco .10) on light, `--border-on-dark` on tobacco. Gold rules use `--rule-gold` at ~50% opacity.

### Surfaces, shadow & depth
- Cards are **flat with a hairline border** by default (brand-board panels). A `raised` variant swaps the border for a **warm, tobacco-tinted shadow** (`--shadow-sm…xl` — never neutral grey).
- **Transparency & blur** is reserved for chrome over content: the sticky header is `rgba(bone, .92)` + `backdrop-filter: blur(10px)`. Don't glassmorph content panels.

### Backgrounds & texture
- **Bone ground** is the default. **Tobacco** for inverse sections (`.skg-on-dark` flips the text tokens for you).
- **Lattice pattern** — a diagonal brass crosshatch (`.skg-lattice` at 8% on bone, `.skg-lattice--dark` at 12% on tobacco). The brand's one decorative texture; use it on dark hero/footer/section grounds.
- **No gradients as decoration** beyond subtle warm radial glows behind dark heroes, and the material/figure treatments. No bluish-purple gradients, ever.

### Motion
Calm and eased — **no bounce, no spring.** `--ease-standard`/`--ease-out`, durations 140–720ms. Sections fade-and-rise ~18px on first view (`Reveal`). Hover transitions are quick colour shifts; the link-button nudges its arrow 3px. Respects `prefers-reduced-motion`.

### Interaction states
- **Hover:** primary buttons darken (tobacco-800→700); accent lightens (brass-500→400); ghost/secondary fill with `--accent-soft`; nav links grow a brass underline; cards lift `-3/-4px` + warm shadow + brass border.
- **Press:** `translateY(1px)` (a small settle, never a scale-down).
- **Focus:** 3px brass focus ring (`--ring-focus`) — visible and on-brand.

### Imagery direction (brand board §06)
Natural directional light only; **warm grade** (amber shadows, straw highlights — `--img-grade`). Close materiality (grain, weave, patina, joint lines); architectural detail at dawn/dusk; interior atmosphere. **No posed people, no aerial drone shots of bare land, no blue-hour CGI, no high-contrast B&W.** Until real photography exists, the kit uses **art-directed placeholder slots** (`Figure`) — warm tobacco/limestone fields with the lattice, a faint monogram watermark, and a mono caption describing the intended shot. Drop a real image in via `Figure src="…"`.

---

## 6 · Materials (brand board §07)

The brand's material language is a direct extension of the built work — chosen to **age**, not just to perform.

- **Limestone** `--material-limestone` — cladding, plinths, courtyard paving.
- **Aged Timber** `--material-aged-timber` — millwork, soffits. Oil-finished, never lacquered.
- **Brass** `--material-brass` — hardware, signage. Unlacquered, designed to patina.
- **Natural Linen** `--material-natural-linen` — furnishings, acoustic panels.

---

## 7 · Iconography

- **No proprietary icon set was supplied.** The system uses **[Phosphor Icons](https://phosphoricons.com)** (regular weight) via CDN — a refined, even-stroke line set that matches SKG's delicate, architectural feel. ⚠️ *Substitution flagged: confirm or replace if the brand later standardises on a specific icon library.*
  ```html
  <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
  <i class="ph ph-arrow-right"></i>
  ```
  Common glyphs in use: `ph-arrow-right`, `ph-arrow-up-right`, `ph-map-pin`, `ph-buildings`, `ph-compass-tool`, `ph-bell`, `ph-aperture`, `ph-list`, `ph-magnifying-glass`, `ph-phone`, `ph-envelope-simple`.
- **The four-point star ✦** (U+2726) is the brand's own icon — used directly as a glyph (no SVG) in rules, lockups and bullets via the `Sparkle` component or `.skg-sparkle`.
- **Unicode glyphs** carry small UI affordances where exact: the select chevron is `▾`, the sparkle is `✦`.
- **Emoji are never used.**

---

## 8 · Index / manifest

**Root**
- `styles.css` — the single entry point (consumers link this). `@import` lines only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for Claude Code portability.

**Foundations**
- `tokens/` — `fonts.css` (`@font-face`), `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css` (reset + `.skg-*` utilities).
- `css/components.css` — class-based component styling (hover/focus/active).
- `guidelines/*.card.html` — 19 foundation specimen cards (Colours, Type, Spacing, Brand).

**Components** (`window.SKGShriKuberGroupDesignSystem_2a6fdb`)
- `components/brand/` — **Logo, Eyebrow, Sparkle**
- `components/buttons/` — **Button, IconButton**
- `components/forms/` — **Input, Textarea, Select, Checkbox**
- `components/data/` — **Stat, Tag, Badge**
- `components/surfaces/` — **Card, Divider, Quote**

Each component dir holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` demo.

**UI kit**
- `ui_kits/website/` — the SKG marketing site, interactive: **Home → Projects → Project detail → Approach → Contact** (`index.html` + `data.jsx`, `kit.jsx`, `header.jsx`, `footer.jsx`, `home.jsx`, `projects.jsx`, `projectDetail.jsx`, `about.jsx`, `contact.jsx`, `app.jsx`).

**Slides**
- `slides/` — 5 presentation specimens (Cover, Section, Statement, Content, Closing), 1280×720, matching the brand board.

**Assets**
- `assets/logo/` — lockup + monogram (gold PNG). `assets/fonts/` — self-hosted webfonts. `assets/reference/` — brand board PDF + page renders + stationery.

---

## 9 · Fonts — substitution note

**No substitution.** The brand board names the exact families — Playfair Display, Libre Franklin, DM Mono — all open-source (OFL/Apache) and here **self-hosted** as latin woff2 in `assets/fonts/`. If you need additional scripts (e.g. Gujarati/Devanagari) or the full unicode range, extend the `@font-face` set in `tokens/fonts.css`.
