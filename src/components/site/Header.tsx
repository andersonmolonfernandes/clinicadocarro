import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { WHATSAPP_DEFAULT, trackWhatsAppClick } from "./constants";

const links = [
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Localização", href: "/#localizacao" },
];


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottomColor: scrolled ? "rgba(255,255,255,0.07)" : "transparent",
        }}
      >
        <div className="shell flex h-[72px] items-center justify-between md:h-[80px]">
          <a
            href="/"
            aria-label="Clínica do Carro — início"
            className="flex shrink-0 items-center transition-opacity hover:opacity-80"
          >
            <img
              src="/logo-mark.png"
              alt="Clínica do Carro Studio Detail"
              fetchPriority="high"
              decoding="async"
              width={64}
              height={64}
              className="h-12 w-auto sm:h-14 md:h-16 object-contain"
            />
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_DEFAULT}
              onClick={() => trackWhatsAppClick("header")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary !px-5 !py-3"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar
            </a>
          </nav>

          <button
            aria-label="Abrir menu"
            aria-expanded={open}
            className="p-2 text-white md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] md:hidden"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(18px)" }}
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <img src="/logo-mark.png" alt="" width={64} height={64} loading="lazy" decoding="async" className="h-11 w-auto" />
              <button
                aria-label="Fechar menu"
                className="p-2 text-white"
                onClick={() => setOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
              className="flex flex-col gap-2 px-6 pt-10"
            >
              {links.map((l) => (
                <motion.a
                  key={l.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-4 font-display text-3xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick("mobile_header");
                  setOpen(false);
                }}
                className="btn-base btn-primary mt-8 w-full"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar pelo WhatsApp
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
