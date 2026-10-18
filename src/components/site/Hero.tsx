import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle, MapPin } from "lucide-react";
import { useRef } from "react";
import { waLink, trackWhatsAppClick } from "./constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HERO_WA = waLink(
  "Olá! Gostaria de um orçamento para o meu carro. Posso enviar fotos."
);

/**
 * Hero com conteúdo 100% visível no primeiro frame (SSR/HTML):
 * nenhum texto primário usa opacity: 0 inicial — LCP imediato e
 * indexação completa por crawlers e IAs. Apenas o parallax de scroll
 * (pós-interação) permanece.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[112px] pb-24 md:pt-[128px]"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(0,230,118,0.07), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />

      <motion.div style={{ y }} className="shell relative z-10 text-center">
        <div className="flex justify-center">
          <img
            src="/logo-mark.png"
            alt="Clínica do Carro — Studio Detail"
            fetchPriority="high"
            decoding="async"
            width={512}
            height={512}
            className="w-[min(62vw,300px)] object-contain"
            style={{ aspectRatio: "1 / 1", filter: "drop-shadow(0 0 22px rgba(0,230,118,0.18))" }}
          />
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span className="eyebrow">Estética automotiva premium</span>
          <span className="hidden h-3 w-px bg-white/20 sm:block" />
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/50">
            <MapPin className="h-3.5 w-3.5" />
            Joinville/SC · desde 2013
          </span>
        </div>

        <h1
          className="glow-white mx-auto mt-5 max-w-4xl text-white"
          style={{ fontSize: "clamp(2.1rem, 6vw, 4.25rem)", lineHeight: 1.05 }}
        >
          Estética Automotiva <span className="text-neon glow-neon">Premium</span> em Joinville
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
          Polimento, vitrificação, higienização e restauração feitos com técnica e
          obsessão por detalhe. Envie fotos do seu carro e receba o orçamento pelo WhatsApp.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={HERO_WA}
            onClick={(e) => trackWhatsAppClick("hero", undefined, e)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary"
          >
            <MessageCircle className="h-5 w-5" />
            Orçamento por foto no WhatsApp
          </a>
          <a href="#servicos" className="btn-base btn-outline">
            Ver serviços
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
