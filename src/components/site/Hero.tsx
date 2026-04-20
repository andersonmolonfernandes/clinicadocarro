import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useMemo, useRef } from "react";
import { WHATSAPP_DEFAULT } from "./constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const titleWords = ["SEU", "CARRO", "MERECE", "O", "MELHOR"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const particles = useMemo(
    () =>
      reduced
        ? []
        : Array.from({ length: 4 }).map((_, i) => ({
            id: i,
            size: 3 + Math.random() * 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            opacity: 0.25 + Math.random() * 0.25,
            duration: 5 + Math.random() * 4,
            delay: Math.random() * 2,
            yRange: 18 + Math.random() * 18,
          })),
    [reduced]
  );

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(0,230,118,0.07), transparent)",
        }}
      />

      {!reduced && (
        <motion.div
          animate={{ scale: [1, 1.1], opacity: [0.5, 0.9] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 640,
            height: 640,
            background:
              "radial-gradient(circle, rgba(0,230,118,0.13), transparent 60%)",
            filter: "blur(24px)",
            willChange: "transform, opacity",
          }}
        />
      )}

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-green-brand pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            willChange: "transform",
          }}
          animate={{ y: [-p.yRange, p.yRange] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        style={{ y: parallaxY, opacity: fadeOut }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-mono-tech)] text-gold-brand text-[0.68rem]"
          style={{ letterSpacing: "5px" }}
        >
          JOINVILLE/SC — DESDE 2013
        </motion.p>

        <motion.img
          src="/logo.png"
          alt="Clínica do Carro — Studio Detail"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-6 mb-2 object-contain"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
          decoding="async"
          style={{
            width: "clamp(220px, 32vw, 380px)",
            filter: "drop-shadow(0 0 28px rgba(0,230,118,0.4))",
          }}
        />

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
          }}
          className="font-[var(--font-display)] font-extrabold text-white mt-3 flex flex-wrap items-baseline justify-center gap-x-[0.28em] gap-y-1 glow-white"
          style={{
            fontSize: "clamp(1.9rem, 5.2vw, 4rem)",
            lineHeight: 1.02,
            letterSpacing: "0.01em",
          }}
        >
          {titleWords.map((word) => {
            const isHighlight = word === "MELHOR";
            return (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
                  },
                }}
                className={
                  isHighlight
                    ? "inline-block text-green-brand glow-green"
                    : "inline-block"
                }
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-5 mx-auto max-w-2xl font-[var(--font-body)] font-light text-[var(--muted-text)]"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
        >
          Polimento, vitrificação, higienização e muito mais. Agende agora pelo
          WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 36px rgba(0,230,118,0.45)",
            }}
            whileTap={{ scale: 0.98 }}
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar pelo WhatsApp"
            className="inline-flex items-center gap-2 bg-green-brand text-black font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md shadow-green-glow"
            style={{ padding: "16px 36px" }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar pelo WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#servicos"
            aria-label="Ver serviços"
            className="inline-flex items-center gap-2 border border-green-brand text-green-brand font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md hover:bg-green-brand hover:text-black transition-colors"
            style={{ padding: "16px 36px" }}
          >
            <ChevronDown className="w-5 h-5" />
            Ver Serviços
          </motion.a>
        </motion.div>
      </motion.div>

      {!reduced && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted-text)]"
        >
          <span
            className="font-[var(--font-mono-tech)] text-[0.65rem]"
            style={{ letterSpacing: "4px" }}
          >
            SCROLL
          </span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      )}
    </section>
  );
}
