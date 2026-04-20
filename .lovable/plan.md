
Plan:

1. **Rename "Vitrificação VX45" → "Vitrificação"**
   - `src/components/site/Services.tsx`: change `nome` and update the WhatsApp message text to "Olá! Gostaria de saber mais sobre a Vitrificação."
   - Update the descrição to drop "VX45" references if any.

2. **Hero: bigger logo, smaller title**
   - `src/components/site/Hero.tsx`: 
     - Add the logo (`/logo.png`) above the title with size around `clamp(160px, 22vw, 280px)` (currently no logo in Hero — only text).
     - Reduce title size from `clamp(4rem, 10vw, 8rem)` → `clamp(2.8rem, 7vw, 5.5rem)` so logo + title fit nicely.
     - Keep letter-by-letter reveal animation but on smaller text.

3. **WhatsApp auto-message per service** (already implemented — verify)
   - Each service already has its own `whatsapp` message string and uses `waLink(s.whatsapp)` which encodes it into the WhatsApp URL. This already works — clicking "Falar pelo WhatsApp" on the Lavação card sends "Olá! Gostaria de saber mais sobre a Lavação Premium." 
   - Action: confirm `waLink` in `constants.ts` properly encodes; no change needed unless broken. Will verify during implementation.

4. **Performance: make site less laggy**
   - **Reduce continuous animations**: Hero has 12 always-animating particles + orb pulsing. Reduce to 6 particles and lower animation frequency.
   - **Remove `whileInView` repeat behavior**: change `viewport={{ once: false }}` → `viewport={{ once: true, amount: 0.2 }}` across all sections. Re-animating on every scroll is the main source of lag, especially on mobile (user is on 384px viewport).
   - **Simplify Services border-shine**: currently runs a gradient sweep on hover via `motion.div` with `mixBlendMode: screen` — keep but ensure it only runs on hover (already conditional).
   - **Lazy-load below-the-fold images** with proper `loading="lazy"` + `decoding="async"` (already done for service images, verify About/Footer logos).
   - **Reduce motion respect**: ensure `useReducedMotion` hook disables heavy animations for users with that preference.
   - **Stats counter**: only re-trigger once (change `once: true`) so it doesn't recount on every scroll-back.
   - **FloatingWhats**: keep one pulse ring instead of two (less repaint).

### Files to edit
- `src/components/site/Services.tsx` — rename VX45 → Vitrificação
- `src/components/site/Hero.tsx` — add logo, shrink title, reduce particles
- `src/components/site/Stats.tsx` — `once: true`
- `src/components/site/About.tsx` — `once: true`
- `src/components/site/CTA.tsx` — `once: true`
- `src/components/site/Location.tsx` — `once: true`
- `src/components/site/FloatingWhats.tsx` — single pulse ring

WhatsApp per-service auto-message is already wired correctly — no code change needed there.
