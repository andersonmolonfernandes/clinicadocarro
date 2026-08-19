export const WHATSAPP_BASE = "https://wa.me/5547999940973";
export const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Olá! Vi o site e gostaria de agendar um serviço."
)}`;

export const waLink = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;

export const ADDRESS = "Rua Alois Finder, 1401 — Aventureiro, Joinville/SC";
export const MAPS_LINK =
  "https://maps.google.com/?q=Rua+Alois+Finder,+1401,+Aventureiro,+Joinville,+SC";

export type ConversionSource =
  | "header"
  | "mobile_header"
  | "hero"
  | "cta"
  | "floating_whatsapp"
  | "service"
  | "footer"
  | "location";

export function trackWhatsAppClick(source: ConversionSource) {
  if (typeof window === "undefined") return;
  const event = {
    event: "whatsapp_lead",
    conversion_source: source,
    conversion_value: 1,
  };
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
  const gtag = (w as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", {
      method: "WhatsApp",
      source,
      value: 1,
      currency: "BRL",
    });
  }
}
