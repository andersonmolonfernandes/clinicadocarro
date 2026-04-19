import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_BASE } from "./constants";

export function FloatingWhats() {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 3000);
    const hide = setTimeout(() => setShowTip(false), 9000);
    return () => {
      clearTimeout(t);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div
      className="fixed flex items-center gap-3"
      style={{ bottom: 28, right: 28, zIndex: 9999 }}
    >
      <AnimatePresence>
        {showTip && (
          <motion.span
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="font-[var(--font-heading)] font-bold uppercase text-xs tracking-wider text-white rounded-md whitespace-nowrap"
            style={{
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(37,211,102,0.4)",
              padding: "8px 12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            }}
          >
            Fale conosco
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        href={WHATSAPP_BASE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 56,
          height: 56,
          background: "#25D366",
          boxShadow: "0 10px 30px rgba(37,211,102,0.4)",
        }}
        onHoverStart={() => setShowTip(true)}
      >
        <Phone className="text-white" style={{ width: 26, height: 26 }} />
        <motion.span
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -6,
            border: "2px solid rgba(37,211,102,0.4)",
          }}
          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
        />
        <motion.span
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -6,
            border: "2px solid rgba(37,211,102,0.4)",
          }}
          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeOut",
            delay: 1,
          }}
        />
      </motion.a>
    </div>
  );
}
