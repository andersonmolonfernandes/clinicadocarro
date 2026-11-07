import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEFAULT, trackWhatsAppClick } from "./constants";
import { SectionHeading } from "./Section";

const passos = [
  { t: "Chame no WhatsApp", d: "Mande o Modelo, a Cor e o Ano do carro." },
  { t: "Receba orçamento e horário", d: "Respondemos rápido com valor e data." },
  { t: "Deixe o carro e retire pronto", d: "Você deixa no studio e busca finalizado." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-y">
      <div className="shell">
        <SectionHeading eyebrow="Simples assim" title="Como funciona em" highlight="3 passos" />
        <ol className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {passos.map((p, i) => (
            <li key={p.t} className="surface-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-neon/30 bg-neon/[0.08] text-lg font-bold text-neon" style={{ fontFamily: "var(--font-display)" }}>{i + 1}</span>
              <h3 className="mt-4 text-lg text-white">{p.t}</h3>
              <p className="mt-1.5 text-[0.9rem] text-white/60">{p.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-9 flex justify-center">
          <a href={WHATSAPP_DEFAULT} onClick={() => trackWhatsAppClick("how_it_works")} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary">
            <MessageCircle className="h-5 w-5" />
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
