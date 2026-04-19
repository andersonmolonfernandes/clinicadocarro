import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Droplets,
  Sparkles,
  Shield,
  ScanEye,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { waLink } from "./constants";
import {
  EngineShineIcon,
  HeadlightShineIcon,
  SeatShineIcon,
} from "./icons";
import lavacaoImg from "@/assets/services/lavacao.jpg";
import polimentoImg from "@/assets/services/polimento.jpg";
import higienizacaoImg from "@/assets/services/higienizacao.png";
import vitrificacaoImg from "@/assets/services/vitrificacao.jpg";
import faroisImg from "@/assets/services/farois.jpg";
import vidrosImg from "@/assets/services/vidros.jpg";
import motorImg from "@/assets/services/motor.jpg";

type ServiceIcon = LucideIcon | ((props: { className?: string }) => React.ReactElement);

type Service = {
  nome: string;
  Icon: ServiceIcon;
  descricao: string;
  lista: string[];
  whatsapp: string;
  image?: string;
};

const services: Service[] = [
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
      "Proteção dos plásticos internos",
      "Cera protetora na pintura",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Lavação Premium.",
  },
  {
    nome: "Polimento Técnico",
    Icon: Sparkles,
    image: polimentoImg,
    descricao:
      "Correção da pintura em 2 etapas: corte remove riscos e oxidação, refino devolve o brilho espelhado.",
    lista: [
      "Etapa 1 — Corte: remove riscos e oxidação",
      "Etapa 2 — Refino: brilho espelhado",
      "Proteção com cera, selante ou vitrificação",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre o Polimento Técnico.",
  },
  {
    nome: "Higienização Interna",
    Icon: SeatShineIcon,
    image: higienizacaoImg,
    descricao:
      "Limpeza profunda com extratora. Remove sujeira, ácaros, fungos e odores que você não vê mas respira.",
    lista: [
      "Bancos de tecido e couro com extratora",
      "Tapetes e carpetes",
      "Painel e plásticos internos",
      "Porta-malas",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Higienização Interna.",
  },
  {
    nome: "Vitrificação VX45",
    Icon: Shield,
    image: vitrificacaoImg,
    descricao:
      "Camada protetora que repele água, resiste a riscos e bloqueia UV. Dura até 3 anos.",
    lista: [
      "Carro novo: aplicação direta",
      "Carro usado: descontaminação + polimento + vitrificação",
      "Durabilidade de até 3 anos",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Vitrificação VX45.",
  },
  {
    nome: "Restauração de Faróis",
    Icon: HeadlightShineIcon,
    image: faroisImg,
    descricao:
      "A restauração devolve a transparência do farol como se fosse novo. Depois o cliente escolhe a proteção.",
    lista: [
      "Vapor de polímero: camada resistente, até 3 anos",
      "Vitrificação: acabamento cristalino, 1 a 2 anos",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre a Restauração de Faróis.",
  },
  {
    nome: "Vidros e Cristalização",
    Icon: ScanEye,
    image: vidrosImg,
    descricao:
      "Remove chuva ácida e riscos. Cristalização com efeito hidrofóbico — água escorrega sozinha acima de 60km/h.",
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
    descricao:
      "Desengraxamento técnico completo, finalizado com verniz protetor.",
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
      "Reparo de amassados e granizo sem pintura. Pintura original preservada.",
    lista: [
      "Amassados pequenos e médios",
      "Danos por granizo",
      "Sem repintura",
      "Pintura de fábrica preservada 100%",
    ],
    whatsapp: "Olá! Gostaria de saber mais sobre o Martelinho de Ouro.",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-[110px] px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="font-[var(--font-mono-tech)] text-gold-brand text-[0.68rem] mb-4"
            style={{ letterSpacing: "5px" }}
          >
            O QUE FAZEMOS
          </p>
          <h2
            className="font-[var(--font-display)] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.95 }}
          >
            Serviços que fazemos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => {
            const open = openIndex === idx;
            const hovered = hoverIndex === idx;
            // Stagger by row (3 per row on lg, 2 on md, 1 on sm)
            const rowDelay = (Math.floor(idx / 3) % 2) * 0.1 + (idx % 3) * 0.08;
            return (
              <motion.div
                key={s.nome}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: rowDelay }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(0,230,118,0.5)",
                  boxShadow: "0 20px 60px rgba(0,230,118,0.12)",
                }}
                onHoverStart={() => setHoverIndex(idx)}
                onHoverEnd={() => setHoverIndex((i) => (i === idx ? null : i))}
                className="relative rounded-[10px] cursor-pointer self-start overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: open
                    ? "1px solid rgba(0,230,118,0.4)"
                    : "1px solid rgba(0,230,118,0.15)",
                }}
                onClick={() => setOpenIndex(open ? null : idx)}
              >
                {/* Border-shine sweep on hover */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  initial={false}
                  animate={
                    hovered
                      ? { backgroundPosition: ["-150% 0", "250% 0"] }
                      : { backgroundPosition: "-150% 0" }
                  }
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 35%, rgba(0,230,118,0.18) 50%, transparent 65%)",
                    backgroundSize: "200% 100%",
                    mixBlendMode: "screen",
                  }}
                />
                <div
                  className="relative flex items-center gap-4"
                  style={{ padding: "28px 26px" }}
                >
                  <motion.div
                    className="flex items-center justify-center rounded-[10px] shrink-0"
                    style={{
                      width: 50,
                      height: 50,
                      background: "rgba(0,230,118,0.08)",
                      border: "1px solid rgba(0,230,118,0.15)",
                    }}
                    animate={
                      hovered
                        ? { rotate: [0, -8, 8, -4, 0], scale: 1.08 }
                        : { rotate: 0, scale: 1 }
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <s.Icon className="w-6 h-6 text-green-brand" />
                  </motion.div>
                  <h3 className="flex-1 font-[var(--font-heading)] font-bold uppercase text-white text-[1.1rem] tracking-wide">
                    {s.nome}
                  </h3>
                  <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-green-brand" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="relative px-7 pb-7 pt-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="font-[var(--font-body)] font-light text-[0.9rem] text-[var(--muted-text)] leading-relaxed">
                          {s.descricao}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {s.lista.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 font-[var(--font-body)] text-[0.88rem] text-white/85"
                            >
                              <span
                                className="mt-2 rounded-full bg-green-brand shrink-0"
                                style={{ width: 5, height: 5 }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={waLink(s.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Falar pelo WhatsApp sobre ${s.nome}`}
                          className="mt-6 block w-full text-center border border-green-brand text-green-brand font-[var(--font-heading)] font-bold uppercase tracking-wider rounded-md py-3 hover:bg-green-brand hover:text-black transition-colors"
                        >
                          Falar pelo WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
