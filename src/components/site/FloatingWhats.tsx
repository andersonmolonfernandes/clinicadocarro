import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_DEFAULT, waLink, trackWhatsAppClick } from "./constants";

/**
 * Desktop: botão flutuante "Fale conosco".
 * Mobile: barra fixa larga "Chamar no WhatsApp", aparece após ~2s.
 * Em páginas de serviço, recebe a mensagem e o slug do serviço.
 */
export function FloatingWhats({ message, slug }: { message?: string; slug?: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 2000);
    return () => window.clearTimeout(t);
  }, []);
  const href = message ? waLink(message) : WHATSAPP_DEFAULT;

  return (
    <>
      <a
        href={href}
        onClick={() => trackWhatsAppClick("floating_whatsapp", slug)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-7 right-7 z-40 hidden items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex"
        style={{ background: "#25D366", boxShadow: "0 10px 30px rgba(37,211,102,0.35)" }}
      >
        <MessageCircle className="h-5 w-5" />
        Fale conosco
      </a>

      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 px-4 pt-3 transition-transform duration-300 md:hidden"
        style={{
          background: "rgba(8,8,8,0.94)",
          backdropFilter: "blur(12px)",
          paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
          transform: show ? "translateY(0)" : "translateY(110%)",
        }}
        aria-hidden={!show}
      >
        <a
          href={href}
          onClick={() => trackWhatsAppClick("mobile_bar", slug)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="btn-base btn-primary w-full"
        >
          <MessageCircle className="h-5 w-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </>
  );
}
