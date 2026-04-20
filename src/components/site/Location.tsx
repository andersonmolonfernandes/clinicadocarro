import { motion } from "framer-motion";
import { MapPin, Navigation, Smartphone } from "lucide-react";
import { ADDRESS, MAPS_LINK, WHATSAPP_BASE } from "./constants";

export function Location() {
  return (
    <section id="localizacao" className="py-[110px] px-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-[640px] mx-auto text-center rounded-[10px]"
        style={{
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,230,118,0.15)",
          padding: "60px 44px",
        }}
      >
        <motion.div
          className="mx-auto flex items-center justify-center rounded-md"
          style={{
            width: 60,
            height: 60,
            border: "1px solid rgba(0,230,118,0.3)",
            background: "rgba(0,230,118,0.06)",
          }}
          initial={{ y: 0 }}
          whileInView={{ y: [0, -10, 0, -6, 0] }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <MapPin className="w-7 h-7 text-green-brand" />
        </motion.div>
        <h3
          className="mt-6 font-[var(--font-display)] text-white"
          style={{ fontSize: "2rem", lineHeight: 1 }}
        >
          Clínica do Carro
        </h3>
        <p className="mt-3 font-[var(--font-heading)] text-[var(--muted-text)] text-base">
          {ADDRESS}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            whileHover="hover"
            initial="rest"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver no Google Maps"
            className="group inline-flex items-center gap-2 border border-green-brand text-green-brand font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md hover:bg-green-brand hover:text-black transition-colors"
            style={{ padding: "14px 28px" }}
          >
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: -3 } }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex"
            >
              <Navigation className="w-5 h-5" />
            </motion.span>
            Ver no Google Maps
          </motion.a>
          <motion.a
            whileHover="hover"
            initial="rest"
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp"
            className="group inline-flex items-center gap-2 bg-green-brand text-black font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md hover:shadow-green-glow transition-shadow"
            style={{ padding: "14px 28px" }}
          >
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: -3 } }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex"
            >
              <Smartphone className="w-5 h-5" />
            </motion.span>
            WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
