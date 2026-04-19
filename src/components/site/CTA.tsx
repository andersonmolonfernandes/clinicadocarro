import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEFAULT } from "./constants";

export function CTA() {
  return (
    <motion.section
      className="relative overflow-hidden text-center px-5"
      style={{
        padding: "100px 20px",
        background:
          "linear-gradient(135deg, #001409, #002710, #001409, #002710, #001409)",
        backgroundSize: "300% 300%",
        borderTop: "2px solid #00e676",
        borderBottom: "2px solid #00e676",
      }}
      animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,230,118,0.18), transparent)",
        }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative font-[var(--font-display)] text-white"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
      >
        AGENDE AGORA PELO <span className="text-green-brand">WHATSAPP</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mt-5 font-[var(--font-body)] font-light text-[var(--muted-text)] text-lg"
      >
        Manda uma mensagem e a gente responde rápido.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-10 flex justify-center"
      >
        <motion.a
          whileHover={{ scale: 1.04 }}
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          className="relative inline-flex items-center gap-3 bg-white text-black font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md text-lg overflow-hidden"
          style={{ padding: "20px 44px" }}
        >
          {/* Shimmer sweep */}
          <motion.span
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(110deg, transparent 35%, rgba(0,230,118,0.35) 50%, transparent 65%)",
            }}
            animate={{ x: ["-120%", "120%"] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
          <MessageCircle className="relative w-6 h-6" />
          <span className="relative">Falar pelo WhatsApp</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
