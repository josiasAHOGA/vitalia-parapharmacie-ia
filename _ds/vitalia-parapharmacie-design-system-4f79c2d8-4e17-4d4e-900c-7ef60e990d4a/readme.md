# Vitalia Parapharmacie — Design System

Vitalia is a **fictional French online parapharmacy** (parapharmacie en ligne) invented for this project: a storefront selling skincare, haircare, baby/maternity, and supplement products — the kind of products sold in French pharmacies without a prescription. No real brand, logo, or codebase was supplied; this system was built from scratch, informed by the general UI/UX reasoning database below, and grounded in the parapharmacy/e-commerce category.

**Source used:** [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (`.claude/skills/ui-ux-pro-max/`) — a generic design-intelligence skill (161 color palettes, 57 font pairings, product-type and UX-rule datasets). It is **not** a brand's design system; it's a reference database used here to select the color family (Pharmacy/Drug Store category), typography pairing, and to check touch-target/contrast/motion rules. Explore that repo directly for more palettes, font pairings, and UX rules if you want to steer this system in a different direction.

No Figma file or existing codebase was attached for this run — everything here (tokens, components, storefront) is an original creation for the Vitalia concept.

## Index

- `styles.css` — root stylesheet, imports everything below. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `base.css`
- `guidelines/` — 14 foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab
- `components/core/` — Button, Badge, Input, Select
- `components/commerce/` — ProductCard, PriceTag, RatingStars, QuantityStepper, CategoryChip
- `components/navigation/` — Header, Footer, Tabs
- `components/feedback/` — Toast, CartDrawer
- `ui_kits/parapharmacie-web/` — full click-through storefront (home → category filter → product detail → cart → checkout confirmation)
- `SKILL.md` — Claude Code-compatible skill wrapper for this system

### Components (14)

Core: **Button** (primary/secondary/outline/ghost), **Badge** (status pills), **Input**, **Select**.
Commerce: **ProductCard**, **PriceTag** (with promo strike-through), **RatingStars**, **QuantityStepper**, **CategoryChip**.
Navigation: **Header** (search + cart), **Footer**, **Tabs**.
Feedback: **Toast**, **CartDrawer**.

No component inventory existed to enumerate (no Figma/codebase attached), so this is an original standard e-commerce set sized to a parapharmacy storefront's actual needs — not a maximal kit. If you need Checkbox/Radio/Tooltip/Dialog etc. later, they can be added the same way.

## Content Fundamentals

Vitalia's copy is written in **French**, addressing the customer as **"vous"** (formal/polite address, standard for French commerce and health-adjacent brands — never "tu").

- **Tone**: warm but competent — like a pharmacist giving advice, not a hard-sell retailer. Reassuring, plain language over medical jargon.
- **Voice examples**: "Votre santé au quotidien, livrée chez vous" (hero), "Conseils de pharmaciens, marques de confiance, prix justes" (subhead), "Ajouter au panier" (not "Acheter maintenant" — softer, less pushy), "Produit ajouté au panier" (confirmation toast).
- **No emoji** in UI copy or navigation — this is a health-adjacent commerce product; emoji would undercut trust. Emoji-free throughout.
- **Numbers**: French formatting — comma as decimal separator (`16,90 €`), currency symbol after the amount.
- **Urgency is soft, never alarmist**: "Stock limité" rather than countdown timers or "Only 2 left!!" — matches pharmacy-counter register, not flash-sale energy.
- **Product names stay in their real marketing form** (brand + product line), descriptions are short and benefit-first ("Formule dermatologique testée, adaptée aux peaux sensibles").

## Visual Foundations

- **Color**: primary is a deep pharmacy green (`--color-primary`, #0F7A4D) — trust, health, nature — used for the header, links, primary text accents, and the wordmark. A warm coral (`--color-accent`, #E2542E) is reserved *only* for purchase-intent actions (Add to cart, checkout CTA, promo badges) so it always signals "this converts." Surfaces are near-white with a faint green tint (`--color-bg` #F8FAF8); cards sit on pure white. Semantic colors (success/warning/danger) are always paired with a label, never color alone.
- **Typography**: Figtree (display/headings, weights 600–800, rounded warmth without being childish) + Public Sans (body, neutral and highly legible at small sizes for ingredient lists and legal copy). Loaded via Google Fonts CDN — no font files were available to self-host (see Fonts note below).
- **Spacing**: 4px-rooted scale (4/8/12/16/20/24/32/40/48/64/80/96), standard marketing/commerce density — generous around hero and section breaks, tighter (12–16px) inside product cards.
- **Backgrounds**: flat color and soft tints only — no photography-heavy full-bleed treatments, no gradients except a single subtle two-stop green gradient on the hero band, no patterns/textures. Product imagery is the only "photography," shown as a placeholder tile (`image-slot`-style) since no real product photos were supplied.
- **Corner radii**: soft throughout — 6px inputs, 10px small containers, 16px cards, 22px large panels, pill (999px) for buttons/chips/tags. Never sharp corners — reads as approachable/clinical-soft rather than brutalist.
- **Shadows**: very soft, tinted toward the ink color (never pure black) — `0 1px 2px rgba(22,38,31,.07)` resting, `0 4px 14px rgba(22,38,31,.08)` on hover/elevated cards. No hard drop shadows.
- **Motion**: micro-interactions only, 150ms ease — button background darkens + scales to 0.97 on press, product cards lift 2px with a shadow increase on hover. No page-transition choreography, no decorative looping animation, no bounce/spring (this is a pragmatic commerce UI, not a playful consumer app).
- **Hover / press states**: hover = darker fill (primary/accent) or tinted background (outline/ghost buttons, category chips); press = 0.97 scale + darker fill; disabled = 45% opacity, cursor `not-allowed`, no hover response.
- **Borders**: 1–1.5px, low-contrast green-tinted gray (`--color-border` / `--color-border-strong`) — used for input outlines, card edges, footer dividers.
- **Layout**: header is sticky; product grids use `auto-fill, minmax(220px,1fr)`; a single max content width (`--container-max: 1280px`) keeps desktop layouts from stretching edge-to-edge.
- **Transparency/blur**: only on the cart drawer scrim (`rgba(11,61,42,.45)` + 2px blur) to isolate the foreground panel — matches the "blur signals dismissal" rule, not used decoratively elsewhere.
- **Imagery color vibe**: n/a today — no real photography was supplied. Placeholder tiles use the sunken-surface tint; when real product photography is added, keep it bright, clean, warm-neutral (not oversaturated) to match the calm-trustworthy palette.

## Iconography

No icon assets were supplied with this project. **Lucide** (stroke-based, 1.5–2px weight, 24px grid) is used via CDN (`unpkg.com/lucide`) as the icon system — it's free, MIT-licensed, and matches the "vector-only, no emoji" rule from the source skill's guidelines. Search, cart, and hero icons in the header/footer are inline SVGs matching Lucide's stroke style for zero-dependency rendering; anywhere else, load `lucide.createIcons()` after including the script. No emoji or unicode glyphs are used as functional icons anywhere in the system.

## Fonts note (flag for the user)

Figtree and Public Sans are loaded live from Google Fonts (`tokens/typography.css`) rather than self-hosted, because no font files were provided and this environment can't download binaries. If you'd like these self-hosted (for offline builds or stricter CSP), attach the `.woff2` files for Figtree (weights 600/700/800) and Public Sans (400/500/600/700) and they'll be copied into `assets/fonts/` with proper `@font-face` rules.

## Logo note (flag for the user)

No logo file was supplied. The wordmark is set in plain type — "vitalia" in Figtree ExtraBold with a coral full-stop accent (see `guidelines/brand-wordmark.html`). If Vitalia has (or should have) a real mark, attach it and it will replace the type-only wordmark everywhere (header, footer, favicon).

## Intentional additions

No source (Figma/codebase) defined a component inventory, so the 14 components above are an original standard e-commerce set chosen for what a parapharmacy storefront actually needs (product browsing, cart, checkout confirmation) — not a generic maximal kit. Nothing here should be read as "the real Vitalia's real components," since Vitalia is a concept invented for this exercise.
