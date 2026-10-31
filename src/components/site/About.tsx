import { SectionHeading } from "./Section";

const metodo = [
  { n: "01", t: "Diagnóstico", d: "Avaliamos pintura, interior e vidros antes de indicar qualquer serviço." },
  { n: "02", t: "Técnica", d: "Cada etapa é feita com o produto e a ferramenta certos para o seu carro." },
  { n: "03", t: "Detalhe", d: "Frisos, cantos e acabamentos recebem a mesma atenção do capô." },
  { n: "04", t: "Orçamento claro", d: "Você sabe o que será feito e quanto custa antes de começar." },
];

export function About() {
  return (
    <section id="sobre" className="section-y" style={{ background: "#0d0d0d" }}>
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Quem somos"
            title="Sobre a"
            highlight="Clínica do Carro"
            align="left"
            description="Estamos em Joinville desde 2013, no Aventureiro. Estética automotiva com técnica, produtos de qualidade e atenção total ao detalhe. Você agenda, a gente entrega."
          />
          <p
            aria-hidden
            className="mt-10 select-none font-bold text-white/[0.06]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(5rem,14vw,9rem)", lineHeight: 0.8 }}
          >
            2013
          </p>
        </div>

        <ol className="border-t border-white/[0.08]">
          {metodo.map((m) => (
            <li key={m.n} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-white/[0.08] py-6">
              <span className="spec-label pt-1 !text-neon">{m.n}</span>
              <div>
                <h3 className="text-xl text-white">{m.t}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-white/60">{m.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
