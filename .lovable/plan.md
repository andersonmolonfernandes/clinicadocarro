

## Plan: Service icons upgrade + real photos + 13 years experience

### 1. Replace 3 service icons with custom shining SVG icons
Lucide doesn't have a "shining engine", "shining headlight" or "shining seat", so I'll create 3 small inline React SVG components in a new file `src/components/site/icons.tsx`:
- **EngineShineIcon** — engine block silhouette with sparkle/shine rays.
- **HeadlightShineIcon** — headlight shape with light beams.
- **SeatShineIcon** — car seat profile with sparkle accents.

Each icon will accept `className` like Lucide icons (use `currentColor`, stroke-width 2, 24×24 viewBox) so it drops into `Services.tsx` without changing the existing rotation/scale hover animation.

In `Services.tsx`, swap:
- `Settings2` → `EngineShineIcon` for "Limpeza de Motor"
- `Lightbulb` → `HeadlightShineIcon` for "Restauração de Faróis"
- `Wind` → `SeatShineIcon` for "Higienização Interna"

### 2. Update experience to 13+ years
- `src/components/site/Stats.tsx`: change `value: 11` → `value: 13` for "Anos de Experiência".
- `src/components/site/About.tsx`: keep "desde 2013" (factual), but the stat will reflect 13+ years.
- Note: `constants.ts` has no year field, no change needed there.

### 3. Add real before/after photos to each service card
Copy 8 uploaded images into `src/assets/services/` and import them as ES modules. Add an `image` field to each `Service` in `Services.tsx`. When a card opens, render the image at the top of the expanded body (full-width, rounded, with a subtle zoom-in motion).

Mapping (1 image per service, picking the best for duplicates):

| # | Service | Image |
|---|---------|-------|
| 1 | Lavação Premium | wheel before/after (`cc9e286e...jpg`) |
| 2 | Polimento Técnico | blue car polishing (`5f44642e...jpg`) |
| 3 | Higienização Interna | interior extractor (`image-9.png`) — better quality than seat |
| 4 | Vitrificação VX45 | red car ceramic application (`Design-sem-nome-19.jpg`) |
| 5 | Restauração de Faróis | headlight before/after (`ac7e4f8d...jpg`) |
| 6 | Vidros e Cristalização | rainy windshield (`Screenshot_..._100706.jpg`) |
| 7 | Limpeza de Motor | engine bay before/after (`Screenshot_..._100638.jpg`) |
| 8 | Martelinho de Ouro | (no photo provided — keep text-only) |

The two "extra" duplicate images (seat photo and yellow "REVITALIZAÇÃO DOS FARÓIS") are skipped — the user explicitly said duplicates are also Higienização/Faróis, so picking the best one is the clean choice.

Image rendering inside the expanded card body:
- `<img>` with `loading="lazy"`, `decoding="async"`, `aspect-ratio: 16/9`, `object-cover`, `rounded-md`, green border at 15% opacity.
- Wrapped in a `motion.div` with `initial={{ opacity: 0, scale: 0.96 }}` `animate={{ opacity: 1, scale: 1 }}` for smooth reveal.

### 4. Files to edit/create
- **Create** `src/components/site/icons.tsx` — 3 custom SVG icon components.
- **Create** `src/assets/services/` — copy 7 uploaded images here.
- **Edit** `src/components/site/Services.tsx` — swap 3 icons, add `image` field, render image inside accordion body.
- **Edit** `src/components/site/Stats.tsx` — 11 → 13.

No new dependencies needed.

