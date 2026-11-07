import { MapPin, Navigation, MessageCircle, Clock, Instagram } from "lucide-react";
import {
  ADDRESS, MAPS_EMBED, MAPS_DIRECTIONS, INSTAGRAM_URL, INSTAGRAM_HANDLE, HOURS_LINES,
  WHATSAPP_DEFAULT, trackWhatsAppClick,
} from "./constants";
import { SectionHeading } from "./Section";

export function Location() {
  return (
    <section id="localizacao" className="section-y">
      <div className="shell">
        <SectionHeading eyebrow="Onde estamos" title="Venha nos" highlight="visitar" />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="surface-card px-6 py-8 md:px-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-neon/25 bg-neon/[0.08]">
              <MapPin className="h-5 w-5 text-neon" />
            </span>
            <h3 className="mt-5 text-2xl text-white">Clínica do Carro — Studio Detail</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-white/60">{ADDRESS}</p>
            <div className="mt-5 flex items-start gap-2 text-[0.9rem] text-white/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
              <ul>{HOURS_LINES.map((h) => <li key={h}>{h}</li>)}</ul>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[0.9rem] text-white/70 transition-colors hover:text-neon">
              <Instagram className="h-4 w-4 text-neon" />
              {INSTAGRAM_HANDLE}
            </a>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_DEFAULT} onClick={() => trackWhatsAppClick("location")} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary">
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
              <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn-base btn-outline">
                <Navigation className="h-5 w-5" />
                Como chegar
              </a>
            </div>
          </div>
          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
            <iframe
              title="Mapa: Clínica do Carro, Rua Alois Finder, 1401, Aventureiro, Joinville/SC"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
              style={{ filter: "grayscale(0.4) invert(0.9) hue-rotate(180deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
