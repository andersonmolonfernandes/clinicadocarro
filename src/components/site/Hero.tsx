import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useMemo } from "react";
import { WHATSAPP_DEFAULT } from "./constants";

export function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: 3 + Math.random() * 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.3 + Math.random() * 0.3,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
        yRange: 20 + Math.random() * 20,
      })),
    []
  );

  return (
    <section
      id="top"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(0,230,118,0.07), transparent)",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.15], opacity: [0.5, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(0,230,118,0.15), transparent 60%)",
          filter: "blur(20px)",
        }}
      />

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

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-mono-tech)] text-gold-brand text-[0.68rem]"
          style={{ letterSpacing: "5px" }}
        >
          JOINVILLE/SC — DESDE 2013
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-[var(--font-display)] text-white mt-6"
          style={{
            fontSize: "clamp(4rem, 10vw, 8rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
          }}
        >
          SEU CARRO MERECE O{" "}
          <span className="text-green-brand glow-green">MELHOR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 mx-auto max-w-2xl font-[var(--font-body)] font-light text-[var(--muted-text)]"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
        >
          Polimento, vitrificação, higienização e muito mais. Agende agora pelo
          WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 40px rgba(0,230,118,0.4)",
            }}
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-brand text-black font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md"
            style={{ padding: "16px 36px" }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar pelo WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="#servicos"
            className="inline-flex items-center gap-2 border border-green-brand text-green-brand font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md hover:bg-green-brand hover:text-black transition-colors"
            style={{ padding: "16px 36px" }}
          >
            <ChevronDown className="w-5 h-5" />
            Ver Serviços
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
    </section>
  );
}
