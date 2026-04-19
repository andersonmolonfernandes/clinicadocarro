import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";
import { WHATSAPP_DEFAULT } from "./constants";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.9)" : "rgba(10,10,10,0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottomColor: scrolled
          ? "rgba(0,230,118,0.15)"
          : "rgba(0,230,118,0)",
      }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <motion.a
          href="#top"
          className="flex items-center"
          whileHover={{ scale: 1.06, filter: "drop-shadow(0 0 12px rgba(0,230,118,0.55))" }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          aria-label="Clínica do Carro - Início"
        >
          <img
            src="/logo.png"
            alt="Clínica do Carro"
            height={52}
            // @ts-expect-error fetchpriority is a valid HTML attribute
            fetchpriority="high"
            className="h-[52px] w-auto"
          />
        </motion.a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link relative font-[var(--font-heading)] uppercase text-sm tracking-[0.18em] text-[var(--muted-text)] hover:text-green-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-brand text-black font-[var(--font-heading)] font-bold uppercase tracking-wider px-5 py-2.5 rounded-md hover:shadow-green-glow transition-shadow"
          >
            <Calendar className="w-4 h-4" />
            Agendar agora
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          className="md:hidden text-white p-2"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
            style={{
              background: "rgba(6,6,6,0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <button
              aria-label="Fechar menu"
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              className="h-full flex flex-col items-center justify-center gap-8"
            >
              {[...links, { label: "WhatsApp", href: WHATSAPP_DEFAULT, ext: true }].map(
                (l: any) => (
                  <motion.a
                    key={l.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    href={l.href}
                    target={l.ext ? "_blank" : undefined}
                    rel={l.ext ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="font-[var(--font-display)] text-5xl tracking-wide text-white hover:text-green-brand transition-colors"
                  >
                    {l.label}
                  </motion.a>
                )
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
