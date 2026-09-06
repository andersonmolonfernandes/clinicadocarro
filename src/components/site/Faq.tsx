import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "./services-data";

/**
 * Accordion de perguntas frequentes — acessível por teclado, com estado em
 * React (sem depender de <details> ou de CSS frágil).
 */
export function FaqAccordion({ faqs, className = "" }: { faqs: Faq[]; className?: string }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div
            key={f.pergunta}
            className="surface-card overflow-hidden transition-colors"
            style={{ borderColor: isOpen ? "rgba(0,230,118,0.28)" : undefined }}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left text-[0.95rem] font-semibold text-white transition-colors hover:text-neon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon"
              >
                <span className="flex-1">{f.pergunta}</span>
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-neon/25 bg-neon/[0.08] text-neon"
                >
                  <Plus
                    className="h-4 w-4 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  />
                </span>
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-5">
                <p className="text-[0.9rem] leading-relaxed text-white/65">{f.resposta}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
