# FyzioUnion — Design System

A calm, clinical design system for **FyzioUnion**, a Slovak physiotherapy platform that connects therapists and their patients through prescribed rehabilitation programs. Two products share one cool blue-and-slate visual language:

- **Terapeut** — a therapist web SaaS (desktop). Clinicians manage patients, build exercise programs phase by phase, browse an exercise library, and send assessment tools. Dense, information-rich, confident.
- **Pacient** — a patient iOS app. A patient logs in with a code from their clinic and works through their daily plan: watch each exercise, count off series, log pain, complete periodic assessments (e.g. the CSI questionnaire), and track progress.

The mood is **clinical but warm** — trustworthy and medical without feeling cold or corporate. Cool blues and slate greys, generous rounding, soft tone-matched shadows, a single confident accent.

---

## Sources

This system was reverse-engineered from the product codebases. Explore them to build more faithfully:

- **Therapist web:** https://github.com/DanielUlicny/fyziounion-terapeut — vanilla-JS SaaS prototype. `styles.css` holds the full web token + component system; `views.js` / `modals.js` render the screens.
- **Patient app:** https://github.com/DanielUlicny/fyziounion-pacient — React iOS app. `app/data.jsx` (content model + icon set), `app/ui.jsx` (primitives), `app/home.jsx`, `app/login.jsx` etc. are the source of truth for the patient surface.

(Related repos in the same org: `fyziounion-hlavna`, `fzyioAiChat`.)

> The reader is not assumed to have access to these repos — values here are self-contained — but if you do, read them for exact behaviour and copy.

---

## Content fundamentals

**Language: Slovak.** All product copy is in Slovak. Keep it that way unless asked otherwise.

**Voice: formal, second-person plural (*vykanie*).** The product addresses the user as *vy*, never *ty* — `Prihláste sa`, `Zadajte e-mail a heslo`, `Vyberte úroveň`. Polite and respectful, as a clinician speaks to a patient.

**Tone by surface:**
- *Patient app* — warm, encouraging, plain-language. Celebrates effort: `Skvelá práca!`, `Dnešné cviky máte za sebou.`, `Oddýchnite si`. Instructions are gentle and concrete: `Pomaly ohýbajte zápästie hore a dole.`, `Ak cítite ostrú bolesť, znížte rozsah.`
- *Therapist web* — concise, clinical, functional. Action labels and nouns: `Vytvoriť pacienta`, `Bez programu`, `Dochádzka`, `Hodnotiace nástroje`.

**Casing:** Sentence case everywhere — titles, buttons, labels. The only UPPERCASE is small mono eyebrows (`HODNOTIACI NÁSTROJ`, `DNEŠNÝ TRÉNING`, `TRÉNINGOVÉ DNI`) with wide letter-spacing. The wordmark is the sole exception (FyzioUnion, camel-cased).

**Numbers & units:** Slovak conventions — decimal comma (`1,5 kg`), space before unit (`30 s`, `~5 minút`), `×` for reps (`12×`), `n/m` for series (`0/2`). Metrics render in the mono face.

**Emoji:** none. Status and meaning are carried by the icon set and color, never emoji. (A single `✓` glyph appears in a couple of completion states — that's the limit.)

**Vibe in one line:** *"Vaša rehabilitácia, krok za krokom."* — your rehabilitation, step by step. Steady, supportive, never gimmicky.

---

## Visual foundations

**Color.** A cool, clinical palette built on one blue accent over neutral blue-grey.
- *Brand:* deep **navy** `#1C3F6E` (sidebar, hero cards, logo) deepening to `#141B34`; **primary blue** `#2563B8` for actions (therapist web); a softer **slate** `#455A74` as the patient-app accent. Colored display headings use a deep `#15396B`; body text always stays near-black ink.
- *Neutrals:* cool greys, **never pure black** — ink `#1A2333`, muted `#64757D`, faint `#95A3AC`, page `#F7F9FA`, surface white.
- *Status:* calm, desaturated — success green `#1F9D6B`, warning amber `#E0A500`, danger `#DC4B4B`, each paired with a pale tint for fills.
- Accent is used sparingly: one primary action per view, tints for selected/hover states, deep navy for the one hero moment per screen.

**Type.** Display **Cabinet Grotesk** (tight tracking, weights 500/700/800) for headings, names, the wordmark. Body **Switzer** (web) / **Inter** (app) at 400–700. **Roboto Mono** for metrics, access codes, and uppercase eyebrows. Headings pull in tight (`-0.025em`); eyebrows open up (`0.06em`).

**Spacing & layout.** A 4-based scale (4/8/12/16/20/24/32/40). Therapist web is a fixed **252px sidebar** + centered content (max ~980–1460px); page titles centered in deep blue. Patient app is a single scrolling column with 20px side gutters inside the device. Fixed elements: the sidebar (web) and the bottom tab bar + status bar (app).

**Corners.** Generously rounded, and **app rounds harder than web**: web buttons/fields 12px, web cards 16px; app cards 20–22px, modals 24px, login card & bottom sheets 28px. Pills/avatars fully round.

**Cards.** Three archetypes: (1) white surface — `1px solid var(--border)`, the cool resting shadow `sh-1`/`sh-card-app`; (2) the signature **deep-navy gradient hero** card (white text, `sh-hero`) for the one focal moment — daily training, reminders, assessment prompt; (3) soft status cards (accent tint, or green success tint with a matching line). Borders thicken to a colored line when a card is in a "done" state (green) or selected (accent).

**Shadows.** Always cool and blue-grey-toned (`rgba(20,40,70,…)`), never neutral black. A tight ramp: `sh-1` resting → `sh-2` hover → `sh-pop` menus → `sh-3` modals → `sh-hero` for the navy cards.

**Backgrounds.** Mostly flat surfaces. The app body uses a faint radial wash (`#eef1f6 → #e4e8f0`). The one recurring texture is the **diagonal-stripe exercise-video placeholder** (`repeating-linear-gradient(135deg, …)` with a centered play button) standing in for not-yet-loaded movement clips. No photography, no illustration, no decorative gradients beyond the navy hero.

**Motion.** Quick and functional. Standard ease `cubic-bezier(0.4,0.1,0.2,1)` at 140–220ms for color/background/transform; a springier `cubic-bezier(0.32,0.72,0,1)` for bottom-sheet slides and screen fades. Content fades up ~8px on mount (`fz-fade`). Progress rings tween over 0.6s. Nothing bounces; nothing loops decoratively (the only loops are functional — a hover scrub bar on video thumbnails, a marquee for overflowing titles). Respects `prefers-reduced-motion`.

**States.** Hover = a light raise fill (`--raise`) or one step darker accent; press = `scale(0.985)` on buttons and a darker accent; focus = accent border + a 4px accent-shadow ring on inputs, or a 2px accent-tint outline on buttons. Selected = accent tint fill with an accent border. Disabled = reduced opacity / muted fill, never hidden.

**Transparency & blur.** Minimal. Translucency appears only *inside* the navy hero cards (`rgba(255,255,255,0.12–0.22)` chips and tracks). No glassmorphism, no backdrop blur in the main UI.

**Imagery vibe.** Cool and neutral. There is no real photography in the system; movement is represented by the cool blue-grey striped placeholder. If photography is added, keep it cool-toned and clinical.

---

## Iconography

**One house line-icon set — the `Icon` component.** A single 24×24 grid, **1.8 default stroke**, round caps and joins, drawn to inherit `currentColor`. Bump to `sw≈2.4` at small sizes or for emphasis. A few glyphs are solid-filled (`play`, `pause`, `dots`, `spark`). The set is ported verbatim from the patient app's hand-built icons and extended with the glyphs the web app needs (search, edit, trash, filter, dumbbell, fileText, layers, …). See `components/icon/` and the **Icon** card for the full inventory and names.

**Rules:**
- Use `Icon` for **every** icon in both products. Never substitute emoji, a third-party icon font, Unicode symbols, or one-off hand-rolled SVGs.
- The brand mark is the **spark** — a 4-point star — in a rounded square (white on accent, or accent on white). See `assets/logo-mark.svg` and `assets/logo-lockup.svg`.
- If a needed glyph is missing, add it to `Icon.jsx` in the same 24×24 / 1.8-stroke style rather than importing another set.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (a manifest of `@import`s).
- `tokens/` — `fonts.css` (CDN webfonts), `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `logo-mark.svg`, `logo-lockup.svg`.
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.

**Components** (`components/<group>/` — `window.FyzioUnionDesignSystem_f4abb2`)
- `icon/` — **Icon**, ICON_NAMES
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Field**, **Segmented**
- `data-display/` — **Badge**, **Avatar**, **ProgressRing**, **Tag**
- `surfaces/` — **Card**
- `navigation/` — **Tabs**, **BottomNav**

**Foundations** (`guidelines/foundations/`) — specimen cards for the Design System tab: Brand / Accent / Neutral / Status colors, Display / Body / Mono type, Spacing / Radii / Shadows, Logo.

**UI kits** (`ui_kits/`)
- `pacient/` — patient iOS app, Home screen (interactive).
- `terapeut/` — therapist web SaaS, Patients roster (interactive).

**Templates** (`templates/` — consuming projects can seed a new design from these)
- `patient-app/` — Patient app · Home screen.
- `therapist-web/` — Therapist web · Patients roster.
Each is a Design Component (`.dc.html`) that loads the system via its `ds-base.js` and mounts the matching UI-kit screen.

---

## Caveats

- **Fonts load from CDN** (Fontshare for Cabinet Grotesk + Switzer; Google Fonts for Inter + Roboto Mono). No binaries are self-hosted, so an offline build won't have them. If you need self-hosted webfonts, upload the files and I'll wire up `@font-face` rules.
- The two products use slightly different accents in their own code (web `#2563B8`, app slate `#455A74`). This system unifies on the brand blue and documents the slate as the patient-app variant — confirm which you want as the canonical accent.
