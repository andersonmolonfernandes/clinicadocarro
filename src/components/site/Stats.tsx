import { CalendarCheck, MapPin, MessageCircle, Award, type LucideIcon } from "lucide-react";

type Pilar = { Icon: LucideIcon; titulo: string; descricao: string };

const pilares: Pilar[] = [
  {
    Icon: Award,
    titulo: "Desde 2013 em Joinville",
    descricao: "Experiência em detailing e estética automotiva",
  },
  {
    Icon: CalendarCheck,
    titulo: "Atendimento com hora marcada",
    descricao: "Cuidado dedicado e exclusivo a cada veículo",
  },
  {
    Icon: MapPin,
    titulo: "Studio no Aventureiro",
    descricao: "Rua Alois Finder, 1401 — fácil acesso",
  },
  {
    Icon: MessageCircle,
    titulo: "Orçamento rápido via WhatsApp",
    descricao: "Envie fotos do carro e receba a previsão no mesmo dia",
  },
];

/** Barra de pilares de autoridade — sem contadores animados, 100% visível no SSR. */
export function Stats() {
  return (
    <section className="border-y border-white/[0.07]" style={{ background: "#0d0d0d" }}>
      <div className="shell grid grid-cols-1 gap-x-6 gap-y-8 py-12 sm:grid-cols-2 md:py-14 lg:grid-cols-4">
        {pilares.map((p) => (
          <div key={p.titulo} className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-neon/25 bg-neon/[0.08]">
              <p.Icon className="h-5 w-5 text-neon" />
            </span>
            <div>
              <p className="text-[0.95rem] font-semibold leading-snug text-white">{p.titulo}</p>
              <p className="mt-1 text-[0.8rem] leading-relaxed text-white/50">{p.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
