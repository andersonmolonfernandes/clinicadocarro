export const WHATSAPP_BASE = "https://wa.me/5547999940973";
export const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Olá! Vi o site e gostaria de agendar um serviço."
)}`;

export const waLink = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;

export const ADDRESS = "Rua Alois Finder, 1401 — Aventureiro, Joinville/SC";
export const MAPS_LINK =
  "https://maps.google.com/?q=Rua+Alois+Finder,+1401,+Aventureiro,+Joinville,+SC";
