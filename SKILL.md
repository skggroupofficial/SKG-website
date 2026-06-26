---
name: skg-design
description: Use this skill to generate well-branded interfaces and assets for SKG (Shri Kuber Group), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Orientation

SKG (Shri Kuber Group) is a vertically-integrated real estate developer — **develop · build · host** — in Ahmedabad, Gujarat. Brand line: **"The Power of Trust."** Voice is plain-spoken, declarative, material-honest, long-horizon; never corporate or hyped. See `readme.md` §4 for the full voice guide and the "we say / we don't say" list.

## Where things are

- `styles.css` — the single stylesheet. Link it and you get all tokens, self-hosted fonts (`assets/fonts/`), the `.skg-*` utility/role/component classes, and the `.skg-on-dark` inverse scope.
- `tokens/` — colour, type, spacing, effects, base CSS (custom properties).
- `components/` — React primitives (Logo, Eyebrow, Sparkle, Button, IconButton, Input, Textarea, Select, Checkbox, Stat, Tag, Badge, Card, Divider, Quote). Each has a `.prompt.md` with usage.
- `ui_kits/website/` — full interactive marketing-site recreation (Home, Projects, Project detail, Approach, Contact).
- `slides/` — 1280×720 presentation specimens.
- `guidelines/` — foundation specimen cards.
- `assets/logo/` — gold lockup + monogram PNGs. `assets/reference/` — the brand board PDF + stationery.

## Using the system

**Plain HTML/CSS** — link `styles.css`, then use tokens and classes:
```html
<span class="skg-eyebrow skg-eyebrow--dash">Develop · Build · Host</span>
<h1 class="skg-display">Built to last beyond the current cycle.</h1>
<button class="skg-btn skg-btn--accent">Enquire</button>
```

**React components** — when the compiled bundle is present, load it and read the namespace (see `readme.md` §3 for the exact `window.*` name). If you're outside this project (e.g. in Claude Code), prefer the `.skg-*` classes, or port the small `.jsx` files in `components/` directly.

## Brand guardrails

- Palette: **Bone `#F4EFE4` · Tobacco `#2C1C10` · Brass `#A07830` · Jade `#3E5E50`** in a 60/25/10/5 ratio. Functional colours stay earthy.
- Type: **Playfair Display** (display) + **Libre Franklin** (body) + **DM Mono** (UPPERCASE wide-tracked labels).
- Near-square corners, hairline borders, warm (tobacco-tinted) shadows, the diagonal **lattice** texture, the **✦** four-point star, calm eased motion (no bounce).
- Icons: **Phosphor** (regular). **No emoji.**
- Imagery: warm-graded, material close-ups, architectural, **no posed people**; use the `Figure` placeholder slots until real photography exists.
