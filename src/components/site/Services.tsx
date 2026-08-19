import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  Instagram,
  Play,
  Clock,
  ArrowRight,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { memo, useCallback, useState } from "react";
import { waLink } from "./constants";
import { SectionHeading, EASE } from "./Section";
import { services, type Service } from "./services-data";

export function BeforeAfter({
  antes,
  depois,
  altAntes,
  altDepois,
  badge,
  BadgeIcon,
}: {
  antes: string;
  depois: string;
  altAntes: string;
  altDepois: string;
  badge: string;
  BadgeIcon: LucideIcon;
}) {
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
        { src: antes, label: "Antes", alt: altAntes },
        { src: depois, label: "Depois", alt: altDepois },
      ].map((p, i) => (
        <div key={p.label} className="relative" style={{ aspectRatio: "3 / 4" }}>
          <img
            src={p.src}
            alt={p.alt}
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
        <BadgeIcon className="h-4 w-4 text-neon" />
      </span>
      <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/70">
        {badge}
      </span>
    </div>
  );
}

export function VideoCard({ url, nome }: { url: string; nome: string }) {
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

const AddOnCard = memo(function AddOnCard({ addOn }: { addOn: NonNullable<Service["addOns"]>[number] }) {
  const Icon = addOn.Icon ?? Plus;
  return (
    <div className="overflow-hidden rounded-2xl border border-neon/20 bg-white/[0.025]">
      <div className="grid sm:grid-cols-[112px_1fr]">
        {addOn.image ? (
          <div className="relative min-h-[112px] overflow-hidden bg-black sm:min-h-full">
            <img src={addOn.image} alt={addOn.alt ?? addOn.nome} loading="lazy" decoding="async" width={360} height={270} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        ) : (
          <div className="grid min-h-[112px] place-items-center border-b border-white/[0.06] bg-gradient-to-br from-neon/[0.12] to-white/[0.02] sm:border-b-0 sm:border-r">
            <Icon className="h-7 w-7 text-neon" />
          </div>
        )}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div><span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-neon/80">Adicional</span><h4 className="mt-1 text-base font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>{addOn.nome}</h4></div>
            {addOn.etiqueta && <span className="shrink-0 rounded-full border border-neon/20 bg-neon/[0.08] px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-neon">{addOn.etiqueta}</span>}
          </div>
          <p className="mt-2 text-[0.78rem] leading-relaxed text-white/55">{addOn.descricao}</p>
          <a href={waLink(addOn.whatsapp)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neon px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#06120b] transition-transform hover:-translate-y-0.5"><Plus className="h-3.5 w-3.5" />Adicionar ao serviço</a>
        </div>
      </div>
    </div>
  );
});

const ServiceCard = memo(function ServiceCard({ s, idx, open, onToggle }: { s: Service; idx: number; open: boolean; onToggle: (idx: number) => void }) {
  const addOns = s.addOns ?? (s.addOn ? [s.addOn] : []);
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: (idx % 3) * 0.05, ease: EASE }} className="group self-start overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-[0_16px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-white/[0.14]" style={{ borderColor: open ? "rgba(0,230,118,0.28)" : undefined }}>
      <button type="button" aria-expanded={open} onClick={() => onToggle(idx)} className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-black/30 transition-colors group-hover:border-neon/25" style={{ background: open ? "rgba(0,230,118,0.09)" : undefined }}><s.Icon className="h-5 w-5 text-neon" /></span>
        <span className="min-w-0 flex-1"><span className="block text-[1rem] font-semibold tracking-[-0.01em] text-white" style={{ fontFamily: "var(--font-display)" }}>{s.nome}</span>{s.destaque && <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-neon/75">Destaque</span>}</span>
        <span className="flex shrink-0 items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/35 group-hover:text-neon/80">{open ? "Fechar" : "Detalhes"}<motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}><ChevronDown className="h-4 w-4" /></motion.span></span>
      </button>
      <AnimatePresence initial={false}>{open && (
        <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: EASE }} className="overflow-hidden">
          <div className="border-t border-white/[0.06] px-5 pb-6 pt-5 md:px-6">
            {s.beforeAfter ? <BeforeAfter {...s.beforeAfter} /> : s.image ? <div className="mb-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-black" style={{ aspectRatio: "16 / 9" }}><img src={s.image} alt={s.alt ?? `${s.nome} — Clínica do Carro Joinville`} loading="lazy" decoding="async" width={1280} height={720} className="h-full w-full object-cover" /></div> : null}
            <p className="text-[0.9rem] leading-7 text-white/62">{s.descricao}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/35">Inclui</p><ul className="mt-3 space-y-2.5">{s.lista.map((item) => <li key={item} className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-white/78"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />{item}</li>)}</ul></div>
              <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/35">Processo</p><ol className="mt-3 space-y-2.5">{s.processo.map((step, i) => <li key={step} className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-white/68"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border border-neon/20 bg-neon/[0.07] text-[0.58rem] font-bold text-neon">{i + 1}</span>{step}</li>)}</ol></div>
            </div>
            {addOns.length > 0 && <div className="mt-7 border-t border-white/[0.06] pt-6"><div className="mb-3 flex items-end justify-between gap-4"><div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-neon/80">Personalize</p><h4 className="mt-1 text-lg font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>Adicionais para este serviço</h4></div><span className="hidden text-[0.68rem] text-white/35 sm:block">Escolha no orçamento</span></div><div className="grid gap-3">{addOns.map((addOn) => <AddOnCard key={addOn.nome} addOn={addOn} />)}</div></div>}
            {s.durabilidade && <p className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 text-[0.78rem] text-white/65"><Clock className="h-4 w-4 text-neon" /><span><span className="text-white/38">Durabilidade: </span>{s.durabilidade}</span></p>}
            {s.video && <VideoCard url={s.video} nome={s.nome} />}
            <a href={waLink(s.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label={`Falar pelo WhatsApp sobre ${s.nome}`} className="btn-base btn-primary mt-4 w-full"><MessageCircle className="h-4 w-4" />Orçamento no WhatsApp</a>
            <Link to="/$slug" params={{ slug: s.slug }} className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-[0.78rem] font-medium text-white/58 transition-colors hover:border-neon/30 hover:text-neon">Ver página completa <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </motion.article>
  );
});

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = useCallback(
    (idx: number) => setOpenIndex((cur) => (cur === idx ? null : idx)),
    []
  );

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
          {services.map((s, idx) => (
            <ServiceCard
              key={s.nome}
              s={s}
              idx={idx}
              open={openIndex === idx}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
