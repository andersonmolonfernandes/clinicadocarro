import { serviceKeyFromSlug, trackWhatsAppLead } from "@/lib/tracking";

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
  | "addon"
  | "footer"
  | "location"
  | "home_service_card"
  | "home_addon"
  | "services_index";

/**
 * Clique real no WhatsApp = conversão principal.
 * O disparo (e a proteção contra eventos duplicados) fica em @/lib/tracking.
 */
export function trackWhatsAppClick(source: ConversionSource, slug?: string) {
  trackWhatsAppLead({ placement: source, service: serviceKeyFromSlug(slug) });
}
