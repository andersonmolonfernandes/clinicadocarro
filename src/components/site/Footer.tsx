import { WHATSAPP_BASE } from "./constants";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "WhatsApp", href: WHATSAPP_BASE, ext: true },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(0,230,118,0.15)",
      }}
      className="px-5 md:px-10 pt-[50px] pb-7"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start gap-3">
          <img
            src="/logo.png"
            alt="Clínica do Carro"
            height={50}
            loading="lazy"
            className="h-[50px] w-auto"
          />
          <p className="font-[var(--font-body)] text-[var(--muted-text)] text-[0.8rem]">
            Joinville/SC desde 2013
          </p>
        </div>
        <nav className="flex flex-wrap md:justify-end gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.ext ? "_blank" : undefined}
              rel={l.ext ? "noopener noreferrer" : undefined}
              className="font-[var(--font-heading)] uppercase text-sm tracking-wider text-[var(--muted-text)] hover:text-green-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div
        className="max-w-6xl mx-auto mt-10 pt-6 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="font-[var(--font-body)] text-[var(--muted-text)] text-[0.78rem]">
          © 2025 Clínica do Carro Studio Detail — Joinville/SC
        </p>
      </div>
    </footer>
  );
}
