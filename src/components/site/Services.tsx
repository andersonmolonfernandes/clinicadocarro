import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Droplets,
  Sparkles,
  Shield,
  ScanEye,
  Hammer,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { waLink } from "./constants";
import { EngineShineIcon, HeadlightShineIcon, SeatShineIcon } from "./icons";
import { SectionHeading, EASE } from "./Section";
import lavacaoImg from "@/assets/services/lavacao.jpg";
import polimentoImg from "@/assets/services/polimento.jpg";
import higienizacaoImg from "@/assets/services/higienizacao.png";
import vitrificacaoImg from "@/assets/services/vitrificacao.jpg";
import faroisImg from "@/assets/services/farois.jpg";
import vidrosImg from "@/assets/services/vidros.jpg";
import motorImg from "@/assets/services/motor.jpg";

type ServiceIcon =
  | LucideIcon
  | ((props: { className?: string }) => React.ReactElement);

type Service = {
  nome: string;
  Icon: ServiceIcon;
  descricao: string;
  lista: string[];
  whatsapp: string;
  image?: string;
  destaque?: boolean;
};

const services: Service[] = [
  {
    nome: "Polimento Técnico",
    Icon: Sparkles,
    image: polimentoImg,
    destaque: true,
    descricao:
      "Correção da pintura em 2 etapas: corte remove riscos e oxidação, refino devolve o brilho espelhado.",
    lista: [
      "Etapa 1 — corte: remove riscos e oxidação",
      "Etapa 2 — refino: brilho espelhado",
      "Proteção com cera, selante ou vitrificação",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre o Polimento Técnico.",
  },
  {
    nome: "Vitrificação",
    Icon: Shield,
    image: vitrificacaoImg,
    destaque: true,
    descricao:
      "Camada protetora que repele água, resiste a riscos e bloqueia UV. Dura até 3 anos.",
    lista: [
      "Carro novo: aplicação direta",
      "Carro usado: descontaminação + polimento + vitrificação",
      "Durabilidade de até 3 anos",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Vitrificação.",
  },
  {
    nome: "Higienização Interna",
    Icon: SeatShineIcon,
    image: higienizacaoImg,
    destaque: true,
    descricao:
      "Limpeza profunda de bancos, tapetes, teto e forros com extratora. Remove manchas, odores e ácaros.",
    lista: [
      "Extração de bancos e tapetes",
      "Teto, forros e plásticos",
      "Remoção de manchas e odores",
      "Finalização com proteção UV",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Higienização Interna.",
  },
  {
    nome: "Lavação Premium",
    Icon: Droplets,
    image: lavacaoImg,
    descricao:
      "Lavagem completa por fora e por dentro. Rodas, pneus, vidros, aspiração, plásticos internos e cera protetora.",
    lista: [
      "Lavagem externa completa",
      "Rodas e pneus",
      "Aspiração e limpeza interna",
      "Cera protetora na pintura",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Lavação Premium.",
  },
  {
    nome: "Restauração de Faróis",
    Icon: HeadlightShineIcon,
    image: faroisImg,
    descricao:
      "Devolve a transparência do farol como se fosse novo, com proteção à sua escolha.",
    lista: [
      "Vapor de polímero: até 3 anos de resistência",
      "Vitrificação: acabamento cristalino, 1 a 2 anos",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Restauração de Faróis.",
  },
  {
    nome: "Vidros e Cristalização",
    Icon: ScanEye,
    image: vidrosImg,
    descricao:
      "Remove chuva ácida e riscos. Cristalização hidrofóbica — a água escorre sozinha acima de 60 km/h.",
    lista: [
      "Remoção de chuva ácida",
      "Remoção de riscos leves e médios",
      "Cristalização repelente de água",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre Vidros e Cristalização.",
  },
  {
    nome: "Limpeza de Motor",
    Icon: EngineShineIcon,
    image: motorImg,
    descricao: "Desengraxamento técnico completo, finalizado com verniz protetor.",
    lista: [
      "Desengraxamento por partes",
      "Secagem a ar comprimido",
      "Proteção de borrachas e plásticos",
      "Verniz protetor final",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Limpeza de Motor.",
  },
  {
    nome: "Martelinho de Ouro",
    Icon: Hammer,
    descricao:
      "Reparo de amassados e granizo sem repintura. Pintura original 100% preservada.",
    lista: [
      "Amassados pequenos e médios",
      "Danos por granizo",
      "Sem repintura",
      "Pintura de fábrica preservada",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre o Martelinho de Ouro.",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="servicos" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços"
          highlight="especializados"
          description="Toque em um serviço para ver os detalhes e falar direto com a gente no WhatsApp."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const open = openIndex === idx;
            return (
              <motion.article
                key={s.nome}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.06, ease: EASE }}
                className="surface-card group relative self-start overflow-hidden transition-colors duration-300"
                style={{
                  borderColor: open ? "rgba(0,230,118,0.35)" : undefined,
                }}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-6"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-colors duration-300"
                    style={{
                      background: open ? "rgba(0,230,118,0.12)" : "rgba(255,255,255,0.04)",
                      borderColor: open ? "rgba(0,230,118,0.3)" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    <s.Icon className="h-5 w-5 text-neon" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="block truncate text-[1.02rem] font-semibold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.nome}
                    </span>
                    {s.destaque && (
                      <span className="mt-1 inline-block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-neon/80">
                        Mais procurado
                      </span>
                    )}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-white/50 group-hover:text-neon"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-6">
                        {s.image && (
                          <div
                            className="mb-5 overflow-hidden rounded-xl border border-white/[0.08]"
                            style={{ aspectRatio: "16 / 9" }}
                          >
                            <img
                              src={s.image}
                              alt={`${s.nome} — Clínica do Carro Joinville`}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <p className="text-[0.9rem] leading-relaxed text-white/60">
                          {s.descricao}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {s.lista.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[0.86rem] text-white/80"
                            >
                              <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-neon" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={waLink(s.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Falar pelo WhatsApp sobre ${s.nome}`}
                          className="btn-base btn-primary mt-6 w-full"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Orçamento no WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
