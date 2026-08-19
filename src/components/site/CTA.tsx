import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEFAULT, trackWhatsAppClick } from "./constants";
import { Reveal } from "./Section";

export function CTA() {
  return (
    <section
      className="relative overflow-hidden border-y border-neon/25 px-5 py-20 text-center md:py-24"
      style={{ background: "linear-gradient(150deg, #04150c, #071f11 55%, #04150c)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 50%, rgba(0,230,118,0.16), transparent 70%)",
        }}
      />
      <div className="shell relative">
        <Reveal>
          <span className="eyebrow">Atendimento rápido</span>
          <h2
            className="mx-auto mt-4 max-w-3xl text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Agende agora pelo <span className="text-neon glow-neon">WhatsApp</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
            Manda uma mensagem com o modelo do seu carro e a gente responde na hora com
            o orçamento.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={WHATSAPP_DEFAULT}
              onClick={() => trackWhatsAppClick("cta")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary !px-9 !py-[1.15rem] !text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
