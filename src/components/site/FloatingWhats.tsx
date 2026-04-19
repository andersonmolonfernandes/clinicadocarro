import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { WHATSAPP_BASE } from "./constants";

export function FloatingWhats() {
  return (
    <motion.a
      whileHover={{ scale: 1.12 }}
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed flex items-center justify-center rounded-full"
      style={{
        bottom: 28,
        right: 28,
        width: 56,
        height: 56,
        background: "#25D366",
        zIndex: 9999,
        boxShadow: "0 10px 30px rgba(37,211,102,0.4)",
      }}
    >
      <Phone className="text-white" style={{ width: 26, height: 26 }} />
      <motion.span
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: -6,
          border: "2px solid rgba(37,211,102,0.4)",
        }}
        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
      />
    </motion.a>
  );
}
