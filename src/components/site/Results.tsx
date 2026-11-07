import { MessageCircle } from "lucide-react";
import { waLink, trackWhatsAppClick } from "./constants";
import { SectionHeading } from "./Section";
import { BeforeAfter } from "./Services";
import { services } from "./services-data";

const withResults = services.filter((s) => s.beforeAfter);

export function Results() {
  return (
    <section id="resultados" className="section-y">
      <div className="shell">
        <SectionHeading eyebrow="Antes e depois" title="Resultados" highlight="reais" description="Fotos de carros atendidos no nosso studio." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {withResults.map((s) => (
            <article key={s.slug} className="flex flex-col">
              <BeforeAfter {...s.beforeAfter!} />
              <h3 className="text-base text-white">{s.nome}</h3>
              <a href={waLink(s.whatsapp)} onClick={() => trackWhatsAppClick("results", s.slug)} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary mt-3 w-full">
                <MessageCircle className="h-4 w-4" />
                Quero esse resultado
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
