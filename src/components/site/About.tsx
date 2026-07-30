import { CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

const diferenciais = [
  "Produtos de alto desempenho",
  "Técnica em cada etapa",
  "Atenção obsessiva ao detalhe",
  "Resultado garantido",
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
          <div
            className="surface-card relative flex items-center justify-center overflow-hidden"
            style={{
              minHeight: 340,
              background:
                "linear-gradient(140deg, rgba(0,230,118,0.06), rgba(0,0,0,0.5))",
            }}
          >
            <img
              src="/logo.png"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-3/5 max-w-[240px] opacity-30"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-4 right-5 select-none font-semibold text-white/[0.05]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem,9vw,6rem)", lineHeight: 1 }}
            >
              2013
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
