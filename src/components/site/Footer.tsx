import { WHATSAPP_DEFAULT, ADDRESS, trackWhatsAppClick } from "./constants";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "WhatsApp", href: WHATSAPP_DEFAULT, ext: true },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/[0.07] pt-14 pb-24 md:pb-10"
      style={{ background: "#060606" }}
    >
      <div className="shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <img
              src="/logo-mark.png"
              alt="Clínica do Carro Studio Detail"
              loading="lazy"
              width="308"
              height="150"
              decoding="async"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-[0.85rem] leading-relaxed text-white/45">
              {ADDRESS}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 md:justify-end">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.ext ? "_blank" : undefined}
                rel={l.ext ? "noopener noreferrer" : undefined}
                onClick={l.ext ? () => trackWhatsAppClick("footer") : undefined}
                className="text-sm font-medium text-white/50 transition-colors hover:text-neon"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-6">
          <p className="text-center text-[0.78rem] text-white/35">
            © {new Date().getFullYear()} Clínica do Carro Studio Detail — Joinville/SC
          </p>
        </div>
      </div>
    </footer>
  );
}
