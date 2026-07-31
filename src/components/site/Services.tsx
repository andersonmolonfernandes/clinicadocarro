import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Droplets,
  Sparkles,
  Shield,
  ScanEye,
  GlassWater,
  Hammer,
  MessageCircle,
  Instagram,
  Play,
  Clock,
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
import martelinhoAntes from "@/assets/services/martelinho-antes.jpg";
import martelinhoDepois from "@/assets/services/martelinho-depois.jpg";

type ServiceIcon =
  | LucideIcon
  | ((props: { className?: string }) => React.ReactElement);

type Service = {
  nome: string;
  Icon: ServiceIcon;
  descricao: string;
  lista: string[];
  processo: string[];
  durabilidade?: string;
  video?: string;
  whatsapp: string;
  image?: string;
  beforeAfter?: { antes: string; depois: string };
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
      "Remove riscos, oxidação e marcas de lavagem",
      "Brilho espelhado profundo e uniforme",
      "Valoriza o carro na revenda",
    ],
    processo: [
      "Lavagem técnica e descontaminação",
      "Etapa 1 — corte: remoção de riscos e oxidação",
      "Etapa 2 — refino: brilho espelhado",
      "Proteção com cera, selante ou vitrificação",
    ],
    durabilidade: "6 a 12 meses (com proteção aplicada)",
    video: "https://www.instagram.com/reel/DVMh1Wnjxsw/?igsh=anM0OHp0bm1qcXNx",
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
      "Efeito hidrofóbico — a água escorre sozinha",
      "Proteção contra UV, chuva ácida e resíduos",
      "Brilho profundo e lavagem muito mais fácil",
    ],
    processo: [
      "Carro novo: descontaminação + aplicação direta",
      "Carro usado: descontaminação + polimento + vitrificação",
      "Cura controlada da camada cerâmica",
    ],
    durabilidade: "Até 3 anos",
    video: "https://www.instagram.com/reel/DWpOqxYD6Ta/?igsh=MWZlaDlxaWJpZ3JvYw==",
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
      "Elimina manchas, odores, ácaros e bactérias",
      "Interior com aspecto e cheiro de novo",
      "Mais conforto para quem tem alergia",
    ],
    processo: [
      "Aspiração completa e pré-tratamento",
      "Extração de bancos e tapetes",
      "Teto, forros e plásticos",
      "Finalização com proteção UV",
    ],
    durabilidade: "Recomendado a cada 6 a 12 meses",
    video: "https://www.instagram.com/reel/DbMNNBhAsb9/?igsh=MTZ5Nmo2YXgwdWIxeg==",
    whatsapp: "Olá! Gostaria de saber mais sobre a Higienização Interna.",
  },
  {
    nome: "Restauração de Faróis",
    Icon: HeadlightShineIcon,
    image: faroisImg,
    descricao:
      "Devolve a transparência do farol como se fosse novo, com proteção à sua escolha.",
    lista: [
      "Mais segurança à noite com farol transparente",
      "Aparência de farol novo sem trocar a peça",
      "Proteção contra amarelamento",
    ],
    processo: [
      "Lixamento progressivo do policarbonato",
      "Polimento até a transparência total",
      "Vapor de polímero: até 3 anos de resistência",
      "Ou vitrificação: acabamento cristalino, 1 a 2 anos",
    ],
    durabilidade: "1 a 3 anos, conforme a proteção",
    video: "https://www.instagram.com/reel/DYIubqlANtF/?igsh=MTZqc3FrNHp2b3IzZw==",
    whatsapp: "Olá! Gostaria de saber mais sobre a Restauração de Faróis.",
  },
  {
    nome: "Polimento de Vidros",
    Icon: ScanEye,
    image: vidrosImg,
    descricao:
      "Remove marcas de palhetas, riscos leves e chuva ácida, devolvendo transparência.",
    lista: [
      "Remove marcas de palhetas e chuva ácida",
      "Elimina riscos leves e médios",
      "Visibilidade muito mais nítida",
    ],
    processo: [
      "Análise dos riscos e demarcação",
      "Polimento técnico com composto específico",
      "Limpeza e inspeção final na contraluz",
    ],
    video: "https://www.instagram.com/reel/DWcLd4HD4nA/?igsh=MWVsYXZ6emM3aWcwYw==",
    whatsapp: "Olá! Gostaria de saber mais sobre o Polimento de Vidros.",
  },
  {
    nome: "Revitalização de Vidros",
    Icon: GlassWater,
    descricao: "Restaura o brilho e melhora a aparência dos vidros.",
    lista: [
      "Vidros com brilho e aspecto renovado",
      "Superfície lisa ao toque",
      "Melhora o acabamento geral do carro",
    ],
    processo: [
      "Limpeza profunda e descontaminação",
      "Revitalização da superfície do vidro",
      "Finalização com repelente de água",
    ],
    durabilidade: "Até 12 meses",
    video: "https://www.instagram.com/reel/DYVkYAhAyIP/?igsh=YTE1ZmY0N3luOTJ1",
    whatsapp: "Olá! Gostaria de saber mais sobre a Revitalização de Vidros.",
  },
  {
    nome: "Lavação Premium",
    Icon: Droplets,
    image: lavacaoImg,
    descricao:
      "Lavagem completa por fora e por dentro. Rodas, pneus, vidros, aspiração, plásticos internos e cera protetora.",
    lista: [
      "Carro impecável por dentro e por fora",
      "Sem riscos: técnica dos dois baldes",
      "Cera protetora inclusa",
    ],
    processo: [
      "Rodas, pneus e caixas de roda",
      "Lavagem externa completa",
      "Aspiração e limpeza interna",
      "Cera protetora na pintura",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Lavação Premium.",
  },
  {
    nome: "Limpeza de Motor",
    Icon: EngineShineIcon,
    image: motorImg,
    descricao: "Desengraxamento técnico completo, finalizado com verniz protetor.",
    lista: [
      "Motor limpo facilita manutenção e revisão",
      "Evita acúmulo de graxa e sujeira",
      "Valoriza o carro na venda",
    ],
    processo: [
      "Proteção de borrachas, plásticos e componentes",
      "Desengraxamento por partes",
      "Secagem a ar comprimido",
      "Verniz protetor final",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Limpeza de Motor.",
  },
  {
    nome: "Martelinho de Ouro",
    Icon: Hammer,
    beforeAfter: { antes: martelinhoAntes, depois: martelinhoDepois },
    descricao:
      "Recuperação da lataria sem pintura. Amassados e granizo removidos com a pintura original 100% preservada.",
    lista: [
      "Sem repintura e sem massa",
      "Pintura de fábrica preservada",
      "Mais rápido e mais barato que funilaria",
    ],
    processo: [
      "Mapeamento dos amassados com iluminação técnica",
      "Acesso interno à chapa",
      "Repuxo e nivelamento gradual",
      "Conferência do reflexo na contraluz",
    ],
    durabilidade: "Reparo permanente",
    whatsapp: "Olá! Gostaria de saber mais sobre o Martelinho de Ouro.",
  },
];

function BeforeAfter({ antes, depois }: { antes: string; depois: string }) {
  return (
    <div
      className="relative mb-5 grid grid-cols-2 overflow-hidden rounded-xl border"
      style={{
        borderColor: "rgba(0,230,118,0.28)",
        background: "#000",
        boxShadow: "0 0 40px rgba(0,230,118,0.08) inset",
      }}
    >
      {[
        { src: antes, label: "Antes" },
        { src: depois, label: "Depois" },
      ].map((p, i) => (
        <div key={p.label} className="relative" style={{ aspectRatio: "3 / 4" }}>
          <img
            src={p.src}
            alt={`Martelinho de ouro ${p.label.toLowerCase()} — Clínica do Carro Joinville`}
            loading="lazy"
            decoding="async"
            width={720}
            height={1024}
            className="h-full w-full object-cover"
            style={{ filter: i === 0 ? "saturate(0.85) brightness(0.92)" : undefined }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                i === 0
                  ? "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.65))"
                  : "linear-gradient(180deg, rgba(0,230,118,0.06), rgba(0,0,0,0.6))",
            }}
          />
          <span
            className="absolute bottom-3 left-3 rounded-md px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em]"
            style={
              i === 0
                ? {
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }
                : {
                    background: "rgba(0,230,118,0.14)",
                    color: "#00e676",
                    border: "1px solid rgba(0,230,118,0.35)",
                  }
            }
          >
            {p.label}
          </span>
        </div>
      ))}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(0,230,118,0.9), transparent)",
          boxShadow: "0 0 14px rgba(0,230,118,0.6)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
        style={{
          background: "rgba(10,10,10,0.9)",
          border: "1px solid rgba(0,230,118,0.5)",
          boxShadow: "0 0 18px rgba(0,230,118,0.35)",
        }}
      >
        <Hammer className="h-4 w-4 text-neon" />
      </span>
      <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/70">
        Sem pintura
      </span>
    </div>
  );
}

function VideoCard({ url, nome }: { url: string; nome: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Assista ao serviço de ${nome} em ação no Instagram`}
      className="mt-6 block rounded-xl border p-4 transition-colors duration-300"
      style={{
        borderColor: "rgba(0,230,118,0.22)",
        background:
          "linear-gradient(135deg, rgba(0,230,118,0.07), rgba(255,255,255,0.02))",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border"
          style={{
            borderColor: "rgba(0,230,118,0.3)",
            background: "rgba(0,230,118,0.1)",
          }}
        >
          <Instagram className="h-5 w-5 text-neon" />
        </span>
        <span className="min-w-0 flex-1">
          <span
            className="flex items-center gap-1.5 text-[0.92rem] font-semibold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <Play className="h-3.5 w-3.5 text-neon" />
            Assista ao serviço em ação
          </span>
          <span className="mt-0.5 block text-[0.76rem] text-white/50">
            Vídeo real no nosso Instagram
          </span>
        </span>
      </div>
      <span
        className="btn-base mt-4 w-full text-neon"
        style={{
          background: "rgba(0,230,118,0.12)",
          border: "1px solid rgba(0,230,118,0.45)",
        }}
      >
        <Play className="h-4 w-4" />
        Ver vídeo no Instagram
      </span>
    </a>
  );
}

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="servicos" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços"
          highlight="especializados"
          description="Toque em um serviço para ver benefícios, processo, vídeo real e falar direto com a gente no WhatsApp."
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
                        {s.beforeAfter ? (
                          <BeforeAfter {...s.beforeAfter} />
                        ) : s.image ? (
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
                        ) : null}

                        <p className="text-[0.9rem] leading-relaxed text-white/60">
                          {s.descricao}
                        </p>

                        <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                          Benefícios
                        </p>
                        <ul className="mt-3 space-y-2">
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

                        <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                          Como fazemos
                        </p>
                        <ol className="mt-3 space-y-2">
                          {s.processo.map((step, i) => (
                            <li
                              key={step}
                              className="flex items-start gap-2.5 text-[0.86rem] text-white/70"
                            >
                              <span
                                className="mt-[0.1rem] grid h-5 w-5 shrink-0 place-items-center rounded-md text-[0.64rem] font-semibold text-neon"
                                style={{
                                  background: "rgba(0,230,118,0.1)",
                                  border: "1px solid rgba(0,230,118,0.22)",
                                }}
                              >
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>

                        {s.durabilidade && (
                          <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[0.8rem] text-white/70">
                            <Clock className="h-4 w-4 shrink-0 text-neon" />
                            <span>
                              <span className="text-white/45">Durabilidade: </span>
                              {s.durabilidade}
                            </span>
                          </p>
                        )}

                        {s.video && <VideoCard url={s.video} nome={s.nome} />}

                        <a
                          href={waLink(s.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Falar pelo WhatsApp sobre ${s.nome}`}
                          className="btn-base btn-primary mt-4 w-full"
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
