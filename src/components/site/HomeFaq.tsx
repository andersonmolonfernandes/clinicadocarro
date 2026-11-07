import { SectionHeading } from "./Section";
import { FaqAccordion } from "./Faq";
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
      "Chame no WhatsApp (47) 99994-0973 com Modelo, Cor e Ano do carro e o serviço desejado. Respondemos com o orçamento e os horários disponíveis.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Depende do tamanho e do estado do carro. Envie Modelo, Cor e Ano pelo WhatsApp (47) 99994-0973 e respondemos rápido com o orçamento.",
  },
  {
    pergunta: "Quais formas de pagamento?",
    resposta: "Aceitamos PIX e cartão.",
  },
  {
    pergunta: "Qual o horário de atendimento?",
    resposta:
      "Segunda a sexta, das 8h às 18h30, e sábado, das 8h às 12h, sempre com hora marcada.",
  },
  {
    pergunta: "Há quanto tempo vocês atuam em Joinville?",
    resposta:
      "Somos um studio de detailing atuando em Joinville desde 2013, com atendimento agendado e dedicado a cada veículo.",
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

        <FaqAccordion faqs={homeFaqs} className="mx-auto mt-12 max-w-3xl" />

      </div>
    </section>
  );
}
