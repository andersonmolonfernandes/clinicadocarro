

## Plan: Polish, More Animations & New Logo

### 1. Replace logo
- Copy uploaded image to `public/logo.png` (overwrite). Used by Header, Footer, About — automatically updates everywhere.
- Add favicon link in `__root.tsx` pointing to `/logo.png`.

### 2. Scroll animations re-trigger (the key request)
Currently all sections use `viewport={{ once: true }}` — animations only play once. Change to `once: false, amount: 0.3` so they re-animate every time the user scrolls back up to a section. Apply across:
- `Hero` (entrance — keep one-time, but add subtle parallax on scroll)
- `Stats` — re-count when re-entering view
- `Services` (header + cards)
- `About` (column reveals + diferenciais stagger)
- `CTA` (title, subtitle, button)
- `Location` (card)

### 3. Add new animations
- **Header logo**: subtle hover scale + glow.
- **Hero**: title reveal letter-by-letter (split words), animated gradient on "MELHOR", buttons get continuous subtle pulse, scroll indicator already animated.
- **Stats**: numbers get a small bounce when finishing count; add an animated underline below each number.
- **Services**: 
  - Service icons rotate / scale on card hover.
  - Stagger by row, not by index modulo.
  - Add a soft animated gradient border-shine on hover.
- **About**: Logo image in the right card gets a slow rotate/breath animation; "2013" watermark fades in/out.
- **CTA**: Continuous shimmer sweep across the white button; background gradient slowly animates position.
- **Location**: MapPin icon bounces softly on view; buttons get arrow slide on hover.
- **Footer**: Links underline reveal.
- **FloatingWhats**: Already has pulse — add a second delayed ring for richer effect, plus a tiny tooltip "Fale conosco" that appears after 3s.

### 4. Production-ready optimization
- Update `__root.tsx` meta: real title, description, favicon link, theme-color.
- Add `font-display: swap` already in Google Fonts URL ✓.
- Remove `lazy` loading from Header logo (above the fold — should load eagerly with `fetchpriority="high"`); keep lazy on About/Footer.
- Add `prefers-reduced-motion` guard via a small hook so animations respect accessibility.
- Ensure all interactive elements have `aria-label`.
- Add structured data (LocalBusiness JSON-LD) in root head for SEO.
- Add `og:image` pointing to `/logo.png` on the index route (already set).

### Files to edit
- `public/logo.png` (replace)
- `src/routes/__root.tsx` (favicon, theme-color, JSON-LD)
- `src/components/site/Header.tsx` (logo eager + hover)
- `src/components/site/Hero.tsx` (richer animations)
- `src/components/site/Stats.tsx` (re-trigger + bounce)
- `src/components/site/Services.tsx` (re-trigger + icon hover)
- `src/components/site/About.tsx` (re-trigger + breath)
- `src/components/site/CTA.tsx` (re-trigger + shimmer)
- `src/components/site/Location.tsx` (re-trigger + bounce)
- `src/components/site/Footer.tsx` (link underline anim)
- `src/components/site/FloatingWhats.tsx` (double ring + tooltip)
- `src/hooks/use-reduced-motion.tsx` (new)

No new dependencies needed (framer-motion + lucide already installed).

