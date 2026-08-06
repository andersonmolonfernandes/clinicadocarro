import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle, MapPin } from "lucide-react";
import { useRef } from "react";
import { WHATSAPP_DEFAULT } from "./constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "./Section";

const words = ["Estética", "Automotiva", "Premium", "em", "Joinville"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0]);

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
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(0,230,118,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />

      <motion.div style={{ y, opacity }} className="shell relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex justify-center"
        >
          <img
            src="/logo-mark.png"
            alt="Clínica do Carro — Studio Detail"
            fetchPriority="high"
            decoding="async"
            className="w-[min(78vw,340px)] object-contain"
            style={{ filter: "drop-shadow(0 0 32px rgba(0,230,118,0.28))" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <span className="eyebrow">Estética automotiva premium</span>
          <span className="hidden h-3 w-px bg-white/20 sm:block" />
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/50">
            <MapPin className="h-3.5 w-3.5" />
            Joinville/SC · desde 2013
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
          }}
          className="glow-white mx-auto mt-5 flex max-w-4xl flex-wrap items-baseline justify-center gap-x-[0.3em] gap-y-1 text-white"
          style={{ fontSize: "clamp(2.1rem, 6vw, 4.25rem)", lineHeight: 1.05 }}
        >
          {words.map((w) => (
            <motion.span
              key={w}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
              }}
              className={w === "Premium" ? "text-neon glow-neon" : undefined}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60"
        >
          Polimento, vitrificação, higienização e restauração feitos com técnica e
          obsessão por detalhe. Agende em segundos pelo WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a href="#servicos" className="btn-base btn-outline">
            Ver serviços
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
