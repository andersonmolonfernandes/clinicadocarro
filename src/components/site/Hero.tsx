import { ArrowDown, MessageCircle, MapPin } from "lucide-react";
import { waLink, trackWhatsAppClick } from "./constants";

const HERO_WA = waLink(
  "Olá! Gostaria de um orçamento para o meu carro. Posso enviar fotos."
);

const ficha = [
  { k: "Local", v: "Aventureiro · Joinville/SC" },
  { k: "Desde", v: "2013" },
  { k: "Atendimento", v: "Com hora marcada" },
  { k: "Orçamento", v: "Por foto no WhatsApp" },
];

/**
 * Hero editorial, alinhado à esquerda, 100% visível no SSR (sem opacity inicial).
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/[0.07] pt-[120px] pb-16 md:pt-[140px] md:pb-24"
    >
      <div className="shell relative grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="eyebrow">Studio Detail · Nº 1401</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
              <MapPin className="h-3.5 w-3.5" />
              Rua Alois Finder, 1401
            </span>
          </div>

          <h1
            className="mt-6 text-white"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 0.92 }}
          >
            Estética automotiva
            <br />
            <span className="text-neon">em Joinville</span>, feita à mão.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/65">
            Polimento, vitrificação, higienização e restauração. Um carro por vez,
            com hora marcada. Mande fotos do seu carro e a gente responde com o
            orçamento pelo WhatsApp.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href={HERO_WA}
              onClick={(e) => trackWhatsAppClick("hero", undefined, e)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary"
            >
              <MessageCircle className="h-5 w-5" />
              Orçamento por foto no WhatsApp
            </a>
            <a href="#servicos" className="btn-base btn-outline">
              Ver serviços
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className="border-l-2 border-neon/60 pl-6">
          <p className="spec-label mb-4 !text-neon">Ficha do studio</p>
          <dl className="divide-y divide-white/[0.08]">
            {ficha.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="spec-label">{f.k}</dt>
                <dd className="text-right text-sm font-medium text-white/90">{f.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
