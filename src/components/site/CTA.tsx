import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEFAULT } from "./constants";

export function CTA() {
  return (
    <section
      className="relative overflow-hidden text-center px-5"
      style={{
        padding: "100px 20px",
        background: "linear-gradient(135deg, #001409, #002710, #001409)",
        borderTop: "2px solid #00e676",
        borderBottom: "2px solid #00e676",
      }}
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
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative font-[var(--font-display)] text-white"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}
      >
        AGENDE AGORA PELO <span className="text-green-brand">WHATSAPP</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mt-5 font-[var(--font-body)] font-light text-[var(--muted-text)] text-lg"
      >
        Manda uma mensagem e a gente responde rápido.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-10 flex justify-center"
      >
        <motion.a
          whileHover={{ scale: 1.04 }}
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md text-lg"
          style={{ padding: "20px 44px" }}
        >
          <MessageCircle className="w-6 h-6" />
          Falar pelo WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
