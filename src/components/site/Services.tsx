import { MessageCircle, Instagram, Play, ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink, trackWhatsAppClick } from "./constants";
import { serviceKeyFromSlug, trackServiceView } from "@/lib/tracking";
import { SectionHeading } from "./Section";
import { services, primaryImage, primaryAlt } from "./services-data";

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

export function Services() {
  return (
    <section id="servicos" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços"
          highlight="especializados"
          description="Escolha o serviço e chame no WhatsApp. Respondemos rápido."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {services.map((s) => {
            const img = primaryImage(s);
            return (
              <article key={s.slug} className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-colors hover:border-neon/30">
                <Link to="/$slug" params={{ slug: s.slug }} className="relative block overflow-hidden bg-black" style={{ aspectRatio: "16 / 10" }} tabIndex={-1} aria-hidden>
                  {img && <img src={img} alt={primaryAlt(s)} loading="lazy" decoding="async" width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />}
                  <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-black/60"><s.Icon className="h-4 w-4 text-neon" /></span>
                  {s.destaque && <span className="absolute right-3 top-3 rounded-md bg-neon px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#06120b]">Destaque</span>}
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg text-white">{s.nome}</h3>
                  <p className="mt-1.5 flex-1 text-[0.88rem] leading-relaxed text-white/60">{s.lista[0]}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <a href={waLink(s.whatsapp)} onClick={() => trackWhatsAppClick("home_service_card", s.slug)} target="_blank" rel="noopener noreferrer" aria-label={`Chamar no WhatsApp sobre ${s.nome}`} className="btn-base btn-primary !px-3 !py-3 !text-[0.8rem]"><MessageCircle className="h-4 w-4" />WhatsApp</a>
                    <Link to="/$slug" params={{ slug: s.slug }} onClick={() => trackServiceView(serviceKeyFromSlug(s.slug), "home_service_card")} className="btn-base btn-outline !px-3 !py-3 !text-[0.8rem]">Ver detalhes<ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
