import { motion } from "framer-motion";
import { WHATSAPP_DEFAULT } from "./constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FloatingWhats() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full md:bottom-7 md:right-7"
      style={{
        background: "#25D366",
        boxShadow: "0 10px 30px rgba(37,211,102,0.35)",
      }}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#fff" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.15-.15.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.62-1.6-.85-2.19-.22-.55-.45-.48-.62-.49h-.53c-.18 0-.47.07-.72.35-.25.28-.95.92-.95 2.25s.97 2.61 1.1 2.79c.13.18 1.9 3.02 4.62 4.12 2.72 1.1 2.72.73 3.21.68.5-.05 1.6-.65 1.83-1.28.22-.63.22-1.16.15-1.28-.07-.12-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.42 1.26 4.86L2 22l5.27-1.24A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.13c-1.6 0-3.09-.47-4.34-1.27l-.31-.19-3.13.74.75-3.05-.2-.32A7.96 7.96 0 0 1 3.87 12c0-4.48 3.65-8.13 8.13-8.13S20.13 7.52 20.13 12 16.48 20.13 12 20.13z" />
      </svg>
      {!reduced && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{ inset: -4, border: "2px solid rgba(37,211,102,0.45)" }}
          animate={{ scale: [1, 1.45], opacity: [0.55, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeOut" }}
        />
      )}
    </motion.a>
  );
}
