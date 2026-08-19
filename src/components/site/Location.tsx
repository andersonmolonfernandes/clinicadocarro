import { MapPin, Navigation, MessageCircle, Clock } from "lucide-react";
import { ADDRESS, MAPS_LINK, WHATSAPP_DEFAULT, trackWhatsAppClick } from "./constants";
import { Reveal, SectionHeading } from "./Section";

export function Location() {
  return (
    <section id="localizacao" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="Onde estamos"
          title="Venha nos"
          highlight="visitar"
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="surface-card mx-auto max-w-2xl px-6 py-10 text-center md:px-12">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl border border-neon/25 bg-neon/[0.08]">
              <MapPin className="h-6 w-6 text-neon" />
            </span>
            <h3 className="mt-6 text-2xl text-white">Clínica do Carro — Studio Detail</h3>
            <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-white/60">
              {ADDRESS}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[0.85rem] text-white/45">
              <Clock className="h-4 w-4" />
              Seg a Sáb — atendimento com agendamento
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_DEFAULT}
                onClick={() => trackWhatsAppClick("location")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar horário
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline"
              >
                <Navigation className="h-5 w-5" />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
