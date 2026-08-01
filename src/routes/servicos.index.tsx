import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhats } from "@/components/site/FloatingWhats";
import { CTA } from "@/components/site/CTA";
import { Location } from "@/components/site/Location";
import { WHATSAPP_DEFAULT } from "@/components/site/constants";
import { services, SITE_URL } from "@/components/site/services-data";

const URL = `${SITE_URL}/servicos`;
const TITLE = "Serviços de Estética Automotiva em Joinville | Clínica do Carro";
const DESCRIPTION =
  "Todos os serviços de estética automotiva em Joinville: polimento, vitrificação, higienização interna, faróis, vidros, motor e martelinho de ouro.";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Serviços", item: URL },
              ],
            },
            {
              "@type": "ItemList",
              name: "Serviços de estética automotiva em Joinville",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.nome,
                url: `${SITE_URL}/servicos/${s.slug}`,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: ServicosIndex,
});

function ServicosIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="section-y">
          <div className="shell">
            <nav aria-label="Breadcrumb" className="pt-4">
              <ol className="flex items-center gap-1.5 text-[0.78rem] text-white/45">
                <li>
                  <Link to="/" className="hover:text-neon">
                    Início
                  </Link>
                </li>
                <ChevronRight aria-hidden className="h-3.5 w-3.5" />
                <li aria-current="page" className="text-white/70">
                  Serviços
                </li>
              </ol>
            </nav>

            <header className="mt-8 max-w-3xl">
              <span className="eyebrow">Desde 2013 em Joinville/SC</span>
              <h1
                className="mt-4 text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.05 }}
              >
                Serviços de Estética Automotiva em Joinville
              </h1>
              <p className="mt-5 text-[1rem] leading-relaxed text-white/65">
                Somos um studio de detailing no bairro Aventureiro, em Joinville, especializado
                em correção e proteção de pintura, higienização interna, vidros, faróis e
                recuperação de lataria sem pintura. Escolha um serviço abaixo para ver processo,
                durabilidade, vídeos reais e perguntas frequentes.
              </p>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary mt-7 w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </header>

            <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="surface-card flex h-full flex-col gap-3 p-5 transition-colors hover:border-neon/35"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(255,255,255,0.08)",
                        }}
                      >
                        <s.Icon className="h-5 w-5 text-neon" />
                      </span>
                      <h2
                        className="text-[1.02rem] font-semibold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.nome}
                      </h2>
                    </span>
                    <p className="text-[0.86rem] leading-relaxed text-white/60">{s.descricao}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.82rem] font-medium text-neon">
                      Ver detalhes
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}
