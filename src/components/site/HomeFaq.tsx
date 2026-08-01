import { SectionHeading } from "./Section";
import type { Faq } from "./services-data";

export const homeFaqs: Faq[] = [
  {
    pergunta: "Onde fica a Clínica do Carro em Joinville?",
    resposta:
      "Ficamos na Rua Alois Finder, 1401, bairro Aventureiro, em Joinville/SC. Atendemos com agendamento pelo WhatsApp.",
  },
  {
    pergunta: "Quais serviços de estética automotiva vocês fazem?",
    resposta:
      "Polimento técnico, vitrificação cerâmica, higienização interna, restauração de faróis, polimento e cristalização de vidros, lavação premium com cera, limpeza técnica de motor e martelinho de ouro.",
  },
  {
    pergunta: "Quanto tempo o carro fica na oficina?",
    resposta:
      "Depende do serviço: lavação premium e cristalização de vidros são feitas no mesmo dia; polimento e vitrificação costumam levar de 1 a 2 dias.",
  },
  {
    pergunta: "Como faço um orçamento?",
    resposta:
      "Basta enviar fotos do seu carro pelo WhatsApp (47) 99994-0973 informando o serviço desejado. Respondemos com o valor e os horários disponíveis.",
  },
  {
    pergunta: "Há quanto tempo vocês atuam em Joinville?",
    resposta:
      "Somos um studio de detailing com mais de 13 anos de experiência, atuando em Joinville desde 2013.",
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas"
          highlight="frequentes"
          description="As dúvidas mais comuns de quem procura estética automotiva em Joinville."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {homeFaqs.map((f) => (
            <details key={f.pergunta} className="surface-card px-5 py-4">
              <summary className="cursor-pointer list-none">
                <h3 className="inline text-[0.95rem] font-semibold text-white">{f.pergunta}</h3>
              </summary>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-white/65">{f.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
