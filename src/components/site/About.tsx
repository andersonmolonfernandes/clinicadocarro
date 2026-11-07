import { CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import polimentoImg from "@/assets/services/polimento-automotivo-joinville.jpg";
import vitrificacaoImg from "@/assets/services/vitrificacao-ceramica-joinville.jpg";
import higienizacaoImg from "@/assets/services/higienizacao-interna-automotiva-joinville.jpg";
import couroImg from "@/assets/services/vitrificacao-de-couro-depois-joinville.jpg";

/** Mosaico de fotos — troque os arquivos/textos para usar fotos do studio. */
const mosaico = [
  { src: polimentoImg, alt: "Polimento automotivo na Clínica do Carro em Joinville" },
  { src: vitrificacaoImg, alt: "Vitrificação cerâmica aplicada na Clínica do Carro" },
  { src: higienizacaoImg, alt: "Higienização interna automotiva em Joinville" },
  { src: couroImg, alt: "Bancos de couro após vitrificação de couro" },
];

const diferenciais = [
  "Produtos de alto desempenho",
  "Técnica em cada etapa",
  "Atenção obsessiva ao detalhe",
  "Orçamento transparente, sem surpresa",
];

export function About() {
  return (
    <section id="sobre" className="section-y" style={{ background: "#0d0d0d" }}>
      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Quem somos"
            title="Sobre a"
            highlight="Clínica do Carro"
            align="left"
            description="Estamos em Joinville desde 2013. Aqui você encontra estética automotiva feita com técnica, produtos premium e atenção total ao detalhe. Sem enrolação — você agenda, a gente entrega."
          />

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {diferenciais.map((d, i) => (
              <Reveal key={d} delay={0.08 * i} y={16}>
                <li className="surface-card flex items-center gap-3 px-4 py-3.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-neon" />
                  <span className="text-[0.88rem] font-medium text-white/85">{d}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {mosaico.map((f, i) => (
              <div key={f.src} className={`overflow-hidden rounded-2xl border border-white/[0.08] bg-black ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"} ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-8" : ""}`}>
                <img src={f.src} alt={f.alt} loading="lazy" decoding="async" width={600} height={700} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
