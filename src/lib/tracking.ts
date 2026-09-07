/**
 * Rastreamento de conversões — Clínica do Carro
 *
 * Regras:
 * - Uma única Google Tag carregada no site (nenhuma segunda tag / GTM).
 * - `generate_lead` (method = whatsapp) é o evento de contato real.
 * - `service_view` é apenas interação/intenção — nunca conversão principal.
 * - A origem real da sessão (gclid/gbraid/wbraid/utm/referrer) é capturada na
 *   primeira página e preservada durante toda a sessão, nunca sobrescrita.
 * - A conversão de Google Ads só é enviada quando existe evidência real de
 *   mídia paga na sessão (gclid/gbraid/wbraid ou utm_medium=cpc/paid).
 */

/** Google Tag ID real do projeto. */
export const GOOGLE_TAG_ID = "AW-18316297542";

/**
 * Rótulo da conversão do Google Ads (Conversion Label).
 * Ainda NÃO identificado — enquanto estiver vazio, o evento `generate_lead`
 * é enviado normalmente, mas nenhuma conversão do Ads é disparada.
 * Preencher com o valor real do painel do Google Ads (ex.: "AbC-D_efG").
 */
export const ADS_CONVERSION_LABEL = "";

const ATTRIBUTION_KEY = "cdc_attribution_v1";

export type ServiceKey =
  | "lavacao"
  | "higienizacao"
  | "polimento_tecnico"
  | "polimento_vidros"
  | "cristalizacao_vidros"
  | "espelhamento"
  | "vitrificacao"
  | "vitrificacao_couro"
  | "revitalizacao_farois"
  | "revitalizacao_plasticos"
  | "limpeza_motor"
  | "martelinho"
  | "geral";

/** Mapeia o slug da rota para o parâmetro `service` dos eventos. */
export function serviceKeyFromSlug(slug?: string): ServiceKey {
  switch (slug) {
    case "lavacao-completa-premium":
      return "lavacao";
    case "higienizacao-interna":
      return "higienizacao";
    case "polimento-tecnico":
      return "polimento_tecnico";
    case "polimento-de-vidros":
      return "polimento_vidros";
    case "cristalizacao-de-vidros":
      return "cristalizacao_vidros";
    case "espelhamento":
      return "espelhamento";
    case "vitrificacao":
      return "vitrificacao";
    case "vitrificacao-de-couro":
      return "vitrificacao_couro";
    case "restauracao-de-farois":
    case "revitalizacao-de-farois":
      return "revitalizacao_farois";
    case "revitalizacao-de-plasticos":
      return "revitalizacao_plasticos";
    case "limpeza-tecnica-do-motor":
      return "limpeza_motor";
    case "martelinho-de-ouro":
      return "martelinho";
    default:
      return "geral";
  }
}

export interface Attribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
  landing?: string;
  ts?: number;
}

type Gtag = (...args: unknown[]) => void;
type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
  __cdcTagLoaded?: boolean;
  __cdcLastEvent?: Record<string, number>;
};

function win(): TrackingWindow | null {
  return typeof window === "undefined" ? null : (window as TrackingWindow);
}

function gtag(...args: unknown[]) {
  const w = win();
  if (!w) return;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

/** Deriva source/medium do referrer quando não há UTM na URL. */
function referrerSourceMedium(referrer: string, host: string) {
  if (!referrer) return { source: "(direct)", medium: "(none)" };
  let refHost = "";
  try {
    refHost = new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return { source: "(direct)", medium: "(none)" };
  }
  if (!refHost || refHost === host.replace(/^www\./, "")) {
    return { source: "(direct)", medium: "(none)" };
  }
  if (/google\./.test(refHost)) return { source: "google", medium: "organic" };
  if (/bing\./.test(refHost)) return { source: "bing", medium: "organic" };
  if (/duckduckgo\./.test(refHost)) return { source: "duckduckgo", medium: "organic" };
  if (/instagram\./.test(refHost)) return { source: "instagram", medium: "referral" };
  if (/facebook\.|fb\./.test(refHost)) return { source: "facebook", medium: "referral" };
  if (/whatsapp\./.test(refHost)) return { source: "whatsapp", medium: "referral" };
  return { source: refHost, medium: "referral" };
}

/**
 * Captura a origem da sessão apenas UMA vez.
 * Se já existe atribuição guardada na sessão, ela é preservada — exceto quando
 * a nova visita traz identificadores de clique pagos (gclid/gbraid/wbraid),
 * que representam uma nova origem real informada pelo Google.
 */
export function captureAttribution(): Attribution {
  const w = win();
  if (!w) return {};

  let stored: Attribution = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? "{}") as Attribution;
  } catch {
    stored = {};
  }

  const params = new URLSearchParams(w.location.search);
  const get = (k: string) => params.get(k) || undefined;

  const gclid = get("gclid");
  const gbraid = get("gbraid");
  const wbraid = get("wbraid");
  const utmSource = get("utm_source");
  const hasPaidClickId = Boolean(gclid || gbraid || wbraid);

  // Nada novo e já temos origem: preserva.
  if (stored.source && !hasPaidClickId && !utmSource) return stored;
  if (stored.source && stored.gclid && !hasPaidClickId) return stored;

  const fallback = referrerSourceMedium(w.document.referrer, w.location.hostname);
  const next: Attribution = {
    ...stored,
    gclid: gclid ?? stored.gclid,
    gbraid: gbraid ?? stored.gbraid,
    wbraid: wbraid ?? stored.wbraid,
    source: utmSource ?? (hasPaidClickId ? "google" : undefined) ?? stored.source ?? fallback.source,
    medium:
      get("utm_medium") ??
      (hasPaidClickId ? "cpc" : undefined) ??
      stored.medium ??
      fallback.medium,
    campaign: get("utm_campaign") ?? stored.campaign,
    term: get("utm_term") ?? stored.term,
    content: get("utm_content") ?? stored.content,
    landing: stored.landing ?? w.location.pathname,
    ts: stored.ts ?? Date.now(),
  };

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next));
  } catch {
    /* sessionStorage indisponível — segue sem persistir */
  }
  return next;
}

export function getAttribution(): Attribution {
  const w = win();
  if (!w) return {};
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}

/** Existe evidência real de mídia paga do Google nesta sessão? */
export function hasPaidGoogleEvidence(a: Attribution = getAttribution()): boolean {
  if (a.gclid || a.gbraid || a.wbraid) return true;
  const medium = (a.medium ?? "").toLowerCase();
  const source = (a.source ?? "").toLowerCase();
  return source.includes("google") && (medium === "cpc" || medium === "ppc" || medium === "paid");
}

/** Carrega a Google Tag uma única vez. */
export function initGoogleTag() {
  const w = win();
  if (!w || w.__cdcTagLoaded) return;
  w.__cdcTagLoaded = true;

  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = ((...args: unknown[]) => {
      w.dataLayer!.push(args);
    }) as Gtag;
  }

  const script = w.document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
  w.document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GOOGLE_TAG_ID, { send_page_view: true });
}

export function trackPageView(path: string, title?: string) {
  gtag("event", "page_view", { page_path: path, page_title: title });
}

/** Evita o mesmo evento duas vezes na mesma ação do usuário. */
function shouldFire(key: string, windowMs = 1200) {
  const w = win();
  if (!w) return false;
  w.__cdcLastEvent = w.__cdcLastEvent || {};
  const now = Date.now();
  if (w.__cdcLastEvent[key] && now - w.__cdcLastEvent[key] < windowMs) return false;
  w.__cdcLastEvent[key] = now;
  return true;
}

/** Interação de intenção — NUNCA conversão principal. */
export function trackServiceView(service: ServiceKey, placement: string) {
  if (!shouldFire(`service_view:${service}:${placement}`)) return;
  gtag("event", "service_view", { service, placement, non_interaction: false });
}

/**
 * Contato real pelo WhatsApp — conversão principal.
 * Envia sempre `generate_lead` com origem preservada; a conversão do Google Ads
 * é enviada apenas com evidência de clique pago e label configurado.
 */
export function trackWhatsAppLead(opts: { placement: string; service?: ServiceKey }) {
  const { placement, service = "geral" } = opts;
  if (!shouldFire(`lead:${placement}:${service}`)) return;

  const a = getAttribution();
  const paid = hasPaidGoogleEvidence(a);

  gtag("event", "generate_lead", {
    method: "whatsapp",
    service,
    placement,
    traffic_source: a.source ?? "(direct)",
    traffic_medium: a.medium ?? "(none)",
    traffic_campaign: a.campaign,
    has_gclid: Boolean(a.gclid || a.gbraid || a.wbraid),
    paid_evidence: paid,
    value: 1,
    currency: "BRL",
  });

  if (paid && ADS_CONVERSION_LABEL) {
    gtag("event", "conversion", {
      send_to: `${GOOGLE_TAG_ID}/${ADS_CONVERSION_LABEL}`,
      value: 1,
      currency: "BRL",
    });
  }
}

/**
 * Clique em telefone — contato mensurável, mas NÃO é a conversão principal
 * (a conversão principal é o WhatsApp). Nunca dispara conversão do Ads.
 */
export function trackPhoneClick(placement: string, service: ServiceKey = "geral") {
  if (!shouldFire(`phone:${placement}:${service}`)) return;
  gtag("event", "contact_phone", { method: "phone", service, placement });
}
