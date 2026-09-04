import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

import { captureAttribution, initGoogleTag, trackPageView } from "@/lib/tracking";

/**
 * Carrega a Google Tag uma única vez, preserva a origem da sessão e envia
 * page_view nas navegações internas (SPA).
 */
export function Analytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    captureAttribution();
    initGoogleTag();
  }, []);

  useEffect(() => {
    captureAttribution();
    trackPageView(pathname, typeof document !== "undefined" ? document.title : undefined);
  }, [pathname]);

  return null;
}
