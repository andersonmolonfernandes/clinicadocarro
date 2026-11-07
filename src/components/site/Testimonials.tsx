import { Star, ExternalLink } from "lucide-react";
import { MAPS_LINK } from "./constants";
import { SectionHeading } from "./Section";
import { testimonials, type Testimonial } from "./testimonials-data";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="surface-card flex h-full flex-col p-6">
      <div className="flex gap-1" aria-label={`${t.estrelas} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < t.estrelas ? "fill-neon text-neon" : "text-white/20"}`} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-white/80">“{t.texto}”</blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-white">{t.nome}</span>
        <span className="text-white/45"> · {t.servico ? `${t.servico} · ` : ""}avaliação no {t.fonte}</span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-y" style={{ background: "#0d0d0d" }}>
      <div className="shell">
        <SectionHeading eyebrow="Clientes" title="Quem já passou" highlight="por aqui" />
        <div className={`mx-auto mt-12 grid gap-4 ${testimonials.length > 1 ? "max-w-5xl md:grid-cols-2" : "max-w-2xl"}`}>
          {testimonials.map((t) => <TestimonialCard key={t.nome + t.texto.slice(0, 12)} t={t} />)}
        </div>
        <div className="mt-8 flex justify-center">
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-outline">
            Ver todas as avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
